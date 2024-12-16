
import React,{useEffect,useRef,useState} from "react";

import Building from "../../Images/building2.jpeg";

import "./about.css"; // Import styles


import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

function About() {

// Declare state variables for visibility
const [isMissionVisible, setIsMissionVisible] = useState(false);
const [isVisionVisible, setIsVisionVisible] = useState(false);

  const missionRef = useRef(null); // Ref for the mission section
  const visionRef = useRef(null); // Ref for the vision section

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200, // Animation duration
      offset: 200, // Offset to trigger animation earlier or later
      once: true, // Animation runs only once
    });

    // Intersection Observer
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === missionRef.current) {
            console.log("Mission section is in view!");
            // Trigger your function for mission
            missionRef.current.classList.add("in-view"); 
          } else if (entry.target === visionRef.current) {
            console.log("Vision section is in view!");
            // Trigger your function for vision
            visionRef.current.classList.add("in-view");
          }
        }
      });
    };

    const observerOptions = {
      root: null, // Use the viewport
      threshold: 0.5, // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
    };
  }, []);



  return (
    <div className="about-section">
  
<div className="about-head">
  <h1> ABOUT US</h1>
</div>
      {/* Content Section */}

      <div className="about-content">

         {/* Image with Animation */}
         <div className="about-image">
          <img src={Building} alt="About Sheetal Rubber" className="building-image"
           
          />
        </div>
        {/* Text Content */}
        <div className="about-info" >
          <h6>WHEN QUALITY & RELIABILITY ARE VITAL , SHEETAL RUBBER PRODUCTS (P) LTD. ARE YOUR BEST CHOICE.</h6>
        <p>
        For over two decades, Sheetal Rubber Products has been a trusted leader in the manufacturing of high-quality rubber products with 50,000 sq. ft. of manufacturing facility. We specialize in manufacturing a full range of low-pressure hoses, including platinum silicone-lined, FMK-lined fuel cell hoses, flame-retardant hoses, and various moulded components. Our commitment to product expertise, engineering excellence, rigorous testing, and strict quality controls has established us as a preferred partner for major manufacturers in India and a favored exporter internationally. 
      </p>
      
      <ul
          >
          <li>Committed towards continual improvement, quality control and customer
          satisfaction.</li>
          <li>Believes in the concept of Total Quality Management.</li>
          <li>Fully fledged traceability system (Raw material to Finished goods).</li>
          <li> 
          All Raw Materials are tested, before being used, based on their Quality Policy.</li>
        </ul>
        </div>

       

      </div>

<div className="misson-vision">



<div ref={missionRef} className={`Mission ${isMissionVisible ? "animate" : ""}`}>
<h2>OUR MISSION</h2>
<hr></hr>
<p>
To become the leading manufacturer of elastomeric products supplying to world’s prominent industries, aspiring to be the “preferred OEM” to all Tire I and II suppliers, committing to superior service and high quality.
</p>
</div>

<div ref={visionRef} className={`vision ${isVisionVisible ? "animate" : ""}`}>

<h2>OUR VISION</h2>
<hr></hr>
    <p>
    • To be the “Manufacturer of choice”, delivering superior customer value, embracing our technology – leadership and commitment to quality.
    </p>
    <p>
    •	To respect team members as instrumental part of organization’s growth, ensuring their active involvement and continuous progress. 
    </p>
    <p>
    •	To respect team members as instrumental part of organization’s growth, ensuring their active involvement and continuous progress. 
    </p>
</div>
    </div>
</div>
     
     
    
  );
}

export default About;
