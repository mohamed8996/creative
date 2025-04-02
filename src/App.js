import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import HomeScreen from "./components/HomeScreen";
import Portfolio from "./components/Portfolio";
import Blogs from  "./components/Blogs";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services"
import ContactUs from "./components/ContactUs";
import DigitalMarketing from "./components/DigitalMarketing";
import EventManagement from "./components/EventManagement";
import WebDevelopment from "./components/WebDevelopment";
import UiUxDesigning from "./components/UiUxDesigning";
import GraphicDesigning from "./components/GraphicDesigning";
import PhotoVideography from "./components/PhotoVideography";
import Branding from "./components/Branding";
import ScrollToTop from "./components/ScrollToTop";
import Products from "./components/Products";

const App = () => {
  const RedirectToExternal = () => {
    useEffect(() => {
        window.location.href = "https://cruxx.ideassion.in";
    }, []);

    return null; // Nothing is rendered
};
  return (
    <Router>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/product/:id" element={<Products />} />

        {/* <Route path="/digital-marketing" element={<DigitalMarketing />} /> */}
        <Route path="/digital-marketing" element={<RedirectToExternal />} />
        <Route path="/event-management" element={<EventManagement />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/ui-ux-designing" element={<UiUxDesigning />} />
        <Route path="/graphic-designing" element={<GraphicDesigning />} />
        <Route path="/photo-videography" element={<PhotoVideography />} />
        <Route path="/branding" element={<Branding />} />
        
      </Routes>
    </Router>
  );
};

export default App;
