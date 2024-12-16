import React from "react";
import "./product2.css";
import Turbocharger from "../../Images/Turbo-charger.png";
import { motion } from "framer-motion";

function turbocharger() {
  return (

    <div className="product-page">
    {/* Heading with Bounce Animation */}
    <motion.div
      className="product-head"
      initial={{ opacity: 0, y: -100 }} // Start position (top)
      animate={{ opacity: 1, y: 0 }}    // End position (normal)
      transition={{ duration: 1 }}      // Duration of animation
    >
      <h1
        >
          TURBOCHARGER AND CAC HOSES
        </h1>
    </motion.div>
    {/* <hr className="product-hr"/> */}
    
    <div className="product-container">
      {/* Left Side: Image */}
      <motion.div
        className="content-image"
        initial={{ opacity: 0, x: -100 }} // Start position (left)
        animate={{ opacity: 1, x: 0 }}    // End position (center)
        transition={{ duration:1 }}      // Duration of animation
      >
        <img src={Turbocharger} alt="Assembly Hoses" />
      </motion.div>

      {/* Right Side: Info */}
      <motion.div
        className="content-info"
        initial={{ opacity: 0, x: 100 }} // Start position (right)
        animate={{ opacity: 1, x: 0 }}    // End position (center)
        transition={{ duration: 1 }}      // Duration of animation
      >
   
         <p>   Engineered for high-performance connections in turbocharger and
            charge air cooler systems, ensuring durability in demanding automotive
            and industrial applications.
       
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li><b>Wide Temperature Range:</b> Operates from
         -50°C to +230°C.
           </li>
            <li>Meets SAE J20 Class A standards.
            </li>
            <li><b>Reinforced Options:</b>
               Polyester: Standard flexibility and durability.
               Aramid: High tensile strength and heat
               resistance.
            </li>
            <li>
                 <b>Fluorosilicone:</b> Resistant to oil, acids, and fuels.
                 <b> FKM/Viton:</b> Withstands diesel by-products
and exhaust gases.
            </li>
           
          </ul>
        
          </p>
          
        </motion.div>
      </div>
    </div>
  );
}

export default turbocharger;
