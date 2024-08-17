import Image from 'next/image'
import React from 'react'

const Companies = () => {
  return (
    <section className="py-10 bg-white dark:bg-black">
        <div className="hidden md:flex container mx-auto bg-black w-3/4  rounded-sm">
            <div className="flex flex-wrap justify-center animate-pulse items-center gap-5">
              <Image src='/assets/company/netflix.jpg' alt="company" height={200} width={200}/>
              <Image src='/assets/company/youtube.jpg' alt="company" height={200} width={200}/>
              <Image src='/assets/company/google.png' alt="company" height={200} width={200}/>
              <Image src='/assets/company/lenovo.png' alt="company" height={200} width={200}/>
              <Image src='/assets/company/slack.pmg.png' alt="company" height={200} width={200}/>
              <Image src='/assets/company/verizon.jpg' alt="company" height={200} width={200}/>
              <Image src='/assets/company/lexmark.jpg' alt="company" height={200} width={200}/>
              <Image src='/assets/company/microsoft.png' alt="company" height={200} width={200}/>
            </div>  
        </div>

        <div className='flex container mx-auto bg-black rounded-sm' >
          <div className='flex flex-wrap justify-center animate-pulse items-center gap-5'>
              <Image src='/assets/company/netflix.jpg' alt="company" height={70} width={70}/>
              <Image src='/assets/company/youtube.jpg' alt="company" height={70} width={70}/>
              <Image src='/assets/company/google.png' alt="company" height={70} width={70}/>
              <Image src='/assets/company/lenovo.png' alt="company" height={70} width={70}/>
              <Image src='/assets/company/slack.pmg.png' alt="company" height={70} width={70}/>
              <Image src='/assets/company/verizon.jpg' alt="company" height={70} width={70}/>
              <Image src='/assets/company/lexmark.jpg' alt="company" height={70} width={70}/>
              <Image src='/assets/company/microsoft.png' alt="company" height={70} width={70}/>
          </div>
        </div>
      </section>
  )
}

export default Companies
