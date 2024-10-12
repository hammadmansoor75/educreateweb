"use client";
import axios from 'axios';
import {createContext,useContext,useState,useEffect} from 'react';
import * as z from 'zod'



const section = z.object({
    id: z.string().optional(),
    x : z.number().default(100),
    y : z.number().default(100),
    width : z.number().min(200).default(400),
    height : z.number().min(100).default(200),
    sectionTitle : z.string(),
    smallPara : z.string(),
    script : z.string().optional(),
    keyPoints : z.array(z.string()),
    stableDiffusionPrompts : z.array(z.string()),
    backgroundImageUrl : z.string().optional(),
    previewImages : z.array(z.string()).optional(),
    rndComponentImage : z.string().optional(),
})

const quizQuestion = z.object({
    id : z.string().optional(),
    question : z.string(),
    answer : z.string(),
    options : z.array(z.string())
})

const CourseSchema = z.object({
    courseId : z.string().optional(),
    courseTitle : z.string(),
    courseSubtitle : z.string(),
    courseImageUrl : z.string().optional(),
    createdBy : z.string(),
    sections : z.array(section),
    quizQuestions : z.array(quizQuestion)
})

const CourseContext = createContext();

export const CourseProvider = ({children}) => {
    const [course,setCourse] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=> {
        if(course !== null){
            setLoading(false)
        }
    },[course])

    const updateCourse = (updatedCourse) => {
        try{
            const validatedCourse = CourseSchema.parse(updatedCourse);
            setCourse(validatedCourse);
            console.log("Course in the context: ",course);
        }catch(error){
            console.log('Invalid Course Data : ', error)
        }
    }

    const updateCourseImageUrl = (courseImageUrl) => {
        setCourse(prevCourse => {
            if(!prevCourse) return prevCourse;

            return {
                ...prevCourse,
                courseImageUrl
            }
        })
    }

    const updateSectionImages = (sectionIndex, backgroundImageUrl, previewImages) => {
        setCourse((prevCourse) => {
            if(!prevCourse || !prevCourse.sections[sectionIndex]) return prevCourse;

            const updatedSections = [...prevCourse.sections];
            updatedSections[sectionIndex] = {
                ...updatedSections[sectionIndex],
                backgroundImageUrl,
                previewImages,
               
            };

            return {
                ...prevCourse,
                sections : updatedSections,
            }
        })
    }

    const updateSectionPositionAndSize = (sectionIndex, x,y ,width,height ) => {
        setCourse(prevCourse => {
            if(!prevCourse || !prevCourse.sections[sectionIndex]) return prevCourse;

            const updatedSections = [...prevCourse.sections];
            updatedSections[sectionIndex] = {
                ...updatedSections[sectionIndex],
                x,
                y,
                width,
                height,
                
                
            }

            return {
                ...prevCourse,
                sections : updatedSections
            }
        })
    }

    const updateSectionContent = (sectionIndex, sectionTitle, smallPara) => {
        setCourse(prevCourse => {
            if(!prevCourse || !prevCourse.sections[sectionIndex]) return prevCourse;

            const updatedSections = [...prevCourse.sections];
            updatedSections[sectionIndex] = {
                ...updatedSections[sectionIndex],
                sectionTitle,
                smallPara,
                
                
            }

            return {
                ...prevCourse,
                sections : updatedSections
            }
        })
    }


    const initializeEditCourse = (courseInput) => {
        console.log(courseInput);
        const newCourse = {
            courseId : courseInput.id,
            courseTitle : courseInput.courseTitle,
            courseSubtitle : courseInput.courseSubtitle,
            courseImageUrl : courseInput.courseImageUrl,
            createdBy : courseInput.userId,
            sections : courseInput.sections.map((section) => ({
                id : section.id,
                x : section.x,
                y : section.y,
                sectionTitle : section.sectionTitle,
                width : section.width,
                height : section.height,
                smallPara : section.smallPara,
                script : section.script,
                keyPoints : section.keyPoints,
                stableDiffusionPrompts : section.stableDiffusionPrompts,
                backgroundImageUrl : section.backgroundImageUrl,
                previewImages : section.previewImages,
                rndComponentImage : section.rndComponentImage
            })),
            quizQuestions : courseInput.quizQuestions.map((question) => ({
                id : question.id,
                question : question.question,
                answer : question.answer,
                options : question.options
            }))
        }

        try{
            const validatedCourse = CourseSchema.parse(newCourse);
            setCourse(validatedCourse);
            // console.log("Edit course in the context: " , course);
        }catch(error){
            console.log('Error' , error);
        }
    }

    const updateRndComponentImage = (sectionIndex, rndComponentImage) => {
        console.log("Rnd Component Image URL: ", rndComponentImage )
        setCourse(prevCourse => {
            if (!prevCourse || !prevCourse.sections[sectionIndex]) return prevCourse;
    
            const updatedSections = [...prevCourse.sections];
            updatedSections[sectionIndex] = {
                ...updatedSections[sectionIndex],
                rndComponentImage
            };
    
            return {
                ...prevCourse,
                sections: updatedSections,
            };
        });
    };

    const getCourse = () => course;

    const saveCourse = async () => {
        try{
            const response = await axios.post('/api/save-course', course);
            if(response.status === 200){
                console.log('Course saved successfully:', response.data);
                const courseId = response.data.data;
                return {courseId};
            }else{
                console.log("Error Saving the course: ", response.data)
                const problem = response.data.error;
                return {problem}
            }
            
        }catch(error){
            console.error('Error saving course:', error.response ? error.response.data : error.message);
            const problem =  error.response ? error.response.data : error.message;
            return {problem}
        }
    }

    const editCourseInDb = async () => {
        try{
            const response = await axios.put('/api/update-course',course);
            console.log("Course Updated in the DB!",response.data);
        }catch(error){
            console.error('Error updating course in db:', error.response ? error.response.data : error.message);
        }
    }

    return(
        <CourseContext.Provider value={{course,loading,initializeEditCourse,updateRndComponentImage, editCourseInDb , updateCourse, getCourse, updateCourseImageUrl,updateSectionImages,updateSectionPositionAndSize, updateSectionContent,saveCourse}} >
            {children}
        </CourseContext.Provider>
    )

}


export const useCourse = () => useContext(CourseContext);