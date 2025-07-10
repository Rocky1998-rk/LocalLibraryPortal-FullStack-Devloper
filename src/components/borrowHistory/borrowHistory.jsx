import React, { useEffect, useState } from "react";
import axios from "axios";

const BorrowHistory = () => {
  const [history, setHistory] = useState([]);

  const userData = JSON.parse(localStorage.getItem("UserDetails"));
  const userId = userData?.existingUser?._id || userData?._id;

  useEffect(() => {
    const getBorrowHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/history/${userId}`)
        console.log("BorrowHistory:", response.data)
        setHistory(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getBorrowHistory();
    
  }, [userId]);


  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold mb-4 text-blue-500">Borrow History</h2>
      {history.length === 0 ? (
        <p>No borrow history.</p>
      ) : (
        <ul className="space-y-2">
          {history.map((record) => (
            <li key={record._id} className="border p-3 rounded">
              <strong>Book Name: {record.bookId.name}</strong> - {record.bookId.genre} <br />
              Name: {record.userId.name} <br/>
              Price: {record.bookId.price} <br/>
              Borrowed Date: {new Date(record.borrowDate).toDateString()} <br />
              Returned Date:{" "}
              {record.returnDate ? (
                <span className="text-green-600">{new Date(record.returnDate).toDateString()}</span>
              ) : (
                <span className="text-yellow-600">Not returned</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BorrowHistory;
