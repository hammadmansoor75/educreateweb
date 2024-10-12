"use client";

import {useState,useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link';
import { ClipLoader } from 'react-spinners';
import {SnackbarProvider, useSnackbar} from 'notistack'
import { Button } from 'flowbite-react';


const CourseVideo = () => {
    const [course,setCourse] = useState(null)
    const [loading,setLoading] = useState(false);
    const [courseVideo,setCourseVideo] = useState(null);
    const [videoLoading,setVideoLoading] = useState(false);
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        if (typeof window !== 'undefined'){
            const urlPath = window.location.pathname;
            const idFromPath = urlPath.split("/").pop();

            const getCourseById = async (courseId) => {
                try {
                    setLoading(true);
                    const response = await axios.post('/api/get-course', { id: courseId });
                    setCourse(response.data.course);
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
                    if(response.status ===200 && response.data.courseVideo){
                        setCourseVideo(response.data.courseVideo)
                    }
                }catch(error){
                    console.log("Error Getting the Video", error)
                }finally{
                    setLoading(false)
                }
            }

            if (idFromPath) {
                getCourseById(idFromPath);
                getCourseVideo(idFromPath);
            }
        }
        
    }, []);


    useEffect(() => {
        const saveCourseVideo = async (courseId, arrayOfScripts, videoUrl) => {
            try{
                const data = {
                    courseId : courseId,
                    scripts : arrayOfScripts,
                    videoUrl : videoUrl
                }
                console.log("Data before sending:", data);
                const response  = await axios.post('/api/save-course-video', data);
                console.log(response);
                if(response.status === 200){
                    setCourseVideo(response.data.data)
                    console.log(courseVideo);
                }
            }catch(error){
                console.log(error)
            }
        }


        const generateVideo = async () => {
            try{
                setVideoLoading(true)
                if(course){
                    const videoCreation = await axios.post('http://127.0.0.1:8000/create-video',
                        course,{
                          headers: {
                            'Content-Type': 'application/json',
                        },
                        }
                    );
                    console.log("Video Creation API Response: ", videoCreation)
                    if(videoCreation.status === 200){
                        console.log("Inside the if statement");
                        console.log("Video Url: ", videoCreation.data.video_url)
                        console.log("Scripts: ", videoCreation.data.scripts);
                        
                        const orderedSections = course.sections.map((section) => section.sectionTitle)
                        orderedSections.unshift("Introduction")
                        console.log("Ordered Sections: ", orderedSections)
                        const arrayOfScripts = orderedSections.map(key => videoCreation.data.scripts[key]);
                        console.log("Array of Scripts: ", arrayOfScripts)
                        // const videoInformationObj = {
                        //     courseId : course.id,
                        //     scripts : arrayOfScripts,
                        //     videoUrl : videoCreation.data.video_url
                        // }
                        await saveCourseVideo(course.id , arrayOfScripts , videoCreation.data.video_url);
                    }else{
                        console.log("Error: ", videoCreation)
                    }
                    
                    return videoCreation;
                }
            }catch(error){
                console.log("Error Generating The Video: ", error)
                enqueueSnackbar('Something went wrong while generating the video! Please try again.', { variant: 'error' });
            }finally{
                setVideoLoading(false);
            }            
        }

        
        if (courseVideo) {
            console.log("Video Already Exists: ", courseVideo);
        } else {
            const generateVideoResponse = generateVideo();
            console.log("Generate Video Response: ", generateVideoResponse)
        }

    }, [courseVideo,course]);

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

            <section className="bg-white dark:bg-black mb-10" >
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


            <section className='py-10 bg-white dark:bg-black md:px-10 px-5' >
                <div className="flex items-center justify-center flex-col gap-2" >
                    {courseVideo?.scripts.map((script,index) => (
                        <div key={index} className='mt-4' >
                            <h1 className='text-xl font-semibold mb-2' >{index === 0 ? 'Introduction' : `Section ${index}`}</h1>
                            <p className='text-md' >{script}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-10 bg-white dark:bg-black">
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