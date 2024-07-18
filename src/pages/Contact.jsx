import React, { useState } from 'react';
import axios from 'axios';
import Contact_head from '../Components/Contact_head';
import '../index.css';
import map from '../assets/googlemap.png';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    comment: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/form/contact`, form);
      toast.success("Form submitted successfully");
      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        comment: ""
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className='mb-10 '>
      <ToastContainer />
      <Contact_head />
      <div className='flex flex-col items-center mt-20'>
        <div className='flex flex-col md:flex-row items-start'>
          <div className='p-10 w-full h-full mr-9 bg-black text-white rounded-3xl border-2 border-teal-400'>
            <form className='space-y-8' onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className='w-full px-3 py-2 bg-input-rgba border-2 border-teal-400 rounded-md text-white focus:outline-none focus:ring-4 focus:ring-teal-500'
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Ph. Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-2 bg-input-rgba border-2 border-teal-400 rounded-md text-white focus:outline-none focus:ring-4 focus:ring-teal-500'
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Mail"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className='w-full px-4 py-2 bg-input-rgba border-2 border-teal-400 rounded-md text-white focus:outline-none focus:ring-4 focus:ring-teal-500'
                />
              </div>
              <div>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className='w-full px-4 py-2 bg-input-rgba border border-2-teal-400 rounded-md text-white focus:outline-none focus:ring-4 focus:ring-teal-500'>
                  <option value="">Select Services</option>
                  <option value="Select Services 1">Select Services 1</option>
                  <option value="Select Services 2">Select Services 2</option>
                  <option value="Select Services 3">Select Services 3</option>
                  <option value="Select Services 4">Select Services 4</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Leave a comment here"
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
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
