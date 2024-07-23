import React from 'react';
import hero from '../assets/hero.png'; // Assuming hero.png is in src/assets
import noMoreExcuses from '../assets/nme.png'; // Assuming No More Excuses!.png is renamed and in src/assets
import great from '../assets/great.png';

function Member() {
  return (
    <div className="relative">
      <img
        src={hero}
        alt="Fitness"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />
      <img
        src={noMoreExcuses}
        alt="No More Excuses"
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[400px]"
      />
      <img
        src={great}
        alt="Great"
        className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[400px]"
      />
    </div>
  );
}

export default Member;
