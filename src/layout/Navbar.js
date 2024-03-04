import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logoImage from "../images/logo.png";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact-us");
  }
  const handleLogoutClick = () => {
    navigate("/");
  }
  return (
    <div id="navbar" className="navbar-container">
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-image" />
        <span className="logo-text">RENT HOME KENYA</span>
      </div>
      <div className="menu">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/add-apartment" className="nav-link">
          List a Property
        </Link>
        <Link to="/about-us" className="nav-link">
          About Us
        </Link>
        <button className="contact-button" onClick={handleContactClick}>Contact us</button>
        <button className="logout-button" onClick={handleLogoutClick}>Logout </button>
      </div>
    </div>
  )
}

export default Navbar