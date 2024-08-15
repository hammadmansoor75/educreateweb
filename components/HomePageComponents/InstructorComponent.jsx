import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FcComments } from "react-icons/fc";
import {motion, useInView} from 'framer-motion'
import React from "react";

const InstructorComponent = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: false});
    return (
        <section className="py-10 px-5 bg-slate-100 dark:bg-black">
        <div className="container mx-auto">
          <div className="md:flex items-center justify-center gap-10">
            <motion.div
            ref = {ref}
            initial = {{x : '100%', opacity:0}}
            animate={isInView ? {x:'0%',opacity:1} : {}}
            transition = {{duration:1, ease:'easeInOut'}}
            className="w-full md:w-1/2">
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
            </motion.div>
            <motion.div
            ref = {ref}
            initial = {{x : '-100%', opacity:0}}
            animate={isInView ? {x:'0%',opacity:1} : {}}
            transition = {{duration:1, ease:'easeInOut'}}
            className="mt-5 flex justify-center">
              <Image src='/assets/homegrid.png' alt="grid" height={500} width={500}/>
            </motion.div>
          </div>
         
        </div>
      </section>
    )
}


export default InstructorComponent;