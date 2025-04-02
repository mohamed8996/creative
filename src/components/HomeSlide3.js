import React, { useEffect, useState, useRef } from "react";
import "../Styles/HomeSlide3.css";
import DM from "./Assets/DM.png";
import WD from "./Assets/WD.png";
import UI from "./Assets/UI.png";
import GD from "./Assets/GD.png";
import PV from "./Assets/PV.png";
import BD from "./Assets/BD.png";
import EM from "./Assets/EM.png";

const Slide3 = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [containerScrollable, setContainerScrollable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const items = [DM, WD, UI, GD, PV, BD, EM];
  const totalItems = items.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContainerVisible(entry.intersectionRatio === 1);
      },
      { threshold: 1.0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setIndex(0);
    setContainerScrollable(false);
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!isContainerVisible || containerScrollable) return;
  
      event.preventDefault();
  
      if (!isScrolling) {
        setIsScrolling(true);
        setIndex((prevIndex) => {
          if (event.deltaY > 0) {
            if (prevIndex < totalItems - 1) {
              return prevIndex + 1;
            } else {
              setContainerScrollable(true);
              return prevIndex;
            }
          } else {
            setContainerScrollable(false);
            return prevIndex > 0 ? prevIndex - 1 : prevIndex;
          }
        });
  
        setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      }
    };
  
    if (isContainerVisible) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    }
  
    return () => window.removeEventListener("wheel", handleScroll);
  }, [isScrolling, totalItems, containerScrollable, isContainerVisible]);
  
  return (
    <div className="service-offering" ref={sectionRef}>
    <div className={`so-content ${isVisible ? "zoom-effect-slide3" : ""}`}>
    <div className="so-content-width">
          <h1 className="so-title">SERVICE OFFERING</h1>
          <h5 className="so-description">
            WE SERVE OUR CLIENTS WITH A PLATE FULL OF INNOVATIVE DESIGN SOLUTIONS, SKILLFULLY TOPPED WITH A GREAT USER EXPERIENCE AND A PERFECT BLEND OF{" "}
            <span className="so-highlight">PASSION</span> AND <span className="so-highlight">EXPERTISE</span>.
          </h5>
        </div>
      </div>
      <div className="so-empty-spacer">
        <div ref={containerRef} className="containera">
          <div className="image-containera">
            {items.map((image, i) => {
              let position = i - index;
              return (
                <img
                  key={i}
                  src={image}
                  alt={`Slide ${i}`}
                  className={`imagea ${position === 0 ? "active" : position === -1 ? "prev" : position === 1 ? "nextu" : "hiddenu"}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
