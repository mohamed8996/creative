import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import "./../index.css";
import "../Styles/HomeSlide1.css";
import stores1 from "../components/Assets/stores1.png";
import stores2 from "../components/Assets/stores2.jpg";
import stores3 from "../components/Assets/stores3.png";
import stores4 from "../components/Assets/stores4.png";
import stores5 from "../components/Assets/stores5.png";
import ArrowGif from "./Assets/uparrow.gif";
import { FaInstagram } from "react-icons/fa";
import ParticleEffect from "./ParticalEffect";
import { motion } from "framer-motion";
import Slide2 from "./HomeSlide2"


const HomeSlide1 = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const words = ["DESIGN", "INNOVATION", "STORY TELLING"];
  const [index, setIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverIndex, setHoverIndex] = useState(null);
  const items = [
    { image: stores1, link: "https://instagram.com/example1" },
    { image: stores2, link: "https://instagram.com/example2" },
    { image: stores3, link: "https://instagram.com/example3" },
    { image: stores4, link: "https://instagram.com/example4" },
    { image: stores5, link: "https://instagram.com/example5" },
  ];
  const [showCursor, setShowCursor] = useState(true);
  const [showNextScreen, setShowNextScreen] = useState(false);

  const handleMouseMove = (e) => {
    if (e.target.closest(".blog-container")) {
      setShowCursor(false);
    } else {
      setShowCursor(true);
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words?.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let direction = 1
  
    const scrollContainer = () => {
      if (!containerRef.current) return;
  
      const scrollWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;
      const currentScroll = containerRef.current.scrollLeft;
  
      if (direction === 1) {
        if (currentScroll + clientWidth >= scrollWidth) {
          direction = -1;
        } else {
          containerRef.current.scrollBy({ left: clientWidth / 2, behavior: "smooth" });
        }
      } else {
        if (currentScroll <= 0) {
          direction = 1;
        } else {
          containerRef.current.scrollBy({ left: -clientWidth / 2, behavior: "smooth" });
        }
      }
    };
  
    const interval = setInterval(scrollContainer, 2000);
  
    const handleScroll = () => {
      if (!containerRef.current) return;
  
      const scrollLeft = containerRef.current.scrollLeft;
      const cardWidth = containerRef.current.children[0]?.offsetWidth || 0;
  
      if (cardWidth > 0) {
        const newIndex = Math.round(scrollLeft / cardWidth);
        setActiveIndex(newIndex);
      }
    };
  
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      clearInterval(interval);
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);  

  return (
    <div className="homeslide-container px-10" onMouseMove={handleMouseMove}>
      {/* <img src={ArrowGif}alt="Animation"className="fixed bottom-5 right-5 w-10 h-10 rotate-[-225deg]" onClick={() => setShowNextScreen(true)}/> */}
      {/* <img src={ArrowGif}alt="Animation"className="fixed bottom-5 right-5 w-10 h-10 rotate-[-225deg]"/> */}
      { !showNextScreen && showCursor && (
      <div className="cursor-light" style={{ top: `${cursorPosition.y}px`, left: `${cursorPosition.x}px`}}></div>)}
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="content-container">
        <div className="content p-10">
          <div className="abi">
            <div className="header-content">
              {" "}
              <h1>WHERE</h1> <span>Creativity Meets Strategy</span>{" "}
            </div>{" "}
            <h3>
              {" "}
              BUILDING BOLD EXPERIENCES THROUGH{" "}
              <span className="highlight word-transition">
                {words[index]}
              </span>{" "}
            </h3>
            <div className="btn-container">
              <button className="cta-btn">
                {" "}
                <h4>LET'S TALK</h4>
              </button>
            </div>
          </div>
          <div className="text-banner">
            <h6>
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR.?//LOREM IPSUM LOREM IPSUM
              DOLOR SIT AMET CONSECTETUR.?//LOREM IPSUM
            </h6>
          </div>
        </div>
        <div className=" h-[100%] w-[50%] p-10">
          <div className="blog-container">
            <div className="blog-section">
              <div className="blog-header h-[15%]">
              <div class="container">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
                  <h2> Upcoming Blogs <img src={ArrowGif} alt="Animation" className="inline-block w-10 h-10 ml-80" /></h2>
              </div>
              <div className=" h-[75%]">
              <ParticleEffect
              positions={["right-last", 'rr', 'rl', 'rd', 'rdd', 'rdl', 'rdr']}
              particlesPerPosition={7}
              bubble={true}
              />
                <div className="img-container h-[80%]" ref={containerRef}>
                  {items.map((item, index) => (
                    <div key={index}
                      className={`card relative cursor-pointer ${index === activeIndex ? "active" : "inactive"}`}
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      <img src={item.image} alt={`Card ${index}`} />
                      {hoverIndex === index && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FaInstagram className="text-white text-4xl transition-transform transform scale-100 hover:scale-110" />
                        </div>
                      )}
                    </div>
                  ))}  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showNextScreen && (
        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className='slideContainer'
          >
       <div className='slideContainer'> 
        <Slide2/>      
        </div>  
       </motion.div>
      )}
    </div>
    // </div>
  );
};

export default HomeSlide1;
