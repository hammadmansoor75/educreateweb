"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { LuFolderClosed } from "react-icons/lu";
import { BsQuestionSquareFill } from "react-icons/bs";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import ContentCreationSlide from '@/components/ContentCreationSlide';
import QuizQuestion from '@/components/QuizQuestion';
import { useDataContext } from '@/lib/DataContext';
import { exampleCourseData } from '@/lib/ExampleCourseData';
import LearningObjectives from './LearningObjectives';
import { useSession } from 'next-auth/react';
import Course from './Course';


const contents = [
  'Introduction to DevOps',
  'What is DevOps',
  'History of DevOps',
  'Key Principles of DevOps',
  'Benefits of DevOps',
  'DevOps LifeCycle',
  'Continuous Integration'
]



const Page = () => {
  const {courseData} = useDataContext();
  console.log("Course Data: ",courseData);
  const sections = courseData.data.sections;
  const questions = courseData.data.quizQuestions;
  const courseTitle = courseData.data.courseTitle;
  // const sections = exampleCourseData.data.sections;
  // const questions = exampleCourseData.data.quizQuestions;
  // const courseTitle = exampleCourseData.data.courseTitle

  

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
            <Image src='/assets/logoSingle.png' alt='logo' height={70} width={70}/>
            <h1 className='text-3xl font-semibold text-black'>EduCreate AI</h1>
           </div>
        </div>

        <div className='md:flex items-center justify-start gap-4'>
          <FaArrowLeft size={20} />
          <div className=''>
            <p className='font-semibold text-black'>Course : {courseTitle}</p>
            <div className='mt-2 flex flex-col items-start md:flex-row md:items-center justify-start gap-5'>
              <span className='flex items-center justify-center gap-2'>
                <LuFolderClosed className='text-black' />
                <p className='text-contentcreationtext text-sm'>{sections.length}</p>
              </span>
              <span className='flex items-center justify-center gap-2'>
                <BsQuestionSquareFill className='text-black' />
                <p className='text-contentcreationtext text-sm'>{questions.length}</p>
              </span>
              <span className='flex items-center justify-center w-2/3 gap-2'>
                <BiSolidMessageSquareDetail className='text-black' />
                <p className='text-contentcreationtext text-sm'>Select designs and/or expand screens, edit text then scroll to bottom to create eLearning. This eLearning can then be further edited once it has been created.</p>
              </span>
            </div>
          </div>
        </div>
      </div>


      <Course sections={sections} courseTitle={courseTitle} />

      <section className='bg-white dark:bg-black' >
        {sections.map((section,index) => (
          <ContentCreationSlide key={index} section={section} ></ContentCreationSlide>
        ))}
      </section>

      <section className='py-10 px-5 bg-white dark:bg-black w-full'>
        <h1 className='text-3xl font-semibold text-black dark:text-white' >Quiz Questions</h1>

        <div className='mt-5 md:flex items-start justify-between' >
          <div className='space-y-5' >
            {questions.map((question,index) => (
              <QuizQuestion key={index} qno={index+1} question={question} />
            ))}
            

            <div className='flex items-center justify-end' >
              <button className='bg-indigo-700 text-white shadow-lg rounded-full py-2 px-4 text-sm' >Create elearning</button>
            </div>
          </div>

          <LearningObjectives sections={sections} />
        </div>

      </section>

      <footer className='bg-black p-4' >
        <p className='text-gray-500 text-center'>© 2024 - educreateai. Designed by Adil. All rights reserved</p>
      </footer>
    </main>
  )
}

export default Page
