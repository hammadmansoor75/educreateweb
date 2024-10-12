"use client"
import { CourseProvider } from "@/providers/CourseProvider"
import {SnackbarProvider} from 'notistack'

const EditCourseLayout = ({children}) => {
    return(
        <SnackbarProvider maxSnack={3} >
            <CourseProvider>
                {children}
            </CourseProvider>
        </SnackbarProvider>
    )
}

export default EditCourseLayout;