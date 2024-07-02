import React from 'react'
 import Member from '../Components/Member'
 import MembershipJoin from '../Components/MembershipJoin'
 import Pricing from '../Components/Pricing'
 import Why from '../Components/Why'


const Membership = () => {
  return (
    <div>
      <Member/>
        <Why/>
        <Pricing/>
        <MembershipJoin/>
    </div>
  )
}

export default Membership