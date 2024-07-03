import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between p-4 mx-4 my-2 rounded-full border border-white  top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <div className="flex items-center justify-center h-12 w-12 rounded-full">
          <img className="object-fill h-16 w-40 ml-10" src={logo} alt="" />
        </div>
      </div>
      <div className="flex space-x-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "text-teal-500 text-2xl m-5" : "hover:text-teal-300 text-2xl m-5"}
        >
          Home
        </NavLink>
        <NavLink 
          to="/class" 
          className={({ isActive }) => isActive ? "text-teal-500 text-2xl m-5" : "hover:text-teal-300 text-2xl m-5"}
        >
          Class
        </NavLink>
        <NavLink 
          to="/membership" 
          className={({ isActive }) => isActive ? "text-teal-500 text-2xl m-5" : "hover:text-teal-300 text-2xl m-5"}
        >
          Memberships
        </NavLink>
        <NavLink 
          to="/gallery" 
          className={({ isActive }) => isActive ? "text-teal-500 text-2xl m-5" : "hover:text-teal-300 text-2xl m-5"}
        >
          Gallery
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "text-teal-500 text-2xl m-5" : "hover:text-teal-300 text-2xl m-5"}
        >
          Contact
        </NavLink>
      </div>
      <button className="bg-teal-500 text-black text-2xl px-4 py-2 rounded-full hover:bg-teal-400 mr-5">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
