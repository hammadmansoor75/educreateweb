"use client"
import { SessionProvider } from "next-auth/react"

const MyCoursesLayout = ({children}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}


export default MyCoursesLayout;