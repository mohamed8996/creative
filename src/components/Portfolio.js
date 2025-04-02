import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Styles/Portfolio.css";
import Ikea from "../components/Assets/Ikea.png";
import AdidasImg from "../components/Assets/Adidas.png";
import Nike from "../components/Assets/Nike.jpg";
import Apple from "../components/Assets/Apple.jpg";
import rightArrow from "../components/Assets/rightarrow.png";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

const Portfolio = () => {
  const navigate = useNavigate();
    
  const handleToContact = () => {
    navigate('/contact-us')
    alert('hi')
  }
  const allProjects = [
    {
      id: 1,
      name: "IKEA",
      description: "Expands As A Digital Consumer Experience Leader",
      results: [
        { value: "2+", text: "Stores Using The Solution" },
        { value: "#1", text: "Source Of Measuring ROI" },
      ],
      image: Ikea,
    },
    {
      id: 2,
      name: "ADIDAS",
      description: "Scores The Perfect Digital Landing in UAE",
      results: [
        { value: "2M+", text: "App Downloads" },
        { value: "500K", text: "New Users Acquired" },
      ],
      image: AdidasImg,
    },
    {
      id: 3,
      name: "Nike",
      description: "A new project added dynamically",
      results: [
        { value: "10K", text: "Users Engaged" },
        { value: "95%", text: "Positive Feedback" },
      ],
      image: Nike,
    },
    {
        id: 4,
        name: "Apple",
        description: "A new project added dynamically",
        results: [
          { value: "10K", text: "Users Engaged" },
          { value: "95%", text: "Positive Feedback" },
        ],
        image: Apple,
      },
  ];

  const [projects, setProjects] = useState(allProjects.slice(0, 2)); // Initially show 2 projects
  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    if (visibleCount < allProjects.length) {
      setProjects(allProjects.slice(0, visibleCount + 1)); // Load two more projects
      setVisibleCount(visibleCount + 1);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          entry.target.classList.remove("fade-out-down");
        } else {
          entry.target.classList.remove("fade-in-up");
          entry.target.classList.add("fade-out-down");
        }
      });
    }, observerOptions);
  
    const elements = document.querySelectorAll(".project-container");
    elements.forEach((el) => observer.observe(el));
  
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [projects]);
  
  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="portfolio-section">
        <div className="background" id="starBackground"></div>
        <div className="heading-section">
          <h2 className="gradient-text">PORTFOLIO</h2>
          <div className="title-1">
            <span className="optimize">Optimize.</span>
          </div>
          <div className="title-2">
            <span className="innovate">Innovate.</span>
          </div>
          <div className="title-3">
            <span className="disrupt">Disrupt</span>
          </div>
          <div className="subtitle">
            Success Stories That Demonstrate Our Expertise To Deliver Technology-Led Business Breakthroughs Across Startups, Global Brands, And Fortune 500s
          </div>
          <div className="divider"></div>
        </div>

        <div className="background-section">
          <div className="project-section">
            <h2 className="nav-head">PROJECTS</h2>
            {projects.map((project, index) => (
                    <div key={project.id} className={`project-container mb-20 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
          <div className="project-image">
              <img src={project.image} alt={project.name} />
          </div>
          <div className="case-study-container w-1/2 flex flex-col justify-center">
            <h1 className="company-name">{project.name}</h1>
            <div className="company-description">{project.description}</div>
            <h2 className="results-title">Results</h2>
            <div className="results-container">
              {project.results.map((result, idx) => (
                <div key={idx} className="result-item">
                  <div className="result-value">{result.value}</div>
                  <div className="company-description">{result.text}</div>
                </div>
              ))}
            </div>
            <a className="case-study-button">View Full Case Study</a>
          </div>
        </div>
      ))}
          </div>
        </div>

        <div className="button-section">
          <button
            className="load-button"
            onClick={handleLoadMore}
          >
            {visibleCount >= allProjects.length ? "NO MORE CASE STUDIES" : "LOAD MORE CASE STUDIES +"}
          </button>
        </div>
        <div className="banner-container">
          <div className="banner-heading">
            Put Our Full Experience Of Solving The Challenges Of
          </div>
          <div className="banner-industries">
            <span className="highlight">FinTech, ECommerce, Healthcare, Aviation,</span> And 20+ Other Industries To Your Benefit
          </div>
          {/* <a href="#" className="cta-button" onClick={handleToContact}>
            TALK TO OUR EXPERTS <span className="arrow"><img src={rightArrow} alt="arrow" /></span>
          </a> */}
          <div onClick={handleToContact} className="cta-button">
            TALK TO OUR EXPERTS <span className="arrow"><img src={rightArrow} alt="arrow" /></span>
        </div>
        </div>
      </div>
      <Footer className='mt-20px' />
    </div>
  );
};

export default Portfolio;
