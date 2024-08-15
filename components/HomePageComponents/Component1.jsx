"use client"

import { useInView } from 'framer-motion'
import Image from 'next/image';
import React from 'react'
import {motion} from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'next/link';
import { useRouter } from 'next/router';

const Component1 = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: false});

   
  return (
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
      
  )
}

export default Component1;
