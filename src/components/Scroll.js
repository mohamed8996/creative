import React, { useState, useEffect, useRef } from 'react';
import Cardbackground from "../components/Assets/Card-bg.jpg";
import Card from "../components/Assets/Card-logo.png";
import '../Styles/HomeSlide5.css'

const SemiCircularCardAnimation = () => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false)
      useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.3 }
      );
  
      if (sectionRef.current) {observer.observe(sectionRef.current);}
      return () => {
        if (sectionRef.current) {observer.unobserve(sectionRef.current);}
      };
    }, []);

    const cards = [
    {
      id: 1,
      title: "LOREM IPSUM",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sed commodi consequuntur expedita eaque delectus repellat, repudiandae officiis fugiat nobis consectetur, nihil debitis libero natus eligendi vitae minima tempora deserunt!",
      author: "LOREM IPSUM, CEO-DK"
    },
    {
      id: 2,
      title: "LOREM IPSUM",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sed commodi consequuntur expedita eaque delectus repellat, repudiandae officiis fugiat nobis consectetur, nihil debitis libero natus eligendi vitae minima tempora deserunt!",
      author: "LOREM IPSUM, CEO-DK"
    },
    {
      id: 3,
      title: "LOREM IPSUM",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sed commodi consequuntur expedita eaque delectus repellat, repudiandae officiis fugiat nobis consectetur, nihil debitis libero natus eligendi vitae minima tempora deserunt!",
      author: "LOREM IPSUM, CEO-DK"
    },
    {
      id: 4,
      title: "LOREM IPSUM",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sed commodi consequuntur expedita eaque delectus repellat, repudiandae officiis fugiat nobis consectetur, nihil debitis libero natus eligendi vitae minima tempora deserunt!",
      author: "LOREM IPSUM, CEO-DK"
    },  
    {
      id: 5,
      title: "LOREM IPSUM",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sed commodi consequuntur expedita eaque delectus repellat, repudiandae officiis fugiat nobis consectetur, nihil debitis libero natus eligendi vitae minima tempora deserunt!",
      author: "LOREM IPSUM, CEO-DK"
    }
  ];
 
  // Calculate positions along scattered pattern
  // const getCardPosition = (index, activeIdx) => {
  //   const diff = index - activeIdx;
  //   const isOdd = index % 2 !== 0;
  //   const tiltDirection = isOdd ? 1 : -1;
  //   const tiltAmount = Math.abs(diff) * 2 + 4;

  //   if (diff === 0) {
  //     return {
  //       x: '50%',
  //       y: 0,
  //       scale: 1,
  //       rotate: 5 * tiltDirection,
  //       opacity: 1,
  //       zIndex: 40,
  //     };
  //   } else if (diff === 1) {
  //     return {
  //       x: '180%',
  //       y: '70%',
  //       scale: 0.9,
  //       rotate: tiltAmount * tiltDirection,
  //       opacity: 0.8,
  //       zIndex: 30
  //     };
  //   } else if (diff === 2) {
  //     return {
  //       x: '330%', 
  //       y: '190%',
  //       scale: 0.8,
  //       rotate: tiltAmount * tiltDirection,
  //       opacity: 0.6,
  //       zIndex: 20
  //     };
  //   } else if (diff === -1) {
  //     return {
  //       x: '-60%',
  //       y: '60%',
  //       scale: 0.9,
  //       rotate: tiltAmount * tiltDirection,
  //       opacity: 0.8,
  //       zIndex: 30
  //     };
  //   } else if (diff === -2) {
  //     return {
  //       x: '-160%',
  //       y: '140%',
  //       scale: 0.8,
  //       rotate: tiltAmount * tiltDirection,
  //       opacity: 0.6,
  //       zIndex: 20
  //     };
  //   } else {
  //     const randomOffset = (index * 27) % 40 - 20;
  //     return {
  //       x: diff > 0 ? `${350 + randomOffset}%` : `${-200 + randomOffset}%`,
  //       y: `${150 + (index * 31) % 60}%`,
  //       scale: 0.7,
  //       rotate: (tiltAmount + 5) * tiltDirection,
  //       opacity: diff > 0 ? 0.3 : 0.4,
  //       zIndex: 10
  //     };
  //   }
  // };

  const getCardPosition = (index, activeIdx) => {
    const diff = index - (activeIdx - 1);  // Shift the starting position to 1
    const isOdd = index % 2 !== 0;
    const tiltDirection = isOdd ? 1 : -1;
    const tiltAmount = Math.abs(diff) * 2 + 4;

    if (diff === -1) { 
      return { 
        x: '-60%',  
        y: '60%',
        scale: 0.9,
        rotate: tiltAmount * tiltDirection,
        opacity: 0.8,
        zIndex: 30,
      };
    } else if (diff === 0) {
      return {
        x: '50%',   // This is now the 1st card position
        y: 0,
        scale: 1,
        rotate: 5 * tiltDirection,
        opacity: 1,
        zIndex: 40,
      };
    } else if (diff === 1) {
      return {
        x: '180%',  // Initially, the 1st card starts here
        y: '70%',
        scale: 0.9,
        rotate: tiltAmount * tiltDirection,
        opacity: 0.8,
        zIndex: 30,
      };
    } else if (diff === 2) {
      return {
        x: '330%', 
        y: '190%',
        scale: 0.8,
        rotate: tiltAmount * tiltDirection,
        opacity: 0.6,
        zIndex: 20
      };
    } else if (diff === -2) {
      return {
        x: '-160%',
        y: '140%',
        scale: 0.8,
        rotate: tiltAmount * tiltDirection,
        opacity: 0.6,
        zIndex: 20
      };
    } else {
      const randomOffset = (index * 27) % 40 - 20;
      return {
        x: diff > 0 ? `${350 + randomOffset}%` : `${-200 + randomOffset}%`,
        y: `${150 + (index * 31) % 60}%`,
        scale: 0.7,
        rotate: (tiltAmount + 5) * tiltDirection,
        opacity: diff > 0 ? 0.3 : 0.4,
        zIndex: 10
      };
    }
};


  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollPercentage = Math.min(
          Math.max((windowHeight - rect.top) / containerHeight, 0),
          1
        );

        const cardIndex = Math.floor(scrollPercentage * cards.length);
        setActiveCard(Math.min(cards.length - 1, cardIndex));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards.length]);
 
  return (
    <div
      ref={containerRef}
      className="bg-black text-white min-h-screen flex flex-col items-center overflow-x-clip">
      <div className="w-full max-w-6xl px-4 py-16">
      <div className="h-[40vh]"></div>
        {/* Cards container */}
        <div className="sticky top-16 flex flex-col items-center justify-center">
          <div className="relative w-screen h-96">
            {cards.map((card, index) => {
              const position = getCardPosition(index, activeCard);
              
              return (
                <div
                  key={card.id}
                  className="absolute w-[28%] h-[70%] p-6 rounded-lg backdrop-blur-sm transition-all duration-700"
                  // <div
                  // key={card.id}
                  // className="absolute w-full h-[20] max-w-md p-6 rounded-xl transition-all duration-700 relative overflow-hidden"
                  style={{
                    border: "2px solid #ffd700",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                    transform: `translate(${position.x}, ${position.y}) scale(${position.scale}) rotate(${position.rotate}deg)`,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                    top: "50%",
                    left: "30%",
                    marginLeft: "-10rem",
                    marginTop: "-8rem",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${Cardbackground})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      opacity: 0.2,
                      zIndex: -1,
                    }}
                  ></div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 flex items-center justify-center mr-2">
                      <img src={Card} alt="Card-logo" />
                    </div>          
                    <h3 className="text-lg font-semibold">{card?.title}</h3>
                  </div>
                  <p className="text-sm mb-4">"{card.quote}"</p>
                  <p className="text-xs text-right mt-4">— {card?.author}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Spacers to allow scrolling */}
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
      
      <div ref={sectionRef} className="absolute w-full px-20 flex items-center overflow-hidden">
       <div className={`w-1/2 h-full flex flex-col justify-center py-10 ${isVisible ? "zoom-effects" : ""}`}>
         <h3 className="testimonies-title">TESTIMONIES</h3>
         <h2 className="testimonies-main-text">FIRST-HAND OPINIONS OF<br />CLIENTS ON THEIR <br />PARTNERSHIP EXPERIENCE
         </h2>
       </div>
       <div className={`w-1/2 h-full flex items-center py-10 ${isVisible ? "zoom-effects" : ""}`}>
         <h4 className="testimonies-description w-full text-right text-justify">
           WE SERVE OUR CLIENTS WITH A PLATE FULL OF INNOVATIVE DESIGN<br />
           SOLUTIONS, SKILLFULLY TOPPED WITH A GREAT USER EXPERIENCE<br /> AND A
           PERFECT BLEND OF{" "}
           <span className="text-yellow-400">PASSION</span> AND{" "}
           <span className="text-yellow-400">EXPERTISE</span>.
         </h4>
       </div>
         </div>
    </div>
  );
};
 
export default SemiCircularCardAnimation;