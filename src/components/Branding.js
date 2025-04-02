import React from "react";
import Game from '../components/Assets/game.jpg';
import man from '../components/Assets/man.jpg';
import music from '../components/Assets/music.jpg';
import '../Styles/Branding.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Branding = () => {
  return (
    <div className="branding-container">
        <Navbar/>
    <div className="branding-div">
      <div className="branding-text">
        <h1>Branding</h1>
        <p>
          Thank you for visiting our Branding! We are currently working on
          updating my projects and content to better showcase my skills and experience.
        </p>
        <p className="branding-highlight">STAY TUNED FOR EXCITING UPDATES !</p>
      </div>
      <div className="branding-images">
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

export default Branding;
