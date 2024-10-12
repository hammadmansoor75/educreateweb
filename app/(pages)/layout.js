import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SessionNav from '@/lib/SessionNav'
import React from 'react'


const PagesLayout = ({children}) => {
  return (
    <div>
        <SessionNav/>
          {children}
        <Footer/>
    </div>
  )
}

export default PagesLayout
