import React from "react";
import "./product2.css";
import { motion } from "framer-motion";
import Moulded from "../../Images/Moulded.png";

const moulded = () => {
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
              >MOULDED HOSES
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
  
  <img src={Moulded} alt="Assembly Hoses" />
  </motion.div>

  
          {/* Right Side: Info */}
          <motion.div
            className="content-info"
            initial={{ opacity: 0, x: 100 }} // Start position (right)
            animate={{ opacity: 1, x: 0 }}    // End position (center)
            transition={{ duration: 1 }}      // Duration of animation
          >

<p>
        Engineered for safe and efficient fluid
transfer in automotive and industrial
systems, with inner diameters ranging from
2 mm to 45 mm.We specialize in high-performance,
custom-moulded parts for various
industries, using materials like SBR,
EPDM, PVC/NBR, Silicone, Neoprene,
and more.

        <h3>Key Features and Benefits:</h3>
        <ul>
          <li><b>Application:</b>
Grommets: Wire and cable
protection.
Gaskets & Seals: Reliable sealing
under pressure.
Vibration Dampeners: Noise
reduction and shock absorption.
</li>
          <li><b>Part Range: </b>0.5 grams to 5 kg, with
          press sizes up to 480 mm.
</li>
          <li>
        <b>  Facility: </b>In-house lab for quality and
testing.


          </li>
          
        </ul>
        
        </p>
        </motion.div>
    </div>
  </div>
  );
};

export default moulded;
