import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClasses = ({ isActive }) => 
    `block py-2 px-4 ${isActive ? "text-teal-500" : "text-white hover:text-teal-300"} text-center text-base sm:text-lg md:text-xl transition-colors duration-300`;

  return (
    <nav className="bg-black overflow-hidden text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-8 w-auto sm:h-10 md:h-12" src={logo} alt="Logo" />
          </div>

          {/* Hamburger menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/class" className={navLinkClasses}>Class</NavLink>
            <NavLink to="/membership" className={navLinkClasses}>Memberships</NavLink>
            <NavLink to="/gallery" className={navLinkClasses}>Gallery</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
            <button className="bg-teal-500 text-black text-sm px-3 py-1 rounded-full hover:bg-teal-400 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <NavLink to="/" className={navLinkClasses} onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/class" className={navLinkClasses} onClick={toggleMenu}>Class</NavLink>
            <NavLink to="/membership" className={navLinkClasses} onClick={toggleMenu}>Memberships</NavLink>
            <NavLink to="/gallery" className={navLinkClasses} onClick={toggleMenu}>Gallery</NavLink>
            <NavLink to="/contact" className={navLinkClasses} onClick={toggleMenu}>Contact</NavLink>
            <button className="w-full bg-teal-500 text-black text-base px-4 py-2 rounded-full hover:bg-teal-400 transition-colors duration-300 mt-4">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;