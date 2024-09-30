"use client";
import Faq from '@/components/Faq';
import PricingCard from '@/components/PricingCard'
import Image from 'next/image'
import React,{useState} from 'react'

export const pricingPlans = [
    {
        packageName : 'Basic',
        packagePrice : 0,
        packageDesc : 'A budget-friendly option for individuals and small businesses.',
        features : ['Single user license','20 x eLearning course per month ', 'Mobile app access','File synchronization across devices', 'Support for common file types'],
        link : 
            process.env.NODE_ENV === 'development'
                ? 'https://buy.stripe.com/test_00g8yCbkn8xh2k07sv'
                : '',
        priceId : 
            process.env.NODE_ENV === 'development'
                ? 'price_1Q4hrkRxUd9CVk8lSGUPrkHa'
                : '',
        duration : '/month'
    },
    {
        packageName : 'Professional',
        packagePrice : 19.99,
        packageDesc : 'A comprehensive option for businesses with more advanced needs.',
        features :['100 GB storage','Advanced file collaboration', 'Mobile app access', 'File synchronization across devices', 'Support for common file types', 'Automatic file backup', 'Advanced security features','Purchase additional features' ],
        link : 
            process.env.NODE_ENV === 'development'
                ? 'https://buy.stripe.com/test_6oE8yCagjfZJbUAcMM'
                : '',
        priceId : 
            process.env.NODE_ENV === 'development'
                ? 'price_1Q4hM6RxUd9CVk8lXDIw89Gz'
                : '',
        duration : '/month'
    },
    {
        packageName : 'Enterprise',
        packagePrice : 49.99,
        packageDesc : 'A customizable plan for large organizations with specific needs.',
        features :['Customizable storage capacity','Advanced file collaboration', 'Mobile app access', 'File synchronization across devices', 'Support for common file types', 'Automatic file backup', 'Advanced security features', 'Customizable features','Purchase additional features'],
        link : 
            process.env.NODE_ENV === 'development'
                ? 'https://buy.stripe.com/test_cN23ei4VZ4h1aQw4gi'
                : '',
        priceId : 
            process.env.NODE_ENV === 'development'
                ? 'price_1Q4hlhRxUd9CVk8lhdpI8hhJ'
                : '',
        duration : '/month'
    }

]

const Page = () => {
    const [duration,setDuration] = useState(false);
    const handleDuration = () => {
        setDuration(!duration)
    } 
  return (
    <main>
        <section className='p-10 bg-slate-100 dark:bg-gradient-to-r from-blue-950 to-black'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <p className='font-base text-black dark:text-white'>Site Pricing</p>
                <h1 className='mt-10 text-3xl  md:text-6xl font-bold text-blue-800'>Choose your plan</h1>
                <p className='text-base text-center  md:text-lg text-black dark:text-white'>Find the perfect plans for your educational needs.</p>
                <Image className='drop-shadow-[0_100px_100px_rgba(160,32,40,0.75)]' src='/assets/pricingIcon.svg' alt="icon" height={300} width={300} />
            </div>
            <div className='md:flex space-y-5 md:space-y-0  items-start justify-center gap-10'>
                <PricingCard  packageName={pricingPlans[0].packageName} packagePrice={pricingPlans[0].packagePrice} packageDesc={pricingPlans[0].packageDesc} features={pricingPlans[0].features} link={pricingPlans[0].link} priceId={pricingPlans[0].priceId} duration={pricingPlans[0].duration} />
                <PricingCard  packageName={pricingPlans[1].packageName} packagePrice={pricingPlans[1].packagePrice} packageDesc={pricingPlans[1].packageDesc} features={pricingPlans[1].features} link={pricingPlans[1].link} priceId={pricingPlans[1].priceId} duration={pricingPlans[1].duration} />
            </div>
        </section>
        <section className='p-10 bg-white dark:bg-black'>
            <h1 className='mt-10 text-3xl md:text-6xl font-bold text-blue-800 text-center'>Choose your plan</h1>
            {/* <div className='relative w-[360px] h-auto flex items-center border-2 border-gray-600 bg-inherit cursor-pointer rounded-full p-3' onClick={()=> setDuration()}>
                <button className='p-3 text-lg text-white bg-indigo-600 rounded-full'>Monthly</button>
                <div className='bg-white dark:bg-medium w-10 h-10 rounded-full shadow-md transform transition-transform duration-300' style={duration ? {left : '2px'} : {right : '2px'} }></div>
                <button className='p-3 text-lg text-white bg-indigo-600 rounded-full flex items-center justify-center gap-1'>Annually <span className='text-blue-800'>Save 50%</span></button>
            </div> */}
            <div className='md:flex space-y-5 md:space-y-0 items-start justify-center gap-10 mt-10'>
                {pricingPlans.map((plan,index) => (
                    <PricingCard key={index} packageName={plan.packageName} packagePrice={plan.packagePrice} packageDesc={plan.packageDesc} features={plan.features} link={plan.link} priceId={plan.priceId} duration={plan.duration} ></PricingCard>
                ))}
            </div>
        </section>
        <section className='py-10 bg-slate-200 dark:bg-black'>
            <div className='md:flex items-center justify-center space-y-5 md:space-y-0 gap-10'>
                <Image src='/assets/featureCourse.png' alt='course' height={550} width={550} />
                <div>
                <div style={{boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'}}
                    class="flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-white dark:bg-gray-800 rounded-xl">
                    <div class="flex flex-col px-6 pt-8 mb-10 space-y-5">
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="text-gray-A400 dark:text-gray-600 fill-current">
                            <path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z" fill="current"></path>
                        </svg>
                        <p class="body-medium m-0 dark:text-gray-200" style={{hyphens:'auto'}}>These are high-quality courses. Trust me. I own around 10 and the price is worth it for the content quality. <a href="https://twitter.com/EducativeInc?ref_src=twsrc%5Etfw">@EducativeInc</a> came at the right time in
                        my career. I am understanding topics better than with any book or online video tutorial I have done. Truly made
                        for developers. Thanks <a href="https://t.co/EeKruv5hxM">https://t.co/EeKruv5hxM</a></p>
                    </div>
                    <div class="flex space-x-2 bg-gray-50 dark:bg-gray-900/60 dark:text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
                        <div class="flex flex-col justify-center">
                            <p class="heading-six m-0">Anthony Walker</p>
                            <p class="body-small m-0 mt-1">@_webarchitect_</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className='py-10 bg-white dark:bg-black'>
            <div>
                <Faq/>
            </div>
        </section>
    </main>
  )
}

export default Page
