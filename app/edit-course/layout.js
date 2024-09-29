"use client"
import { CourseProvider } from "@/providers/CourseProvider"

const EditCourseLayout = ({children}) => {
    return(
        <CourseProvider>
            {children}
        </CourseProvider>
    )
}

export default EditCourseLayout;