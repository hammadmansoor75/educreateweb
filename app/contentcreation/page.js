import Image from 'next/image'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { LuFolderClosed } from "react-icons/lu";
import { BsQuestionSquareFill } from "react-icons/bs";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import ContentCreationSlide from '@/components/ContentCreationSlide';
import QuizQuestion from '@/components/QuizQuestion';
import { CiCircleCheck } from "react-icons/ci";



const contents = [
  'Introduction to DevOps',
  'What is DevOps',
  'History of DevOps',
  'Key Principles of DevOps',
  'Benefits of DevOps',
  'DevOps LifeCycle',
  'Continuous Integration'
]



const page = () => {
  return (
    <main>
      <header className='min-h-12 max-h-12 bg-black py-3 px-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-white'>My Learning</h1>
          <div className='flex items-center justify-center gap-3'>
            <p className='text-gray-400'>USD</p>
            <p className='text-gray-400'>English</p>
          </div>
        </div>
      </header>
      <div className='bg-white py-3 px-6 shadow-lg'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-center'>
            <Image src='/assets/logoSingle.png' alt='logo' height={70} width={70}/>
            <h1 className='text-3xl font-semibold text-black'>EduCreate AI</h1>
           </div>
        </div>

        <div className='flex items-center justify-start gap-4'>
          <FaArrowLeft size={20} />
          <div className=''>
            <p className='font-semibold text-black'>Course : Introduction to DevOps</p>
            <div className='mt-2 flex items-center justify-start gap-5'>
              <span className='flex items-center justify-center gap-2'>
                <LuFolderClosed className='text-black' />
                <p className='text-contentcreationtext text-sm'>38 slides</p>
              </span>
              <span className='flex items-center justify-center gap-2'>
                <BsQuestionSquareFill className='text-black' />
                <p className='text-contentcreationtext text-sm'>7 questions</p>
              </span>
              <span className='flex items-center justify-center gap-2'>
                <BiSolidMessageSquareDetail className='text-black' />
                <p className='text-contentcreationtext text-sm'>Select designs and/or expand screens, edit text then scroll to bottom to create eLearning. This eLearning can then be further edited once it has been created.</p>
              </span>
            </div>
          </div>
        </div>
      </div>


      <section className='py-10 bg-white dark:bg-black px-5'>
        <div className='flex items-center justify-start gap-5'>
          <div>
            <Image src='/assets/contentcreation-01.svg' alt='content' height={700} width={900} />
            <div className='flex items-center justify-end gap-4'>
              <button className='text-black dark:text-white bg-inherit py-2 px-4 border border-purple-500'>Select design or generate new image</button>
              <button className='flex items-center justify-center gap-2 bg-indigo-700 text-white rounded-full py-2 px-4' ><IoCloudUploadOutline size={20} /> Upload Photo</button>
              <button className='flex items-center justify-center gap-2 bg-indigo-700 text-white rounded-full py-2 px-4' ><FaPlus size={20} /> Generate Image</button>
            </div>
          </div>
          <div className='bg-white border border-green-500 rounded-lg shadow-lg py-2 px-5 w-1/3 min-h-[600px]'>
              <div className='flex items-center justify-between'>
                  <h1 className='text-green-500 font-semibold text-xl'>Course Contents</h1>
                  <p className='text-green-500'>38 slides</p>
              </div>
              <div className='mt-3' >
                <div className='flex items-center justify-center gap-2'> 
                    <div className='bg-gray-300 rounded-full p-2' >
                      <LuFolderClosed />
                    </div>
                    <p className='text-sm text-black '>Welcome to this learning session on Introduction to DevOps. In this course we shall address:</p>
                </div>
                {contents.map((content, index) => (
                  <div key={index} className='mt-3 flex items-center justify-between text-black' >
                    <div className='flex items-center justify-center gap-2'>
                      <div className='bg-gray-300 rounded-full py-1 px-3' >
                        {index + 1}
                      </div>
                      <p>{content}</p>
                    </div>
                    <IoDocumentTextOutline size={20} />
                  </div>
                ))}

              </div>
          </div>
        </div>
        
      </section>

      <section className='bg-white dark:bg-black' >
        <ContentCreationSlide/>
        <ContentCreationSlide/>
        <ContentCreationSlide/>
        <ContentCreationSlide/>
        <ContentCreationSlide/>
        <ContentCreationSlide/>
      </section>


      <section className='py-10 px-5 bg-white dark:bg-black w-full'>
        <h1 className='text-3xl font-semibold text-black dark:text-white' >Quiz Questions</h1>

        <div className='mt-5 flex items-start justify-between' >
          <div className='space-y-5' >
            <QuizQuestion qno='01' question='What is Devops?' option1='A set of practices that combines software development and IT operations' option2='A project management methodology' option3='A type of database' option4='A programming language' />
            <QuizQuestion qno='01' question='What is Devops?' option1='A set of practices that combines software development and IT operations' option2='A project management methodology' option3='A type of database' option4='A programming language' />
            <QuizQuestion qno='01' question='What is Devops?' option1='A set of practices that combines software development and IT operations' option2='A project management methodology' option3='A type of database' option4='A programming language' />
            <QuizQuestion qno='01' question='What is Devops?' option1='A set of practices that combines software development and IT operations' option2='A project management methodology' option3='A type of database' option4='A programming language' />
            <QuizQuestion qno='01' question='What is Devops?' option1='A set of practices that combines software development and IT operations' option2='A project management methodology' option3='A type of database' option4='A programming language' />

            <div className='flex items-center justify-end' >
              <button className='bg-indigo-700 text-white shadow-lg rounded-full py-2 px-4 text-sm' >Create elearning</button>
            </div>
          </div>

          <div className='bg-slate-100 p-5 rounded-lg border-green-500 w-2/5'>
                <h1 className='font-semibold text-center mb-5'>Skills you will learn in this course</h1>
                <div className='space-y-2'>
                  <div className='flex items-start justify-center gap-2' >
                      <CiCircleCheck size={20} className='bg-green-500 text-white rounded-lg font-semibold' />
                      <p className='text-sm text-black' >You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.</p>
                  </div>
                  <div className='flex items-start justify-center gap-2' >
                      <CiCircleCheck size={20} className='bg-green-500 text-white rounded-lg font-semibold' />
                      <p className='text-sm text-black' >You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.</p>
                  </div>
                  <div className='flex items-start justify-center gap-2' >
                      <CiCircleCheck size={20} className='bg-green-500 text-white rounded-lg font-semibold' />
                      <p className='text-sm text-black' >You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.</p>
                  </div>
                  <div className='flex items-start justify-center gap-2' >
                      <CiCircleCheck size={20} className='bg-green-500 text-white rounded-lg font-semibold' />
                      <p className='text-sm text-black' >You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.</p>
                  </div>
                  <div className='flex items-start justify-center gap-2' >
                      <CiCircleCheck size={20} className='bg-green-500 text-white rounded-lg font-semibold' />
                      <p className='text-sm text-black' >You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.</p>
                  </div>
                  <div className='flex items-start justify-center gap-2' >
                      <CiCircleCheck size={20} className='bg-green-500 text-white rounded-lg font-semibold' />
                      <p className='text-sm text-black' >You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.</p>
                  </div>
                </div>
          </div>
        </div>

      </section>

      <footer className='bg-black p-4' >
        <p className='text-gray-500 text-center'>© 2024 - educreateai. Designed by Adil. All rights reserved</p>
      </footer>
    </main>
  )
}

export default page
