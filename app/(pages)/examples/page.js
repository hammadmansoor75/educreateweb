import ExampleCarousel from '@/components/ExamplesCarousel'
import ExampleSlider from '@/components/ExampleSlider'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const page = () => {
  return (
    <main className=''>
        <section style={{ backgroundImage: `url(${'/assets/exampleBg.svg'})`, backgroundSize: 'cover'}} className='py-10 px-10 min-h-[600px]'>
            <div className='mt-[60px] flex items-start justify-start flex-col'>
                <h1 className='text-5xl font-bold text-examplePurpleBtn'>Example Courses</h1>
                < p className='mt-5 text-black text-md w-1/2'>The following examples are bite-size courses to demonstrate the functionality of openelms.ai. These courses were built from a single line of text in under a minute. When purchased, courses will be able to be built of any size.</p>
                <button className='flex items-center justify-center gap-2 bg-examplePurpleBtn text-white p-3 rounded-md mt-5 '>Book Demo <span><FaArrowRight/></span></button>
            </div>
        </section>
        <section className='py-10 md:px-10 px-4 bg-white dark:bg-black '>
            <div className='container mx-auto rounded-lg'>
                <ExampleCarousel/>
            </div>
        </section>
        <section className='bg-bgGreyABout'  >
            <section className='py-10 bg-bgGreyABout dark:bg-black'>
            <div className='flex items-center justify-center'>
                <Image src='/assets/exampleVideo.svg' alt="video" height={1000} width={1000}/>
            </div>
        </section>
        <section className='py-10 md:flex items-center justify-center dark:bg-black'>
            <div className='px-10 md:w-3/4 md:flex items-center justify-between gap-10 bg-bgGreyABout dark:bg-black min-h-40'>
                <h1 className='md:w-1/2 text-4xl text-black dark:text-white'>Your teacher career will never be the same</h1>
                <div className='mt-5 md:mt-0 flex items-center justify-center gap-10'>
                    <button className='bg-inherit border-[1px] border-white text-white p-2 px-4 rounded-md'>Talk to us </button>
                    <button className='bg-examplePurpleBtn text-white p-2 rounded-sm'>Get in touch</button>
                </div>
            </div>
            <Image className='mt-5 md:mt-0' src='/assets/exampleGlobe.png' alt='globe' height={400} width={400} />
        </section>
        </section>
        
    </main>
  )
}

export default page
