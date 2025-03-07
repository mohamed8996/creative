import React from 'react'
import "../Styles/Blogs.css";
import Navbar from './Navbar';
import Footer from "./Footer"
import productOne from "../components/Assets/productOne.png";
import containerOne from "../components/Assets/container-1.png";
import containerTwo from "../components/Assets/container-2.png";
import containerThree from "../components/Assets/container-3.png";
import containerFour from "../components/Assets/container-4.png";
import containerFive from "../components/Assets/container-5.png";
import containerSix from "../components/Assets/container-6.png";


const blogs = () => {
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
        <div className="blog-nav-tab">
            <input  placeholder="SEARCH" className="search-bar" />
        </div>
        <div className="blog-nav-highlight">SHOW ALL</div>
        <div className="blog-nav-tab">ECOMMERCE & RETAIL</div>
        <div className="blog-nav-tab">FOODTECH</div>
        <div className="blog-nav-tab">HEALTHCARE</div>
        <div className="blog-nav-tab">FINTECH</div>
        <div className="blog-nav-tab">REAL ESTATE</div>
    </div>
</div>
<div
      style={{
        height: "100vh",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Parent Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          columnGap: "10px",
          marginTop: "50px"
        }}
      >
        {/* First Grid */}
        <div>
          <img src={containerOne} alt="property"  />
        </div>

        {/* Second Grid */}
        <div
          style={{ display: "grid", gridTemplateRows: "1fr 1fr", rowGap: "10px"}}
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
              <img src={containerTwo} alt="property" className="VR Headset" style={{height: "100%", objectFit: "cover"}}/>
            </div>
            <div>
              <img src={containerThree} alt="property" className="VR Headset" style={{height: "100%", objectFit: "cover"}}/>
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
              <img src={containerFive} alt="property" className="VR Headset" style={{height: "100%", objectFit: "cover"}} />
            </div>
            <div>
              <img src={containerSix} alt="property" className="VR Headset" style={{height: "100%", objectFit: "cover"}}/>
            </div>
          </div>
        </div>

        {/* Third Grid */}
        <div>
          <img src={containerFour} alt="property" className="VR Headset" />
        </div>
      </div>
    </div>

    <Footer />
    </div>
  )
}

export default blogs