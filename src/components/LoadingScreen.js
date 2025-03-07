import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loadingGif from "./Assets/Circle Loader.gif";
import counterGif from "./Assets/counter.gif";
import downarrow from "./Assets/downarrow.svg";
import "../Styles/LoadingScreen.css";
import ParticleEffect from "./ParticalEffect";
import './../index.css'; 

const LoadingScreen = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showNextScreen, setShowNextScreen] = useState(false);
  const [showText, setShowText] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 3200);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowNextScreen(true);
    }, 3000)
  }, [])

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
      setShowNextScreen(true);
  };
  
  const handleScrollClick = () => {
    navigate("/home");
  };
  return (
    <div
      className="loading-container"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {!showNextScreen ? (
        <>
          {" "}
          <div
            className="cursor-light"
            style={{
              top: `${cursorPosition.y}px`,
              left: `${cursorPosition.x}px`,
            }}
          ></div>
          <div className="gif-container">
            <img
              src={loadingGif}
              alt="Loading..."
              className="loading-gif1 inverted"
            />
            <img src={loadingGif} alt="Loading..." className="loading-gif2" />
          </div>
          <img src={counterGif} alt="Loading..." className="counter-gif" />
        </>
      ) : (
        <div className={`next-screen ${showText ? "show-text" : ""}`}>
          <div className="expanding-image">
            <div
              className="cursor-light"
              style={{
                top: `${cursorPosition.y}px`,
                left: `${cursorPosition.x}px`,
              }}
            ></div>
            <div className="content-up">
              <h1 className="cruxx">CRUXX</h1>
              <h2 className="creative-text">WHERE CREATIVITY MEETS STRATEGY</h2>
              <p className="text-base text-gray-300">
                Building Bold Experiences Through Design
              </p>
            </div>
            <div
              className="flex flex-col items-center gap"
              onClick={handleScrollClick}
            >
              <button className="relative flex flex-col loader items-center justify-center">
                <span className="scroll-text">SCROLL</span>
                <div className="flex flex-col items-center mt-2">
                  <span>
                    <img src={downarrow} alt="downarrow" className="h-2 w-2" />
                  </span>
                  <span className="v2">
                    <img src={downarrow} alt="downarrow" className="h-2 w-2" />
                  </span>
                  <span className="v3">
                    <img src={downarrow} alt="downarrow" className="h-2 w-2" />
                  </span>
                </div>
              </button>
            </div>
          </div>
          <ParticleEffect
             positions={["left-top", "middle-top", "left", "left-bet", "left-last"]}
             particlesPerPosition={7}
             bubble={true}
             bubbleClassName="bubble bubble1 blinking-bubble"
          />
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
