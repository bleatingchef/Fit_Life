import React from 'react';
import Contact_head from '../Components/Contact_head';
import '../index.css'
import map from '../assets/googlemap.png'

function Contact() {
  return (
    <div className='mb-10 '>
      <Contact_head />
      <div className='flex flex-col items-center mt-20'>
        <div className='flex flex-col md:flex-row items-start'>
          <div className='p-10 w-full h-full mr-9 bg-black text-white rounded-3xl border-2 border-teal-400'>
            <form className='space-y-8'>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className='w-full px-3 py-2 bg-input-rgba border-2 border-teal-400 rounded-md text-white focus:outline-none focus:ring-4 focus:ring-teal-500'
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Ph. Number"
                  className='w-full px-4 py-2 bg-input-rgba border-2 border-teal-400 rounded-md text-white focus:outline-none focus:ring-4 focus:ring-teal-500'
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Mail"
                  className='w-full px-4 py-2 bg-input-rgba border-2 border-teal-400 rounded-md text-white focus:outline-none focus:ring-4 focus:ring-teal-500'
                />
              </div>
              <div>
                <select
                  className='w-full px-4 py-2 bg-input-rgba border border-2-teal-400 rounded-md text-white focus:outline-none focus:ring-4 focus:ring-teal-500'>
                  <option>Select Services 1</option>
                  <option>Select Services 2</option>
                  <option>Select Services 3</option>
                  <option>Select Services 4</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Leave a comment here"
                  className='w-full px-4 py-4 bg-input-rgba border-2 border-teal-400 rounded-md text-white focus:outline-none focus:ring-4 focus:ring-teal-500 h-32 resize-none'>
                </textarea>
              </div>
              <div className='flex justify-center'>
                <button
                  type="submit"
                  className='px-6 py-2 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full text-black hover:from-teal-500 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500'>
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
          <div className='md:ml-10 pr-32 text-white'>
            <p className='text-xl'>A-52, Som Bazar Chowk, Vikas Nagar Uttam Nagar, New Delhi-59 (INDIA)</p>
            <hr className='my-4 border-white-400' />
            <p className='text-xl'>info@markletechandmedia.com</p>
            <p className='text-xl'>markletechandmedia@gmail.com</p>
            <p className='text-xl'>+91-798-233-2070 / +91-767-810-2159</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-20 mb-20'> 

       <img src={map} className='max-w-full h-full' alt="Result" />
      
      </div>
    </div>
  );
}

export default Contact;
