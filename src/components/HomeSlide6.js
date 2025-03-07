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

  return (
    <div className="home-slide-container">
      <div className="h-[75%] topper">
      <div className=" h-[10%]"> <h2 className="contact-us">CONTACT US</h2></div>
        <div className="main-content h-[40%]">
          <div className="left-section">
            <h1 className="heading">
              SHALL WE <br /> GET <br /> STARTED?
            </h1>
          </div>
          <div className="right-section">
            <div className="services-details-container">
              <div>
                <p className="section-title">I'm Looking For Help In..</p>
                <div className="service-buttons">
                  {services.map((service) => (
                    <button
                      key={service}
                      className={`service-button ${
                        selectedServices.includes(service) ? "selected" : ""
                      }`}
                      onClick={() => toggleService(service)}
                    >
                     <h5>{service.toUpperCase()}</h5>
                    </button>
                  ))}
                </div>
              </div>
              <div className="user-details">
                <p className="section-title">My Detail’s</p>
                <div className="input-group">
                  <div className="input-row">
                    <input
                      type="text"
                      placeholder="Name"
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="input-field"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Mail Id"
                    className="input-field w-[50%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-button h-[15%]">
          <p>Would You Rather Directly Get In Touch? <br />We Always Have The Time For A Call Or Email!</p>
          <button className="book-button"><h5>BOOK A CALL</h5><span className="icon-container"><BiSolidPhoneCall  className="phone-icon" /></span></button>        
          </div>
        <div className="footer-contact h-[10%]">
          <a href="mailto:support@thedesigntrip.com" className="contact-link flex">Support@Thedesigntrip.Com<span><IoArrowForwardCircleOutline className="h-5 w-5 mt-1 ml-2" /></span>
          </a>
          <a href="tel:+917589960911" className="contact-link flex">+91 75899 60911<span><IoArrowForwardCircleOutline className="h-5 w-5 mt-1 ml-2" /></span></a>
        </div>
      </div>
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
