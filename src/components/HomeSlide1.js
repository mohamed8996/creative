import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import "./../index.css";
import "../Styles/HomeSlide1.css";
import stores1 from "../components/Assets/stores1.png";
import stores2 from "../components/Assets/stores2.jpg";
import stores3 from "../components/Assets/stores3.png";
import stores4 from "../components/Assets/stores4.png";
import stores5 from "../components/Assets/stores5.png";
import { FaInstagram } from "react-icons/fa";
import ParticleEffect from "./ParticalEffect";


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
  const itemsloop = [...items, ...items];
  const [showCursor, setShowCursor] = useState(true);

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
    const scrollContainer = () => {
      if (!containerRef.current) return;
  
      const { scrollWidth, clientWidth, scrollLeft } = containerRef.current;
  
      if (scrollLeft + clientWidth >= scrollWidth) {
        containerRef.current.scrollLeft = 0;
      } else {
        containerRef.current.scrollBy({ left: clientWidth / 2, behavior: "smooth" });
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
    <div className="homeslide-container" onMouseMove={handleMouseMove}>
      <Navbar />
      {showCursor && (
      <div className="cursor-light" style={{ top: `${cursorPosition.y}px`, left: `${cursorPosition.x}px`}}></div>)}
      <div className="content-container">
        <div className="content-div">
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
          <div className="home-text-banner">
            <p>
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR.?//LOREM IPSUM LOREM IPSUM
              DOLOR SIT AMET CONSECTETUR.?//LOREM IPSUM
            </p>
          </div>
        </div>
        <div className="content-div-side">
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
                  {/* <h2> Upcoming Blogs <img src={ArrowGif} alt="Animation" className="inline-block w-10 h-10 ml-80" /></h2> */}
              </div>
              <div className=" h-[75%]">
              <ParticleEffect
              positions={["right-last", 'rr', 'rl', 'rd', 'rdd', 'rdl', 'rdr']}
              particlesPerPosition={7}
              bubble={true}
              />
                <div className="img-container h-[80%]" ref={containerRef}>
                  {itemsloop.map((item, index) => (
                    <div key={index}
                      className={`card relative cursor-pointer ${index === activeIndex ? "active" : "inactive"}`}
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      <img src={item.image} alt={`Card ${index}`} />
                      <div className={`icon-overlay ${hoverIndex === index ? "opacity-100" : "opacity-0"}`}>
                        <FaInstagram className="text-white text-4xl transition-transform transform scale-100 hover:scale-110" />
                      </div>
                    </div>
                  ))}  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default HomeSlide1;
