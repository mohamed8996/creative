import React from "react";
import Game from '../components/Assets/game.jpg';
import man from '../components/Assets/man.jpg';
import music from '../components/Assets/music.jpg';
import '../Styles/UiUxDesigning.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const UiUxDesigning = () => {
  return (
    <div className="uiux-designing-container">
        <Navbar/>
    <div className="uiux-designing-div">
      <div className="uiux-designing-text">
        <h1>Ui/Ux Designing</h1>
        <p>
          Thank you for visiting our Ui/Ux Designing! We are currently working on
          updating my projects and content to better showcase my skills and experience.
        </p>
        <p className="uiux-designing-highlight">STAY TUNED FOR EXCITING UPDATES !</p>
      </div>
      <div className="uiux-designing-images">
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

export default UiUxDesigning;
