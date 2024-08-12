"use client"
import Image from "next/image";
import {FcComments} from 'react-icons/fc'
import {FaArrowRight,FaArrowLeft } from "react-icons/fa6";
import CourseSlide from "@/components/CourseSlide";
import {useState} from "react"
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Testimonials from "@/components/Testimonials";


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

  return (
    <main className="">
      <section className="py-20 bg-white dark:bg-gradient-to-r from-gradientBlueStart via-gradientBlueMid to-gradientBlueEnd">
        <div className="md:flex items-center justify-between gap-2">
          <div className="w-4/5 md:w-1/2 ml-14">
            <h1 className="text-3xl md:text-5xl font-bold dark:text-white">Unlock the power of AI for your Education </h1>
            <p className=" text-base text-textGray dark:text-white mt-4">Our mission is to help people to design the best course content anytime, anywhere.</p>
            <button className="text-md flex items-center gap-2 justify-center bg-gradient-to-r from-pink-300 to-blue-400 border-blue-700 border-2 opacity-1 rounded-full p-3 text-pinkBtnText font-bold mt-5 dark:bg-blueBtn shadow-2xl shadow-pinkBtn" >Create Free AI Course <span><FaArrowRight/></span></button>
          </div>
          <div className="hidden md:flex">
            <Image src='/assets/homepage-01.svg' height={700} width={700} alt="homepage"/>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white dark:bg-black flex items-center justify-center">
        <Image src='/assets/homepage-02.svg' height={1200} width={1000} alt="video"/>
      </section>

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

      <section className="py-10 px-5 bg-slate-100 dark:bg-black">
        <div className="container mx-auto">
          <div className="md:flex items-center justify-center gap-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl text-black dark:text-white">10k+ Instructor created their success story with open eLMS AI</h2>
              <p className="mt-3 text-featureGrey text-base">Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum eros justo, id commodo ante laoreet nec. Phasellus aliquet, orci id pellentesque mollis.</p>
              <div className="mt-3 p-2 bg-blueBox rounded-md">
                  <FcComments size={30} />
                  <p className="mt-3 text-black text-base">Nulla sed malesuada augue. Morbi interdum vulputate imperdiet. Pellentesque ullamcorper auctor ante, egestas interdum quam facilisis commodo. Phasellus efficitur quis ex in consectetur. Mauris tristique suscipit metus, a molestie dui dapibus vel.</p>
              </div>
              <div className="mt-4 flex items-center justify-start gap-2">
                  <button className="bg-gray-300 p-2 rounded-md"><FaArrowLeft/></button>
                  <button className="bg-blue-600 p-2 rounded-md"><FaArrowRight/></button>
              </div>
            </div>
            <div className="mt-5 flex justify-center">
              <Image src='/assets/homegrid.png' alt="grid" height={500} width={500}/>
            </div>
          </div>
         
        </div>
      </section>


      <section className="hidden md:flex py-10 bg-white dark:bg-black  justify-center">
        <Image src='/assets/homegridBig.svg' alt="grid" height={900} width={900} />
        <h1 className="absolute mt-[600px] text-center text-4xl bg-black bg-opacity-70 py-9 px-8 rounded-md font-bold text-white">Made in <span className="text-blue-700">Open eLMS AI</span></h1>
      </section>

      <section className="py-10 bg-slate-100 dark:bg-black">
        <div className="container mx-auto px-5">
          <div className="md:flex items-center justify-center gap-5">
            <div className="bg-instructorBlueBox rounded-md p-5 w-full md:w-1/3">
              <h1 className="text-3xl font-semibold">Become an instructor</h1>
              <p className="mt-3 text-base text-textGray">Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
              <button className="mt-3 flex items-center justify-center gap-2 p-2 rounded-md bg-instructorBlueBtn">Start Creating <FaArrowRight/></button>
            </div>
            <div className="">
              <Image src='/assets/homess.svg' alt="ss" height={600} width={600}/>
            </div>
          </div>
        </div>
      </section>


      <section className="py-10 bg-white dark:bg-black">
        {/* <h1 className="text-3xl font-semibold text-center sm:px-2">Top Customer Feedback</h1> */}
        <Testimonials />

      </section>

      <section className="py-20 px-5 bg-darkGreyBg dark:bg-black text-white">
        <div className="container mx-auto md:flex items-center justify-center gap-5">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-semibold">Start teaching with us and inspire others</h1>
            <p className="mt-3 text-base text-textGray">Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.</p>
            <button className="mt-3 bg-darkGreyBgBlueBtn py-2 rounded-md text-xl shadow-md shadow-inherit px-4">Register Now</button>
          </div>
          <div className="mt-5 md:mt-0">
          <Image src='/assets/Instructor.svg' className="rounded-lg" alt="instructor" height={500} width={500} />
          </div>
        </div>
        
      </section>
    </main>
  );
}
