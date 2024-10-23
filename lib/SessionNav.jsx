"use client"
import React from 'react'
import {SessionProvider} from 'next-auth/react'
import {ClerkProvider} from '@clerk/nextjs'
import Navbar from '@/components/Navbar'

function SessionNav() {
  return (
   <>
      <Navbar/>
   </>
  )
}

export default SessionNav;


