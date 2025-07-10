import React from 'react'
import { Link } from 'react-router-dom'

const bookDetails = () => {
  return (
    <>
       <div className='p-7 bg-[#1e2939] text-white sticky top-0'>
         <h1 className='text-2xl font-semibold'>Library Portal</h1>
       </div>

       <div className='flex p-10'>

        <div className='w-[500px] h-[530px]'>
            <img src="https://johnatkinsonbooks.co.uk/wp-content/uploads/2018/07/BriefHistory.jpg" alt="" className='w-[100%] h-[100%] shadow-md'/>
        </div>

        <div className='w-[850px] h-[530px] pt-20 pl-8 flex flex-col gap-3 bg-[#ffc6c42a] shadow-md'>
            <h2 className='text-6xl font-semibold text-[#872CA2]'>A Brief History of Time</h2>
            <p className='text-3xl  text-[#2c2c2c]'>Written By : <span className='font-semibold text-gray-500'>Stephen Hawking</span></p>
            <p className='text-3xl  text-[#2c2c2c]'>Genre : <span className='font-semibold text-gray-500 '>Science</span></p>
            <span className='p-1 mt-1.5 text-md text-[#2171B5]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores doloribus dolore odit qui! Ullam natus accusamus reprehenderit id tenetur alias ipsa est dicta quaerat nihil eaque, vitae provident odio animi iusto voluptate ad fuga sint. Quas laborum sapiente iusto adipisci optio quasi amet, voluptatum excepturi, reiciendis repellat porro illum ex.</span>
            <div>
           <Link to={"/course"}><button className='w-[150px] mt-10 py-2 rounded-xl text-xl bg-[#f75409] text-white cursor-pointer'>Back</button></Link>
            </div>
        </div>

    </div>

    <div className='pl-20 pt-5'>
      <h2 className='text-2xl font-semibold uppercase'>Description</h2>
      <p className='pr-10 pt-5 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente totam, asperiores, eveniet ad sint provident impedit, accusantium ratione corporis beatae. Eius architecto alias deleniti, quos laborum accusamus sed, blanditiis voluptatibus tempore, recusandae vitae. Possimus dolor qui sunt non libero provident dolorem suscipit. Quod, quia tenetur porro quo delectus consequatur ex molestias? Sequi suscipit architecto nihil iste iure labore ullam doloribus voluptatibus, praesentium libero rem eos perferendis sint, est cupiditate perspiciatis quisquam quos molestias eligendi voluptatum et. Fugiat cupiditate repudiandae ab omnis facere, molestiae culpa corporis voluptatum aspernatur deleniti ea et asperiores impedit quod error saepe esse sunt, totam officia similique optio a aut natus nostrum! Iure, provident, explicabo dolores neque non atque hic nobis saepe veniam necessitatibus, nesciunt ipsam dolorum voluptatem cum? Repudiandae doloremque ratione voluptas veritatis voluptates optio, vero exercitationem. Aspernatur magnam dicta eos beatae voluptate soluta facilis. Praesentium, amet corrupti cum unde labore et molestias voluptatem aliquam? Earum sequi illum eveniet aspernatur asperiores, vitae explicabo quisquam tempore, rerum mollitia placeat dicta quaerat repellat, dolores accusamus. At sint tempora, incidunt numquam animi similique possimus magnam architecto aliquam harum excepturi blanditiis nostrum aperiam adipisci consectetur vel consequuntur! Earum minima asperiores ducimus quaerat mollitia ex ea ratione repellendus molestias iure.</p>
    </div>

    <div className='pl-20 pt-10'>
       <form className='flex flex-col gap-3'>
          <h2 className='text-2xl font-semibold pb-5'>Add Review</h2>
          <textarea className="w-[600px] h-[300px] rounded-lg bg-[#e0dddd] shadow-sm  resize-none p-3 focus:outline-none " placeholder=" Typing..." type='text'/>
          <button type='submit' className='w-[100px] py-1.5 border rounded-2xl bg-[#E45908] font-semibold text-[white] cursor-pointer'>Submit</button>
    
          </form>
    </div>


      <div className='w-[100%] h-auto flex flex-col pl-20 mt-8'>
          <h2 className='text-xl font-semibold mb-4 underline'>Show Review</h2>
    
          <div className='flex gap-2.5'>
            <p className='text-md font-semibold'>Mukesh Singh</p>
          </div>
    
            <span className='w-auto mb-8 shadow-md rounded-2xl'>
              <p className='p-7 text-lg text-emerald-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis provident optio magnam vero, qui hic aliquam. Quibusdam, neque! Non blanditiis quasi eaque itaque fugit ab repellat unde fuga? Omnis molestias ducimus ipsum amet quisquam perferendis, facilis.</p>
            </span>
    
            {/* <div className='flex items-center gap-2  pl-[50px] pt-0.5'>
            <AiFillLike className=' cursor-pointer'/>
            <p>2</p>
            <AiFillDislike  className=' cursor-pointer'/>
            <p>5</p>
            </div> */}
    
         </div>
    
    </>
  )
}

export default bookDetails
