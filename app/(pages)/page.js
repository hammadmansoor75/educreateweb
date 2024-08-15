"use client"
import Image from "next/image";
import {FcComments} from 'react-icons/fc'
import {FaArrowRight,FaArrowLeft } from "react-icons/fa6";
import CourseSlide from "@/components/CourseSlide";
import {useState} from "react"
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Testimonials from "@/components/Testimonials";4
import {motion} from 'framer-motion'
import { useInView } from "framer-motion";
import React from "react";
import Component1 from "@/components/HomePageComponents/Component1";
import Component2 from "@/components/HomePageComponents/Component2";
import InstructorComponent from "@/components/HomePageComponents/InstructorComponent";
import BecomeInstructorComponent from "@/components/HomePageComponents/BecomeInstructorComponent";


const courseSlideData = [
  {
    courseImage : "/assets/featureCourse.png",
    courseTag : "personal development",
    courseTitle : "Google Analytics Certification",
    courseDesc : "Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
  },
  {
    courseImage : "/assets/featureCourse1.jpg",
    courseTag : "personal development",
    courseTitle : "Amazon Cloud Foundations",
    courseDesc : "Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
  }
]


export default function Home() {
  const [currentIndex , setCurrentIndex] = useState(0);
  const handleNext = () => {
    if(currentIndex >= courseSlideData.length){
      setCurrentIndex(0);
    }else{
      setCurrentIndex((currentIndex)=> setCurrentIndex(currentIndex + 1))
    }
  }
  const handlePrev = () => {
    if(currentIndex < courseSlideData.length){
      setCurrentIndex(courseSlideData.length);
    }else{
      setCurrentIndex((currentIndex)=> setCurrentIndex(currentIndex - 1))
    }
  }


  const ref = React.useRef(null)
  const isInView = useInView(ref, {once : false})

  const mainRef = React.useRef(null)
  const mainIsInView = useInView(ref,{once:false})

  return (
    <main className="">
      <Component1/>
      <Component2/>

      <section className="py-10 bg-white dark:bg-black">
        <div className="container mx-auto bg-black w-3/4 rounded-sm">
            <div className="flex flex-wrap justify-center items-center gap-5">
              <Image src='/assets/company/netflix.jpg' alt="company" height={200} width={200}/>
              <Image src='/assets/company/youtube.jpg' alt="company" height={200} width={200}/>
              <Image src='/assets/company/google.png' alt="company" height={200} width={200}/>
              <Image src='/assets/company/lenovo.png' alt="company" height={200} width={200}/>
              <Image src='/assets/company/slack.pmg.png' alt="company" height={200} width={200}/>
              <Image src='/assets/company/verizon.jpg' alt="company" height={200} width={200}/>
              <Image src='/assets/company/lexmark.jpg' alt="company" height={200} width={200}/>
              <Image src='/assets/company/microsoft.png' alt="company" height={200} width={200}/>
            </div>
        </div>
      </section>

      

      <section className="py-10 px-5 bg-slate-100 dark:bg-black">
        <div className="container mx-auto bg-white shadow-lg px-20 py-10 rounded-lg">
          <div className="md:flex items-center justify-between">
            <h1 className="text-black text-3xl md:text-4xl  font-semibold">Our feature courses</h1>
            <div className="flex items-center justify-center gap-2">
              <button onClick={handlePrev} className="bg-black mt-3 md:mt-0 text-white px-3 py-2 rounded-full"><span><FaArrowLeft size={20}/></span></button>
              <button  onClick={handleNext} className="bg-black mt-3 md:mt-0 text-white px-3 py-2 rounded-full"><span><FaArrowRight size={20}/></span></button>
            </div>
          </div>
          
          <CourseSlide className="min-w-full"  courseImage={courseSlideData[currentIndex].courseImage} courseTag={courseSlideData[currentIndex].courseTag} courseTitle={courseSlideData[currentIndex].courseTitle} courseDesc={courseSlideData[currentIndex].courseDesc} />
          
        </div>
      </section>

      <InstructorComponent/>


      <section className="hidden md:flex py-10 bg-white dark:bg-black  justify-center">
        <Image src='/assets/homegridBig.svg' alt="grid" height={900} width={900} />
        <h1 className="absolute mt-[600px] text-center text-4xl bg-black bg-opacity-70 py-9 px-8 rounded-md font-bold text-white">Made in <span className="text-blue-700">Open eLMS AI</span></h1>
      </section>

      <BecomeInstructorComponent/>


      <section className="py-10 bg-white dark:bg-black">
        {/* <h1 className="text-3xl font-semibold text-center sm:px-2">Top Customer Feedback</h1> */}
        <Testimonials />

      </section>

      <section className="py-20 px-5 bg-darkGreyBg dark:bg-black text-white">
        <div className="container mx-auto md:flex items-center justify-center gap-5">
          <motion.div
          ref = {ref}
          initial = {{x : '-100%', opacity:0}}
          animate={isInView ? {x:'0%',opacity:1} : {}}
          transition = {{duration:1, ease:'easeInOut'}}
          className="w-full md:w-1/2">
            <h1 className="text-3xl font-semibold">Start teaching with us and inspire others</h1>
            <p className="mt-3 text-base text-textGray">Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.</p>
            <button className="mt-3 bg-darkGreyBgBlueBtn py-2 rounded-md text-xl shadow-md shadow-inherit px-4">Register Now</button>
          </motion.div>
          <motion.div
          ref = {ref}
          initial = {{x : '100%', opacity:0}}
          animate={isInView ? {x:'0%',opacity:1} : {}}
          transition = {{duration:1, ease:'easeInOut'}}
          className="mt-5 md:mt-0">
          <Image src='/assets/Instructor.svg' className="rounded-lg" alt="instructor" height={500} width={500} />
          </motion.div>
        </div>
        
      </section>
    </main>
  );
}
