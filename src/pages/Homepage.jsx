import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import RightSidebar from '../components/RightSidebar'

const Homepage = () => {

  
  return (
      <div className=" relative bg-[#0A0B0A]  min-h-screen overflow-x-hidden ">
      <div className='mt-[-50px] md:mt-0 '><Navbar /></div>
      <div className='mb-[-60px] md:mb-0  '><HeroSection /></div>
      <RightSidebar />
    </div> 
  )
}

export default Homepage
