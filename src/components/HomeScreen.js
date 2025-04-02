import React from "react";
import "./../index.css";
import "../Styles/HomeScreen.css";
import Slide1 from "../components/HomeSlide1"
import Slide2 from "../components/HomeSlide2"
import Slide3 from "../components/HomeSlide3";
import Slide4 from "../components/HomeSlide4";
import Slide6 from "../components/HomeSlide6";
import Scroll from "../components/Scroll"

const HomeScreen = () => {

  return (
    <div className="h-[100vh]">
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Scroll className='h-[200vh]'/>
      <Slide6 />
    </div>
  );
};

export default HomeScreen;
