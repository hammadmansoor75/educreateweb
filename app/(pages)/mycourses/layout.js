"use client"
import { SessionProvider } from "next-auth/react"
import {SnackbarProvider} from 'notistack'

const MyCoursesLayout = ({children}) => {
    return (
        <SnackbarProvider>
            <SessionProvider>
                {children}
            </SessionProvider>
        </SnackbarProvider>
    )
}


export default MyCoursesLayout;