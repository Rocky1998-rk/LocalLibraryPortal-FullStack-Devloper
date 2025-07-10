import React from 'react'
import Login from '../login/login';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"; 
import axios from 'axios'
import toast from 'react-hot-toast'

const signup = () => {
  const { register, handleSubmit, formState: { errors },  reset } = useForm();

  //   const [userData, setUserData] = useState({

  //   name:'',
  //   email:'',
  //   password:'',

  // })

  
  // const handleChangeData = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({...userData, [name]: value });
  // }

      const navigate = useNavigate();

       const handleUserData = async (userData) => {
        console.log("user", userData)
         try {
          const response = await axios.post("https://libraryserver-2.onrender.com/api/signup", userData)
           console.log("userData", response.data)
           toast.success("SignUp Successfully")
            navigate('/')
            localStorage.setItem("UserDetails", JSON.stringify(response.data));
          reset(); 
         } catch (error) {
          console.log(error.message)
          toast.error("Cannot User data")
         }

      }

  return (
   
        //    <div className='flex items-center justify-center h-screen bg-neutral-300'>
        //    <div className="w-[400px] h-[484px] shadow-xl">
        //     <img src="/sign up.jpg" alt="" className='w-[100%] h-[100%] rounded-l-md'/>
        //     </div>
        //    <div className="relative rounded-r-md shadow-xl p-11 bg-neutral-100">

        //    <Link to={"/"}><button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2"> ✕ </button></Link>
        //    <form onSubmit={ handleSubmit(handleUserData)}>
        //      <h3 className="font-bold text-xl text-blue-500">Signup</h3>

        //      <div className='mt-4 space-y-2 relative mb-5'>
        //      <label htmlFor='name' className='text-lg font-semibold text-gray-600'>Name</label><br/>
        //      <input type="text" name='name'  placeholder='Enter your name' className='w-90 px-3 py-2 border border-gray-300 rounded-md outline-none'
        //      {...register("name", { required: true })}
        //      />
        //      <br/>

        //      {errors.name && <span className='text-sm font-semibold text-red-500 absolute top-[73px]'>This field is required</span>}

        //     </div>

        //     <div className='mt-4 space-y-2 relative mb-5'>
        //      <label htmlFor='email' className='text-lg font-semibold text-gray-600'>Email Address</label><br/>
        //      <input type="email"  name='email' placeholder='Enter your email' className='w-90 px-3 py-2 border border-gray-300 rounded-md outline-none'
        //      {...register("email", { required: true })}
        //      />
        //      <br/>
        //      {errors.email && <span className='text-sm font-semibold text-red-500 absolute top-[73px]'>This field is required</span>}
        //     </div>
     
        //     <div className='mt-4 space-y-2 relative mb-5'>
        //      <label htmlFor='password' className='text-lg font-semibold text-gray-600'>Password</label><br/>
        //      <input type="password" name='password'  placeholder='Enter your password' className='w-90 px-3 py-2 border border-gray-300 rounded-md outline-none'
        //      {...register("password", { required: true })}
        //      />
        //      <br/>
        //      {errors.password && <span className='text-sm font-semibold text-red-500 absolute top-[73px]'>This field is required</span>}
        //     </div>
     
        //     <div className='flex items-center justify-between mt-10 '>
        //      <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200'>Signup</button>
        //      <p className='ml-20'>Have Account?{" "}
        //          <button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}> Login
        //           </button>{" "}
        //     </p>
        //       <Login/>
        //     </div>
        //      </form>
        //   </div>
        // </div>


        <div className="min-h-screen flex items-center justify-center bg-neutral-300">
        <div className="flex flex-col md:flex-row items-center md:items-start shadow-xl rounded-md overflow-hidden max-w-4xl w-full">
    
    {/* Image Section */}
    <div className="w-full md:w-[400px] h-[300px] md:h-[484px]">
      <img
        src="/sign up.jpg"
        alt="Signup"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Form Section */}
    <div className="relative w-full md:w-[495px] h-[484px] p-8 md:p-11 bg-neutral-100">
      <Link to={"/"}>
        <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </Link>

      <form onSubmit={handleSubmit(handleUserData)}>
        <h3 className="font-bold text-xl text-blue-500">Signup</h3>

        {/* Name Field */}
        <div className="mt-4 mb-5 space-y-1 relative">
          <label htmlFor="name" className="text-lg font-semibold text-gray-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-sm font-semibold text-red-500 absolute top-full mt-1">
              This field is required
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className="mt-4 mb-5 space-y-1 relative">
          <label htmlFor="email" className="text-lg font-semibold text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm font-semibold text-red-500 absolute top-full mt-1">
              This field is required
            </span>
          )}
        </div>

        {/* Password Field */}
        <div className="mt-4 mb-5 space-y-1 relative">
          <label htmlFor="password" className="text-lg font-semibold text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-sm font-semibold text-red-500 absolute top-full mt-1">
              This field is required
            </span>
          )}
        </div>

        {/* Submit & Login */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 space-y-4 md:space-y-0">
          <button
            type="submit"
            className="bg-pink-500 text-white rounded-md px-5 py-2 hover:bg-pink-700 duration-200 w-full md:w-auto"
          >
            Signup
          </button>

          <p className="text-center md:ml-4 text-sm">
            Have Account?{" "}
            <button
              type="button"
              className="underline text-blue-500 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
          </p>
        </div>

        <Login />
      </form>
    </div>
  </div>
</div>

   
  );
};

export default signup;
