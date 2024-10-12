"use client"
import React,{useEffect, useState} from 'react'
import {PiGraduationCap} from 'react-icons/pi'
import { FaShoppingCart } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import * as z from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { useDataContext } from '@/lib/DataContext';
import { useRouter } from 'next/navigation';
import {useSession} from 'next-auth/react'
import {ClipLoader} from 'react-spinners'
import { useCourse } from '@/providers/CourseProvider';
import { Button } from '@/components/ui/button';
import { FaBagShopping } from "react-icons/fa6";


const Page = () => {
    const router = useRouter();
    const {data:session,status} = useSession();
    useEffect(()=> {
        if (status === 'loading') {
            // Wait until the session is loading
            return;
        }
        if(!session){
            console.log("Redirecting to signIn because no session found");
            console.log("Session",session)
            
        }else{
            // console.log(session);
            console.log('User Id', session.user.id)
        }
    },[session,router,status])
    
    const {updateCourse} = useCourse();
    const [loading,setLoading] = useState(false);
    const formSchema = z.object({
        courseTitle : z.string().min(10, "Course Title is required"),
        courseSubtitle : z.string().min(10, "Course Subtitle is required"),
        learningOptions : z.string(),
        courseLength : z.string(),
        wordiness : z.string(),
        courseLevel : z.string(),
        styleTone : z.string(),
        file: z.any().optional(),
    })


    const {register,handleSubmit,formState : {errors}} = useForm({resolver:zodResolver(formSchema)})


    const handleFormSubmission = async (data) => {
        try {
            setLoading(true);
            const response = await fetch('/api/coursegen', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    courseTitle : data.courseTitle,
                    courseSubtitle : data.courseSubtitle,
                    learningOptions : data.learningOptions,
                    courseLength : data.courseLength,
                    wordiness : data.wordiness,
                    courseLevel : data.courseLevel,
                    styleTone : data.styleTone,
                    file : data.file,
                    userId : session.user.id
                }),
            });

            if(!response.ok){
                const errorData = await response.json();
                console.log("API Error: ", errorData);
                setLoading(false);
            }else{
                const responseData = await response.json();
                // console.log("Data Recieved: ", responseData)
                const {courseTitle, courseSubtitle, sections,quizQuestions} = responseData.data;
                const createdBy = session.user.id;
                const courseToUpdate = {
                    courseTitle,
                    courseSubtitle,
                    sections,
                    quizQuestions,
                    createdBy
                }
                updateCourse(courseToUpdate);
                console.log(responseData);
                router.push(`/contentcreation`);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            console.log("Submission Error: ", error);
        }
    }


    

  return (
    <main>
        <section className='bg-slate-100 py-10 dark:bg-gradient-to-r from-blue-950 to-black px-2 md:px-10'>
            <div className='flex items-center justify-center flex-col gap-5'>
                <PiGraduationCap size={40} className='text-blue-500'/>
                <h1 className='text-4xl font-bold text-blue-700 drop-shadow-lg shadow-blue-700'>My Learning</h1>
                <p className='text-md text-black dark:text-white text-center'>Unleash Your Knowledge: Create Your Own Course</p>
                
                
                <Button className='flex items-center justify-center gap-2 px-4 '>Upgrade Now!<FaBagShopping className='' size={15}/> </Button>
                <p className='text-sm text-black dark:text-white'>You are currently using EduCreate AI version</p>
            </div>

            <div className='bg-white dark:bg-black md:py-5 py-2 px-2 md:px-10 rounded-lg border-2 border-newBlue mt-10'>
                
                {loading ? (
                    <div className="flex flex-col gap-5 space-y-5 items-center justify-center">
                        <h1 className='text-2xl md:text-4xl font-bold text-blue-700 text-center'>Generating a Course...</h1>
                        <ClipLoader color="text-blue-500" size={50} />
                    </div>
                    ) : (<form onSubmit={handleSubmit(handleFormSubmission)} >
                        <h1 className='text-2xl md:text-4xl font-bold text-blue-700 text-center'>Enter Details to Create Course Content</h1>
                    <div className='flex flex-col items-start justify-center gap-1'>
                        <label className='text-black dark:text-white'>Title</label>
                        <input {...register('courseTitle')} type='text' placeholder='Your course title' className='bg-white px-4 py-2 border-newBlue rounded-lg placeholder-black text-black w-full md:w-full border' />
                        {errors.courseTitle && <p className="text-red-600 text-sm p-2">{errors.courseTitle.message}</p>}
                    </div>
                    <div className='flex flex-col items-start justify-center gap-1 mt-3'>
                        <label className='text-black dark:text-white'>Subtitle</label>
                        <input {...register('courseSubtitle')} type='text' placeholder='Your course subtitle' className='bg-white text-black px-4 py-2 border-newBlue rounded-lg placeholder-black md:w-full w-full border' />
                        {errors.courseSubtitle && <p className="text-red-600 text-sm p-2">{errors.courseSubtitle.message}</p>}
                    </div>
                    <div className='flex flex-col items-start justify-center gap-1 mt-3'>
                        <label className='text-black dark:text-white'>Learning Objectices (Optional)</label>
                        <textarea {...register('learningOptions')} type='text' placeholder='Your course subtitle' className='bg-white text-black px-4 py-2 border-newBlue rounded-lg placeholder-black md:w-full w-full border md:min-h-52' />
                        {errors.learningOptions && <p className="text-red-600 text-sm p-2">{errors.learningOptions.message}</p>}
                    </div>
                    <div className='md:flex items-center justify-between mt-3 gap-3'>
                        <div className='flex flex-col items-start justify-center gap-1'>
                            <label className='text-black dark:text-white'>Course Length</label>
                            <select {...register('courseLength')} type='text' placeholder='Select' className='bg-white text-black px-4 py-2 border-newBlue rounded-sm placeholder-black min-w-60 border' >
                                <option className='text-black' value={"Small"} >Small</option>
                                <option className='text-black' value={"Moderate"} >Moderate</option>
                                <option className='text-black' value={"Large"} >Large</option>
                            </select>
                            {errors.courseLength && <p className="text-red-600 text-sm p-2">{errors.courseLength.message}</p>}
                        </div>
                        <div className='flex flex-col items-start justify-center gap-1'>
                            <label className='text-black dark:text-white'>Wordiness</label>
                            <select {...register('wordiness')} type='text' placeholder='Select' className='bg-white text-black  px-4 py-2 border-newBlue rounded-sm placeholder-black min-w-60 border' >
                                <option className='text-gray-500' value={"100-150"}>100-150/per slide</option>
                                <option className='text-gray-500' value={"150-200"}>150-200/per slide</option>
                                <option className='text-gray-500' value={"200-350"}>200-350/per slide</option>
                            </select>
                            {errors.wordiness && <p className="text-red-600 text-sm p-2">{errors.wordiness.message}</p>}
                        </div>
                        <div className='flex flex-col items-start justify-center gap-1'>
                            <label className='text-black dark:text-white'>Course Level</label>
                            <select {...register("courseLevel")} type='text' placeholder='Select' className='bg-white text-black  px-4 py-2 border-newBlue rounded-sm placeholder-black min-w-60 border' >
                                <option className='text-gray-500' value={'Beginner'} >Beginner</option>
                                <option className='text-gray-500' value={'Intermediate'} >Intermediate</option>
                                <option className='text-gray-500' value={'Expert'} >Expert</option>
                            </select>
                            {errors.courseLevel && <p className="text-red-600 text-sm p-2">{errors.courseLevel.message}</p>}
                        </div>
                        <div className='flex flex-col items-start justify-center gap-1'>
                            <label className='text-black dark:text-white'>Style & Tone</label>
                            <select {...register('styleTone')} type='text' placeholder='Select' className='bg-white text-black  px-4 py-2 border-newBlue rounded-sm placeholder-black min-w-60 border' >
                            <option className='text-gray-500' value={"Conversational and Engaging"}>Conversational and Engaging</option>
                            <option className='text-gray-500' value={"Academic and Rigorous"}>Academic and Rigorous</option>
                            <option className='text-gray-500' value={"Inspirational and Motivational"}>Inspirational and Motivational</option>
                            <option className='text-gray-500' value={"Practical and Hands-On"}>Practical and Hands-On</option>
                            <option className='text-gray-500' value={"Humorous and Light-hearted"}>Humorous and Light-hearted</option>

                            </select>
                            {errors.styleTone && <p className="text-red-600 text-sm p-2">{errors.styleTone.message}</p>}
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-1 mt-3'>
                        <label className='text-black dark:text-white'>Upload Document (Optional)</label>
                        <div className='bg-white text-black px-4 border-newBlue rounded-lg placeholder-black w-full md:w-full border md:min-h-52 py-4'>
                            <div className='flex items-center justify-center gap-5'>
                                <CiImageOn className='hidden md:flex border border-newBlue rounded-lg' size={200} />
                                <div className='w-full md:w-1/2'>
                                    <p className=''>Optionally, upload a <strong>.pdf file (size limit of 10MB)</strong> in order to facilitate the creation of a course that is based on the textual content contained within the file. Optimizing the format of the document can lead to more desirable results</p>
                                    <input className='mt-5' type='file' {...register('file')} />
                                    {errors.file && <p className="text-red-600 text-sm p-2">{errors.file.message}</p>}
                                </div>
                            </div>    
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4 items-center justify-between mt-10'>
                        <button className='bg-white rounded-md drop-shadow-lg shadow-lg text-black px-7 py-3 font-semibold'>Cancel</button>
                        <button className='bg-indigo-700 rounded-md drop-shadow-lg shadow-lg text-white px-7 py-3 font-semibold' type='submit' >Save & Next</button>
                    </div>
                </form>)}
            </div>
        </section>
    </main>
  )
}

export default Page
