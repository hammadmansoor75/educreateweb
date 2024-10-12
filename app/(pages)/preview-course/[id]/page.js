"use client";
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { LuFolderClosed } from 'react-icons/lu';
import axios from 'axios';
import { MdCircle } from "react-icons/md";
import html2pdf from 'html2pdf.js';
import '@/app/globals.css'
import {useRouter} from 'next/navigation'
import { ClipLoader } from 'react-spinners';
import { Button } from '@/components/ui/button';

const PreviewCourse = () => {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(false);
    const courseRef = useRef();
    const router = useRouter();

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

            if (idFromPath) {
                getCourseById(idFromPath);
            }
        }
        
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center h-screen" >
            <ClipLoader size={50}  />
        </div>;
    }

    const generatePDF = () => {
        const element = courseRef.current;
        const options = {
            margin: 0.5,
            filename: `${course?.courseTitle || 'course'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'px', format: [1157,1108], orientation: 'landscape' },
        };
        html2pdf().from(element).set(options).save();
    };

    const handleQuiz = () => {
        router.push(`/course-quiz/${course.id}`)
    }

    return (
        <main ref={courseRef}>
            <section className='py-10 bg-white dark:bg-black'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <h1 className='text-4xl font-semibold text-center'>Welcome to this course on {course?.courseTitle}</h1>
                    <h3 className='text-lg text-center'>{course?.courseSubtitle}</h3>
                </div>
            </section>
            <section className="py-10 bg-white dark:bg-black px-5">
                <div className="md:flex items-center justify-center gap-5">
                    <div className="w-full">
                        <Image
                            src={course?.courseImageUrl}
                            height={700}
                            width={900}
                            alt="Course Image"
                            className="rounded-lg w-full"
                        />
                    </div>
                    <div className='bg-white border border-green-500 rounded-lg shadow-lg py-2 px-5 mt-5 md:mt-0 w-full md:w-1/3 min-h-[600px]'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-green-500 font-semibold text-xl'>Course Contents</h1>
                            <p className='text-green-500'>{course?.sections.length} slides</p>
                        </div>
                        <div className='mt-3'>
                            <div className='flex items-center justify-center gap-2'>
                                <div className='bg-gray-300 rounded-full p-2'>
                                    <LuFolderClosed />
                                </div>
                                <p className='text-sm text-black'>Welcome to this learning session on {course?.courseTitle}. In this course we shall address:</p>
                            </div>
                            {course?.sections.map((section, index) => (
                                <div key={index} className='mt-3 flex items-center justify-between text-black'>
                                    <div className='md:flex-row flex flex-col items-start md:items-center justify-center gap-2'>
                                        <div className='bg-gray-300 rounded-full py-1 px-3'>
                                            {index + 1}
                                        </div>
                                        <p>{section.sectionTitle}</p>
                                    </div>
                                    <IoDocumentTextOutline size={20} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className='page-break' ></div>

            <section className='py-10 bg-white dark:bg-black'>
    {course?.sections.map((section, index) => (
        <div key={index}>
            <div className='flex flex-col md:flex-row items-start justify-between mt-10 px-5 md:px-10 gap-5'>
                <div className='relative w-full md:w-[800px] h-[400px] md:h-[500px] rounded-xl overflow-hidden'>
                    <Image
                        className='rounded-lg'
                        src={section.backgroundImageUrl}
                        layout='fill'
                        objectFit='contain'
                        alt="Section Image"
                    />
                    <div className="bg-white hidden md:flex md:flex-col rounded-lg px-6 py-4 bg-opacity-50 border-white/20 backdrop-blur-sm text-black"
                        style={{
                            position: 'absolute',
                            left: section.x,
                            top: section.y,
                            width: window.innerWidth <= 768 ? 250 : section.width,
                            height: window.innerWidth <= 768 ? 150 : section.height,
                        }}
                    >
                        <h2 className="border border-blue-900 px-6 py-2 rounded-full font-bold text-xs md:text-md">{section.sectionTitle}</h2>
                        <p className="mt-3 text-xs md:text-sm px-4 py-2 text-black">{section.smallPara}</p>
                    </div>
                </div>
                <div className='bg-white rounded-xl p-4 border border-blue-900 w-full md:w-1/3'>
                    <div>
                        <h2 className='text-md font-semibold text-blue-900'>Section # {index + 1}</h2>
                        <h1 className='text-xl font-bold text-black'>{section.sectionTitle}</h1>
                        <p className='text-sm mt-3 mb-3 text-black'>{section.smallPara}</p>
                        <p className='text-md font-semibold'>Key Points</p>
                        {section.keyPoints.map((point, index) => (
                            <p className='text-sm mt-1 flex items-center text-black justify-start gap-2' key={index}>
                                <span className='font-semibold'>{index + 1}</span>{point}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className='page-break'></div>
        </div>
    ))}
</section>

            <section className='py-10 bg-white dark:bg-black'>
                <h1 className='text-3xl font-bold flex items-center justify-center mb-5'>Quiz Questions</h1>
                {course?.quizQuestions.map((question, index) => (
                    <div key={index} className='px-5' >
                        <div className='flex items-center justify-center flex-col'>
                            <div className="mt-5 border border-purple-500 bg-inherit px-5 py-5 rounded-lg w-full md:w-[700px]">
                                <h1 className="text-green-500 font-semibold">Question: {index + 1}</h1>
                                <h1 className="bg-blue-400 py-4 px-3 mt-5 rounded-lg">{question.question}</h1>
                                {question.options.map((option, index) => (
                                    <p className='mt-2 text-md px-5 flex items-center justify-start gap-2' key={index}><span className='text-green-500'><MdCircle /></span>{option}</p>
                                ))}
                            </div>
                        </div>
                        {(index + 1) % 3 === 0 && index !== course?.quizQuestions.length - 1 && (
                            <div className="page-break"></div>
                        )}
                    </div>
                ))}
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
                    <div className="mt-6 flex items-center justify-center gap-5">
                        <Button onClick={generatePDF} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
                            Download Course as Pdf
                        </Button>
                        <Button onClick={handleQuiz} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
                            Perform Quiz
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default PreviewCourse;
