import React from 'react'
import Navbar from '../components/navbar/navbar'
import Contact from '../components/contact/contact'
import Footer from '../components/footer/footer'

const contact = () => {
  return (
    <>
    <Navbar/>
      <div className='min-h-screen'>
       <Contact/>
      </div>
      <Footer/>
    </>
  
  )
}

export default contact
