

import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import {motion, useInView} from 'framer-motion'

const BecomeInstructorComponent = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: false});
  return (
    <section className="py-10 bg-slate-100 dark:bg-black">
    <div className="container mx-auto px-5">
      <div className="md:flex items-center justify-center gap-5">
        <motion.div
        ref = {ref}
        initial = {{x : '100%', opacity:0}}
        animate={isInView ? {x:'0%',opacity:1} : {}}
        transition = {{duration:1, ease:'easeInOut'}}
        className="bg-instructorBlueBox rounded-md p-5 w-full md:w-1/3">
          <h1 className="text-3xl font-semibold">Become an instructor</h1>
          <p className="mt-3 text-base text-white">Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
          <button className="mt-3 flex items-center justify-center gap-2 p-2 rounded-md bg-instructorBlueBtn">Start Creating <FaArrowRight/></button>
        </motion.div>
        <motion.div
        ref = {ref}
        initial = {{x : '-100%', opacity:0}}
        animate={isInView ? {x:'0%',opacity:1} : {}}
        transition = {{duration:1, ease:'easeInOut'}}
        className="">
          <Image src='/assets/homess.svg' alt="ss" height={600} width={600}/>
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default BecomeInstructorComponent
