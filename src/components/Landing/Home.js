import React from "react";
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/home-banner-image.png";
import Navbar1 from "./navbar";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
return (
    <div className="home-container">
        <Navbar1 />
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                    Share Rides <br /> Save More <br /> Earn Rewards ✨
                </h1>
                <p className="primary-text">
                    Go Together connects commuters for easy, <br/>eco-friendly carpooling, saving money <br/> and reducing emissions.
                </p>
                <button className="secondary-button" onClick={() => navigate("/login")}>Book your ride now<FiArrowRight />{" "}</button>
            </div>
            <div className="home-image-section">
                <img src={BannerImage} alt="" />
            </div>
        </div>
    </div>
);
};

export default Home;