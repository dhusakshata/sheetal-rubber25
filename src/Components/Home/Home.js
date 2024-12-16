
import React,{ useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";



import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules"; // Correct way to import Navigation
import "swiper/css";
import "swiper/css/navigation";


import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Home.css";

import logo1 from "../../Images/client1.png"; 
import logo2 from "../../Images/client2.jpg";
import logo3 from "../../Images/client3.png";
import logo4 from "../../Images/client4.jpg";
import logo5 from "../../Images/client5.png";
import logo6 from "../../Images/client6.png";
import logo7 from "../../Images/client7.png";
// Import the video file
import rubberWorld from "../../video/about1.mp4";
import ProductionNarrat from "../../video/production5.mp4";
 

import Silicon from "../../Images/Silicon.png"
import Turbocharger from "../../Images/Turbo-charger.png";
import Marine from "../../Images/Marine-wet.png";
import EPDM from "../../Images/EPDM-rubber.png";
import Organic from "../../Images/organic-rubber.png";
import Assembly from "../../Images/Assembly-rubber.png";
import Wired from "../../Images/wired-reinforced.png";
import FuelTube from "../../Images/Fuel-Tubes.png";
import Moulded from "../../Images/Moulded.png";


// Application Area Images
import Img1 from "../../Images/Image1.png";
import Img2 from "../../Images/image2.jpg";
import Img3 from "../../Images/Image3.jpg";
import Img4 from "../../Images/Image4.png";
import Img5 from "../../Images/Image5.jpg";
import Img6 from "../../Images/Image6.jpg";

function Home() {
  
 

  const buttons = [
    { label: "Vehicle", img: Img1 },
     { label: "Marine", img: Img2 },
     { label: "Automobile", img: Img3 },
     { label: "Construction", img: Img4 },
     { label: "Industrial", img: Img5 },
   { label: "Agriculture", img: Img6 },
   ];

  // // State to track the selected logo images 
   const [selectedImage, setSelectedImage] = useState(buttons[0].img);
   const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

   // for sliding product images
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of products in one row
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
  autoplaySpeed: 1000, // Slide every 3 seconds
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
    prevArrow: <div className="custom-prev-arrow"></div>,  // Custom left arrow
    nextArrow: <div className="custom-next-arrow"></div>,  // Custom right arrow
  };


const aboutUsRef = useRef(null);

// Set up the Intersection Observer
useEffect(() => {
  const options = {
    root: null, // Observing relative to the viewport
    rootMargin: "0px",
    threshold: 0.5, // Trigger when 50% of the element is in view
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      const textElement = entry.target.querySelector('.about-us-info');
      const videoElement = entry.target.querySelector('.about-us-video');
      const headingElement = entry.target.querySelector('.about-us-title h1');

      // Add 'in-view' class to trigger animation
      if (entry.isIntersecting) {
        textElement.classList.add('in-view');
        videoElement.classList.add('in-view');
        headingElement.classList.add('in-view');
      } else {
        // Optional: reset the animations when the element is out of view
        textElement.classList.remove('in-view');
        videoElement.classList.remove('in-view');
        headingElement.classList.remove('in-view');
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  if (aboutUsRef.current) {
    observer.observe(aboutUsRef.current);
  }

  return () => {
    if (aboutUsRef.current) {
      observer.unobserve(aboutUsRef.current);
    }
  };
}, []);

  return (
    <div className="home">
  <section className="video-container">
    <video className="production-video" src={ProductionNarrat} autoPlay muted loop
    preload="auto" 
    ></video>
  </section>

  <section className="about-us-container"ref={aboutUsRef}>
    <div className="about-us-title">
      <h1>ABOUT US</h1>
    </div>
    <div className="about-us-content">
      <div className="about-us-info">
      <p>
      Welcome to Sheetal Rubber Products, where innovation meets quality in the manufacturing of rubber solutions. Established with a vision to provide superior rubber products, we specialize in a wide range of offerings, including  moulded hoses, silicone hoses, fuel tubes, assembly hoses, and wire-reinforced hoses.
      </p>
      <p    
            >Our commitment to excellence is reflected in our state-of-the-art manufacturing processes and rigorous quality control measures. 
      </p>
      <p  
            >
   With years of experience in the industry, our team of skilled professionals is dedicated to delivering customized solutions tailored to meet the specific needs of our clients. We take pride in our ability to understand client requirements and provide innovative products that enhance efficiency and reliability.
      </p>
   
    <p>
    At Sheetal Rubber Products, customer satisfaction is our top priority. We believe in building long-term relationships with our clients by offering exceptional service, timely delivery, and continuous support.
    </p>


        <button className="read-more">
          <Link to="/about">Read More</Link>
        </button>
      </div>
      <div className="about-us-video">
  <video className="about-us-video-element" autoPlay muted loop>
    <source src={rubberWorld} type="video/mp4" />
  </video>
</div>

    </div>
  </section>

{/* Product Section */}
 <div className="our-products">
      <h1>OUR PRODUCTS</h1>
      <Slider {...settings}>
        <div className="product-cards">
          <Link to="/siliconpolyester">
            <img src={Silicon} alt="Silicon-Polyester Hoses" className="product-images" />
            <h3>Silicon-Polyester Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/turbochargerhose">
            <img src={Turbocharger} alt="Turbocharger & CAC Hoses" className="product-images" />
            <h3>Turbocharger & CAC Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/marinewethose">
            <img src={Marine} alt="Marine Wet Exhaust Hoses" className="product-images" />
            <h3>Marine Wet Exhaust Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/epdm">
            <img src={EPDM} alt="EPDM Rubber Hoses" className="product-images"
            />
            <h3>EPDM Rubber Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/organic">
            <img src={Organic} alt="Organic Rubber Hoses" className="product-images" />
            <h3>Organic Rubber Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/assembly">
            <img src={Assembly} alt="Assembly Hoses" className="product-images" />
            <h3>Assembly Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/wired">
            <img src={Wired} alt="Wire Reinforced Hoses" className="product-images" 
            style={{backgroundColor:"white"}}
            />
            <h3>Wire Reinforced Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/fueltube">
            <img src={FuelTube} alt="Fuel Tubes" className="product-images" />
            <h3>Fuel Tubes</h3>
          </Link>
        </div>
        <div className="product-cards">
  <Link to="/moulded">
    <img src={Moulded} alt="Moulded Hoses" className="product-images" />
    <h3>Moulded Hoses</h3>
  </Link>
</div>

      </Slider>
    </div>

{/* Logo container */}
<div className="logo-container">
      <div className="logo-title"><h1>ESTEEMED CLIENTS</h1></div>
      <Swiper
        modules={[Navigation,Autoplay]}
        slidesPerView={5}
        spaceBetween={5}
        navigation={true}
        pagination={{ clickable: true }} // Enable pagination
       autoplay={{
             delay: 1000, // Slide every 2 seconds
             disableOnInteraction: false, // Prevent autoplay from pausing on user interaction
           }}

        loop={true}

      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} className="logo-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
 
{/* 
Application Area */}

<div className="application-area">
  <div className="application-head">
    <h1>OUR APPLICATIONS</h1>
  </div>
      
      <div className="button-container">
  {buttons.map((button, index) => (
    <button
      key={index}
      className={`app-button ${
        selectedImage === button.img ? "active" : ""
      }`}
      onClick={() => setSelectedImage(button.img)} // Update image on click
      onMouseEnter={() => setSelectedImage(button.img)} // Update image on hover
    >
      {button.label}
    </button>
  ))}
</div>
<div className="image-display">
  <img src={selectedImage} alt="Selected Application" />
</div>

</div>



    </div>
  );
}

export default Home;
