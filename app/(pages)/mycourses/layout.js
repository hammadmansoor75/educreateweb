"use client"

import {SnackbarProvider} from 'notistack'

const MyCoursesLayout = ({children}) => {
    return (
        <SnackbarProvider>
            
                {children}
            
        </SnackbarProvider>
    )
}


export default MyCoursesLayout;