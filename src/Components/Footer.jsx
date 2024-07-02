import React from 'react';
import logo from '../assets/logo.png';

const AddressComponent = () => {
  return (
    <div className="flex items-center justify-center p-4 w-full h-24 bg-gray-800 rounded-full">
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center w-20 h-16 rounded-full bg-cyan-500">
          <svg
            className="w-16 h-20 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="text-cyan-500 text-xl font-bold">
          A, 52, SOM BAZAR RD, CHOWK, VIKAS NAGAR, UTTAM NAGAR, EAST, NEW DELHI, DELHI, 110059
        </span>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-black text-white pb-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-start">
          <div className="w-1/3">
            <div className="flex items-center mb-4">
              <img src={logo} alt="FitLife Logo" className="h-40 mr-2" />
            </div>
          </div>
          <AddressComponent />
        </div>
        <div className="flex">
        <p className="text-sm max-w-sm mr-48">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.
            </p>
          <div className="w-1/4">
            <h4 className="font-bold mb-4">COMPANY</h4>
            <ul>
              <li><a href="#" className="text-sm">Home</a></li>
              <li><a href="#" className="text-sm">Membership</a></li>
              <li><a href="#" className="text-sm">Trainers</a></li>
              <li><a href="#" className="text-sm">Class</a></li>
            </ul>
          </div>
          <div className="w-1/4">
            <h4 className="font-bold mb-4">CATEGORY</h4>
            <ul>
              <li><a href="#" className="text-sm">Straight Training</a></li>
              <li><a href="#" className="text-sm">Body Building</a></li>
              <li><a href="#" className="text-sm">Weight Loss</a></li>
              <li><a href="#" className="text-sm">Basic Yoga</a></li>
              <li><a href="#" className="text-sm">Physical Fitness</a></li>
            </ul>
          </div>
          <div className="w-1/4">
            <h4 className="font-bold mb-4">CONTACT US</h4>
            <ul>
              <li className="text-sm"><i className="fas fa-envelope mr-2"></i>info@markletechandmedia.com</li>
              <li className="text-sm"><i className="fas fa-globe mr-2"></i>www.markletechandmedia.com</li>
              <li className="text-sm"><i className="fas fa-phone-alt mr-2"></i>+91-798-233-2070</li>
              <li className="mt-4">
                <a href="#" className="text-sm mr-2"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-sm mr-2"><i className="fab fa-youtube"></i></a>
                <a href="#" className="text-sm"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-sm ml-2"><i className="fab fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-teal-600 text-center py-4 mt-8 rounded-2xl">
        <p className="text-lg text-black">COPYRIGHT © 2024 FITLIFE | POWERED BY MARKLETECHANDMEDIA.COM</p>
      </div>
    </div>
  );
};

export default Footer;