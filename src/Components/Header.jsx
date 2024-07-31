import React from 'react'
import pic1 from '../assets/mainPic.png'

const Header = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-between p-4 sm:p-8">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="max-w-xl w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-3 text-center lg:text-left lg:pl-0 xl:pl-40">RESULTS,</h1>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-cyan-400 mb-6 text-center lg:text-left lg:pl-0 xl:pl-40">NOT EXCUSES</h2>
          <div className="flex justify-center lg:justify-start lg:pl-0 xl:pl-40">
            <button className="bg-cyan-400 text-black font-bold py-2 px-8 sm:py-3 sm:px-20 rounded-full text-lg sm:text-xl hover:bg-cyan-300 transition-colors">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={pic1}
            alt="Muscular person lifting weights"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Bottom section */}
      <div className="text-center mt-8 lg:mt-16">
        <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 text-cyan-400">CLASSES THE GYM</h3>
        <p className="text-xl sm:text-2xl lg:text-4xl mb-3">
          Take Care Of Your Body. It's The Only Place <br className="hidden sm:inline" /> You Have To Live.
        </p>
      </div>
    </div>
  )
}

export default Header