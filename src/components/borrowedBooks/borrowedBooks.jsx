import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const borrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const userData = JSON.parse(localStorage.getItem("UserDetails"));
  const userId = userData?.existingUser?._id || userData?._id;




    const fetchBorrowed = async () => {
        try {
            const response = await axios.get(`https://libraryserver-2.onrender.com/api/borrowed/${userId}`)
            console.log('AllBorrowedData:', response.data)
            setBorrowedBooks(response.data.borrowedBooks)
        } catch (error) {
         console.log(error.message)
        }
       };

       useEffect(() => {
       fetchBorrowed();
       },[userId]);
  

      /////// Book Return Handler ////////
      const returnBook = async (borrowId) => {
      console.log("Sending to backend:", { userId, borrowId });

      try {
        await axios.post("https://libraryserver-2.onrender.com/api/returnBook", {userId , borrowId});      
        toast.success("Book returned Successfully!");
        fetchBorrowed(); // refresh the list
    } catch (error) {
        console.error(error.message);
        toast.error("Book already return");
    }
  };


  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold mb-4 text-blue-900">Currently Borrowed Books</h2>
      {borrowedBooks.length === 0 ? (
        <p>No book has been Borrowed.</p>
      ) : (
        <ul className="space-y-2">
          {borrowedBooks.map((borrow) => (
            <li key={borrow._id} className="border p-3 rounded flex justify-between items-center">
              <div>
                <strong>{borrow.bookId.name}</strong> - {borrow.bookId.genre} <br />
                Due on: <span className="text-red-500">{new Date(borrow.dueDate).toDateString()}</span>
              </div>
              <button
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                onClick={() => returnBook(borrow._id)}
              >
                Return
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default borrowedBooks;
