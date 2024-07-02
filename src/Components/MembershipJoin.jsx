import React from 'react';
import rect from '../assets/rect16.png';

const MembershipJoin = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white py-12 relative">
      {/* <h1 className="text-7xl font-bold mb-6 text-teal-400 ">Join Our Membership</h1> */}
      <div className="relative w-full max-w-6xl">
        <img src={rect} alt="" className="w-full rounded-lg mt-20" />
        <div className="absolute inset-0 flex items-center justify-between p-8">
          <div className="flex flex-col items-start">
            <h2 className="text-5xl font-bold mb-4 text-teal-400 mt-20">JOIN WITH US</h2>
            <p className="text-2xl max-w-2xl mb-6 text-teal-400 text-left">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
          </div>
          <div className="flex items-center border-2 border-white-500 p-2 rounded-full mt-24">
            <input 
              type="email" 
              placeholder="Email..." 
              className="bg-transparent outline-none text-white px-4 py-2"
            />
            <button className="bg-teal-400 text-black rounded-full px-8 py-3 ml-2">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipJoin;
