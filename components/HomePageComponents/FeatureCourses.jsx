import { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const FeatureCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
        title : 'Machine Learning Fundamentals',
        description: 'Dive into the world of Machine Learning with our comprehensive course designed for beginners and enthusiasts alike. This course covers the essential concepts and techniques that underpin machine learning, providing you with a solid foundation to understand how algorithms learn from data.',
        category : 'Artificial Intelligence',
        image : '/assets/courses/mahine-learning.webp'
    },
    {
        title : 'Web Development Fundamentals',
        description: 'Embark on your journey into the world of web development with our comprehensive course designed for aspiring developers and tech enthusiasts. This course covers the core principles and technologies that underpin modern web development, equipping you with the skills needed to create dynamic, responsive websites.',
        category : 'Web Development',
        image : '/assets/courses/web.webp'
    },
    {
        title : 'Python Programming Basics',
        description: 'Dive into the world of programming with our "Python Programming Basics" course, designed for absolute beginners and those looking to strengthen their programming skills. This course provides a solid foundation in Python, one of the most popular and versatile programming languages today.',
        category : 'Computer Science',
        image : '/assets/courses/python.webp'
    },
    {
        title : 'Photography Essentials',
        description: 'Unlock your creativity and master the art of photography with our "Photography Essentials" course. This comprehensive program is designed for beginners and aspiring photographers who want to build a solid foundation in photography techniques and concepts.',
        category : 'Visual Arts',
        image : '/assets/courses/photo.webp'
    },
    {
        title : 'Mastering Communication Skills',
        description: 'Enhance your ability to communicate effectively with our "Mastering Communication Skills" course, designed for individuals looking to improve their verbal and non-verbal communication in personal and professional settings. This comprehensive course covers essential skills that will help you express your ideas clearly and connect with others more meaningfully.',
        category : 'Personal Development',
        image : '/assets/courses/comms.webp'
    },
  ];

  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <main className="grid min-h-screen w-full bg-white rounded-lg dark:bg-gray-900 py-10 px-5 md:px-10">
        <div>
            <h1 className='text-2xl md:text-5xl font-bold' >Feature Courses</h1>
            <p className='text-sm md:text-lg mt-5' >Unlock your potential with our curated courses, tailored to meet the demands of today’s job market. Dive into topics that matter and gain the skills you need to succeed</p>
        </div>
      <div className="relative mx-auto w-full max-w-full overflow-hidden rounded-md bg-gray-100 p-2 sm:p-4">
        <div className="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
          <span>{currentIndex + 1}</span>/<span>{images.length}</span>
        </div>

        <button onClick={previous} className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-800 shadow-md opacity-50">
            <FaArrowLeft size={20} className='text-white' />
        </button>

        <button onClick={forward} className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-800 shadow-md opacity-50">
        <FaArrowRight size={20} className='text-white' />
        </button>

        <div className="relative h-[700px] md:h-92 lg:h-80">
          {images.map((course, index) => (
            <div key={index} className={`absolute top-0 ${currentIndex === index ? 'block' : 'hidden'}`}>
              <div className='md:flex items-center justify-center gap-5' >
                <Image src={course.image} alt="image" height={600} width={600} className="rounded-lg object-cover" />
                <div className='p-5' >
                    <p className='px-5 py-2 bg-red-600 bg-opacity-80 rounded-md w-full md:w-full text-center' >{course.category}</p>
                    <h1 className='text-black text-3xl font-semibold mt-14 md:mt-5 text-center md:text-left' >{course.title}</h1>
                    <p className='text-black text-md mt-5 md:pr-6' >{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FeatureCourses;
