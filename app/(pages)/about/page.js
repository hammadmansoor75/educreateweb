import React from 'react'
import '@/app/globals.css'
import Image from 'next/image'
import { BsCheckCircleFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { MdPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from 'react-icons/fa6';



const page = () => {
  return (
    <main>
        <section style={{ backgroundImage: `url(${'/assets/Header.png'})`, backgroundSize: 'cover'}} className='py-10 min-h-[600px]'>
            <div className='mt-40 flex flex-col items-center justify-center'>
                <h1 className='text-5xl text-center text-white font-bold'>About Us</h1>
                <p className='text-white text-base w-1/2 text-center'>EduCreate AI has been helping organizations to improve the knowledge and skills of their learners both in the corporate and education sectors since 2003.</p>
            </div>
        </section>
        <section className='py-20 bg-white dark:bg-black flex flex-col items-center justify-center'>
            <div className='py-10 px-20'>
                <h1 className='text-4xl text-black dark:text-white font-bold'>Our Successes</h1>
                <p className='text-sm text-black dark:text-white w-2/3 mt-5'>The company is has both the world’s top ranked LMS and eLearning Authoring systems and has produced openelms.ai as the next stage of that unprecedented success.</p>
            </div>
            <Image className='mt-20' src="/assets/aboutLogos.svg" alt="image" height={1200} width={1200} />
        </section>
        <section className='py-20 bg-white dark:bg-gradient-to-b from-slate-900 to-black'>
            <div className='md:flex items-center justify-center gap-10'>
                <div className='px-5'>
                    <h1 className='text-4xl text-black dark:text-white font-bold'>Our Services</h1>
                    <div className='flex flex-col items-start justify-start px-5 mt-5'>
                        <p className='text-sm text-black dark:text-white flex items-center justify-center gap-2'><span className='text-blueTick'><BsCheckCircleFill/></span>EduCreate  the AI Powered LMS</p>
                        <p className='text-sm text-black dark:text-white flex items-center justify-center gap-2'><span className='text-blueTick'><BsCheckCircleFill/></span>EduCreate Chat company specific Chat GTP</p>
                        <p className='text-sm text-black dark:text-white flex items-center justify-center gap-2'><span className='text-blueTick'><BsCheckCircleFill/></span> EduCreate Creator authors eLearning</p>
                        <p className='text-sm text-black dark:text-white flex items-center justify-center gap-2'><span className='text-blueTick'><BsCheckCircleFill/></span> EduCreate Classroom hosts your online lessons</p>
                        <p className='text-sm text-black dark:text-white flex items-center justify-center gap-2'><span className='text-blueTick'><BsCheckCircleFill/></span>EduCreate Forms manages your HR processes</p>
                        <p className='text-sm text-black dark:text-white flex items-center justify-center gap-2'><span className='text-blueTick'><BsCheckCircleFill/></span>EduCreate Bespoke builds your new eLearning</p>
                    </div>
                </div>
                <div>
                    <Image src='/assets/aboutServices.svg' alt='services' height={500} width={500}/>
                </div>
            </div>
        </section>
        <section className='py-20 md:px-20 px-5 bg-white dark:bg-black'>
            <div className='md:flex items-center justify-center gap-10'>
                <div>
                    <Image src='/assets/aboutContact.svg' alt='contact' height={600} width={600} />
                </div>
                <div className='mt-5 md:mt-0'>
                    <h1 className='text-3xl text-black dark:text-white font-semibold'>Contact Us</h1>
                    <h1 className='mt-5 text-3xl text-black dark:text-white font-semibold'>Don’t worry we’re always here to help you</h1>
                    <p className='mt-5 text-md text-textGray dark:text-white'>Should you wish to discuss a company wide corporate installation or have any other questions, please contact us using the details below.</p>
                    <p className='mt-5 flex items-center justify-start gap-5 text-textGray dark:text-white'><span className='text-blueIcon font-bold'><CiMail/></span>sales@openelms.com</p>
                    <p className='mt-3 flex items-center justify-start gap-5 text-textGray dark:text-white'><span className='text-blueIcon font-bold'><MdPhone/></span>+44 (0)203 929 2051</p>
                    <p className='mt-3 flex items-center justify-start gap-5 text-textGray dark:text-white'><span className='text-blueIcon font-bold'><CiLocationOn/></span>Kemp House, 124 City Road, London, UK, EC1V 2NX</p>
                </div>
            </div>
        </section>
        <section className='py-10 bg-bgGreyABout dark:bg-gradient-to-b from-slate-950 to-black'>
            <div className='mt-10 container px-10 mx-auto md:flex items-center justify-center gap-5'>
                <div>
                    <h1 className='text-black dark:text-white text-4xl font-bold'>{`Let's talk`}</h1>
                    <p className='text-black dark:text-white text-md mt-3'>Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна. Мы предоставляем премиум сервис по доступным ценам и всегда нацелены на успех наших клиентов.</p>
                    <form className='mt-5 p-3 flex flex-col items-start justify-start gap-2'>
                        <input type='text' className='bg-inherit border-b-2 border-black dark:border-white text-black dark:text-white p-2 placeholder-black dark:placeholder-white' placeholder='Your Name' />
                        <input type='email' className='bg-inherit border-b-2 text-black dark:text-white p-2 border-black dark:border-white placeholder-black dark:placeholder-white' placeholder='Your Email' />
                        <input type='tel' className='border-black dark:border-white bg-inherit border-b-2 text-black dark:text-white p-2 placeholder-black dark:placeholder-white' placeholder='Your Phone' />
                        <input type='text' className='border-black dark:border-white bg-inherit border-b-2 text-black dark:text-white p-2 placeholder-black dark:placeholder-white' placeholder='Tell us about your project' />
                        <button className='flex items-center justify-start gap-2 bg-inherit font-bold mt-5 p-2 px-4 rounded-full border-2 border-blue-800 text-blue-800'>Send <span><FaArrowRight/></span></button>
                    </form>
                </div>
                <div>
                    <Image src='/assets/talkAbout.svg' alt='message' height={700} width={700}/>
                </div>
            </div>
        </section>
    </main>
  )
}

export default page
