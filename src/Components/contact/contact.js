
import React from "react";
import './contact.css'; // Make sure to add the corresponding CSS file
import { color } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div><h1>CONTACT US</h1></div>
      <hr className="contact-hr"></hr>
      
      {/* Row for Form and Info + Map */}
      <div className="row-container">
        
        {/* Form Section */}
        <div className="form-section">
          <form>
            <div className="form-group">
              <label htmlFor="company">Name of Company *</label>
              <input type="text" id="company" placeholder="E.g. John" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" placeholder="E.g. john@doe.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" placeholder="E.g. +1 3004005000" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" maxLength="180" placeholder="Enter your message..." required></textarea>
            </div>
            
            <button className="submit-button">Send Message</button>
          </form>
        </div>
        
        {/* Info and Map Section (in Column) */}
        <div className="info-map-column">
          {/* Info Column */}
          <div className="info-column">
            <p><strong>Sheetal Rubber Products (p) Ltd. </strong></p>
            <p><b>Address : </b>  J-395, MIDC, Bhosari, Pune - 411026, INDIA</p>
            <p><strong>Phone : </strong> +91 - (20) 27130244</p>
            <p><strong>Email : </strong>     info@sheetalrubber.com</p>
          </div>
          
          {/* Map Column */}
          <div className="map-column">
            {/* Map Section */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5735064498363!2d73.83004327496596!3d18.638243282478317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c745555555%3A0xc7aa3d886bd44d2a!2sSheetal%20Rubber%20Products%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1733346721960!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactPage;
