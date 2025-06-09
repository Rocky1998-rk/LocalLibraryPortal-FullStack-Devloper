import React from 'react'
import Navbar from '../components/navbar/navbar'
import About from '../components/about/about'
import Footer from '../components/footer/footer'

const about = () => {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
       <About/>
      </div>
      <Footer/>
    </>
  
  )
}

export default about
