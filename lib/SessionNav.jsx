"use client"
import React from 'react'
import {SessionProvider} from 'next-auth/react'
import Navbar from '@/components/Navbar'

function SessionNav() {
  return (
   <SessionProvider>
        <Navbar/>
   </SessionProvider>
  )
}

export default SessionNav;


