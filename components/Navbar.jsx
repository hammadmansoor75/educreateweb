"use client";
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import { FaBars } from 'react-icons/fa6';
import {MdOutlineClose} from 'react-icons/md'

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
    {
        name : 'My Learning',
        link : '/mylearning'
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenChange = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
        <header className='dark:bg-black dark:text-white bg-white text-black'>
            <nav className='container mx-auto p-4 flex items-center justify-between'>
                <div className='flex items-start'>
                    <div className='logo'></div>
                    <Image src='/assets/logo.png' height={180} width={180} alt='logo'/>
                    {/* <h1 className='font-bold text-xl'>Educreate.ai</h1> */}
                </div>
                <div className='hidden md:flex items-center justify-center gap-4'>
                    {navLinks.map((link) => {
                        return <Link className='hover:border-b-2 hover:border-black dark:hover:border-white ' href={link.link} key={link.link}>{link.name}</Link>
                    })}
                </div>
                <div className='hidden md:flex items-center justify-center gap-3'>
                <ThemeToggler/>
                    <Link href='/signup'><button className='bg-signupBtn p-2 rounded-md text-white'>Create Account</button></Link>
                    <Link href='/signIn'><button className='bg-signinBtn p-2 rounded-md text-white'>Sign In</button></Link>
                    
                    
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
                    </div>
                    <div className='mt-3 px-5 flex items-center justify-center gap-3'>
                        <Link href='/signup'><button className='bg-signupBtn p-2 rounded-md text-white'>Create Account</button></Link>
                        <Link href='/signIn'><button className='bg-signinBtn p-2 rounded-md text-white'>Sign In</button></Link>
                    </div>
                    
                </div>
            )}
    </>
  )
}

export default Navbar
