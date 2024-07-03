import React from 'react'
import pic1 from '../assets/mainPic.png'

const Header = () => {
  return (
    <div><div className="bg-black text-white flex flex-col justify-between p-8">
    {/* Top section */}
    <div className="flex justify-between items-center">
      <div className="max-w-xl">
        <h1 className="text-8xl pl-40 font-bold mb-3">RESULTS,</h1>
        <h2 className="text-6xl pl-40 font-bold text-cyan-400 mb-6">NOT EXCUSES</h2>
        <button className="bg-cyan-400 text-black font-bold py-3 px-20 ml-40 rounded-full text-xl hover:bg-cyan-300 transition-colors">
          Get Started
        </button>
      </div>
      <div className="w-full relative">
        <img
          src={pic1}
          alt="Muscular person lifting weights"
          className="h-full w-full object-center rounded-lg"
        />
      </div>
    </div>

    {/* Bottom section */}
    <div className="text-center mt-16">
      <h3 className="text-6xl pl-30 font-bold mb-3 text-cyan-400">CLASSES THE GYM</h3>
      <p className="text-4xl  mb-3">
        Take Care Of Your Body.It's The Only Place <br /> You Have To Live.
      </p>
    </div>
  </div></div>
  )
}

export default Header