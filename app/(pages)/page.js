"use client"
import Image from "next/image";
import {FaArrowRight,FaArrowLeft } from "react-icons/fa6";
import CourseSlide from "@/components/CourseSlide";
import {useState} from "react"
import Testimonials from "@/components/Testimonials";4
import {motion} from 'framer-motion'
import { useInView } from "framer-motion";
import React from "react";
import Component1 from "@/components/HomePageComponents/Component1";
import Component2 from "@/components/HomePageComponents/Component2";
import InstructorComponent from "@/components/HomePageComponents/InstructorComponent";
import BecomeInstructorComponent from "@/components/HomePageComponents/BecomeInstructorComponent";
import Link from "next/link";
import Companies from "@/components/HomePageComponents/Companies";
import FeatureCourses from "@/components/HomePageComponents/FeatureCourses";


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
      <section className="py-20 bg-white dark:bg-gradient-to-r from-gradientBlueStart via-gradientBlueMid to-gradientBlueEnd">
        <div className="md:flex items-center justify-between gap-8">
          <motion.div
          ref={ref}
          initial={{opacity:0, y : '100%'}}
          animate = { {opacity:1, y:'0%'} }
          transition={{duration:1, ease : "easeOut"}}
          className="w-4/5 md:w-1/2 ml-14">
            <h1 className="text-3xl md:text-5xl font-bold dark:text-white">Unlock the power of AI for your Education </h1>
            <p className=" text-base text-textGray dark:text-white mt-4">Our mission is to help people to design the best course content anytime, anywhere.</p>
            <Link href='/mylearning' >
              <button  className="text-md flex items-center gap-2 justify-center bg-gradient-to-r from-pink-300 to-blue-400 border-blue-700 border-2 opacity-1 rounded-full p-3 text-pinkBtnText font-bold mt-5 dark:bg-blueBtn shadow-2xl shadow-pinkBtn" >Create Free AI Course <span><FaArrowRight/></span></button>
            </Link>
            

            {/* <Link href='/contentcreation'>Content Creation</Link> */}
          </motion.div>
          <motion.div
            ref = {ref}
            initial = {{x : '-100%', opacity:0}}
            animate={ isInView ? {x:'0%',opacity:1} : {}}
            transition = {{duration:1, ease:'easeInOut'}}
            className="hidden md:flex">
            <Image src='/assets/homepage-01-replaced.png' className='rounded-[70px]' height={1000} width={700} alt="homepage"/>
          </motion.div>
        </div>
      </section>
      <Component2/>

      <Companies/>

      

      <section className="py-10 px-5 bg-slate-100 dark:bg-black">
          <FeatureCourses />
      </section>

      <InstructorComponent/>


      <section className="hidden md:flex py-10 bg-white dark:bg-black  justify-center">
        <Image src='/assets/homegridBig.svg' alt="grid" height={900} width={900} />
        
       

        <div className="absolute mt-[600px] animate-bounce flex items-center justify-center bg-black opacity-70 rounded-md" >
          <h1 className="text-center text-5xl py-9 px-8 rounded-md font-bold text-white">Made in</h1>
          <Image className="" src='/assets/logoWhite.png' alt="logo" height={400} width={400}/>
          {/* <h1 className="text-center text-5xl py-9 px-8 rounded-md font-bold text-blue-700">EduCreate AI</h1> */}
        </div>
      </section>

      <BecomeInstructorComponent/>


      <section className="py-10 bg-white dark:bg-black">
        {/* <h1 className="text-3xl font-semibold text-center sm:px-2">Top Customer Feedback</h1> */}
        <Testimonials />

      </section>

      <Component1></Component1>
    </main>
  );
}
