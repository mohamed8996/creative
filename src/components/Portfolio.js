import React from 'react'
import Navbar from './Navbar';
import Footer from "./Footer"
import "../Styles/Portfolio.css";
import Ikea from "../components/Assets/Ikea.png";
import AdidasImg from "../components/Assets/Adidas.png";
import propertyOne from "../components/Assets/property-1.png";
import propertyTwo from "../components/Assets/property-2.png";
import propertyThree from "../components/Assets/property-3.png";
import propertyFour from "../components/Assets/property-4.png";
import propertyFive from "../components/Assets/property-5.png";
import propertySix from "../components/Assets/property-6.png";
import rightArrow from "../components/Assets/rightarrow.png";


const Portfolio = () => {
  return (
    
    <div>
        <Navbar />
        <div className="portfolio-section">
    <div className="background" id="starBackground"></div>
    <div className="heading-section">
        <div> 
          <h2 className="gradient-text">PORTFOLIO</h2>
        </div>
        <div className="title-animate">
        <div className="title-1">
            <span className="optimize">Optimize.</span>
            </div>
            <div className="title-2">
            <span className="innovate">Innovate.</span> 
            </div>
            <div className="title-3">
            <span className="disrupt">Disrupt</span>
            </div>  
            </div>    
        <div className="subtitle">
            Success Stories That Demonstrate Our Expertise To Deliver Technology-Led Business Breakthroughs Across Startups, Global Brands, And Fortune 500s
        </div>
        <div className="divider"></div>
    </div>
    

<div className="background-section">
<div className="project-section">
<div className="">
    <div className="project-tabs">
        <h2 className="nav-head">PROJECTS </h2>
        <h2 className="dom-head">DOMAIN</h2>
    </div>
</div>
<div className="nav">
    <div className="nav-tabs">
        <div className="nav-highlight">SHOW ALL</div>
        <div className="nav-tab">ECOMMERCE & RETAIL</div>
        <div className="nav-tab">FOODTECH</div>
        <div className="nav-tab">HEALTHCARE</div>
        <div className="nav-tab">FINTECH</div>
        <div className="nav-tab">REAL ESTATE</div>
    </div>
</div>

<div className="project-container">
    <div className="project-image">
    <img src={Ikea} alt="IKEA" />
    </div>
    
    <div className="case-study-container">
        <div className="company-name">IKEA</div>
        <div className="company-description">Expands As A Digital Consumer <br/> Experience Leader</div>
        
        <div className="results-title">Results</div>
        
        <div className="results-container">
            <div className="result-item">
                <div className="result-value">2+</div>
                <div className="result-label">Stores Using The Solution</div>
            </div>
            
            <div className="divider-vertical"></div>
            
            <div className="result-item">
                <div className="result-value">#1</div>
                <div className="result-label">Source Of Measuring Roi</div>
            </div>
        </div>
        <div>
        <a classNameName="case-study-button">View Full Case Study </a>
        </div>
    </div>
</div>
</div>
</div>
<div className="background-section">
<div className="adidas-section">
<div className="project-container">
    <div className="case-study-container">
        <div className="company-name">ADIDAS</div>
        <div className="company-description">Scores The Perfect Digital Landing in UAE</div>
        
        <div className="results-title">Results</div>
        
        <div className="results-container">
            <div className="result-item">
                <div className="result-value">2M+</div>
                <div className="result-label">App Downloads</div>
            </div>
            
            <div className="divider-vertical"></div>
            
            <div className="result-item">
                <div className="result-value">500K</div>
                <div className="result-label">New Users Acquired</div>
            </div>
        </div>
        <div>
        <a className="case-study-button">View Full Case Study </a>
        </div>
    </div>
    <div className="project-image">
    <img src={AdidasImg} alt="Adidas" />
    </div>   
</div>
</div>
</div>
<div className="button-section">
    <button className="load-button">LOAD MORE CASE STUDIES +</button>
</div>
<div>
<div className="banner-container">
    <div className="banner-heading">Put Our Full Experience Of Solving The Challenges Of</div>
    <div className="banner-industries">
      <span className="highlight">FinTech, ECommerce, Healthcare, Aviation,</span> And 20+ Other Industries To Your Benefit
    </div>
    <a href="#" className="cta-button">
      TALK TO OUR EXPERTS <span className="arrow"><img src={rightArrow} alt="arrow" /></span>
    </a>
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
        <h2 className="heading">Our Agile Solutions Have Resulted In Recurring <br/> Collaborations With Leading Enterprises Like <br/> IKEA, Adidas, KPMG, And Many More.</h2>
        </div>

        <a href="#" className="cta-button">
            PARTNER WITH US
            <span className="arrow-icon"><img src={rightArrow} alt="arrow" /></span>
        </a>
    </div>
</div>
<Footer/>
</div>
  )
}

export default Portfolio