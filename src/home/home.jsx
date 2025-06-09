import React from 'react'
import Navbar from '../../src/components/navbar/navbar'
import Banner from '../../src/components/banner/banner'
import FreeBook from '../../src/components/Books/freeBooks'
import Footer from '../../src/components/footer/footer'

const home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <FreeBook/>
        <Footer/>
        
    </>
  )
}

export default home