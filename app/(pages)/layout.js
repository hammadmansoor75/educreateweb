"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

const PagesLayout = ({children}) => {
  return (
    <div>
      <SessionProvider>
      <Navbar/>
      {children}
      <Footer/>
      </SessionProvider>
    </div>
  )
}

export default PagesLayout
