import React from 'react'
import { useForm } from "react-hook-form";

const cards = ({item}) => {
    

  return (
    <>
        <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-92 shadow-lg transition-transform duration-300 hover:scale-103">
       <figure>
      <img src={item.image} alt="image" />
      </figure>
      <div className="card-body">
     <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">★ {item.rating}</div>
      </h2>
      <p>{item.title}</p>

      <div className='flex items-center'>
      <p className='font-semibold text-emerald-700'>{item.genre}</p>
      <p className='font-bold text-gray-500 ml-30'>{item.author}</p>
      </div>

       <div className="card-actions justify-between mt-2.5">
      {/* <div className="badge badge-outline p-3.5">{item.price}</div> */}
      <div className="badge badge-outline p-4 cursor-pointer text-md font-semibold text-gray-600 hover:bg-pink-500 hover:text-white duration-200 ">Borrow Book</div>
     </div>
   </div>
</div>
        </div>
   </>
  )
}

export default cards