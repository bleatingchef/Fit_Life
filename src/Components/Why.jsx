import React from 'react';
import whyimg from '../assets/why1.png'; // Make sure to replace this with the correct path to your image

const Why = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white py-12 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 text-teal-400 text-center">
        WHY JOIN THE GYM?
      </h1>
      <p className="text-center mb-8 text-lg sm:text-xl lg:text-2xl max-w-4xl">
        If You're Looking To Join A Supportive, Welcoming Gym Community, With People Of All Fitness Levels Who Want To See You Succeed, You've Come To The Right Place.
      </p>
      <div className="w-full max-w-4xl">
        <img src={whyimg} alt="Gym Community" className="w-full rounded-lg shadow-lg border-4 border-blue-500" />
      </div>
    </div>
  );
};

export default Why;
