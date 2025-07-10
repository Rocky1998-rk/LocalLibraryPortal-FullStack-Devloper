
import React from 'react';



const about = () => {

  return (
    <div className='max-w-5xl mx-auto px-6 py-12 mt-20'>
      <h1 className='text-3xl md:text-5xl font-bold text-center text-emerald-600'>About Our Library Portal</h1>
      <p className='mt-6 text-gray-600 text-lg text-center'>
        Welcome to <span className='text-pink-500 font-semibold'>BookVerse</span> – your personal online book library.
        Our mission is to make reading easy, engaging, and accessible for everyone. Whether you're here to explore new titles or borrow your next favorite book, you're at the right place!
      </p>

      <h2 className='mt-10 text-2xl font-semibold text-emerald-500'>Key Features:</h2>
      <ul className='list-disc list-inside mt-3 text-gray-700 text-lg'>
        <li>Discover books by genre, rating, and authors</li>
        <li>Borrow books with one click</li>
        <li>Review and rate the books you love</li>
        <li>Track your borrowed books & history</li>
      </ul>

      <h2 className='mt-10 text-2xl font-semibold text-emerald-500'>Why Choose Us?</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="p-4 bg-pink-50 rounded-lg shadow transition-transform duration-300 hover:scale-104">
          <h4 className="font-semibold text-pink-600">Vast Collection</h4>
          <p>Find books from multiple genres and languages at your fingertips.</p>
        </div>
        <div className="p-4 bg-pink-50 rounded-lg shadow transition-transform duration-300 hover:scale-104">
          <h4 className="font-semibold text-pink-600">Simple UI</h4>
          <p>Our clean and responsive interface makes browsing and borrowing books a breeze.</p>
        </div>
        <div className="p-4 bg-pink-50 rounded-lg shadow transition-transform duration-300 hover:scale-104">
          <h4 className="font-semibold text-pink-600">Trusted Platform</h4>
          <p>Built using secure technology to keep your data safe.</p>
        </div>
        <div className="p-4 bg-pink-50 rounded-lg shadow transition-transform duration-300 hover:scale-104">
          <h4 className="font-semibold text-pink-600">Built with</h4>
          <p>Created by book lovers, for book lovers.</p>
        </div>
      </div>
    </div>

  );
};

export default about;







