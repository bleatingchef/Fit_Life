import React from 'react'
import Navbar from './Components/Navbar'
import './index.css';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import Extreme from './Components/Extreme';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div >
      <Navbar/>
      <HeroSection/>
      <Services/>
      <Pricing/>
      <Testimonials/>
      <Extreme/>
      <Footer/>
    </div>
  )
}

export default App