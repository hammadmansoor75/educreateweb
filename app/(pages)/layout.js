import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const PagesLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default PagesLayout
