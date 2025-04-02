import React from 'react'
import "../Styles/Blogs.css";
import Navbar from './Navbar';
import Footer from "./Footer"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import productOne from "../components/Assets/productOne.png";
import containerOne from "../components/Assets/container-1.png";
import containerTwo from "../components/Assets/container-2.png";
import containerThree from "../components/Assets/container-3.png";
import containerFour from "../components/Assets/container-4.png";
import containerFive from "../components/Assets/container-5.png";
import containerSix from "../components/Assets/container-6.png";
import todayOne from "../components/Assets/today-1.png";
import todayTwo from "../components/Assets/today-2.png";
import todayThree from "../components/Assets/today-3.png";
import todayFour from "../components/Assets/today-4.png";
import todayFive from "../components/Assets/today-5.png";
import todaySix from "../components/Assets/today-6.png";
import slideOne from "../components/Assets/slide-1.png";
import slideTwo from "../components/Assets/slide-2.png";
import slideThree from "../components/Assets/slide-3.png";
import rightArrow from "../components/Assets/rightarrow.png";
import propertyOne from "../components/Assets/property-1.png";
import propertyTwo from "../components/Assets/property-2.png";
import propertyThree from "../components/Assets/property-3.png";
import propertyFour from "../components/Assets/property-4.png";
import propertyFive from "../components/Assets/property-5.png";
import propertySix from "../components/Assets/property-6.png";
import reviewOne from "../components/Assets/review-1.png";
import reviewTwo from "../components/Assets/review-2.png";
import reviewThree from "../components/Assets/review-3.png";
import reviewFour from "../components/Assets/review-4.png";
import reviewFive from "../components/Assets/review-5.png";
import ads from "../components/Assets/ads.png";
import { useNavigate } from 'react-router-dom';

const images = [slideOne, slideTwo, slideThree, slideTwo, slideOne, slideTwo, slideThree, slideTwo, slideOne, slideTwo, slideThree, slideTwo];

const Blogs = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({ target: scrollRef }); 

  // Moves left when scrolling down, right when scrolling up
  const xMovement = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const handleContact = () => {
    navigate('/contact-us')
  }
  
  return (
    <div className="blogs-section">
        <Navbar />
        <div className="blog-section-container">
        <div className="blog-floating-circle blog-circle-1">
        <img src={productOne} alt="property" className="blog-circle-icon" />
        </div>
        <div className="blog-floating-circle blog-circle-2">
        <img src={productOne} alt="property" className="blog-circle-icon" />
        </div>
        <div className="blog-floating-circle blog-circle-3">
        <img src={productOne} alt="property" className="blog-circle-icon" />
        </div>
        <div className="blog-floating-circle blog-circle-4">
        <img src={productOne} alt="property" className="blog-circle-icon" />
        </div>

        <div>
        <h2 className="blog-head">BLOGS</h2>
        <h2 className="blogs-heading">NOT JUST A BLOG-A CREATIVE <br/> PLAYGROUND</h2>
        <p className="blogs-para">Stay In The Loop And Keep Up With All Our <br/> News And Updates!</p>
        </div>
    </div>
    <div className="blog-nav">
    <div className="blog-nav-tabs">
        {/* <div className="blog-nav-tab">
            <input  placeholder="SEARCH" className="search-bar" />
        </div> */}
        <div className="blog-nav-highlight">SHOW ALL</div>
        <div className="blog-nav-tab">ECOMMERCE & RETAIL</div>
        <div className="blog-nav-tab">FOODTECH</div>
        <div className="blog-nav-tab">HEALTHCARE</div>
        <div className="blog-nav-tab">FINTECH</div>
        <div className="blog-nav-tab">REAL ESTATE</div>
    </div>
</div>
    <div style={{ background: "#040404", width: "100%" }}>
    <div style={{ maxWidth: "1300px",margin: "10px auto 20px",padding: "0px 50px",}}
    >
      {/* Parent Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          columnGap: "10px",
          marginTop: "50px",
        }}
      >
        {/* First Grid */}
        <div>
          <img src={containerOne} alt="property" />
        </div>
  
        {/* Second Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: "1fr 1fr",
            rowGap: "10px",
          }}
        >
          {/* Second child top row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 3fr",
              gap: "5px",
            }}
          >
            <div>
              <img
                src={containerTwo}
                alt="property"
                className="VR Headset"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <img
                src={containerThree}
                alt="property"
                className="VR Headset"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          {/* Second Child bottom row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 2fr",
              gap: "5px",
            }}
          >
            <div>
              <img
                src={containerFive}
                alt="property"
                className="VR Headset"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <img
                src={containerSix}
                alt="property"
                className="VR Headset"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
  
        {/* Third Grid */}
        <div>
          <img src={containerFour} alt="property" className="VR Headset" />
        </div>
      </div>
    </div>
  </div>
  
    <div className="what-new-bg-image">
    <div className="what-new-today">
    <h2 className="what-new-today-head">WHAT NEW TODAY</h2>
    <div className="today-section">
        <div><img src={todayOne} alt="laptop" /></div>
        <div className="blog-grid-section">
            <div className="image-content">
            <div>
            <img src={todayTwo} alt="laptop"  />
            </div>
            <div className='titles'>
             <p className="title-one">Electronics</p>
             <p className="title-two">Best VR Box For The Best <br/> Gaming Experience</p>
             <p className="title-three">March 8, 2025</p>
            </div>
            </div>
            <div className="image-content">
            <div>
            <img src={todayThree} alt="laptop"  />
            </div>
            <div  className='titles'>
             <p className="title-one">Electronics</p>
             <p className="title-two">Buy Your Best Laptop & <br/> Mobile Combo For Style</p>
             <p className="title-three">March 8, 2025</p>
            </div>
            </div>
            <div className="image-content">
            <div>
            <img src={todayFour} alt="laptop"  />
            </div>
            <div className='titles'>
             <p className="title-one">Electronics</p>
             <p className="title-two">Best Smart Pencil For The Top <br/> Designer</p>
             <p className="title-three">March 8, 2025</p>
            </div>
            </div>
            </div>
            <div className="grid-section-two">
            <img src={todayFive} alt="laptop"  />
            <img src={todaySix} alt="laptop"  />
            </div>
    </div>
    </div>
    </div>
    <div className="top-video-reviews">
     <h2 className="top-video-reviews-head">TOP VIDEO REVIEWS</h2>
     <div ref={scrollRef} className="w-full flex overflow-hidden relative h-[300px]">
      <motion.div
        className="flex"
        style={{ x: xMovement, display: "flex", gap: "20px", minWidth: "max-content" }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt="product" />
        ))}
      </motion.div>
    </div>
    </div>

    <div className="latest-review-section">
    <h2 className="latest-review-head">Latest Reviews</h2>
    <div className="latest-review-flex">
    <div>
    <div className="latest-review">
    <div><img src={reviewOne} alt="property" /></div>
    <div>
    <div className="review-grid-section">
            <div className="review-image-content">
            <div>
            <img src={reviewTwo} alt="laptop"  />
            </div>
            <div>             
             <p className="review-title-two">Best VR Box For The Best <br/> Gaming Experience</p>
             <p className="review-title-three">March 8, 2025</p>
            </div>
            </div>
            <div className="review-image-content">
            <div>
            <img src={reviewThree} alt="laptop"  />
            </div>
            <div>             
             <p className="review-title-two">Buy Your Best Laptop & <br/> Mobile Combo For Style</p>
             <p className="review-title-three">March 8, 2025</p>
            </div>
            </div>
            <div className="review-image-content">
            <div>
            <img src={reviewFour} alt="laptop"  />
            </div>
            <div>
             <p className="review-title-two">Best Smart Pencil For The Top <br/> Designer</p>
             <p className="review-title-three">March 8, 2025</p>
            </div>
            </div>
            </div>
    </div>
    </div>
    <div className="ads-image">
    <img src={ads} alt="advertisement"  />
    </div>
    <div className="latest-review">
    
    <div>
    <div className="review-grid-section">
            <div className="review-image-content">
            <div>
            <img src={reviewTwo} alt="laptop"  />
            </div>
            <div>             
             <p className="review-title-two">Best VR Box For The Best <br/> Gaming Experience</p>
             <p className="review-title-three">March 8, 2025</p>
            </div>
            </div>
            <div className="review-image-content">
            <div>
            <img src={reviewThree} alt="laptop"  />
            </div>
            <div>             
             <p className="review-title-two">Buy Your Best Laptop & <br/> Mobile Combo For Style</p>
             <p className="review-title-three">March 8, 2025</p>
            </div>
            </div>
            <div className="review-image-content">
            <div>
            <img src={reviewFour} alt="laptop"  />
            </div>
            <div>
             <p className="review-title-two">Best Smart Pencil For The Top <br/> Designer</p>
             <p className="review-title-three">March 8, 2025</p>
            </div>
            </div>
            </div>
    </div>
    <div><img src={reviewOne} alt="property" /></div>
    </div>
    </div>
    <div className="second-section">
    <div>
    <img src={reviewFive} alt="laptop"  />
    </div>
    <div className="review-grid-section">
            <div className="review-image-content">
            <div>
            <img src={reviewTwo} alt="laptop"  />
            </div>
            <div>             
             <p className="review-title-two">Best VR Box For The Best <br/> Gaming Experience</p>
             <p className="review-title-three">March 8, 2025</p>
            </div>
            </div>
            <div className="review-image-content">
            <div>
            <img src={reviewThree} alt="laptop"  />
            </div>
            <div>             
             <p className="review-title-two">Buy Your Best Laptop & <br/> Mobile Combo For Style</p>
             <p className="review-title-three">March 8, 2025</p>
            </div>
            </div>
            <div className="review-image-content">
            <div>
            <img src={reviewFour} alt="laptop"  />
            </div>
            <div>
             <p className="review-title-two">Best Smart Pencil For The Top <br/> Designer</p>
             <p className="review-title-three">March 8, 2025</p>
            </div>
            </div>
            <div className="review-image-content">
            <div>
            <img src={reviewFour} alt="laptop"  />
            </div>
            <div>
             <p className="review-title-two">Best Smart Pencil For The Top <br/> Designer</p>
             <p className="review-title-three">March 8, 2025</p>
            </div>
            </div>
            <div className="review-image-content">
            <div>
            <img src={reviewFour} alt="laptop"  />
            </div>
            <div>
             <p className="review-title-two">Best Smart Pencil For The Top <br/> Designer</p>
             <p className="review-title-three">March 8, 2025</p>
            </div>
            </div>
            <div className="review-image-content">
            <div>
            <img src={reviewFour} alt="laptop"  />
            </div>
            <div>
             <p className="review-title-two">Best Smart Pencil For The Top <br/> Designer</p>
             <p className="review-title-three">March 8, 2025</p>
            </div>
            </div>
            </div>
            </div>
            </div>
    </div>

  <div className="section-container">
        <div className="floating-circle-1 circle-1">
        <img src={propertyOne} alt="property" className="circle-icon" />
        </div>
        <div className="floating-circle circle-2">
        <img src={propertyTwo} alt="property" className="circle-icon" />
        </div>
        <div className="floating-circle-1 circle-3">
        <img src={propertyThree} alt="property" className="circle-icon" />
        </div>
        <div className="floating-circle circle-4">
        <img src={propertyFour} alt="property" className="circle-icon" />
        </div>
        <div className="floating-circle-1 circle-5">
        <img src={propertyFive} alt="property" className="circle-icon" />
        </div>
        <div className="floating-circle circle-6">
        <img src={propertySix} alt="property" className="circle-icon" />
        </div>
        
        <div>
        <h2 className="heading text-white">Our Agile Solutions Have Resulted In Recurring <br/> Collaborations With Leading Enterprises Like <br/> IKEA, Adidas, KPMG, And Many More.</h2>
        </div>
        <a href="" className="cta-button" onClick={handleContact}>PARTNER WITH US
          <span className="arrow-icon"> <img src={rightArrow} alt="arrow" /></span>
        </a>
    </div>
  <Footer />
    </div>
  )
}

export default Blogs