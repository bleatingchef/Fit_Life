import React from 'react';
import serviceBoy from '../assets/service-boy.png';

const Services = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <img src={serviceBoy} alt="Service Boy" className="rounded-lg shadow-lg" />
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h2 className="text-cyan-400 text-4xl md:text-5xl font-bold mb-4">
            WHY SHOULD PEOPLE <br /> CHOOSE FITLIFE SERVICES
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="text-2xl font-bold">PERSONAL TRAINING</h3>
                <p className="text-gray-400">Being Physically And Mentally Fit Is Necessary To Live Happy, Long Life. Exercise Is One Of The Best.</p>
              </div>
              <div className="text-cyan-400 text-2xl">✓</div>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="text-2xl font-bold">EXPERT TRAINER</h3>
                <p className="text-gray-400">Being Physically And Mentally Fit Is Necessary To Live Happy, Long Life. Exercise Is One Of The Best.</p>
              </div>
              <div className="text-cyan-400 text-2xl">✓</div>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="text-2xl font-bold">FLEXIBLE TIME</h3>
                <p className="text-gray-400">Being Physically And Mentally Fit Is Necessary To Live Happy, Long Life. Exercise Is One Of The Best.</p>
              </div>
              <div className="text-cyan-400 text-2xl">✓</div>
            </div>
          </div>
          <button className="mt-8 px-8 py-3 bg-cyan-400 text-black rounded-full text-lg font-bold hover:bg-cyan-500 transition duration-300">
            JOIN TODAY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
