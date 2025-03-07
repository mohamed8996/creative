import React from "react";
import "./../index.css";
import "../Styles/HomeScreen.css";
import Slide1 from "../components/HomeSlide1"
import Slide2 from "../components/HomeSlide2"
import Slide3 from "../components/HomeSlide3";
import Slide4 from "../components/HomeSlide4";
import Slide5 from "../components/HomeSlide5";
import Slide6 from "../components/HomeSlide6";

const HomeScreen = () => {

  return (
    <div className="h-[100vh]">
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
    </div>
  );
};

export default HomeScreen;
