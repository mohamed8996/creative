import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import propertyOne from "../components/Assets/property-1.png";
import propertyTwo from "../components/Assets/property-2.png";
import propertyThree from "../components/Assets/property-3.png";
import propertyFour from "../components/Assets/property-4.png";
import propertyFive from "../components/Assets/property-5.png";
import propertySix from "../components/Assets/property-6.png";
import rightArrow from "../components/Assets/rightarrow.png";
import DMimg from "../components/Assets/DMimg.png";
import WDimg from "../components/Assets/WDimg.png";
import UIimg from "../components/Assets/UIimg.png";
import GDimg from "../components/Assets/GDimg.png";
import PVimg from "../components/Assets/PVimg.png";
import BDimg from "../components/Assets/BDimg.png";
import EMimg from "../components/Assets/EMimg.png";
import "../Styles/Services.css";

const Services = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(null);

  const services = [
    { id: 1, title: "DIGITAL MARKETING", img: DMimg, route: "https://cruxx.ideassion.in", external: true  },
    { id: 2, title: "WEB DEVELOPMENT", img: WDimg, route: "/web-development" },
    { id: 3, title: "UI/UX DESIGNING", img: UIimg, route: "/ui-ux-designing" },
    { id: 4, title: "GRAPHIC DESIGNING", img: GDimg, route: "/graphic-designing" },
    { id: 5, title: "PHOTO/VIDEOGRAPHY", img: PVimg, route: "/photo-videography" },
    { id: 6, title: "BRANDING", img: BDimg, route: "/branding" },
    { id: 7, title: "EVENT MANAGEMENT", img: EMimg, route: "/event-management" },
  ];

  const handleContact = () => {
    navigate('/contact-us')
  }
  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="service-section">
        <h1 className="service-sub-title">SERVICES</h1>
        <h1 className="service-main-title">
          <span>C</span><span>O</span><span>N</span><span>C</span><span>E</span><span>P</span><span>T</span><span>.</span>
          <span>C</span><span>R</span><span>E</span><span>A</span><span>T</span><span>E</span><span>.</span>
          <span>C</span><span>O</span><span>N</span><span>Q</span><span>U</span><span>E</span><span>R</span><span>.</span>
        </h1>
        <div className="service-description">
          The True Potential Of Your Business With Our Digital Engineering Services
        </div>
        <div className="underline"></div>
      </div>

      <div className="h-[fit-content] w-[100%] bg-black">
        <div className="services-container">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card ${activeId === service.id ? "active" : ""}`}
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
              // onClick={() => service.route && navigate(service.route)}
              onClick={() => {
                if (service.external) {
                  window.location.href = service.route; // Redirect to external link
                } else {
                  navigate(service.route); // Navigate to internal route
                }
              }}
            >
              <img src={service.img} alt={service.title} className="service-icon" />
            </div>
          ))}
        </div>
      </div>

      <div className="section-container">
        <div className="floating-circle-1 circle-1">
          <img src={propertyOne} alt="property" className="circle-icon" />
        </div>
        <div className="floating-circle circle-2">
          <img src={propertyTwo} alt="property" className="circle-icon" />
        </div>
        <div className="floating-circle-1 circle-3">
          <img src={propertyThree} alt="property" className="circle-icon" />
        </div>
        <div className="floating-circle circle-4">
          <img src={propertyFour} alt="property" className="circle-icon" />
        </div>
        <div className="floating-circle-1 circle-5">
          <img src={propertyFive} alt="property" className="circle-icon" />
        </div>
        <div className="floating-circle circle-6">
          <img src={propertySix} alt="property" className="circle-icon" />
        </div>
        <h3 className="section-container-heading">
          Our Agile Solutions Have Resulted In Recurring <br /> Collaborations With Leading Enterprises Like <br /> IKEA, Adidas, KPMG, And Many More.
        </h3>
        <a href="" className="cta-button" onClick={handleContact}>PARTNER WITH US
          <span className="arrow-icon"> <img src={rightArrow} alt="arrow" /></span>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
