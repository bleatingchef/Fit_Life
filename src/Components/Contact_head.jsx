import React from 'react'
import contact_bg from '../assets/cbg.png'
import contact_us from '../assets/contactus.png'

const Contact_head = () => {
  return (
    <div className='flex justify-center items-center'> 
    <img src={contact_bg} className='max-w-full max-h-full' alt="Result" />
    <img
        src={contact_us}
        alt="results"
        className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      />
      
  </div>
  )
}

export default Contact_head