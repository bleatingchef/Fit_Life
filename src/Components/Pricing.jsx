
import React from 'react'

// const PricingCard = ({ tier, price, features }) => (
//   <div className="bg-gray-800 rounded-3xl p-6 flex flex-col justify-between h-[500px]">
//     <div>
//       <h3 className="text-white-400 text-2xl font-bold mb-2">{tier}</h3>
//       <p className="text-cyan-400 text-4xl font-bold mb-6">${price}/MO</p>
//       <ul className="space-y-4">
//         {features.map((feature, index) => (
//           <li key={index} className={`text-lg ${feature.active ? 'text-white' : 'text-gray-500'}`}>
//             {feature.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//     <div className="mt-auto">
//       <button className="bg-cyan-400 rounded-full p-2">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//         </svg>
//       </button>
//     </div>
//   </div>
// )


const PricingCard = ({ tier, price, features }) => (
  <div className="flex flex-col w-full max-md:w-[70%]">
    <div className="flex flex-col justify-center uppercase max-md:mt-8">
      <div className="flex overflow-hidden relative flex-col pt-10 pb-2 w-full aspect-[0.63] fill-stone-900">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc587b2a820fea2853fefba5f68e508c3e8887d789f6fbcc0ca11af28b40f90e?apiKey=38eb436a7fa343bbabfd2e650cd9433f&"
          alt="Membership card background"
          className="object-cover absolute inset-0 h-full w-full"
        />
        <div className="flex relative flex-col pl-12 max-md:pl-8">
          <div className="self-center mr-7 text-4xl text-center text-white">{tier}</div>
          <div className=" mt-6 text-5xl text-center text-teal-400 max-md:mr-4 max-md:text-5xl">{price}</div>
          <div className="self-start mt-16 text-2xl capitalize text-white text-opacity-30 ">
            {features.map((feature, index) => (
              <li key={index}>
                {feature.included ? (
                  <span className="text-white ">{feature.text}<br /></span>
                ) : (
                  <>{feature.text}<br /></>
                )}
              </li>
            ))}
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ec3ca3bf7264875d5f302b0a6746d6b14b5ff4a5302f889ec568899ee71844b?apiKey=38eb436a7fa343bbabfd2e650cd9433f&"
          alt=""
          className="mt-24 bg-cyan-400 rounded-full aspect-square h-[50px] w-[50px] "
        />
      </div>
    </div>
  </div>
);



const Pricing = () => {
  const pricingTiers = [
    {
      tier: 'BASIC',
      price: "$20",
      features: [
        { text: 'Gym Without Trainers', active: true },
        { text: 'Unlimited Access', active: true },
        { text: 'Access To All Clubs', active: false },
        { text: 'Training For All Classes', active: false },
        { text: 'Excusive Studio', active: false },
        { text: 'Additional Session', active: false },
      ],
    },
    {
      tier: 'STANDARD',
      price: "$35",
      features: [
        { text: 'Gym Without Trainers', active: true },
        { text: 'Unlimited Access', active: true },
        { text: 'Access To All Clubs', active: true },
        { text: 'Training For All Classes', active: true },
        { text: 'Excusive Studio', active: false },
        { text: 'Additional Session', active: false },
      ],
    },
    {
      tier: 'PROFESSIONAL',
      price: "$50",
      features: [
        { text: 'Gym Without Trainers', active: true },
        { text: 'Unlimited Access', active: true },
        { text: 'Access To All Clubs', active: true },
        { text: 'Training For All Classes', active: true },
        { text: 'Excusive Studio', active: true },
        { text: 'Additional Session', active: true },
      ],
    },
  ]

  return (
    <div className="bg-black min-h-screen p-8">
      {/* <h2 className="text-cyan-400 text-6xl font-bold text-center mb-12">JOIN OUR MEMBERSHIP</h2> */}
      <h1 className="text-7xl font-bold mb-6 text-teal-400 text-center">Join Our Membership</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <PricingCard key={index} {...tier} />
        ))}
      </div>
    </div>
  )
}

export default Pricing