"use client"
import Image from 'next/image'
import React, { useState,useEffect,useRef } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { LuFolderClosed } from "react-icons/lu";
import { BsQuestionSquareFill } from "react-icons/bs";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import ContentCreationSlide from '@/components/ContentCreationSlide';
import QuizQuestion from '@/components/QuizQuestion';
import { useDataContext } from '@/lib/DataContext';
import LearningObjectives from './LearningObjectives';
import Course from './Course';
import { useCourse } from '@/providers/CourseProvider';
import {useRouter} from 'next/navigation'
import html2canvas from 'html2canvas'
import axios from 'axios'
import {useSnackbar} from 'notistack'
import { ClipLoader } from 'react-spinners';


const Page = () => {
  const {course,saveCourse,updateRndComponentImage} = useCourse();
  const router = useRouter();
  const {enqueueSnackbar} = useSnackbar();
  console.log( "Course: ",course);
  const [loading,setLoading] = useState(false)

  

  const handleElearning = async () => {
    try{
      setLoading(true)
      await Promise.all(
        course.sections.map(async (section, index) => {
          await captureAndUpload(index);
        })
      );
      const saveResponse = await saveCourse();
      console.log("Save Response: ", saveResponse)
      if(saveResponse.courseId){
        enqueueSnackbar('Course Created Successfully!', { variant: 'success' });
        router.push('/mycourses')
      }else{
        enqueueSnackbar(`${saveResponse.problem} Please try again.`, { variant: 'error' });
      }

      
      // router.push('/mycourses')
      
    }catch(error){
      console.log('Error:', error);
      enqueueSnackbar('Something went wrong! Please try again.', { variant: 'error' });
      
    }finally{
      setLoading(false)
    }
  }

  const refs = useRef([])

  useEffect(() => {
    if(!course){
      router.push('/mylearning');
    }
    if(course?.sections){
      refs.current = refs.current.slice(0,course.sections.length)
    }

  },[course])


  const captureAndUpload = async (index) => {
    const rndComponent = refs.current[index];
    const element = rndComponent?.resizableElement?.current;
    console.log("Captured Element: ", element)
    if (!element) return;

    try {
        const canvas = await html2canvas(element);
        const dataUrl = canvas.toDataURL('image/png');

        // Upload to Cloudinary
        const formData = new FormData();
        formData.append('file', dataUrl);
        formData.append('upload_preset', 'educreatepreset')

        const response = await axios.post('https://api.cloudinary.com/v1_1/dsq7wjcnz/image/upload', formData);
        console.log('Image uploaded:', response.data.secure_url);
        updateRndComponentImage(index, response.data.secure_url)
    } catch (error) {
        console.error('Error capturing or uploading image:', error);
    }
  };


  if (!course) {
    return <div className='flex items-center justify-center h-screen' >
      <ClipLoader size={50} />
    </div>; // Or you can return a loading spinner or a message
  }

  return (
    <main>
      <header className='min-h-12 max-h-12 bg-black py-3 px-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-white'>My Learning</h1>
          <div className='hidden md:flex items-center justify-center gap-3'>
            <p className='text-gray-400'>USD</p>
            <p className='text-gray-400'>English</p>
          </div>
        </div>
      </header>
      <div className='bg-white py-3 px-6 shadow-lg'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-center gap-2'>
            <Image src='/assets/logoSingle.png' className='hidden md:flex' alt='logo' height={70} width={70}/>
            <Image src='/assets/logoSingle.png' className='sm:flex md:hidden' alt='logo' height={30} width={30}/>
            <h1 className='text-3xl font-semibold text-black'>EduCreate AI</h1>
           </div>
        </div>

        <div className='md:flex items-center justify-start gap-4'>
          <FaArrowLeft className='hidden md:flex' size={20} />
          <div className='mt-4'>
            <p className='font-semibold text-black'>Course : {course?.courseTitle}</p>
            <div className='mt-2 flex flex-col items-start md:flex-row md:items-center justify-start gap-5'>
              <span className='flex items-center justify-center gap-2'>
                <LuFolderClosed className='text-black' />
                <p className='text-contentcreationtext text-sm'>{course?.sections.length}</p>
              </span>
              <span className='flex items-center justify-center gap-2'>
                <BsQuestionSquareFill className='text-black' />
                <p className='text-contentcreationtext text-sm'>{course?.quizQuestions.length}</p>
              </span>
              <span className='flex items-center justify-center w-full md:w-2/3 gap-2'>
                <BiSolidMessageSquareDetail className='text-black' />
                <p className='text-contentcreationtext text-sm'>Select designs and/or expand screens, edit text then scroll to bottom to create eLearning. This eLearning can then be further edited once it has been created.</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {course && (
        <Course course={course} />
      )}
      


      {course?.sections?.length > 0 && (
        <section className='bg-white dark:bg-black'>
              {course?.sections.map((section, index) => (
                  <div className="flex flex-col" key={section.id}>
                      <ContentCreationSlide
                          ref={el => refs.current[index] = el}
                          section={section}
                          sectionIndex={index}
                      />
                  </div>
              ))}
        </section>
      )}

      <section className='py-10 px-5 bg-white dark:bg-black w-full'>
        <h1 className='text-3xl font-semibold text-black dark:text-white' >Quiz Questions</h1>

        <div className='mt-5 md:flex items-start justify-between' >
          <div className='space-y-5' >
            {course?.quizQuestions?.length > 0 && course?.quizQuestions.map((question,index) => (
              <QuizQuestion key={index} qno={index+1} question={question} />
            ))}
            

            <div className='flex items-center justify-end' >
              <button onClick={handleElearning} disabled={loading} className='bg-indigo-700 text-white shadow-lg rounded-full py-2 px-4 text-sm' >{loading ? 'Creating eLearning...' : 'Create eLearning'}</button>
            </div>
          </div>

          <LearningObjectives sections={course?.sections} />
        </div>

      </section>

      <footer className='bg-black p-4' >
        <p className='text-gray-500 text-center'>© 2024 - educreateai. Designed by Adil. All rights reserved</p>
      </footer>
    </main>
  )
}

export default Page
