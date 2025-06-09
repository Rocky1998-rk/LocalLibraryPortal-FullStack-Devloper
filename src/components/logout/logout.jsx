import React from 'react'
import { useAuth } from '../contextApi/contextApi'
import toast from 'react-hot-toast'

const logout = () => {
    const [authUser, setAuthUser] = useAuth()

    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                UserDetails:null
            })
            localStorage.removeItem("UserDetails")
            toast.success("Logout Successfully");

            setTimeout(() => {
             window.location.reload();
           }, 1000)

        } catch (error) {
            toast.error("Error;" + error) 
            setTimeout(() => {}, 2000) 
        }
    };

  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default logout
