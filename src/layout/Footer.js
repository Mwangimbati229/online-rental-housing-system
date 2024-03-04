import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="row1">
        <h2>RENT HOME KENYA</h2>
        <h3>renthomekenya@gmail.com</h3>
      </div>
      <div>
        <ul>
          <li><Link to="/add-apartment" className="footer-link">List your rental</Link></li>
          <li><Link to="/about-us" className="footer-link">About us</Link></li>
          <li><Link to="/contact-us" className="footer-link">Contact us</Link></li>
        </ul>
      </div>
      <hr />
      <div className="row2">
        <p>© 2023 Rent HOME Inc. All photos, videos, text and other content are the property of Rent HOME Inc. RENTALS.COM and the renthomekenya.COM Trade Dress are registered trademarks of Rent Group Inc. All rights reserved.<br />
          If you are using a screen reader, or are having trouble reading this website, please email accessibilityfeedback@rent.com.</p>
      </div>
    </footer>
  );
}
