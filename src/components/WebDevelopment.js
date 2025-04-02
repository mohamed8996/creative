import React from "react";
import Game from '../components/Assets/game.jpg';
import man from '../components/Assets/man.jpg';
import music from '../components/Assets/music.jpg';
import '../Styles/WebDevelopment.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const WebDevelopment = () => {
  return (
    <div className="web-development-container">
        <Navbar/>
    <div className="web-development-div">
      <div className="web-development-text">
        <h1>Web Development</h1>
        <p>
          Thank you for visiting our Web Development! We are currently working on
          updating my projects and content to better showcase my skills and experience.
        </p>
        <p className="web-development-highlight">STAY TUNED FOR EXCITING UPDATES !</p>
      </div>
      <div className="web-development-images">
        <div className="music-container">
          <div className="image-wrapper"><img src={music} alt="Music" /></div>
        </div>
        <div className="stack-images">
          <div className="image-wrapper"><img src={Game} alt="Gaming" /></div>
          <div className="image-wrapper"><img src={man} alt="Travel" /></div>
        </div>
      </div>
    </div>
        <Footer/>
    </div>
  );
};

export default WebDevelopment;
