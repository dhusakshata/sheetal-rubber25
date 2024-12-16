import React from "react";

import { motion } from "framer-motion";
import "./product2.css";
import FuelTube from "../../Images/Fuel-Tubes.png";

const fueltube = () => {
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
        >FUEL TUBES / HOSES</h1>
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
          <img src={FuelTube} alt="Assembly Hoses" />
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
2 mm to 45 mm.
        
        <h3>Key Features and Benefits:</h3>
        <ul>
          <li><b>Multilayer Fuel Tubes:</b> Fuelresistant for automotive systems.
</li>
          <li><b>Fuel Tubes with Sleeves: </b>Heat and
          abrasion-resistant.
</li>
          <li>
         <b> Fuel Flow Tubes: </b>Minimize pressure drop.


          </li>
          <li><b>Oil Flow Tubes:</b> Durable for hightemp lubricants.

          </li>
          <li>
        <b>  Air Flow Tubes:</b> Reliable for intake
and exhaust systems.

          </li>
          
        </ul>
        </p>
       </motion.div>
        
          
       
        
      </div>
    </div>

  );
};

export default fueltube;
