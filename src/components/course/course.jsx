import React, { useState } from 'react'
import Cards from '../card/cards'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios'

const course = () => {

   const [booksData, setBookData] = useState([]);

     const [genreFilter, setGenreFilter] = useState("");
     const [authorFilter, setAuthorFilter] = useState("");
     const [ratingFilter, setRatingFilter] = useState("");

  
    const bookData = booksData.filter((book) => {
    const matchGenre = genreFilter ? book.genre === genreFilter : true;
    const matchAuthor = authorFilter ? book.author === authorFilter : true;
    const matchRating = ratingFilter ? book.rating.toString() === ratingFilter : true;
    return matchGenre && matchAuthor && matchRating;

  });

 

  useEffect(() => {

     const getAllBooksData = async () => {
      try {
        
        const response = await axios.get("http://localhost:3000/api/books");
        console.log('allBooksData:', response.data)
        setBookData(response.data)

      } catch (error) {
        console.log(error.message)
      }
     }
      getAllBooksData();

  }, []);


  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-gray-100'>

        {/* <div className='mt-32 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>
                We're delighted to have you 
                 <span className='text-pink-500'> Here! :)</span>
            </h1>
            <p className='mt-12'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus veniam obcaecati quam porro sequi unde reiciendis, itaque, fugiat quod nihil cupiditate, id earum? Voluptas vero, accusamus itaque voluptatem, doloremque consequatur perspiciatis culpa sit reprehenderit, omnis adipisci odit doloribus voluptatum earum magni consectetur optio. Corporis deserunt iusto ipsa expedita odit!
            </p>
            <Link to={"/"}><button className=' mt-6 bg-pink-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
        </div> */}

        <div className='header-content flex flex-c items-center justify-center gap-8 text-center text-white mt-23'>
          <h1 className='header-title text-capitalize'>Find your book of choice.</h1>
          <p className='header-text fs-18 p-1.5'>Welcome to your one-stop destination for all kinds of books — from academic resources to thrilling novels, inspiring biographies to timeless classics. Whether you're a student, a curious mind, or just looking to unwind with a good story, we’ve got something for everyone.</p>

          <Link to={"/"}><button className=' bg-[#7A0177] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-[#C51B8A] duration-300'>Back</button></Link>
        </div>


        <div className='mt-12 flex justify-between'>
         <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)} className=" select select-md font-semibold ">
          <option value="">Genre</option>
          <option>Poetry</option>
          <option>Mystery</option>
          <option>Romantic</option>
          <option>Fantasy</option>
          <option>Adventure</option>
          <option>Technology</option>
          <option>Horror</option>
        </select>

        <select value={authorFilter} onChange={(e) => setAuthorFilter(e.target.value)} className="select select-md font-semibold">
          <option value="">Author</option>
          <option>Jane Austen</option>
          <option>J.D. Salinger</option>
          <option>J.K. Rowling</option>
          <option>Chetan Bhagat</option>
          <option>Khaled Hosseini</option>
        </select>

         <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)} className="select select-md font-semibold">
          <option value="">Rating</option>
          <option>3.5</option>
          <option>3.2</option>
          <option>4.9</option>
          <option>4.5</option>
          <option>4.2</option>
          <option>3.8</option>
          <option>4.2</option>
          <option>3.0</option>
        </select>
        </div>

        <button onClick={() => {
             setGenreFilter('');
               setAuthorFilter('');
                 setRatingFilter('');
                  }} className=' mt-6 bg-pink-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Reset Filters</button>

                 <div className="dropdown dropdown-right ml-3.5">
                    <div tabIndex={0} role="button" className=" px-4 py-2 m-1 hover:bg-black-700 duration-300 rounded-md text-white bg-[#2e2d2d] cursor-pointer">User details</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-70 p-2 shadow-sm">
                     <Link to={"/borrowed"}><li><a>Currently Borrowed Books</a></li></Link> 
                     <Link to={"/history"}><li><a>Full Borrow History</a></li></Link>
                     <Link to={"/overDue"}><li><a>Overdue Books</a></li></Link>
                     </ul>
                </div>

        {/* <div className='mt-12 ml-2 grid grid-cols-1 md:grid-cols-3 gap-12'>
            {list.map((item) => (
                <Cards key={item.id} item={item}/>
            ))}
        </div> */}

        <div className='py-3 mt-10 p-4'>
         <h1 className='text-3xl font-semibold underline'>All Books</h1>
        </div>

         <div className='mt-2 grid grid-cols-1 md:grid-cols-3 gap-8'>
          
          {bookData.length > 0 ? (
            bookData.map((item) => <Cards key={item.id} item={item} />)
          ) : (
            <p className='text-center col-span-3 text-red-500 font-bold text-xl'>No Books Found</p>
          )}
        </div>
    </div>
  </>
  );
};

export default course;
