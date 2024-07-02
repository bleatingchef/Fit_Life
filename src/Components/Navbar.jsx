import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between p-4 mx-4 my-2 rounded-full border border-white mt-10 mr-20 ml-20 ">
      <div className="flex items-center">
        <div className="flex items-center justify-center h-12 w-12 rounded-full ">
          <img class="object-fill h-16 w-40 ... ml-10" src={logo} alt="" />
        </div>
      </div>
      <div className="flex space-x-4 z-index-1">
        <Link to='/' className="text-teal-500 text-2xl hover:text-teal-300 m-5">Home</Link>
        <Link to='/class' className="hover:text-teal-300 text-2xl m-5">Class</Link>
        <Link to='/Membership' className="hover:text-teal-300 text-2xl m-5">Memberships</Link>
        <Link to='/Gallery' className="hover:text-teal-300 text-2xl m-5">Gallery</Link>
        <Link to='/Contact' className="hover:text-teal-300 text-2xl m-5">Contact</Link>
      </div>
      <button className="bg-teal-500 text-black text-2xl px-4 py-2 rounded-full hover:bg-teal-400 mr-5">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
