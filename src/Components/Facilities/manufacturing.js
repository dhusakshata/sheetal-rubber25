
import React from "react";
import "./facilities.css";
import { motion } from "framer-motion"; // For animation

import Slider from "react-slick"; // Importing Slick Carousel
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS

import Facility4 from "../../Images/facility4.png"; // Replace with your image path
import Facility5 from "../../Images/facility5.png"; // Replace with your image path
import Facility6 from "../../Images/facility7.png"; // Replace with your image path

const manufacturing = () => {
  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of images shown at once
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 1000, // Slide every 2 seconds
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 1 }, // 3 images in a row for larger screens
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 1 }, // 2 images in a row for medium screens
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }, // 1 image in a row for smaller screens
      },
    ],
    prevArrow: <div className="custom-prev-arrow"></div>,  // Custom left arrow
    nextArrow: <div className="custom-next-arrow"></div>,  // Custom right arrow
  };
  return (
    
    <div className="facilities-container">
       {/* Title Section */}
           <motion.div className="facility-head"
           initial={{ opacity: 0, y: -100 }} // Start position (top)
           animate={{ opacity: 1, y: 0 }}    // End position (normal)
           transition={{ duration: 1 }}      // Duration of animation
           >
       <h1
      >MANUFACTURING FACILITIES</h1>
</motion.div>
{/* <hr className="facility-hr"/> */}
      {/* Image Section */}
     <motion.div className="facilities-images" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
       
     <Slider {...settings}>
     {/* Slider Images */}
    <div className="products-card">
    <h3>Cold Feed Extruder</h3>
      <img src={Facility4} alt="Burst pressure" />
     
    </div>
    <div className="products-card">
    <h3>Auto Clave Vulcanizar
    (Quick Lock Type)</h3>
      <img src={Facility5} alt="heating ovens" />
      
    </div>
    <div className="products-card">
    <h3>Hydraulic Presses</h3>
      <img src={Facility6} alt="UTM" />
     
    </div>
    </Slider>
    </motion.div>

      {/* Information Section */}
      <div className="facilities-info">
      <p 
        >
        To help our customers with high-performance products and a cost advantage, we continually strive to improve our manufacturing and business processes, such as:
        </p>
        <ul>
  <li
    
  >
    Cold Feed Vended Extruders
  </li>
  <li
    
  >
    Dual Head Extruders for Multi-Layer Extrusion
  </li>
  <li
    
  >
    Outer: Neoprene (weather/abrasion resistant)
  </li>
  <li
    
  >
    Hot Feed Extruders
  </li>
  <li
   
  >
    Auto Clave Vulcanizer (Quick Lock Type)
  </li>
  <li
    
  >
    Dispersion Kneader
  </li>
  <li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.7 }}
  >
    3 Role Calendaring Machine
  </li>
  <li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration:1, delay: 0.8 }}
  >
    Compression Transfer Moulding
  </li>
  <li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.9 }}
  >
    Hydraulic Presses
  </li>
  <li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  >
    Rubber Mixing Mills
  </li>
  <li
    
  >
    Knitting Machines
  </li>
  <li
  >
    Braiding Machines
  </li>
  <li
    
  >
    Other Conventional Machines
  </li>
</ul>
      </div>
    </div>
    
  );
};

export default manufacturing;
