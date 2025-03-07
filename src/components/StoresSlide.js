import React, { useState, useEffect, useRef } from "react";
import "../Styles/StoresSlide.css";
import AdidasImg from "../components/Assets/Adidas.png";
import Ikea from "../components/Assets/Ikea.png";

const Adidas = () => {
  const [isAdidas, setIsAdidas] = useState(true);
  const [moveButtonUp, setMoveButtonUp] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const adidasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (adidasRef.current) {
      observer.observe(adidasRef.current);
    }

    return () => {
      if (adidasRef.current) {
        observer.unobserve(adidasRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Only listen to scroll when visible

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsAdidas(false);
        setMoveButtonUp(true);
      } else if (currentScrollY < lastScrollY) {
        setIsAdidas(true);
        setMoveButtonUp(false);
      }
      
      setScrollPos((prevPos) => (prevPos === 0 ? 15 : 0));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible]);

  return (
    <div ref={adidasRef} className="store-container">
      <div className="store-left">
        <div className={`text-container1 ${moveButtonUp ? "button-up" : ""}`}>
          <h1 className={`store-title ${isAdidas ? "show" : "hide"}`}>ADIDAS</h1>
          <h1 className={`store-title ${isAdidas ? "hide" : "show"}`}>Ikea</h1>
        </div>
        <div className={`text-container2 ${moveButtonUp ? "button-up" : ""}`}>
          <h6 className={`store-subtitle ${isAdidas ? "show" : "hide"}`}>
            Scores The Perfect Digital Landing In UAE
          </h6>
          <h6 className={`store-subtitle ${isAdidas ? "hide" : "show"}`}>
            Expands as a digital consumer experience leader
          </h6>
        </div>
        <div className="store-results">
          <h4 className="store-results-title">RESULTS</h4>
          <div className="store-stats">
            <div className="store-stat">
              <span className={`store-number ${isAdidas ? "show" : "hide"}`}><h1>2M+</h1></span>
              <span className={`store-number ${isAdidas ? "hide" : "show"}`}><h1>2+</h1></span>
              <p className={`store-label ${isAdidas ? "show" : "hide"}`}>App Downloads</p>
              <p className={`store-label ${isAdidas ? "hide" : "show"}`}>Stores using the solution</p>
            </div>
            <div className="store-divider"></div>
            <div className="store-stat">
              <span className={`store-number ${isAdidas ? "show" : "hide"}`}><h1>500K</h1></span>
              <span className={`store-number ${isAdidas ? "hide" : "show"}`}><h1>#1</h1></span>
              <p className={`store-label ${isAdidas ? "show" : "hide"}`}>New Users Acquired</p>
              <p className={`store-label ${isAdidas ? "hide" : "show"}`}>Ikea Users Acquired</p>
            </div>
          </div>
        </div>
        <div className="h-[20%]">
          <button className={`store-button ${moveButtonUp ? "" : "button-up"}`} >
            <h5>View full case Study &gt; </h5>
          </button>
        </div>
      </div>

      <div className="store-right">
        <div className="cursor-light1"></div>
        <div className="image-container">
          <img src={AdidasImg} alt="Adidas Store" className={`image-transition ${isAdidas ? "fade-in" : "fade-out"}`}/>
          <img src={Ikea} alt="IKEA Store" className={`image-transition ${isAdidas ? "fade-out" : "fade-in"}`}/>
        </div>
        <div className="scroll-container">
          <div className="scroll-track"></div>
          <div className="scroll-thumb" style={{ top: `${scrollPos}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Adidas;
