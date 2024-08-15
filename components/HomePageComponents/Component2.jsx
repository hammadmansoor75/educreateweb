import React from 'react'
import {motion, useInView} from 'framer-motion'
import Image from 'next/image'


const Component2 = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once : false})
  return (
    <section className="py-10 bg-white dark:bg-black flex items-center justify-center">
        <motion.div
        ref={ref}
        initial = {{x : '100%', opacity:0}}
        animate = {isInView ? { x:"0%", opacity:1}: {}}
        transition={{duration:1, ease:'easeInOut'}}
        >
           <Image src='/assets/homepage-02.svg' height={1200} width={1000} alt="video"/>
        </motion.div>
       
      </section>
  )
}

export default Component2
