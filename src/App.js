import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Upcoming from "./components/Upcoming";
import LoadingScreen from "./components/LoadingScreen";
import HomeScreen from "./components/HomeScreen";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
