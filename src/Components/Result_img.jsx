import React from 'react'
import bg_img from '../assets/result.png'
import results from '../assets/heading.png'
import excuse from '../assets/excuses.png'
const Result_img = () => {
  return (
    <div className='flex justify-center items-center'> 
    <img src={bg_img} className='max-w-full max-h-full' alt="Result" />
    <img
        src={excuse}
        alt="Not Excuses"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    <img
        src={results}
        alt="results"
        className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      />
      
      
  </div>
  
  )
}

export default Result_img