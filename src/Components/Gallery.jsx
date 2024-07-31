import React from "react";
import pic3 from "../assets/dumbell.png";
import pic4 from "../assets/Union.png";
import pic5 from "../assets/Yoga.png";
import pic6 from "../assets/Cardio.png";
import pic7 from "../assets/Circuit.png";
import pic8 from "../assets/zumba.png";

const data = [
  {
    image: pic3,
    heading: "GYM FITNESS",
    content:
      "Exercise And Rest Are The Cornerstones Of Improving Your Quality Of Life. It's Not Always Easy But It's Always Worth It. When You Find A Fitness Routine You Enjoy, You'll Feel Better, Look Better And Be Happier In Your Own Skin.",
  },
  // ... (other data items remain unchanged)
];

const Gallery = () => {
  return (
    <div className="bg-black text-white">
      {data.map((item, index) => (
        <div
          key={index}
          className="p-4 sm:p-8 flex flex-col lg:flex-row items-center"
        >
          {index % 2 === 0 ? (
            <>
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <div className="rounded-tl-3xl rounded-br-3xl overflow-hidden group">
                  <div className="w-full h-full transition duration-300 ease-in-out bg-transparent">
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-4">
                  {item.heading}
                </h2>
                <p className="text-base sm:text-xl lg:text-2xl">{item.content}</p>
              </div>
            </>
          ) : (
            <>
              <div className="w-full lg:w-1/2 lg:pr-8 mb-6 lg:mb-0 order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-4">
                  {item.heading}
                </h2>
                <p className="text-base sm:text-xl lg:text-2xl">{item.content}</p>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="rounded-tl-3xl rounded-br-3xl overflow-hidden group">
                  <div className="w-full h-full transition duration-300 ease-in-out bg-transparent">
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="w-full h-auto object-cover lg:ml-8"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;