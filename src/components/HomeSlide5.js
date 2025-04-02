import React, { useState, useEffect, useRef } from "react";
import Cardbackground from "../components/Assets/Card-bg.jpg";
import Card from "../components/Assets/Card-logo.png";
import "../Styles/HomeSlide5.css";

const HomeSlide5 = () => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const cards = [
    { id: 1, title: "LOREM IPSUM", quote: "Lorem ipsum dolor sit amet...", author: "LOREM IPSUM, CEO-DK" },
    { id: 2, title: "LOREM IPSUM", quote: "Lorem ipsum dolor sit amet...", author: "LOREM IPSUM, CEO-DK" },
    { id: 3, title: "LOREM IPSUM", quote: "Lorem ipsum dolor sit amet...", author: "LOREM IPSUM, CEO-DK" },
    { id: 4, title: "LOREM IPSUM", quote: "Lorem ipsum dolor sit amet...", author: "LOREM IPSUM, CEO-DK" },
    { id: 5, title: "LOREM IPSUM", quote: "Lorem ipsum dolor sit amet...", author: "LOREM IPSUM, CEO-DK" },
  ];

  const getCardPosition = (index, activeIdx) => {
    const diff = index - activeIdx;
    const tiltDirection = index % 2 !== 0 ? 1 : -1;
    const tiltAmount = Math.abs(diff) * 2 + 4;

    if (diff === 0) {
      return { x: "50%", y: 0, scale: 1, rotate: 5 * tiltDirection, opacity: 1, zIndex: 40 };
    } else if (diff === 1) {
      return { x: "220%", y: "90%", scale: 0.9, rotate: tiltAmount * tiltDirection, opacity: 0.8, zIndex: 30 };
    } else if (diff === 2) {
      return { x: "330%", y: "190%", scale: 0.8, rotate: tiltAmount * tiltDirection, opacity: 0.6, zIndex: 20 };
    } else if (diff === -1) {
      return { x: "-60%", y: "60%", scale: 0.9, rotate: tiltAmount * tiltDirection, opacity: 0.8, zIndex: 30 };
    } else if (diff === -2) {
      return { x: "-160%", y: "140%", scale: 0.8, rotate: tiltAmount * tiltDirection, opacity: 0.6, zIndex: 20 };
    } else {
      return {
        x: diff > 0 ? `${350 + index * 10}%` : `${-200 + index * 10}%`,
        y: `${150 + index * 15}%`,
        scale: 0.7,
        rotate: (tiltAmount + 5) * tiltDirection,
        opacity: 0.3,
        zIndex: 10,
      };
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;

      const scrollPercentage = scrollTop / scrollHeight;
      const cardIndex = Math.min(Math.floor(scrollPercentage * cards.length), cards.length - 1);

      setActiveCard(Math.max(0, cardIndex));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [cards.length]);
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


  return (
    <div ref={containerRef} className="bg-black text-white h-screen overflow-y-auto scrollbar-hide">
       <div ref={sectionRef} className="absolute w-full px-20 flex items-center overflow-hidden">
      <div className={`w-1/2 h-full flex flex-col justify-center py-10 ${isVisible ? "zoom-effect" : ""}`}>
        <h3 className="testimonies-title">TESTIMONIES</h3>
        <h2 className="testimonies-main-text">FIRST-HAND OPINIONS OF<br />CLIENTS ON THEIR <br />PARTNERSHIP EXPERIENCE
        </h2>
      </div>
      <div className={`w-1/2 h-full flex items-center py-10 ${isVisible ? "zoom-effect" : ""}`}>
        <h4 className="testimonies-description w-full text-right text-justify">
          WE SERVE OUR CLIENTS WITH A PLATE FULL OF INNOVATIVE DESIGN<br />
          SOLUTIONS, SKILLFULLY TOPPED WITH A GREAT USER EXPERIENCE<br /> AND A
          PERFECT BLEND OF{" "}
          <span className="text-yellow-400">PASSION</span> AND{" "}
          <span className="text-yellow-400">EXPERTISE</span>.
        </h4>
      </div>
        </div>
      <div className="w-full max-w-6xl px-4 py-16">
        <div className="h-[50vh]"></div>
        <div className="sticky flex flex-col items-center justify-center">
          <div className="relative w-full mb-30 h-20">
            {cards.map((card, index) => {
              const position = getCardPosition(index, activeCard);
              return (
                <div
                  key={card.id}
                  className="absolute w-full h-[20] max-w-md p-6 rounded-xl transition-all duration-700 relative overflow-hidden"
                  style={{
                    border: "2px solid #ffd700",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transform: `translate(${position.x}, ${position.y}) scale(${position.scale}) rotate(${position.rotate}deg)`,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                    top: "50%",
                    left: "50%",
                    marginLeft: "-8rem",
                    marginTop: "-10rem",
                    padding: "1.5rem",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${Cardbackground})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      opacity: 0.3,
                      zIndex: -1,
                    }}
                  ></div>
                  <div className="flex items-center mb-4 h-[10%]">
                    <div className="p-0 mr-2">
                      <img src={Card} alt="Card-logo" />
                    </div>
                    <span className="text-lg tracking-wide uppercase">
                      <h3>{card.title}</h3>
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300">{card.quote}</p>
                  <p className="text-xs text-gray-400 font-semibold text-right mt-4">— {card.author}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-[50vh]"></div>
      </div>
    </div>
  );
};

export default HomeSlide5;