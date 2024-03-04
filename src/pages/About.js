import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import "../Css/About.css";
import aboutLogo from "../images/About Logo.jpeg";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className="about-info">
          <h1>About Us</h1>
          <p>
            Rent Home Kenya is a leading real estate platform dedicated to
            helping people find their ideal homes for rent in Kenya. Whether
            you're looking for an apartment, house, or villa, we provide a
            seamless experience to connect you with the perfect rental
            property.
          </p>
          <p>
            Our mission is to simplify the rental process and empower both
            tenants and landlords. We strive to offer a wide range of
            high-quality rental listings, along with valuable resources and
            expert guidance to make informed decisions.
          </p>
          <p>
            At Rent Home Kenya, we understand the importance of finding the
            right place to call home. That's why we are committed to
            delivering exceptional service and personalized support every
            step of the way.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutLogo} alt="About Us" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
