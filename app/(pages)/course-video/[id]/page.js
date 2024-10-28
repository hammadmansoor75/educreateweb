"use client";

import {useState,useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link';
import { ClipLoader } from 'react-spinners';
import {SnackbarProvider, useSnackbar} from 'notistack'
import { Button } from 'flowbite-react';
import { io } from 'socket.io-client'

const socket = io('http://127.0.0.1:8000', {
    transports: ['websocket'], // Ensure to use the websocket transport
});

const CourseVideo = () => {
    const [course,setCourse] = useState(null) 
    const [courseVideo,setCourseVideo] = useState(null);
    const [scripts, setScripts] = useState(null)

    const {enqueueSnackbar} = useSnackbar();
    const [videoExists, setVideoExists] = useState(false);

    const [loading,setLoading] = useState(false);
    const [videoLoading,setVideoLoading] = useState(false);
    const [scriptLoading,setScriptLoading] = useState(false);

    const [courseUpdatedAt, setCourseUpdatedAt] = useState(null);
    const [originalCourseId,setOriginalCourseId] = useState(null);

    const getCourseById = async (courseId) => {
        try {
            setLoading(true);
            const response = await axios.post('/api/get-course', { id: courseId });
            setCourse(response.data.course);
            setCourseUpdatedAt(response.data.course.updatedAt);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const getCourseVideo = async (courseId) => {
        try{
            setLoading(true);
            const response = await axios.post('/api/get-course-video', {courseId : courseId});

            if(response.status === 200 && response.data.courseVideo){
                const courseVideoId = response.data.courseVideo.id
                const courseVideoCreatedAt = response.data.courseVideo.createdAt
                console.log("Course Video Created At : ", courseVideoCreatedAt )
                console.log("Course Updated At :" , courseUpdatedAt )
                console.log("Greater: ", new Date (courseUpdatedAt) > new Date (courseVideoCreatedAt) )
                if(new Date (courseUpdatedAt) > new Date (courseVideoCreatedAt)){
                    console.log("Course Updated!")
                    const deleteResponse = await axios.delete('/api/delete-course-video', {
                        data: { courseVideoId },
                    });
                    setVideoExists(false);
                }else{
                    console.log("Course Not Updated!")
                    setCourseVideo(response.data.courseVideo)
                    setVideoExists(true)
                }
            }else{
                setVideoExists(false);
            }
        }catch(error){
            console.log("Error Getting the Video", error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        const fetchCourseData = async () => {
            if (typeof window !== 'undefined'){
                const urlPath = window.location.pathname;
                const idFromPath = urlPath.split("/").pop();
    
                if (idFromPath) {
                    setOriginalCourseId(idFromPath)
                    if(!course){
                        await getCourseById(idFromPath);
                    }
                    await getCourseVideo(idFromPath);
    
                    if (videoExists) {
                        console.log("Video Already Exists: ", courseVideo);
                    } else {
                        console.log("Generating Scripts")
                        const generatedScripts = await generateScripts();
                    }
                }
            }
        }

        fetchCourseData();
        
    }, [course]);

    const handleScriptChange = (index, newScript) => {
        const updatedScripts = scripts.map((script, i) =>
          i === index ? { ...script, script: newScript } : script
        );
        setScripts(updatedScripts);
    };

    const generateScripts = async () => {
        if(course){
            try{
                setScriptLoading(true)
                const scriptsResponse = await axios.post('/api/generate-scripts', {course : course})
                const responseScripts = scriptsResponse.data.data;
                setScripts(responseScripts)
            }catch(error){
                console.log("Error Generating The Scripts: ", error)
                enqueueSnackbar('Something went wrong while generating the scripts! Please try again.', { variant: 'error' });
            }finally{
                setScriptLoading(false)
            }
        }else{
            console.log("Course is not available")
        }
    }


    const generateVideoSocket = async () => {
        try{
            setVideoExists(true)
            setVideoLoading(true)
            setCourseVideo(null)
            socket.emit('create_video', {course,scripts});
        }catch(error){
            console.log("Error Emitting video creation" , error);
        }
    }


    // useEffect(() => {
    //     const handleVideoResponse = async (response) => {
    //         setVideoLoading(false)
    //         if (response.error) {
    //             enqueueSnackbar(response.error, { variant: 'error' });
    //         } else {
    //             enqueueSnackbar(response.message, { variant: 'success' });
    //             if(originalCourseId){
    //                 await getCourseVideo(originalCourseId)
    //             }else{
    //                 if(typeof window !== 'undefined'){
    //                     const urlPath = window.location.pathname;
    //                     const idFromPath = urlPath.split("/").pop();
    //                     await getCourseVideo(idFromPath)
    //                 }
    //             }
    //         }
    //     };

    //     socket.on('video_response', handleVideoResponse);

    //     return () => {
    //         socket.off('video_response', handleVideoResponse); // Clean up the listener
    //     };
    // }, []);




    const handleSave = async () => {
        console.log("Saved Scripts:", scripts);
        const generateVideo = generateVideoSocket()
        // You can send the updated `scripts` to an API here
      };

    // Video POLLING CODE

    const [videoExistsPolling,setVideoExistsPolling] = useState(false);
    const getCourseVideoPolling = async (courseId) => {
        const response = await axios.post('/api/get-course-video', {courseId : courseId});
        if(response.status === 200 && response.data.courseVideo){
            setCourseVideo(response.data.courseVideo)
            setVideoExists(true)
            setVideoLoading(false)
            setVideoExistsPolling(true)
        }
    }

    const pollForVideo = (courseId) => {
        const intervalId = setInterval(async () => {
            if(!videoExists){
                await getCourseVideoPolling(courseId);
                if(videoExistsPolling){
                    
                    clearInterval(intervalId);
                    console.log("Video found and stopped polling")
                }
            }
        }, 120000);

        return () => clearInterval(intervalId);
    }

    useEffect(() => {
        if(typeof window !== 'undefined'){
            const urlPath = window.location.pathname;
            const idFromPath = urlPath.split("/").pop();
            pollForVideo(idFromPath)
        }
    }, [videoExists])

    if (loading) {
        return <div className="flex items-center justify-center h-screen" >
            <ClipLoader size={50} />
        </div>
    }



    return (
            <main>
            <section className='py-10 bg-white dark:bg-black'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <h1 className='text-4xl font-semibold text-center'>Welcome to this course on {course?.courseTitle}</h1>
                    <h3 className='text-lg text-center'>{course?.courseSubtitle}</h3>
                </div>
            </section>

            <section className={!videoExists ? 'bg-white py-10 px-10 dark:bg-black' : 'hidden'} >
                <form className='w-full flex items-center justify-center flex-col border-2 border-blue-700 rounded-lg p-4' >
                    <h1 className='text-3xl font-medium text-black dark:text-white' >Edit & Save the following scripts to continue</h1>
                    {scriptLoading ? <div className='mt-10 flex items-center justify-center gap-3 ' >
                        <ClipLoader size={30} />
                        <h2>Generating your scripts!</h2>
                    </div> : <><div className="flex flex-col gap-2 items-start justify-start mt-5 w-full" >
                        {scripts?.map((script,index) => (
                            <div key={script.sectionTitle} >
                                <h1 className='text-lg font-medium'>{script.sectionTitle}</h1>
                                <textarea className='mt-2 w-[500px] h-96 p-4 border border-blue-900 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-md sm:h-80 md:h-[500px]' onChange={(e) => handleScriptChange(index, e.target.value) }  value={script.script} />
                            </div>
                        ))}
                    </div>
                    <div className='w-full flex items-center justify-end gap-5' >
                        <Button className="text-white text-lg bg-green-500" variant="primary" onClick={generateScripts} >Generate New</Button>
                        <Button className='text-white text-lg bg-blue-600' variant="primary" onClick={handleSave} >Save Scripts</Button>
                        
                    </div></>}
                </form>
            </section>

            <section className={videoExists ? 'bg-white py-10 px-10 dark:bg-black' : 'hidden'} >
                <div className='flex items-center justify-center' >
                    {videoLoading ? <div className='flex items-center justify-center flex-col' >
                        <ClipLoader size={30} />
                        <p>Generating your video</p>
                    </div> : <video className='rounded-lg' src={courseVideo?.videoUrl} controls width={1000} height={800} >Your browser does not support the video tag.</video>}
                </div>

                <div className="flex md:flex-row sm:flex-col  items-center justify-center mt-5 gap-5" >
                    <a herf={courseVideo?.videoUrl} download={course?.courseTitle} style={{ textDecoration: 'none' }} >
                        <Button className='bg-blue-500 px-4 py-2 text-white rounded-lg text-lg font-semibold' >Download Video</Button>
                    </a>
                    <Link href={`/course-quiz/${course?.id}`} ><Button className='bg-green-500 px-4 py-2 text-white rounded-lg text-lg font-semibold' > Perform Quiz</Button></Link>
                </div>
            </section>


            <section className={videoExists ? 'bg-white py-10 px-10 dark:bg-black' : 'hidden'} >
                <div className="flex items-center justify-center flex-col gap-2" >
                    {courseVideo?.scripts.map((script,index) => (
                        <div key={index} className='mt-4' >
                            <h1 className='text-xl font-semibold mb-2' >{index === 0 ? 'Introduction' : `Section ${index}`}</h1>
                            <p className='text-md' >{script}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={videoExists ? 'bg-white py-10 px-10 dark:bg-black' : 'hidden'}>
                <div className="p-6 text-center mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Thank You for Completing the Course!
                    </h2>
                    <p className="text-lg text-gray-600">
                        We appreciate your time and effort in going through this journey. We hope you gained valuable insights and knowledge.
                    </p>
                    <p className="text-lg text-gray-600 mt-2">
                        Remember, learning is a continuous process, and we are excited to have been a part of yours.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default CourseVideo;