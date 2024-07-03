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

const Result_header = () => {
  return (
    <div className='m-20 mb-10'>
      <img
        src={results}
        alt="results"
        className="block mx-auto mb-4"
      />
      <div className="flex justify-center space-x-10 mb-4 pt-8">
        <img src={g1} alt="g1" className="h-261px w-261px" />
        <img src={g2} alt="g2" className="h-261px w-261px" />
        <img src={g3} alt="g3" className="h-261px w-261px" />
        <img src={g4} alt="g4" className="h-261px w-261px" />
      </div>
      <div className="flex justify-left space-x-10 mb-4 ml-44 pt-5">
        <div className="flex flex-col space-y-7">
          <img src={g5} alt="g5" className="h-685 w-200" />
          <img src={g6} alt="g6" className="h-685 w-200" />
        </div>
        <img src={g7} alt="g7" className="h-685 w-335" />
      </div>
      <div className="flex justify-center space-x-10 pt-5 pb-20">
        <img src={g8} alt="g8" className="h-261px w-261px" />
        <img src={g9} alt="g9" className="h-261px w-261px" />
        <img src={g10} alt="g10" className="h-261px w-261px" />
        <img src={g11} alt="g11" className="h-261px w-261px" />
      </div>
      <MembershipJoin/>
    </div>
  )
}

export default Result_header;
