"use client"

import {useEffect, useState} from 'react'
import axios from 'axios'
import { CiImageOn, CiVideoOn } from 'react-icons/ci'
import { Button } from '@/components/ui/button'
import { ClipLoader } from 'react-spinners'
import { useRouter } from 'next/navigation'
import {useSnackbar} from 'notistack'

const CourseVideoUpload = () => {
    const splitIntoEqualParts = (text, numParts) => {
        // Split the text into an array of words
        const words = text.split(' '); // Split by space
        const totalWords = words.length;
      
        // Calculate the number of words per part
        const wordsPerPart = Math.floor(totalWords / numParts);
        const result = [];
      
        for (let i = 0; i < numParts; i++) {
          // Calculate the start and end indices for each part
          const start = i * wordsPerPart;
          const end = (i + 1) * wordsPerPart;
      
          // Slice the array for the current part and join it back into a string
          const part = words.slice(start, end).join(' ');
          result.push(part);
        }
      
        // If there are remaining words, add them to the last part
        const remainingWords = words.slice(numParts * wordsPerPart).join(' ');
        if (remainingWords) {
          result[result.length - 1] += ' ' + remainingWords; // Append to the last part
        }
      
        return result;
    };

    const [videoFile, setVideoFile] = useState(null)
    const [courseId,setCourseId] = useState(null)
    const [uploading,setUploading] = useState(false)
    const [videoScript,setVideoScript] = useState('')
    const router = useRouter()
    const {enqueueSnackbar} = useSnackbar()

    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0]);
    };

    const handleScriptChange = (event) => {
        setVideoScript(event.target.value)
    }

    useEffect(() => {
        if (typeof window !== 'undefined'){
            const urlPath = window.location.pathname;
            const idFromPath = urlPath.split("/").pop();
            if(idFromPath){
                setCourseId(idFromPath)
            }
        }
    },[])


    const handleUpload = async () => {
        if(!videoFile) return
        
        setUploading(true)
        const formData = new FormData();
        formData.append('file',videoFile)
        formData.append('upload_preset','educreatepreset');

        try{
            const response = await axios.post('https://api.cloudinary.com/v1_1/dsq7wjcnz/video/upload', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
            });
            if(response.status === 200){
                const videoUrl = response.data.secure_url
                console.log("Video Uploaded: ", videoUrl)
                const scripts = splitIntoEqualParts(videoScript,5);
                
                const saveVideoResponse = await axios.post('/api/save-course-video', {
                    videoUrl,
                    scripts,
                    courseId
                })

                if(saveVideoResponse.status === 200){
                    console.log("Course Video Saved!")
                    enqueueSnackbar('Video Uploaded and Saved Successfully! Redirecting to /mycourses', { variant: 'success' });
                    router.push('/mycourses');
                }else{
                    console.log("Course Video Not Saved")
                    enqueueSnackbar('Something went wrong while saving your video! Please try again', { variant: 'error' });
                }
            }else{
                console.log("Video Not Uploaded")
                enqueueSnackbar('Something went wrong while uploading your video! Please try again', { variant: 'error' });
            }
        }catch(error){
            enqueueSnackbar('Something went wrong while uploading your video! Please try again', { variant: 'error' });
            console.log("Error while uploading: ", error)
        }finally{
            setUploading(false)
        }
    }


    return (
        <section className='py-10 bg-white dark:bg-black px-10 md:px-20' >
            <div className='border-2 rounded-xl border-blue-900 p-10 flex flex-col items-center justify-center gap-5' >
                <h1 className='text-center text-5xl font-bold mb-10' >Upload Your Video</h1>
                <div className='flex flex-col items-start justify-center gap-1 mt-3'>
                    <label className='text-black dark:text-white'>Upload Video</label>
                    <div className='bg-white text-black px-4 border-newBlue rounded-lg placeholder-black w-full md:w-full border md:min-h-52 py-4'>
                        <div className='flex items-center justify-center gap-5'>
                            <CiVideoOn className='hidden md:flex border border-newBlue rounded-lg' size={200} />
                            <div className='w-full md:w-1/2'>
                                <p className=''>Upload a <strong>.video file (size limit of 50MB)</strong> in order to facilitate the students with your own personal video</p>
                                <input type="file" className='mt-5' accept="video/*" onChange={handleFileChange} />
                            </div>
                        </div>    
                    </div>
                </div>

                <div className='flex flex-col items-start justify-center w-full gap-1 mt-3'>
                    <label className='text-black dark:text-white'>Video Script</label>
                    <textarea value={videoScript} onChange={handleScriptChange}  type='text' placeholder='Your course video scripts' className='bg-white text-black px-4 py-2 border-newBlue rounded-lg placeholder-black md:w-full w-full border md:min-h-52' />
                    
                </div>
                
                <Button onClick={handleUpload}>{uploading ? <div className='flex items-center justify-center gap-2' ><span>Uploading</span><ClipLoader className='text-white' size={20}></ClipLoader></div> : 'Upload Video'}</Button>
            </div>
            
        </section>
    )
}

export default CourseVideoUpload;