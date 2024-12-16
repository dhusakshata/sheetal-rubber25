import React from "react";
import "./product2.css";
import Assemblyy from "../../Images/Assembly-rubber.png";
import { motion } from "framer-motion";

const Assembly = () => {
  return (
    <div className="product-page">
      {/* Heading with Bounce Animation */}
      <motion.div
        className="product-head"
        initial={{ opacity: 0, y: -100 }} // Start position (top)
        animate={{ opacity: 1, y: 0 }}    // End position (normal)
        transition={{ duration: 1 }}      // Duration of animation
      >
        <h1>ASSEMBLY HOSES</h1>
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
          <img src={Assemblyy} alt="Assembly Hoses" />
        </motion.div>

        {/* Right Side: Info */}
        <motion.div
          className="content-info"
          initial={{ opacity: 0, x: 100 }} // Start position (right)
          animate={{ opacity: 1, x: 0 }}    // End position (center)
          transition={{ duration: 1 }}      // Duration of animation
        >
<p> Sheetal Rubber provides flexible hoses with custom couplings for efficient media transfer, operating from -40°C to +140°C in sizes 6–75 mm.
          </p>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>
            <b>  Crimping:</b> High-pressure durability.
            </li>
            <li> <b> CPC Clamps:</b> Leak-free in high-vibration setups.</li>
            <li><b>Oil Resistant:</b> For engines, fuel, and oil.</li>
            <li><b>Engine:</b> Heat-resistant connections.</li>
            <li><b>Suction:</b> Maintains vacuum integrity.</li>
            <li><b>Radiator:</b> Heat and pressure-resistant for cooling.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Assembly;
