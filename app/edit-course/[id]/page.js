"use client";
import { CourseProvider, useCourse } from "@/providers/CourseProvider";
import Image from "next/image";
import {useState, useEffect} from 'react'
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BsQuestionSquareFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
import { LuFolderClosed } from "react-icons/lu";
import axios from 'axios'
import Course from "@/app/contentcreation/Course";
import ContentCreationSlide from "@/components/ContentCreationSlide";
import QuizQuestion from "@/components/QuizQuestion";
import LearningObjectives from "@/app/contentcreation/LearningObjectives";
import {useRef} from 'react'
import html2canvas from 'html2canvas'
import {useSnackbar} from 'notistack'
import {ClipLoader} from 'react-spinners'
import {useRouter} from 'next/navigation'

const EditCourse = () => {
    // const [course,setCourse] = useState();
    const {course,loading,initializeEditCourse,editCourseInDb,updateRndComponentImage} = useCourse();

    const [loadingState,setLoadingState] = useState(false);
    const {enqueueSnackbar} = useSnackbar();
    const router = useRouter()
    
   const refs = useRef([])
    
    useEffect(() => {
        if (typeof window !== 'undefined'){
            // Extract the 'id' from the current URL (if present)
            const urlPath = window.location.pathname; // Get the current URL path
            const idFromPath = urlPath.split("/").pop(); // Extract the ID from the path
            // console.log("Course id from params :" , idFromPath);
            
            const getCourseById = async (courseId) => {
                const response = await axios.post('/api/get-course',{id : courseId});
                // console.log(response.data.course);
                initializeEditCourse(response.data.course);
                // console.log("Context Course: ", course);
            }
            if (idFromPath) {
                // Fetch course data once ID is available
                getCourseById(idFromPath);
            }
        }
        
      }, []);


      useEffect(() => {
        if(course?.sections){
            refs.current = refs.current.slice(0,course.sections.length)
            console.log(refs.current)
        }
      }, [course])


      if(loading){
        return <div className="flex items-center justify-center h-screen flex-col gap-2"  >
            <ClipLoader size={50} ></ClipLoader>
            <h1 className="text-lg" ></h1>
        </div>
      }

      
      const handleCourseUpdation = () => {
        try{
            setLoadingState(true);
            course.sections.map(async (section,index) => {
              await captureAndUpload(index)
            })
            editCourseInDb();
            enqueueSnackbar('Course Updated Successfully!', { variant: 'success' });
            router.push('/mycourses')
          }catch(error){
            enqueueSnackbar('Something went wrong! Please try again.', { variant: 'error' });
            console.log('Error:', error)
          }finally{
            setLoadingState(false);
          }
      }

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

    return(
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
                    <Image src='/assets/logoSingle.png' className="hidden md:flex" alt='logo' height={70} width={70}/>
                    <Image src='/assets/logoSingle.png' className="sm:flex md:hidden" alt='logo' height={30} width={30}/>
                    <h1 className='text-3xl font-semibold text-black'>EduCreate AI</h1>
                </div>
                </div>

                <div className='md:flex items-center justify-start mt-3 gap-4'>
                <FaArrowLeft className="hidden md:flex" size={20} />
                <div className=''>
                    <p className='font-semibold text-black'>Course : {course.courseTitle}</p>
                    <div className='mt-2 flex flex-col items-start md:flex-row md:items-center justify-start gap-5'>
                    <span className='flex items-center justify-center gap-2'>
                        <LuFolderClosed className='text-black' />
                        <p className='text-contentcreationtext text-sm'>{course.sections.length}</p>
                    </span>
                    <span className='flex items-center justify-center gap-2'>
                        <BsQuestionSquareFill className='text-black' />
                        <p className='text-contentcreationtext text-sm'>{course.quizQuestions.length}</p>
                    </span>
                    <span className='flex items-center justify-center w-full md:w-2/3 gap-2'>
                        <BiSolidMessageSquareDetail className='text-black' />
                        <p className='text-contentcreationtext text-sm'>Select designs and/or expand screens, edit text then scroll to bottom to create eLearning. This eLearning can then be further edited once it has been created.</p>
                    </span>
                    </div>
                </div>
                </div>
            </div>

            <Course course={course} />

            <section className='bg-white dark:bg-black'>
                {course.sections.map((section, index) => (
                    <div className="flex flex-col" key={section.id}>
                        <ContentCreationSlide
                            ref={el => refs.current[index] = el}
                            section={section}
                            sectionIndex={index}
                        />
                        {/* <p className='mt-10' >just for testing</p>
                        <button className="bg-blue-900 text-white" onClick={() => captureAndUpload(index)}>Capture and Upload</button> */}
                    </div>
                ))}
            </section>


            <section className='py-10 px-5 bg-white dark:bg-black w-full'>
                <h1 className='text-3xl font-semibold text-black dark:text-white' >Quiz Questions</h1>

                <div className='mt-5 md:flex items-start justify-between' >
                <div className='space-y-5' >
                    {course.quizQuestions.map((question,index) => (
                    <QuizQuestion key={index} qno={index+1} question={question} />
                    ))}
                    

                    <div className='flex items-center justify-end' >
                    <button onClick={handleCourseUpdation} disabled={loadingState} className='bg-indigo-700 text-white shadow-lg rounded-full py-2 px-4 text-sm' >{loadingState ? 'Updating' : 'Update elearning'} </button>
                    </div>
                </div>

                <LearningObjectives sections={course.sections} />
                </div>

            </section>


            <footer className='bg-black p-4' >
                <p className='text-gray-500 text-center'>© 2024 - educreateai. Designed by Adil. All rights reserved</p>
            </footer>

        </main>
    )
}

export default EditCourse;