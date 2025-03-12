import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/us">Us</a>
        <a href="/contact">Contact</a>
        {/* Using button with navigate hook */}
        <button className="primary-button" onClick={() => navigate("/login")}>
          Login &nbsp; or &nbsp; Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
