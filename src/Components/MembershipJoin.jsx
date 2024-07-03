import React from 'react';
import rect from '../assets/rect16.png';

const MembershipJoin = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white pb-20 relative">
      <div className="relative w-full pl-20 pr-20">
        <img src={rect} alt="" className="w-full rounded-lg mt-" />
        <div className="absolute inset-0 flex items-center justify-between p-8">
          <div className="flex flex-col items-start">
            <h2 className="text-7xl font-bold mb-4 pl-32 text-teal-400 mt-20">JOIN WITH US</h2>
            <p className="text-2xl max-w-2xl mb-6 text-teal-400 text-left pl-32">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
          </div>
          <div className="flex items-center border-2 border-white-500 p-2 mr-40 rounded-full mt-24">
            <input 
              type="email" 
              placeholder="Email..." 
              className="bg-transparent outline-none text-white px-4 py-2"
            />
            <button className="bg-teal-400 text-black rounded-full px-8 py-5 ml-32">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipJoin;
