import React from "react";
import { motion } from "framer-motion";
import "./product2.css";
import Wired from "../../Images/wired-reinforced.png";

const wired = () => {
  return (

    <div className="product-page">
      {/* Heading with Bounce Animation */}
      <motion.div
        className="product-head"
        initial={{ opacity: 0, y: -100 }} // Start position (top)
        animate={{ opacity: 1, y: 0 }}    // End position (normal)
        transition={{ duration: 1 }}      // Duration of animation
      >
        < h1 >WIRE REINFORCED
          HOSES</h1>
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
          <img src={Wired} alt="Assembly Hoses" />
        </motion.div>

        {/* Right Side: Info */}
        <motion.div
          className="content-info"
          initial={{ opacity: 0, x: 100 }} // Start position (right)
          animate={{ opacity: 1, x: 0 }}    // End position (center)
          transition={{ duration: 1 }}      // Duration of animation
        >
         <p>
        Engineered for reliability in demanding
environments, with a temperature range of
-40°C to +140°C and sizes from 20 mm to
200 mm.
      
        <h3>Key Features and Benefits:</h3>
        <ul>
          <li><b>Suction Hose:</b> Vacuum integrity
for fluid/air transfer.
</li>
          <li><b>Air Filter Hose: </b>Durable for clean
engine air intake.
</li>
          <li><b>Flexible Hose:</b> Versatile for fluids
and gases.

          </li>
          <li><b>Exhaust Hose:</b> Heat-resistant for
          exhaust gases.
          </li>
          
        </ul>
        
        </p>
       
        
      </motion.div>
    </div>
  </div>
  );
};

export default wired;
