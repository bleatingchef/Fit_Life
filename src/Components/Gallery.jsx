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
  {
    image: pic4,
    heading: "INDOOR CYCLING",
    content:
      "Cycling is a great form of exercise as well as a practical way to get around, but it also carries the risk of significant injury, especially head injury. involves using a special stationary exercise bicycle with a weighted flywheel in a classroom setting.",
  },
  {
    image: pic5,
    heading: "POWER YOGA",
    content:
      "One up, slim down, and find balance with this high-energy summer workout from power yoga. It brings inner peace, a spiritual boost, and an unparalleled measure of serenity. Power yoga is a general term used to describe a vigorous.",
  },
  {
    image: pic6,
    heading: "CARDIO FITNESS",
    content:
      "Cardio fitness is important to everyone. Quality cardio workouts can help everybody reach their health and fitness goals, whether those goals include new personal records for competition, lowering blood pressure, reducing cholesterol levels, managing diabetes.",
  },
  {
    image: pic7,
    heading: "CIRCUIT TRAINING",
    content:
      "Circuit training is a fast-paced class in which you do one exercise for 30 seconds to 5 minutes and then move on to another exercise. Increases your strength and aerobic fitness and burns lots of calories. It’s like a game where Everyone begins at a station.",
  },
  {
    image: pic8,
    heading: "ZUMBA",
    content:
      "Are you ready to party yourself into shape? Forget the workout, just lose yourself in the music and find yourself in shape with fitness dance at The Gym. Zumba classes feature exotic rhythms set to high-energy Latin and international beats.",
  },
];

const Gallery = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-black text-white p-8 flex flex-col md:flex-row items-center"
        >
          {index % 2 === 0 ? (
            <>
              <div className="md:w-1/2 relative">
                <div className="rounded-tl-3xl rounded-br-3xl overflow-hidden group">
                  <div className="w-full h-full transition duration-300 ease-in-out bg-transparent">
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="w-608px h-640px"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-6">
                <h2 className="text-4xl font-bold text-cyan-400 mb-4">
                  {item.heading}
                </h2>
                <p className="text-3xl">{item.content}</p>
              </div>
            </>
          ) : (
            <>
              <div className="md:w-1/2 p-6">
                <h2 className="text-4xl font-bold text-cyan-400 mb-4">
                  {item.heading}
                </h2>
                <p className="text-3xl">{item.content}</p>
              </div>
              <div className="md:w-1/2 relative">
                <div className="rounded-tl-3xl rounded-br-3xl overflow-hidden group">
                  <div className="w-full h-full transition duration-300 ease-in-out bg-transparent">
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="w-608px h-640px ml-20"
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
