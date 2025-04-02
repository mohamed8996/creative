import React from "react";
import Game from '../components/Assets/game.jpg';
import man from '../components/Assets/man.jpg';
import music from '../components/Assets/music.jpg';
import '../Styles/DigitalMarketing.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const DigitalMarketing = () => {
  return (
    <div className="digital-marketing-container">
        <Navbar/>
    <div className="digital-marketing-div">
      <div className="digital-marketing-text">
        <h1>Digital Marketing</h1>
        <p>
          Thank you for visiting our Digital Marketing! We are currently working on
          updating my projects and content to better showcase my skills and experience.
        </p>
        <p className="digital-marketing-highlight">STAY TUNED FOR EXCITING UPDATES !</p>
      </div>
      <div className="digital-marketing-images">
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

export default DigitalMarketing;
