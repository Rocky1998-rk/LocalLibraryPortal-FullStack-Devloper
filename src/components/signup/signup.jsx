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
          const response = await axios.post("http://localhost:3000/api/signup", userData)
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
   
           <div className='flex h-screen items-center justify-center bg-neutral-300'>
           <div className="">
           <div className="relative rounded-md shadow-xl border-b-4 p-11 bg-neutral-100">

            <Link to={"/"}><button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2"> ✕ </button></Link>
           <form onSubmit={ handleSubmit(handleUserData)}>
             <h3 className="font-bold text-xl text-blue-500">Signup</h3>

             <div className='mt-4 space-y-2 relative mb-5'>
             <label htmlFor='name' className='text-lg font-semibold text-gray-600'>Name</label><br/>
             <input type="text" name='name'  placeholder='Enter your name' className='w-90 px-3 py-2 border border-gray-300 rounded-md outline-none'
             {...register("name", { required: true })}
             />
             <br/>

             {errors.name && <span className='text-sm font-semibold text-red-500 absolute top-[73px]'>This field is required</span>}

            </div>

            <div className='mt-4 space-y-2 relative mb-5'>
             <label htmlFor='email' className='text-lg font-semibold text-gray-600'>Email Address</label><br/>
             <input type="email"  name='email' placeholder='Enter your email' className='w-90 px-3 py-2 border border-gray-300 rounded-md outline-none'
             {...register("email", { required: true })}
             />
             <br/>
             {errors.email && <span className='text-sm font-semibold text-red-500 absolute top-[73px]'>This field is required</span>}
            </div>
     
            <div className='mt-4 space-y-2 relative mb-5'>
             <label htmlFor='password' className='text-lg font-semibold text-gray-600'>Password</label><br/>
             <input type="password" name='password'  placeholder='Enter your password' className='w-90 px-3 py-2 border border-gray-300 rounded-md outline-none'
             {...register("password", { required: true })}
             />
             <br/>
             {errors.password && <span className='text-sm font-semibold text-red-500 absolute top-[73px]'>This field is required</span>}
            </div>
     
            <div className='flex items-center justify-between mt-10 '>
             <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200'>Signup</button>
             <p className='ml-20'>Have Account?{" "}
                 <button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}> Login
                  </button>{" "}
            </p>
              <Login/>
            </div>
             </form>
          </div>
         </div>
        </div>
   
  );
};

export default signup;
