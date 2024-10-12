'use client';
import {useState,useEffect} from 'react';
import Image from "next/image"
import { IoCloudUploadOutline, IoDocumentTextOutline } from "react-icons/io5"
import { LuFolderClosed } from "react-icons/lu"
import { FaPlus } from 'react-icons/fa6';
import axios from 'axios';
import { useCourse } from '@/providers/CourseProvider';
import { Button } from '@/components/ui/button';
import { ClipLoader } from 'react-spinners';

const Course = ({course}) => {
    const [courseImage, setCourseImage] = useState('');
    const {updateCourseImageUrl} = useCourse();

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if(file){
        // const imageUrl = URL.createObjectURL(file);
        // setCourseImage(imageUrl);

        const formData = new FormData();
        formData.append('file',file);
        formData.append('upload_preset','educreatepreset')
        try{
          const response = await axios.post('https://api.cloudinary.com/v1_1/dsq7wjcnz/image/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
          });
          if (response.status === 200) {
            const imageUrl = response.data.secure_url; // Get the URL of the uploaded image
            setCourseImage(imageUrl);
            updateCourseImageUrl(imageUrl);
            console.log('Image URL:', imageUrl);
        }
        }catch(error){
          console.error('Error uploading image:', error);
        }
      }
    }
    const [loading,setLoading] = useState(false);

    const generateCourseImage = async () => {
        setLoading(true);
        try{
            const response = await axios.post('/api/replicate-image', {prompt : course.courseTitle});
            if(response.status === 200){

                const formData = new FormData();
                formData.append("file", response.data.imageUrls[0])
                formData.append("upload_preset","educreatepreset");
                const cloudinaryResponse = await axios.post(
                  'https://api.cloudinary.com/v1_1/dsq7wjcnz/image/upload',
                  formData
                )
                if(cloudinaryResponse.status === 200){
                  setCourseImage(cloudinaryResponse.data.secure_url)
                  updateCourseImageUrl(cloudinaryResponse.data.secure_url);
                  console.log('Generated Image :', courseImage);
                }else{
                  console.log("Error :", cloudinaryResponse.data)
                }
                
            }
        }catch(error){
            console.log('Error generating or uploading Image', error);
        }finally{
            setLoading(false);
        }
    }


    const handleGenerateImage = async () => {
        await generateCourseImage();
    }

    useEffect(() => {
      if (course.courseImageUrl) {
          setCourseImage(course.courseImageUrl);
      } else {
          generateCourseImage();
      }
  }, []);

    return (
        <section className='py-10 bg-white dark:bg-black px-5'>
        <div className='md:flex items-center justify-start gap-5'>
          <div>
            {loading ? <div className='flex items-center justify-center w-full md:min-w-[900px]' >
              <ClipLoader size={30} />
            </div> : <Image src={courseImage} className='rounded-xl mb-5' alt='content' height={700} width={900} /> }
            
            <div className='md:flex items-center justify-end gap-4 space-y-2 md:space-y-0'>
              <button className='text-black dark:text-white sm:text-sm bg-inherit py-2 px-4 border border-purple-500'>Select design or generate new image</button>
              <label htmlFor="course-image" className="cursor-pointer">
                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" id="course-image" />
              </label>
              <Button onClick={() => document.getElementById('course-image').click()} className="flex item-center justify-center gap-2"  ><IoCloudUploadOutline size={20} /> Upload Photo</Button>
              {/* <button onClick={() => document.getElementById('course-image').click()} className='flex items-center justify-center gap-2 bg-indigo-700 text-white rounded-full py-2 px-4' ><IoCloudUploadOutline size={20} /> Upload Photo</button> */}
              <Button onClick={handleGenerateImage} variant='outline' className="flex item-center justify-center gap-2"  ><FaPlus size={20} />{loading ? 'Generating...' : 'Generate Image'}</Button>
              {/* <button onClick={handleGenerateImage} className='flex items-center justify-center gap-2 bg-indigo-700 text-white rounded-full py-2 px-4' ><FaPlus size={20} />{loading ? 'Generating...' : 'Generate Image'}</button> */}
            </div>
          </div>
          <div className='bg-white border border-green-500 rounded-lg shadow-lg py-2 px-5 mt-5 md:mt-0 w-full md:w-1/3 min-h-[600px]'>
              <div className='flex items-center justify-between'>
                  <h1 className='text-green-500 font-semibold text-xl'>Course Contents</h1>
                  <p className='text-green-500'>{course.sections.length} slides</p>
              </div>
              <div className='mt-3' >
                <div className='flex items-center justify-center gap-2'> 
                    <div className='bg-gray-300 rounded-full p-2' >
                      <LuFolderClosed />
                    </div>
                    <p className='text-sm text-black '>Welcome to this learning session on  {course.courseTitle} In this course we shall address:</p>
                </div>
                {course.sections.map((section, index) => (
                  <div key={index} className='mt-3 flex items-center justify-between text-black' >
                    <div className='md:flex-row flex flex-col items-start md:items-center justify-center gap-2'>
                      <div className='bg-gray-300 rounded-full py-1 px-3' >
                        {index + 1}
                      </div>
                      <p>{section.sectionTitle}</p>
                    </div>
                    <IoDocumentTextOutline size={20} />
                  </div>
                ))}

              </div>
          </div>
        </div>
        
      </section>
    )
}

export default Course;