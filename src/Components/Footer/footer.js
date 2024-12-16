
import React from 'react';
import './footer.css'; // Custom CSS for Footer
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa"; // Importing icon from react-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone,faEnvelope  } from '@fortawesome/free-solid-svg-icons';

import twitter from "../../Images/twitter image.webp";
import linkedin from "../../Images/linked in image.webp";

import Logos from "../../Images/logo1.png"; 

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-logo">
          
          <img src={Logos} alt="Sheetal Rubber Industries" />
          </div>
   
        <div className="address-section">
        <div className="address-info">
          <h3>Sheetal Rubber Products (P) Ltd.</h3>
          <p> <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />J-395,MIDC,Bhosari,</p>
          <p>
              <>    </>      Pune-411026 (INDIA)
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className="icon" /> +91 -20 -27130244 ,
        </p>

        <p>
           +91 -20 -27130794
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="icon" /> 
          <a href="mailto:info@sheetalrubber.com" className="email-link">sheetalrubber@gmail.com</a>
        </p>
        </div>

        <div className="social-media-links">
          <a href="https://twitter.com/yourTwitterHandle" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" className="social-icon" />
          </a>
          <a href="https://linkedin.com/company/yourLinkedInHandle" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
        
      </div>
     


      <div className="quick-links">
        <h3><FaLink />Quick Links</h3>
        <ul>
          <li><Link to="/siliconpolyester">Silicon–Polyester Hoses</Link></li>
          <li><Link to="/turbochargerhose">Turbocharger and CAC Hoses</Link></li>
          <li><Link to="/coolant-air-charger-hoses">Coolant Air Charger Hoses</Link></li>
          <li><Link to="/epdm">EPDM Rubber Hoses</Link></li>
          <li><Link to="/organic"> Organic Rubber Hoses</Link></li>
          <li><Link to="/marinewethose">Marine Wet Exhaust Hoses</Link></li>
          <li><Link to="/Assembly">Assembly / Branch Hoses</Link></li>
          <li><Link to="/wired">Wire Reinforced Hoses</Link></li>
          <li><Link to="/fueltube">Fuel Tubes / Hoses</Link></li>
          <li><Link to="/moulded">Moulded Hoses</Link></li>
        </ul>
      </div>

      {/* news Letter */}
      <div className="news-letter">
  <p>Subscribe to our Newsletter</p>
  <form className="newsletter-form">
    <input
      type="email"
      placeholder="Enter your email address"
      className="email-input"
      required
    />
    <button type="submit" className="subscribe-button">Subscribe</button>
  </form>
</div>

 {/* Add the map iframe below here */}
 <div className="map-container">
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


      <div className="footer-bottom-text">
        {/* <p>
          <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </p> */}
        <p>
  Copyright 2024 Sheetal Rubber Products (P) Ltd. - All rights reserved | Designed by 
  <a href="https://bitshine.in/" class="bitshine-link" target="_blank" rel="noopener noreferrer">
    Bitshine Infotech
  </a>
</p>

      </div>
    </div>
  );
}

export default Footer;
