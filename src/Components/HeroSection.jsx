import React from 'react';
import subimg from '../assets/Subtract.png';
// import playButtonImg from '../assets/play-btn.png';  // Add a play button image to your assets

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-start bg-black px-4 pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
      ></div>
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
          STRONG MIND, STRONG LIFE
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cyan-500 mt-2 sm:mt-4">
          STRONG BODY
        </h2>
        <p className="text-cyan-500 mt-2 text-sm sm:text-base md:text-lg">50+ BRANCHES</p>
        <div className="relative mt-6 sm:mt-8 md:mt-10">
          <img 
            src={subimg} 
            alt="Video preview" 
            className="w-full rounded-lg shadow-lg"
          />
          {/* Uncomment and adjust if you want to include a play button */}
          {/* <img
            src={playButtonImg}
            alt="Play button"
            className="absolute inset-0 m-auto w-12 h-12 sm:w-16 sm:h-16 opacity-80"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;