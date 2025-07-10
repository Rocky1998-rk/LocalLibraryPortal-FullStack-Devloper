import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const cards = ({item}) => {


  const handleBorrow = async (bookId) => {

    const user = JSON.parse(localStorage.getItem("UserDetails"));
    if (!user) {
      toast.error("Please login first.");
      return;
    }
    console.log("User ID:", user?._id);
    console.log("Book ID:", bookId);
    try {

       const response = await axios.post("http://localhost:3000/api/borrow", {
        userId: user?.existingUser?._id,
        bookId: bookId,
      });
      console.log("borrowData:", response.data)

      toast.success(response.data.message); 
    } catch (error) {
      toast.error(error.response?.data?.message || "Borrow failed");
    }
  };
    
  return (
    <>
        <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-200 w-92 shadow-md shadow-[#d6d5d5] transition-transform duration-500 hover:scale-103 relative">

       <Link to={"/bookDetails"}><span className='w-[104px] py-1 rounded-md flex items-center justify-center absolute   top-2 left-2 bg-[#112b79c1]  text-white cursor-pointer'>Book Details</span></Link> 

       <figure>
       <img src={item.image} alt="image"/>
       </figure>

      <div className="card-body">
       <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">★ {item.rating}</div>
      </h2>
      <p>{item.title}</p>

      <div className='flex items-center justify-between'>
      <p className='font-semibold text-emerald-900'>📚{item.genre}</p>
      <p className=' text-[15px] font-bold text-orange-500 ml-10'> <span>✍️</span>{item.author}</p>
      </div>

       <div className="card-actions items-center justify-between mt-2.5">
      <div className="badge badge-outline p-3.5 bg-emerald-500 text-white font-semibold">{item.price}</div>
      <button onClick={() => handleBorrow(item._id)} className="badge badge-outline p-4 cursor-pointer text-md font-semibold text-gray-600 hover:bg-pink-500 hover:text-white">Borrow Book</button>
     </div>
   </div>
</div>
        </div>
   </>
  )
}

export default cards