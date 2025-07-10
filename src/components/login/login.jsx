import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"; 
import axios from 'axios';
import toast from 'react-hot-toast';

const login = () => {


   const { register, handleSubmit, formState: { errors },  reset} = useForm();

        const handleUserData = async (userData) => {
        console.log("user", userData)
          
         try {
          const response = await axios.post("https://libraryserver-2.onrender.com/api/login", userData, {withCredentials: true});
           console.log("userData", response.data)
           toast.success("Login Successfully")
            document.getElementById("my_modal_3").close();
            setTimeout(() => {
             window.location.reload();
             localStorage.setItem("UserDetails", JSON.stringify(response.data));
           }, 1000)
            
          reset(); 
         } catch (error) {
          console.log("Login Error =>", error.response?.data || error.message);
          toast.error(error.response?.data?.message || "Login failed");
          setTimeout(() => {}, 2000)
         }

      }


  return (
    <div>
      <dialog id="my_modal_3" className="modal">
      <div className="modal-box p-10">
       <form method="dialog" onSubmit={handleSubmit(handleUserData)}>

        <button type="button" onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-md btn-circle btn-ghost absolute right-2 top-2"> ✕ </button>

        <h3 className="font-bold text-xl text-emerald-500">Login</h3>
       <div className='flex flex-col gap-4'>
       <div className='mt-4 space-y-2 relative'>
        <label htmlFor='email' className='text-lg font-semibold text-gray-600'>Email Address</label><br/>
        <input type="email"  placeholder='Enter your email' className='w-90 px-3 py-2 border border-gray-300 rounded-md outline-none'
        {...register("email", { required: true })}
        />
        <br/>
        {errors.email && <span className='text-sm font-semibold text-red-500 absolute top-[75px]'>This field is required</span>}
       </div>

       <div className='mt-4 space-y-2 relative'>
        <label htmlFor='password'className='text-lg font-semibold text-gray-600'>Password</label><br/>
        <input type="password"  placeholder='Enter your password' className='w-90 px-3 py-2 border border-gray-300 rounded-md outline-none'
        {...register("password", { required: true })}
        />
        <br/>
        {errors.password && <span className='text-sm font-semibold text-red-500 absolute top-[75px]'>This field is required</span>}
       </div>
        </div>

       <div className=' flex items-center justify-between mt-10 '>
        <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200'>Login</button>
        <p className='text-sm'>Not registered?{""}
            <Link to={"/signup"}><span className='underline text-blue-500 cursor-pointer'> Signup</span>{""}</Link>
            </p>
       </div>
     </form>
     </div>
    </dialog>
    </div>
  )
}

export default login
