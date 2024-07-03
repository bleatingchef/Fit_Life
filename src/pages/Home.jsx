import React from 'react'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services';
import Pricing from '../Components/Pricing';
import Testimonials from '../Components/Testimonials';
import Extreme from '../Components/Extreme';
import MembershipJoin from '../Components/MembershipJoin';

function Home() {
  return (
    <div>
    <HeroSection/>
      <Services/>
      <Pricing/>
      <Testimonials/>
      <Extreme/>
      <MembershipJoin/>
    </div>
  )
}

export default Home