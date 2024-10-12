"use client"
import {SnackbarProvider} from 'notistack'

const AuthLayout = ({children}) => {
    return (
        <SnackbarProvider>{children}</SnackbarProvider>
    )
}

export default AuthLayout