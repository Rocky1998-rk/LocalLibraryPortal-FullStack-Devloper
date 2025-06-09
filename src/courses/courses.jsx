import React from 'react'
import Navbar from '../components/navbar/navbar'
import Course from '../components/course/course'
import Footer from '../components/footer/footer'

const courses = () => {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
       <Course/>
      </div>
      <Footer/>
    </>
  )
}

export default courses;
