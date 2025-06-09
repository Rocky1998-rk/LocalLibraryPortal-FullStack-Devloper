import React from 'react'
import Home from '../src/home/home'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Courses from '../src/courses/courses'
import Signup from './components/signup/signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './components/contextApi/contextApi'
import About from './about/about'
import Contact from './contact/contact'

const App = () => {
 const [authUser,setAuthUser] = useAuth();
 console.log(authUser)

  return (
    <>
    <Toaster position='top-right'/>
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser ? <Courses/> : <Navigate to="/signup"/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
   </BrowserRouter>
    </>
  )
}

export default App