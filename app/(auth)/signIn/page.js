import ThemeToggler from '@/components/ThemeToggler'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaA, FaApple, FaArrowRight, FaFacebook, FaGoogle } from 'react-icons/fa6'
import { FcGoogle } from "react-icons/fc";


const page = () => {
  return (
    <main>
        <section className='flex items-center justify-center w-full'>
            <div className='hidden md:flex bg-gradient-to-tr from-loginStart via-loginVia to-loginEnd dark:bg-gradient-to-r dark:from-blue-950 dark:to-black  flex-col gap-10 items-center justify-center w-3/5 min-h-[100vh]'>
                <h1 className='text-4xl text-wrap px-12 text-center text-black dark:text-white'>Turn your topic into course content, in <span className='text-blue-400 font-semibold'> minutes.</span></h1>
                <div className='bg-white rounded-lg py-3 px-20' >
                    <Image src='/assets/login.svg' alt='login' height={500} width={500} />
                </div>
            </div>
            <div className='bg-white dark:bg-black w-full md:w-2/5 min-h-[100vh] flex justify-center flex-col'>
               
                <h1 className='text-3xl text-black dark:text-white text-center text-wrap'>Welcome to <span className='text-blue-400 font-semibold'> Edu Create AI</span></h1>
                <p className='text-base text-black dark:text-white text-center'>Use you work email for a better experience.</p>
                <form className='p-5'>
                   <div className='flex flex-col items-start justify-center'>   
                       <label className='text-black dark:text-white text-md'>Email</label>
                       <input type='email' placeholder='Email address' className='bg-inherit mt-1 border-2 border-gray-600 w-full placeholder-gray-600 rounded-md text-md placeholder-md p-2' />
                   </div>
                   <div className='mt-5 flex flex-col items-start justify-center'>
                      <label className='text-black dark:text-white text-md'>Password</label>
                      <input type='email' placeholder='Enter password' className='border-2 border-gray-600 w-full placeholder-gray-600 rounded-md bg-inherit mt-1 text-md placeholder-md p-2' />
                   </div>
                   <div className='flex items-center justify-start gap-2 mt-5'>
                      <p className='text-black dark:text-white text-sm'>Dont have an account?</p>
                      <Link href='/signup' className='text-blue-800 underline text-sm' >Create Account</Link>
                    </div>
                    <div className='flex items-center justify-end'>
                        <button className='bg-indigo-600 text-white font-semibold p-3 flex items-center justify-center gap-1 font-base rounded-full mt-5'>Log In <span><FaArrowRight className='text-black'/></span></button>
                    </div>   
               </form>
               <p className='text-center font-semibold text-md text-black dark:text-white'>OR SIGN IN WITH</p>
               <div className='flex flex-col md:flex-row items-center justify-center gap-3 mt-5 px-5'>
                    <button className='bg-inherit text-black dark:text-white border border-black dark:border-white flex items-center justify-start gap-2 w-full'><span className='border-r px-2 py-2 border-black dark:border-white' ><FcGoogle/></span><span className='px-4 py-1'>Google</span></button>
                    <button className='bg-inherit text-blue-700 border border-blue-700 flex items-center justify-start gap-2 w-full'><span className='border-r border-blue-700 px-2 py-2' ><FaFacebook/></span><span className='px-4 py-1'>Facebook</span></button>
                    <button className='bg-inherit text-black dark:text-white border border-black dark:border-white flex items-center justify-start gap-2 w-full'><span className='border-r px-2 py-2 border-black dark:border-white' ><FaApple/></span><span className='px-4 py-1'>Apple</span></button>
               </div>
            </div>
        </section>
    </main>
  )
}

export default page
