import React from "react";
import Game from '../components/Assets/game.jpg';
import man from '../components/Assets/man.jpg';
import music from '../components/Assets/music.jpg';
import '../Styles/PhotoVideography.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const PhotoVideography = () => {
  return (
    <div className="photo-videography-container">
        <Navbar/>
    <div className="photo-videography-div">
      <div className="photo-videography-text">
        <h1>Photo Videography</h1>
        <p>
          Thank you for visiting our Photo Videography! We are currently working on
          updating my projects and content to better showcase my skills and experience.
        </p>
        <p className="photo-videography-highlight">STAY TUNED FOR EXCITING UPDATES !</p>
      </div>
      <div className="photo-videography-images">
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

export default PhotoVideography;
