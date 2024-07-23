import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import boy from '../assets/boy.png';
import girl from '../assets/girl.png';

const testimonials = [
  {
    name: 'John Doe',
    image: boy,
    text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.'
  },
  {
    name: 'Jane Smith',
    image: girl,
    text: 'It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged. It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages.'
  },
  {
    name: 'Durgesh',
    image: boy,
    text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.'
  },
  {
    name: 'Himanshu',
    image: girl,
    text: 'It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged. It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages.'
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row h-full border border-white">
    <div className="w-full md:w-1/2 h-48 md:h-auto">
      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
    </div>
    <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-cyan-400">{testimonial.name}</h3>
      <p className="text-sm md:text-base text-gray-300">{testimonial.text}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-black text-white py-8 md:py-12">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 text-cyan-400">TESTIMONIAL</h2>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </div>
          <div className="w-full md:w-1/2">
            <TestimonialCard testimonial={testimonials[(currentIndex + 1) % testimonials.length]} />
          </div>
        </div>
        <div className="flex justify-center mt-4 md:mt-6 space-x-4">
          <button
            onClick={prevSlide}
            className="bg-cyan-400 p-2 rounded-full hover:bg-cyan-500 transition-colors"
          >
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-cyan-400 p-2 rounded-full hover:bg-cyan-500 transition-colors"
          >
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;