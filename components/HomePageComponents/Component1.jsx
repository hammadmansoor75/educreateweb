import { useInView } from 'framer-motion'
import Image from 'next/image';
import React from 'react'
import {motion} from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6';

const Component1 = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: false});
  return (
    <section className="py-20 bg-white dark:bg-gradient-to-r from-gradientBlueStart via-gradientBlueMid to-gradientBlueEnd">
        <div className="md:flex items-center justify-between gap-2">
          <motion.div
          ref={ref}
          initial={{opacity:0, y : '100%'}}
          animate = { isInView ? {opacity:1, y:'0%'} : {} }
          transition={{duration:1, ease : "easeOut"}}
          className="w-4/5 md:w-1/2 ml-14">
            <h1 className="text-3xl md:text-5xl font-bold dark:text-white">Unlock the power of AI for your Education </h1>
            <p className=" text-base text-textGray dark:text-white mt-4">Our mission is to help people to design the best course content anytime, anywhere.</p>
            <button className="text-md flex items-center gap-2 justify-center bg-gradient-to-r from-pink-300 to-blue-400 border-blue-700 border-2 opacity-1 rounded-full p-3 text-pinkBtnText font-bold mt-5 dark:bg-blueBtn shadow-2xl shadow-pinkBtn" >Create Free AI Course <span><FaArrowRight/></span></button>
          </motion.div>
          <motion.div
            ref = {ref}
            initial = {{x : '-100%', opacity:0}}
            animate={ isInView ? {x:'0%',opacity:1} : {}}
            transition = {{duration:1, ease:'easeInOut'}}
            className="hidden md:flex">
            <Image src='/assets/homepage-01.svg' height={700} width={700} alt="homepage"/>
          </motion.div>
        </div>
      </section>
      
  )
}

export default Component1
