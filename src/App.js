// 

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import ScrollToTop from "./Components/Scrolltotop.js";
import "./App.css";

import Header from "./Components/Header/header.js";
import Footer from "./Components/Footer/footer.js";
import AboutUs from "./Components/About/about.js";


import Home from "./Components/Home/Home.js";
import Product from "./Components/Products/product.js";
import Career from "./Components/careers/career.js";
import Contact from "./Components/contact/contact.js";

import ManufacturingFacilities from "./Components/Facilities/manufacturing.js";
import Inhousefacilities from "./Components/Facilities/inhouse.js";




import SiliconPolyester from "./Components/Products/siliconpolyester.js";
import Turbocharger from "./Components/Products/turbochargerhose.js";
import Marine from "./Components/Products/marinewethose.js";
import EPDM from "./Components/Products/epdm.js";
import Organic from "./Components/Products/organic.js"
import Assembly from "./Components/Products/Assembly.js";
import Wired from "./Components/Products/wired.js";
import Fuletube from "./Components/Products/Fueltube.js";
import Moulded from "./Components/Products/moulded.js";


import ArrowToggle from "./Components/Arrowtoggle/arrowtoggle.js";
// import Contact from "./Components/Contact-us/contact.js";


const App = () => {
  return (
    <Router>
        <ScrollToTop /> {/* Ensure it's placed above your routes */}
      <Header /> 
       

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      
        <Route path="/product" element={<Product />} />
        <Route path="/manufacturing" element={<ManufacturingFacilities/>} />
        <Route path="/inhouse" element={<Inhousefacilities/>} />

        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="/siliconpolyester" element={<SiliconPolyester />} />
        <Route path="/turbochargerhose" element={<Turbocharger />} />
        <Route path="/marinewethose" element={<Marine />} />
        <Route path="/epdm" element={<EPDM />} />
        <Route path="/organic" element={<Organic/>} />
        <Route path="/Assembly" element={<Assembly />} />
        <Route path="/wired" element={<Wired />} />
        <Route path="/Fueltube" element={<Fuletube />} />
        <Route path="/moulded" element={<Moulded />} />
     
        

        
      </Routes>
      <Footer/>

      <ArrowToggle />
    </Router>

    
   
  );
};

export default App;
