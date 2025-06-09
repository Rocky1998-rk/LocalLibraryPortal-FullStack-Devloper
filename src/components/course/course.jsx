import React, { useState } from 'react'
import list from '../../../public/list.json'
import Cards from '../card/cards'
import { Link } from 'react-router-dom'

const course = () => {
     const [genreFilter, setGenreFilter] = useState("");
     const [authorFilter, setAuthorFilter] = useState("");
     const [ratingFilter, setRatingFilter] = useState("");

  
    const filteredBooks = list.filter((book) => {
    const matchGenre = genreFilter ? book.genre === genreFilter : true;
    const matchAuthor = authorFilter ? book.author === authorFilter : true;
    const matchRating = ratingFilter ? book.rating.toString() === ratingFilter : true;
    return matchGenre && matchAuthor && matchRating;

  });
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-32 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>
                We're delighted to have you 
                 <span className='text-pink-500'> Here! :)</span>
            </h1>
            <p className='mt-12'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus veniam obcaecati quam porro sequi unde reiciendis, itaque, fugiat quod nihil cupiditate, id earum? Voluptas vero, accusamus itaque voluptatem, doloremque consequatur perspiciatis culpa sit reprehenderit, omnis adipisci odit doloribus voluptatum earum magni consectetur optio. Corporis deserunt iusto ipsa expedita odit!
            </p>
            <Link to={"/"}><button className=' mt-6 bg-pink-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
        </div>

        <div className='mt-12 flex justify-between'>

         <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)} className="select select-md">
          <option value="">Genre</option>
          <option>Poetry</option>
          <option>Mystery</option>
          <option>Romantic</option>
          <option>Fantasy</option>
          <option>Adventure</option>
          <option>Technology</option>
          <option>Horror</option>
        </select>

        <select value={authorFilter} onChange={(e) => setAuthorFilter(e.target.value)} className="select select-md">
          <option value="">Author</option>
          <option>Jane Austen</option>
          <option>J.D. Salinger</option>
          <option>J.K. Rowling</option>
          <option>Chetan Bhagat</option>
          <option>Khaled Hosseini</option>
        </select>

         <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)} className="select select-md">
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

        {/* <div className='mt-12 ml-2 grid grid-cols-1 md:grid-cols-3 gap-12'>
            {list.map((item) => (
                <Cards key={item.id} item={item}/>
            ))}
        </div> */}


         <div className='mt-12 ml-2 grid grid-cols-1 md:grid-cols-3 gap-12'>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((item) => <Cards key={item.id} item={item} />)
          ) : (
            <p className='text-center col-span-3 text-red-500 font-bold text-xl'>No Books Found</p>
          )}
        </div>
    </div>
    </>
  )
}

export default course
