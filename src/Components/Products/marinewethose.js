import React from "react";
import { motion } from "framer-motion";
import "./product2.css";
import Marinewet from "../../Images/Marine-wet.png";

function Marine() {
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
        > MARINE WET
        EXHAUST HOSES </h1>
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
          <img src={Marinewet} alt="Assembly Hoses" />
        </motion.div>
    
 {/* Right Side: Info */}
        <motion.div
          className="content-info"
          initial={{ opacity: 0, x: 100 }} // Start position (right)
          animate={{ opacity: 1, x: 0 }}    // End position (center)
          transition={{ duration: 1 }}      // Duration of animation
        >
          <p>
          Sheetal Rubber provides high-quality Marine Wet
Exhaust Hoses for engine and generator systems
in in-board pleasure boats, ensuring durability and
top performance in marine environments.

          <h3>Key Features and Benefits:</h3>
          <ul>
            <li><b>Standard Hoses:</b> Operate up to +180°C.

           </li>
            <li><b>HT Hoses:</b> Withstand up to +230°C for
            turbocharged applications.
            </li>
            <li>
           <b> Standards Compliance:</b> SAE J2006 R3 (Wet
Exhaust), SAE J2006 R2 (EPDM).

            </li>
            <li><b>Heat Resistance:</b> Handles extreme
            temperatures.
            </li>
            <li><b>Durability:</b> Resists water, salt, and
chemicals.
Ideal for reliable, high-performance marine
systems.

            </li>
          </ul>
          </p>
       </motion.div>
        
          </div>
        </div>
     
  );
}

export default Marine;
