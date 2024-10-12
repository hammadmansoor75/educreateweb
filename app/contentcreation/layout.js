"use client"
import { SessionProvider } from "next-auth/react";
import {SnackbarProvider} from 'notistack'


export default function ContentCreationLayout({children}){
    return (
        <SnackbarProvider>
            <SessionProvider>
            
                {children}

            </SessionProvider>
        </SnackbarProvider>
    )
}