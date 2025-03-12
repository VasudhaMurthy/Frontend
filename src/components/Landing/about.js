import React from "react";
import AboutBackground from "../../Assets/about-background.png";
import AboutBackgroundImage from "../../Assets/about-background-image.png";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
            Earn rewards for every ride you share
        </h1>
        <p className="primary-text">
        GoTogether makes carpooling effortless with smart ride matching based on your route and schedule. 
        Connect with trusted commuters and enjoy a seamless travel experience.
        </p>
        <p className="primary-text">
        Collect points for each trip and redeem them for discounts. 
        Save money, reduce traffic, and make your commute more rewarding.
        </p>
        
      </div>
    </div>
  );
};

export default About;