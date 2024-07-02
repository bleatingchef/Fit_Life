import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between p-4 mx-4 my-2 rounded-full border border-white mt-10 mr-20 ml-20">
      <div className="flex items-center">
        <div className="flex items-center justify-center h-12 w-12 rounded-full ">
          <img class="object-fill h-16 w-40 ... ml-10" src={logo} alt="" />
        </div>
      </div>
      <div className="flex space-x-4 ">
        <a href="#home" className="text-teal-500 text-2xl hover:text-teal-300 m-5">Home</a>
        <a href="#class" className="hover:text-teal-300 text-2xl m-5">Class</a>
        <a href="#membership" className="hover:text-teal-300 text-2xl m-5">Membership</a>
        <a href="#gallery" className="hover:text-teal-300 text-2xl m-5">Gallery</a>
        <a href="#contact" className="hover:text-teal-300 text-2xl m-5">Contact</a>
      </div>
      <button className="bg-teal-500 text-black text-2xl px-4 py-2 rounded-full hover:bg-teal-400 mr-5">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
