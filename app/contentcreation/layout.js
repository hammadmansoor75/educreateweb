"use client"
import { SessionProvider } from "next-auth/react";


export default function ContentCreationLayout({children}){
    return (
        <SessionProvider>
            
            {children}

        </SessionProvider>
    )
}