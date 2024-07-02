import React from 'react'
import Member from '../Components/Member'
import Why from '../Components/Why'
import MembershipJoin from '../Components/MembershipJoin'
import Pricing from '../Components/Pricing'

function Membership() {
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