import React from 'react'
import Image from 'next/image'
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';



const Footer = () => {
  return (
    <footer className='bg-darkGreyBg py-10'>
        <div className='border-b border-textGray mb-5'></div>
        <div className='mx-auto py-10'>
            <div className='md:flex items-center justify-center gap-5'>
                {/* Logo Div */}
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center gap-2'>
                        <Image src='/assets/logoWhite.png' alt="logo" height={180} width={180}/>
                        {/* <h1 className='text-white text-2xl font-semibold'>EduCreate AI</h1> */}
                    </div>
                    <p className='md:w-1/2 mt-2 text-textGray text-center'>At EduCreate, we empower educators and learners to innovate <br/> and inspire through accessible, customizable  course creation <br/>tools. Together, we’re shaping the future of education</p>
                    <div className='mt-2 flex items-center justify-center gap-2'>
                        <MdFacebook className='text-white white hover:text-blue-600' size={30} />
                        <FaInstagram className='text-white white  hover:text-blue-600' size={30} />
                        <FaTwitter className='text-white white  hover:text-blue-600' size={30} />
                        <IoLogoYoutube className='text-white white  hover:text-blue-600' size={30} />
                        <FaLinkedin className='text-white white  hover:text-blue-600' size={30} />
                    </div>
                </div>

                {/* top 4 */}
                <div className='flex flex-col text-center items-center justify-center gap-1 mt-8 md:mt-0'>
                    <p className='text-base text-white'>TOP 4 CATEGORY</p>
                    <p className='text-sm text-textGray hover:border-b-2 hover:border-blue-500'>AI Content Creation</p>
                    <p className='text-sm text-textGray hover:border-b-2 hover:border-blue-500'>Finance and Accounting</p>
                    <p className='text-sm text-textGray hover:border-b-2 hover:border-blue-500'>Design</p>
                    <p className='text-sm text-textGray hover:border-b-2 hover:border-blue-500'>Business</p>
                </div>

                {/* Quick Links */}
                <div className='flex flex-col text-center items-center justify-center gap-1 mt-8 md:mt-0'>
                    <p className='text-base text-white'>QUICK LINKS</p>
                    <p className='text-sm text-textGray hover:border-b-2 hover:border-blue-500'><Link href='/about' >About</Link></p>
                    <p className='text-sm text-textGray hover:border-b-2 hover:border-blue-500'><Link href='/signup'>Become an instructor</Link></p>
                    <p className='text-sm text-textGray hover:border-b-2 hover:border-blue-500'><Link href='/about' ></Link>Contact</p>
                    <p className='text-sm text-textGray hover:border-b-2 hover:border-blue-500'><Link href='/examples' >Examples</Link></p>
                </div>

                {/* Support */}
                <div className='flex flex-col items-center text-center justify-center gap-1 mt-8 md:mt-0'>
                    <p className='text-base text-white'>SUPPORT</p>
                    <p className='text-sm text-textGray hover:border-b-2 hover:border-blue-500'><Link href='/about' >Help Center</Link></p>
                    <p className='text-sm text-textGray hover:border-b-2 hover:border-blue-500'><Link href='/about' >FAQs</Link></p>
                    <p className='text-sm text-textGray hover:border-b-2 hover:border-blue-500'><Link href='/terms'>Terms & Conditions</Link></p>
                    <p className='text-sm text-textGray hover:border-b-2 hover:border-blue-500'><Link href='/privacy-policy'>Privacy Policy</Link></p>
                </div>


                {/* Download our app */}
                <div className='flex flex-col items-center justify-center text-center gap-1 mt-8 md:mt-0'>
                    <p className='text-base text-white'>DOWNLOAD OUR APP</p>
                    <Image src='/assets/App.png' alt='app' height={100} width={100}/>
                </div>
            </div>
        </div>
        <div className='border-b-2 border-textGray mt-5'></div>
        <p className='text-sm text-textGray text-center mt-3'>© 2024 - educreateai. All rights reserved</p>
    </footer>
  )
}

export default Footer
