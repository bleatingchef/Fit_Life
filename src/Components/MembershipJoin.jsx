import React from 'react';
import rect from '../assets/rect16.png';

const MembershipJoin = () => {
  return (
    <div className="text-white py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8">
      <div className="relative w-full max-w-7xl mx-auto">
        <img src={rect} alt="Membership" className="w-full rounded-lg object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 text-cyan-400">
              JOIN WITH US
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-4 text-cyan-400">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            </p>
          </div>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            <div className="flex flex-col items-center">
              <input 
                type="email" 
                placeholder="Email..." 
                className="w-full bg-gray-800 bg-opacity-75 outline-none text-white px-4 py-2 mb-2 rounded-full"
              />
              <button className="w-full bg-cyan-400 text-black font-semibold rounded-full px-6 py-2">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipJoin;
