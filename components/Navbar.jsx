"use client";
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import { FaBars } from 'react-icons/fa6';
import {MdOutlineClose} from 'react-icons/md'
import {UserButton, SignInButton, useAuth, useUser, SignUpButton, SignedIn, SignedOut} from '@clerk/nextjs'

const navLinks = [
    {
        name : 'Home',
        link : '/'
    },
    {
        name : 'Examples',
        link : '/examples'
    },
    {
        name : 'About Us',
        link : '/about'
    },
    {
        name : 'Pricing',
        link : '/pricing'
    },
]



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const handleOpenChange = () => {
        setIsOpen(!isOpen);
    }
    // const {data:session,status} = useSession();
    const {isSignedIn} = useAuth();
    const {user} = useUser();

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted) return null;

  return (
    <>
        <header className='dark:bg-black dark:text-white bg-white text-black sticky top-0 z-50'>
            <nav className='container mx-auto p-4 flex items-center justify-between'>
                <div className='flex items-start'>
                    <div className='logo flex items-center justify-center'></div>
                    <Link href='/' ><Image src='/assets/logo.png' className='dark:hidden flex' height={180} width={180} alt='logo'/></Link>
                    <Link href='/' ><Image src='/assets/logoWhite.png' className='dark:flex hidden' height={180} width={180} alt='logo'/></Link>
                    {/* <h1 className='font-bold text-xl'>Educreate.ai</h1> */}
                </div>
                <div className='hidden md:flex items-center justify-center gap-4'>
                    {navLinks.map((link) => {
                        return <Link className='hover:border-b-2 hover:border-black dark:hover:border-white ' href={link.link} key={link.link}>{link.name}</Link>
                    })}
                    <SignedIn>
                        <div className='flex items-center justify-center gap-4'>
                            <Link href='/mylearning' className='hover:border-b-2 hover:border-black dark:hover:border-white ' >My Learning</Link>
                            <Link href='/mycourses' className='hover:border-b-2 hover:border-black dark:hover:border-white ' >My Courses</Link>
                        </div>
                    </SignedIn>
                </div>
                <div className='hidden md:flex items-center justify-center gap-3'>
                <ThemeToggler/>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignUpButton mode='modal' >
                        <button className='bg-signupBtn p-2 rounded-md text-white'>Create Account</button>
                    </SignUpButton>
                    <SignInButton mode='modal' >
                        <button className='bg-signinBtn p-2 rounded-md text-white'>Sign In</button>
                    </SignInButton>
                </SignedOut>
                        
                </div>
                
                <div className='md:hidden sm:flex'>
                <ThemeToggler className="hidden" />
                </div>
                
                <button className='md:hidden dark:text-white' onClick={handleOpenChange}>
                    {isOpen ? <MdOutlineClose size={20}/> : <FaBars size={20}/>}
                </button>

            
            </nav>
        </header>
        

        {isOpen && (
                <div className='md:hidden p-5 w-full h-auto dark:bg-black dark:text-white bg-white text-black'>
                    <div className='flex flex-col justify-center items-center text-left px-5'>
                    {navLinks.map((link) => {
                        return <Link className='hover:border-b-2 hover:border-black dark:hover:border-white ' href={link.link} key={link.link}>{link.name}</Link>
                    })}
                    <SignedIn>
                        <div className='flex flex-col items-center justify-center'>
                            <Link href='/mylearning' className='hover:border-b-2 hover:border-black dark:hover:border-white ' >My Learning</Link>
                            <Link href='/mycourses' className='hover:border-b-2 hover:border-black dark:hover:border-white ' >My Courses</Link>
                        </div>
                    </SignedIn>
                    </div>
                    <SignedOut>
                        <div className='mt-3 px-5 flex items-center justify-center gap-3' >
                            <SignUpButton mode='modal' >
                                <button className='bg-signupBtn p-2 rounded-md text-white'>Create Account</button>
                            </SignUpButton>
                            <SignInButton mode='modal' >
                                <button className='bg-signinBtn p-2 rounded-md text-white'>Sign In</button>
                            </SignInButton>
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <div className='flex items-center justify-center mt-5' >
                            <UserButton />
                        </div>
                    </SignedIn>
                    
                </div>
            )}
    </>
  )
}

export default Navbar
