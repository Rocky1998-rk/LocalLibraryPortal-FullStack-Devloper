import React, { useEffect, useState } from "react";
import axios from "axios";

const OverdueBooks = () => {

   const [overdue, setOverdue] = useState([]);
   console.log(overdue)

   useEffect(() => {

    const getOverDue = async () => {
        try {
           const response = await axios.get("http://localhost:3000/api/overdue")
           console.log("OverDueData:", response.data)
           setOverdue(response.data.overdueBooks)
        } catch (error) {
         console.log("Failed to fetch overdue books:", error.message)
        }
        
    }
    getOverDue();
     
  }, []);



  return (

    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Overdue Books</h2>
      {overdue.length === 0 ? (
        <p>No overdue books.</p>
      ) : (
        <ul className="space-y-2">
          {overdue.map((entry) => (
            <li key={entry._id} className="border p-3 rounded">
              <strong>{entry.bookId.name}</strong> <br />
              Borrowed By: {entry.userId.name || entry.userId.email} <br />
              Due On: <span className="text-red-600">{new Date(entry.dueDate).toDateString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OverdueBooks;
