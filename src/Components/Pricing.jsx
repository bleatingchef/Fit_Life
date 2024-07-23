import React from 'react'

const PricingCard = ({ tier, price, features }) => (
  <div className="flex flex-col w-full">
    <div className="flex flex-col justify-center uppercase">
      <div className="flex overflow-hidden relative flex-col pt-8 pb-2 w-full aspect-[0.7] bg-stone-900 rounded-lg shadow-xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc587b2a820fea2853fefba5f68e508c3e8887d789f6fbcc0ca11af28b40f90e?apiKey=38eb436a7fa343bbabfd2e650cd9433f&"
          alt="Membership card background"
          className="object-cover absolute inset-0 h-full w-full"
        />
        <div className="flex relative flex-col px-6 sm:px-8 md:px-10">
          <div className="text-3xl sm:text-4xl text-center text-white">{tier}</div>
          <div className="mt-4 text-4xl sm:text-5xl text-center text-teal-400">{price}</div>
          <ul className="mt-8 sm:mt-12 text-lg sm:text-xl space-y-2 text-white text-opacity-70">
            {features.map((feature, index) => (
              <li key={index} className={feature.active ? "text-white" : ""}>
                {feature.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-4 right-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ec3ca3bf7264875d5f302b0a6746d6b14b5ff4a5302f889ec568899ee71844b?apiKey=38eb436a7fa343bbabfd2e650cd9433f&"
            alt=""
            className="bg-cyan-400 rounded-full w-10 h-10 sm:w-12 sm:h-12"
          />
        </div>
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
        { text: 'Exclusive Studio', active: false },
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
        { text: 'Exclusive Studio', active: false },
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
        { text: 'Exclusive Studio', active: true },
        { text: 'Additional Session', active: true },
      ],
    },
  ]

  return (
    <div className="bg-black min-h-screen p-4 sm:p-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-12 text-teal-400 text-center">Join Our Membership</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <PricingCard key={index} {...tier} />
        ))}
      </div>
    </div>
  )
}

export default Pricing