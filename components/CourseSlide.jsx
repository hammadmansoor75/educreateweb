import React from 'react'
import Image from 'next/image'

const CourseSlide = ({courseImage, courseTag, courseTitle, courseDesc}) => {
  return (
    <div className="mt-7 md:flex items-center justify-between">
            <div className="">
              <Image src={courseImage} alt="feature course" height={700} width={700} />
            </div>
            <div>
              <p className="text-sm w-full md:w-1/3 rounded-sm bg-featureRed p-2 text-featureBrown">{courseTag}</p>
              <h2 className="text-3xl mt-4">{courseTitle}</h2>
              <p className="text-featureGrey text-base mt-4">{courseDesc}</p>
            </div>
          </div>
  )
}

export default CourseSlide
