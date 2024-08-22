"use client"
import ThemeToggler from '@/components/ThemeToggler'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaApple, FaArrowRight, FaFacebook, FaGoogle } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter();
    const formSchema = z.object({
        firstName : z.string().min(3,'First Name is required'),
        lastName : z.string().min(3,"Last Name is required"),
        email : z.string().email('Invalid Email Address'),
        password : z.string().min(1,'Password is required').min(6,'Password must have 6 characters'),
        confirmPassword:  z.string().min(1,'Password confirmation is required'),
        // termsAccepted: z.boolean().refine(val => val === true, {
        //     message: 'You must accept the terms and conditions',
        // })
    }).refine((data) => data.password === data.confirmPassword, {
        path : ['confirmPassword'],
        message : 'Passwords do not match'
    })

    const {register,handleSubmit,formState : {errors}} = useForm({resolver:zodResolver(formSchema)})

    const onSubmit = async(data) => {
        try {
            const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName : data.firstName,
                    lastName : data.lastName,
                    email : data.email,
                    password : data.password,
                    confirmPassword : data.confirmPassword
                }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                // Handle API errors
                console.log(errorData.message);
            } else {
                // Handle successful submission
                router.push('/signIn')
            }
        } catch (error) {
            console.error('Submission error:', error);
        }
    }

  return (
    <main>
        <section className='flex items-center justify-center w-full'>
            <div className='hidden bg-gradient-to-tr from-loginStart via-loginVia to-loginEnd dark:bg-gradient-to-r dark:from-blue-950 dark:to-black md:flex flex-col gap-10 items-center justify-center w-3/5 min-h-[100vh]'>
                <h1 className='text-4xl text-wrap px-12 text-center text-black dark:text-white'>Turn your topic into course content, in <span className='text-blue-400 font-semibold'> minutes.</span></h1>
                <div className='bg-white rounded-lg py-3 px-20' >
                    <Image src='/assets/login.svg' alt='login' height={500} width={500} />
                </div>
            </div>
            <div className='bg-white dark:bg-black w-full md:w-2/5 min-h-[100vh] flex justify-center flex-col'>
                {/* <ThemeToggler/> */}
                <h1 className='text-3xl text-black dark:text-white text-center'>Welcome to <span className='text-blue-400 font-semibold'> Edu Create AI</span></h1>
                <p className='text-base text-black dark:text-white text-center'>Use you work email for a better experience.</p>
                <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
                   <div className='flex flex-col items-start justify-center'>   
                       <label className='text-black dark:text-white text-md'>Full Name</label>
                       <div className='flex items-center justify-center gap-4'>
                            <div>
                                <input type='text' {...register('firstName')} placeholder='First Name' className='bg-inherit border-2 mt-1 border-gray-600 w-full placeholder-gray-600 rounded-md text-md placeholder-md p-2' />
                                {errors.firstName && <p className="text-red-600 text-sm p-2">{errors.firstName.message}</p>}
                            </div>
                            <div>
                                <input type='text' {...register('lastName')}  placeholder='Last Name' className='border-2 border-gray-600 w-full placeholder-gray-600 mt-1 rounded-md bg-inherit text-md placeholder-md p-2' />
                                {errors.lastName && <p className="text-red-600 text-sm p-2">{errors.lastName.message}</p>}
                            </div>
                            
                            
                       </div>
                   </div>
                   {/* <div className='mt-2 flex flex-col items-start justify-center'>
                      <label className='text-black dark:text-white text-md'>Username</label>
                      <input type='text' placeholder='Username' className='border-2 border-gray-600 w-full placeholder-gray-600 mt-1 rounded-md bg-inherit text-md placeholder-md p-2' />
                   </div> */}
                   <div className='mt-2 flex flex-col items-start justify-center'>
                      <label className='text-black dark:text-white text-md'>Email</label>
                      <input type='email' {...register('email')} placeholder='Email' className='border-2 border-gray-600 w-full placeholder-gray-600 rounded-md mt-1 bg-inherit text-md placeholder-md p-2' />
                      {errors.email && <p className="text-red-600 text-sm p-2">{errors.email.message}</p>}
                   </div>
                   <div className='mt-2 flex items-center justify-start gap-5'>
                      <div className='flex flex-col items-start justify-center'>
                            <label className='text-black dark:text-white text-md'>Password</label>
                            <input {...register('password')} type='password' placeholder='Enter password' className='border-2 border-gray-600 w-full placeholder-gray-600 mt-1 rounded-md bg-inherit text-md placeholder-md p-2' />
                            {errors.password && <p className="text-red-600 text-sm p-2">{errors.password.message}</p>}
                      </div>
                      <div className='flex flex-col items-start justify-center'>
                            <label className='text-black dark:text-white text-md'>Confirm Password</label>
                            <input {...register('confirmPassword')} type='password' placeholder='Confirm password' className='border-2 border-gray-600 w-full placeholder-gray-600 rounded-md mt-1 bg-inherit text-md placeholder-md p-2' />
                            {errors.confirmPassword && <p className="text-red-600 text-sm p-2">{errors.confirmPassword.message}</p>}
                      </div>
                   </div>
                   <div className='flex items-center justify-start gap-2 mt-2'>
                      <input type='checkbox' />
                      <Link href='' className='text-blue-800 text-sm' {...register('termsAccepted')} >I agree to all terms and conditions</Link>
                    </div>
                    {errors.termsAccepted && <p className="text-red-600 text-sm p-2">{errors.termsAccepted.message}</p>}

                    <div className='flex items-center justify-end'>
                        <button type='submit' className='bg-indigo-600 text-white font-semibold p-3 flex items-center justify-center gap-1 font-base rounded-full mt-2'>Sign Up <span><FaArrowRight className='text-black'/></span></button>
                    </div>   
               </form>
               <p className='text-center font-semibold text-md text-black dark:text-white'>OR SIGN IN WITH</p>
               <div className='flex items-center justify-center gap-3 mt-5 px-5'>
                    <button className='bg-inherit text-black dark:text-white border border-black dark:border-white flex items-center justify-start gap-2 w-full'><span className='border-r px-2 py-2 border-black dark:border-white' ><FcGoogle/></span><span className='px-4 py-1'>Google</span></button>
                    <button className='bg-inherit text-blue-700 border border-blue-700 flex items-center justify-start gap-2 w-full'><span className='border-r border-blue-700 px-2 py-2' ><FaFacebook/></span><span className='px-4 py-1'>Facebook</span></button>
                    <button className='bg-inherit text-black dark:text-white border border-black dark:border-white flex items-center justify-start gap-2 w-full'><span className='border-r px-2 py-2 border-black dark:border-white' ><FaApple/></span><span className='px-4 py-1'>Apple</span></button>
               </div>
            </div>
        </section>
    </main>
  )
}

export default Page
