import React from 'react'
import {PiGraduationCap} from 'react-icons/pi'
import { FaShoppingCart } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";



const page = () => {
  return (
    <main>
        <section className='bg-slate-100 py-10 dark:bg-gradient-to-r from-blue-950 to-black px-2 md:px-10'>
            <div className='flex items-center justify-center flex-col gap-5'>
                <PiGraduationCap size={40} className='text-orange-500'/>
                <h1 className='text-4xl font-bold text-blue-700 drop-shadow-lg shadow-blue-700'>MY Learning</h1>
                <p className='text-md text-black dark:text-white'>You are currently using Open eLMS AI version</p>
                <p className='text-md text-black dark:text-white'>Give it a try right below.</p>
                <button className='flex items-center justify-center gap-2 text-blue-700 font-semibold border-2 border-gray-300 py-1 px-3 bg-blue-300 drop-shadow-lg '>Select to upgrade <FaShoppingCart className='text-orange-500'/> </button>
            </div>

            <div className='bg-white dark:bg-black md:py-5 py-2 px-2 md:px-10 rounded-lg border-2 border-green-500 mt-10'>
                <h1 className='text-2xl md:text-4xl font-bold text-blue-700 text-center'>Enter Details to Create Course Content</h1>
                <form>
                    <div className='flex flex-col items-start justify-center gap-1'>
                        <label className='text-black dark:text-white'>Title</label>
                        <input type='text' placeholder='Your course title' className='bg-gray-200 px-4 py-2 border-purple-500 rounded-lg placeholder-gray-500 w-1/2 md:w-full border' />
                    </div>
                    <div className='flex flex-col items-start justify-center gap-1 mt-3'>
                        <label className='text-black dark:text-white'>Subtitle</label>
                        <input type='text' placeholder='Your course subtitle' className='bg-gray-200 px-4 py-2 border-purple-500 rounded-lg placeholder-gray-500 md:w-full w-1/2 border' />
                    </div>
                    <div className='flex flex-col items-start justify-center gap-1 mt-3'>
                        <label className='text-black dark:text-white'>Learning Objectices (Optional)</label>
                        <textarea type='text' placeholder='Your course subtitle' className='bg-gray-200 px-4 py-2 border-purple-500 rounded-lg placeholder-gray-500 md:w-full w-1/2 border md:min-h-52' />
                    </div>
                    <div className='md:flex items-center justify-between mt-3 gap-3'>
                        <div className='flex flex-col items-start justify-center gap-1'>
                            <label className='text-black dark:text-white'>Course Language</label>
                            <select type='text' placeholder='Select' className='bg-gray-200 px-4 py-2 border-purple-500 rounded-sm placeholder-gray-500 min-w-60 border' >
                                <option className='text-gray-500'>Select</option>
                            </select>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-1'>
                            <label className='text-black dark:text-white'>Subtitle Language (Optional)</label>
                            <select type='text' placeholder='Select' className='bg-gray-200 px-4 py-2 border-purple-500 rounded-sm placeholder-gray-500 min-w-60 border' >
                                <option className='text-gray-500'>Select</option>
                            </select>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-1'>
                            <label className='text-black dark:text-white'>Course Level</label>
                            <select type='text' placeholder='Select' className='bg-gray-200 px-4 py-2 border-purple-500 rounded-sm placeholder-gray-500 min-w-60 border' >
                                <option className='text-gray-500'>Select</option>
                            </select>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-1'>
                            <label className='text-black dark:text-white'>Style & Tone</label>
                            <select type='text' placeholder='Select' className='bg-gray-200 px-4 py-2 border-purple-500 rounded-sm placeholder-gray-500 min-w-60 border' >
                                <option className='text-gray-500'>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-1 mt-3'>
                        <label className='text-black dark:text-white'>Upload Document (Optional)</label>
                        <div className='bg-gray-200 px-4 border-purple-500 rounded-lg placeholder-gray-500 w-2/3 md:w-full border md:min-h-52 py-4'>
                            <div className='flex items-center justify-center gap-5'>
                                <CiImageOn className='hidden md:flex border border-purple-500 rounded-lg' size={200} />
                                <div className='w-full md:w-1/2'>
                                    <p className=''>Optionally, upload a <strong>.pdf file (size limit of 10MB)</strong> in order to facilitate the creation of a course that is based on the textual content contained within the file. Optimizing the format of the document can lead to more desirable results</p>
                                    <input className='mt-5' type='file' />
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 items-center justify-between mt-10'>
                        <button className='bg-white rounded-md drop-shadow-lg shadow-lg text-gray-500 px-7 py-3 font-semibold'>Cancel</button>
                        <button className='bg-indigo-700 rounded-md drop-shadow-lg shadow-lg text-white px-7 py-3 font-semibold'>Save & Next</button>
                    </div>
                </form>
            </div>
        </section>
    </main>
  )
}

export default page
