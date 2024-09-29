"use client"

import { SessionProvider } from "next-auth/react";

export default function MyLearningLayout({children}) {
    return (
        <SessionProvider>
            
                {children}
            
        </SessionProvider>
    )
}