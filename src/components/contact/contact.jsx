
import React from 'react';

const contact = () => {
  return (

    <div className="max-w-4xl mx-auto px-6 py-16 mt-20 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
      <p className="text-gray-700 text-lg mb-8">
        Have questions, suggestions, or just want to say hello? We'd love to hear from you!
        Reach out to us using the form below or via our contact details.
      </p>

      <form className="max-w-md mx-auto text-left space-y-6">

        <div>
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Name</label>
          <input type="text" name="name" placeholder="Your name"  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required/>
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email</label>
          <input type="email" name="email" placeholder="Your email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required/>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">Message</label>
          <textarea name="message" rows="5" placeholder="Write your message here..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"required></textarea>
        </div>

        <button 
          type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">Send Message
        </button>

      </form>

      <div className="mt-12 max-w-md mx-auto text-gray-600 text-left space-y-3">
        <p><strong>Phone:</strong> +91 9368825518</p>
        <p><strong>Email:</strong> rkrockey9690@gmail.com</p>
        <p><strong>Address:</strong> 123 Book Street, Reading City, India</p>
      </div>
    </div>
    
  );
};

export default contact;
