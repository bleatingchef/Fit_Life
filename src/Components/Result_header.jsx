import React from 'react';
import results from '../assets/heading.png';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';
import g5 from '../assets/g5.png';
import g6 from '../assets/g6.png';
import g7 from '../assets/g7.png';
import g8 from '../assets/g8.png';
import g9 from '../assets/g9.png';
import g10 from '../assets/g10.png';
import g11 from '../assets/g11.png';
import MembershipJoin from './MembershipJoin';

const ResultHeader = () => {
  return (
    <div className='m-4 sm:m-10 lg:m-20 mb-10'>
      <img
        src={results}
        alt="results"
        className="block mx-auto mb-4 w-3/4 sm:w-1/2 lg:w-1/3"
      />
      <div className="flex flex-wrap justify-center gap-4 mb-4 pt-8">
        <img src={g1} alt="g1" className="h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
        <img src={g2} alt="g2" className="h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
        <img src={g3} alt="g3" className="h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
        <img src={g4} alt="g4" className="h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
      </div>
      <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-10 mb-4 lg:ml-44 pt-5">
        <div className="flex flex-col space-y-4 lg:space-y-7">
          <img src={g5} alt="g5" className="w-44 h-auto lg:w-52 lg:h-80" />
          <img src={g6} alt="g6" className="w-44 h-auto lg:w-52 lg:h-80" />
        </div>
        <img src={g7} alt="g7" className="w-52 h-auto lg:w-80 lg:h-96" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 pt-5 pb-20">
        <img src={g8} alt="g8" className="h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
        <img src={g9} alt="g9" className="h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
        <img src={g10} alt="g10" className="h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
        <img src={g11} alt="g11" className="h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
      </div>
      <MembershipJoin />
    </div>
  );
}

export default ResultHeader;
