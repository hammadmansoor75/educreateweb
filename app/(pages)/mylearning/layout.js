"use client"
import {SnackbarProvider} from 'notistack'

export default function MyLearningLayout({children}) {
    return (
        <SnackbarProvider>{children}</SnackbarProvider>
    )
}