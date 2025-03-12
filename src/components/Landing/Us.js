import React from "react";
import Moulya from "../../Assets/Moulya.webP";
import Nithin from "../../Assets/Nithin.webP";
import Pavan from "../../Assets/Pavan.webP";
import Vasudha from "../../Assets/Vasudha.webP";


const profiles = [
    { id: 1, name: "Moulya Vishwanath", image: Moulya, description: "Passionate about design and innovation." },
    { id: 2, name: "Nithinkumar S", image: Nithin, description: "Tech enthusiast and full-stack developer." },
    { id: 3, name: "Pavan Kumar K S", image: Pavan, description: "Marketing expert with a creative touch." },
    { id: 4, name: "Vasudha A M", image: Vasudha, description: "Experienced project manager and strategist." },
  ];
  

const us = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">About Us</p>
        <h1 className="primary-heading">Who Are We?</h1>
        <p className="primary-text">
          We are a team of dedicated professionals with diverse expertise.
        </p>
      </div>
      <div className="us-section-bottom">
        {profiles.map((profile) => (
          <div className="us-card" key={profile.id}>
            <img src={profile.image} alt={profile.name} />
            <p>{profile.description}</p>
            
            <h2>{profile.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default us;
