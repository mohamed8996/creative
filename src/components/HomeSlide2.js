import React, { useEffect, useState } from "react";
import "../Styles/HomeSlide2.css";
import img1 from "../components/Assets/img1.png";
import img2 from "../components/Assets/img2.png";
import img3 from "../components/Assets/img3.png";
import img4 from "../components/Assets/img4.png";
import img5 from "../components/Assets/img5.png";
import img6 from "../components/Assets/img6.png";
import StoresSlide from "./StoresSlide";

const Slide2 = () => {
  const companyLogos = [img1, img2, img3, img4, img5, img6];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % companyLogos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slide2-container">
      <div className="slide2-top">
        <div className="slide2-left">
          <h1 className="slide2-heading">WE'VE WORKED WITH</h1>
        </div>
        <div className="slide2-right">
          <div className="company-slider">
            <div className="company-track">
            {[...companyLogos, ...companyLogos].map((logo, index) => (
                <img key={index} src={logo} alt={`Company ${index + 1}`} className={index === activeIndex ? "active" : ""} />
              ))}
            </div>
          </div>
        </div> 
      </div>
      <div className="slide2-bottom">
        <div className="bottom-top">
          <div className="text-left w-[50%]">
            <h3 className="subtext">PORTFOLIO</h3>
            <h1 className="text-white">FEATURED WORK</h1>
          </div>
          <div className="text-left w-[50%]">
            <p className=" text-white mt-6">A SELECTION OF OUR MOST PASSIONATELY CRAFTED WORKS WITH FORWARD-THINKING CLIENTS AND FRIENDS OVER THE YEARS.</p>
          </div>
          </div>
        <div className="bottom-below">
          <StoresSlide />
        </div>
      </div>
    </div>
  );
};

export default Slide2;
