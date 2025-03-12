import React from "react";
import Carpooling from "../../Assets/Pooling-Made-Easy.png";
import Bookrides from "../../Assets/Ride-Booking.png";
import EarnRewards from "../../Assets/Carpooling-Rewards.png";


const Work = () => {
  const workInfoData = [
    {
      image: Carpooling,
      title: "Pooling Made Easy",
      text: "Share rides with people going your way, save costs, and reduce your carbon footprint effortlessly",
    },
    {
      image: Bookrides,
      title: "Ride Booking",
      text: "Book rides instantly from a range of transport options for a convenient and hassle-free journey",
    },
    {
      image: EarnRewards,
      title: "Carpooling Rewards",
      text: "Get rewarded every time you carpool and redeem points for discounts, perks, and more",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Easily find carpool partners, book cabs, autos, or bikes, and earn rewards for sharing rides. 
        Travel smarter, save more, and go greener with every trip!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;