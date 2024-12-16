import React from "react";
import "./product2.css";
import { motion } from "framer-motion";
import Organic from "../../Images/organic-rubber.png";

const organic = () => {
  return (

    <div className="product-page">
          {/* Heading with Bounce Animation */}
          <motion.div
            className="product-head"
            initial={{ opacity: 0, y: -100 }} // Start position (top)
            animate={{ opacity: 1, y: 0 }}    // End position (normal)
            transition={{ duration: 1 }}      // Duration of animation
          >
            <h1>
          ORGANIC RUBBER
          HOSES</h1>
          </motion.div>
          {/* <hr className="product-hr"/>
           */}
          <div className="product-container">
            {/* Left Side: Image */}
            <motion.div
              className="content-image"
              initial={{ opacity: 0, x: -100 }} // Start position (left)
              animate={{ opacity: 1, x: 0 }}    // End position (center)
              transition={{ duration:1 }}      // Duration of animation
            >
<img src={Organic} alt="Assembly Hoses" />
</motion.div>


        {/* Right Side: Info */}
        <motion.div
          className="content-info"
          initial={{ opacity: 0, x: 100 }} // Start position (right)
          animate={{ opacity: 1, x: 0 }}    // End position (center)
          transition={{ duration: 1 }}      // Duration of animation
        >
         <p
          >
          Designed for low-temperature air, water, and fuel
           transfer, with material options like SBR,
          PVC/NBR, Neoprene, Vamac, and NBR for
           specific needs.
          
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li><b>Reinforcement:</b> Polyester/Nylon (standard),
            Kevlar/Aramid (high-strength).</li>
            <li><b>Inner:</b> Nitrile (oil/fuel resistant).</li>
            <li><b>Outer:</b> Neoprene (weather/abrasion
              resistant).
            </li>
            <li><b>Variants:</b> Reinforced (high pressure) or
            non-reinforced (low pressure).
            </li>
            <li><b>Extruded:</b> Non-reinforced shapes for lowpressure use
          </li>
          </ul>
      
          </p>
         </motion.div>
      </div>
    </div>
  );
  
};

export default organic;
