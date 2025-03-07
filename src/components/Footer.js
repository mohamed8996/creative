/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "../Styles/HomeSlide6.css";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { BiSolidPhoneCall  } from "react-icons/bi";

const HomeSlide6 = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    "Digital Marketing",
    "Web Development",
    "Graphic Designing",
    "UI/UX",
    "Photo/ Videography",
    "Branding",
    "Event Management",
  ];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  //test

  return (
    <div className="home-slide-container">
      <div className="footerbg h-[40%]">
        <div className="footer">
            <div className="footer-top">
          <div className="footer-left">
            <h1 className="footer-logo"><h1 >cruxx</h1></h1>
            <button className="footer-button"><h5>LET'S TALK</h5></button>
          </div>
          <div className="footer-right">
            <div className="footer-right1">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">About Us</a>
            <a href="#">Blogs</a>
            <a href="#">Contact US</a>
          </div>
          <div className="footer-right2">
            <div class="scroll-to-top"><span class="arrow-up">▲</span></div>
            <div>© 2025 Abs, Inc.</div>
          </div>
          </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Cruxx Solutions LLP | All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide6;
