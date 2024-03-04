import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import "../Css/ContactUs.css";

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you! Feel free to get in touch with us for
            any inquiries, feedback, or assistance.
          </p>
          <div className="contact-details">
            <h2>Our Contact Information:</h2>
            <p>Email: renthomekenya@gmail.com</p>
            <p>Phone: +254 123 456 789</p>
            <p>Address: Nairobi, Kenya</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send us a message:</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
