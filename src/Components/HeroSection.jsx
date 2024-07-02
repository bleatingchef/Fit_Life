// src/components/HeroSection.js
import React from 'react';
import subimg from '../assets/Subtract.png';
// import playButtonImg from '../assets/play-btn.png';  // Add a play button image to your assets

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
      ></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">STRONG MIND, STRONG LIFE</h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-500 mt-4">STRONG BODY</h2>
        <p className="text-cyan-500 mt-2">50+ BRANCHES</p>
        <div className="relative mt-8">
          <img src={subimg} alt="Video preview" className="w-full rounded-lg shadow-lg" />
          {/* <img
            src={playButtonImg}
            alt="Play button"
            className="absolute inset-0 m-auto w-16 h-16 opacity-80"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
