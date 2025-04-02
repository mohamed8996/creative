import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Laptop from "../components/Assets/laptop.jpg";
import Laptop2 from "../components/Assets/laptop2.jpg";
import Laptop3 from "../components/Assets/laptop3.jpg";
import Laptop4 from "../components/Assets/laptop4.png";
import Laptop5 from "../components/Assets/laptop5.jpg";
import Laptop6 from "../components/Assets/laptop6.jpg";
import Laptop7 from "../components/Assets/laptop7.jpg";
import Laptop8 from "../components/Assets/laptop8.jpg";
import Potrait from "../components/Assets/potrait.jpg"; 
import LinkedInIcon from "../components/Assets/LinkedInIcon.png";
import rightArrow from "../components/Assets/rightarrow.png";
import "../Styles/AboutUs.css";
import ParticleEffect from "./ParticalEffect";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const imageSet = [
    Laptop,
    Laptop2,
    Laptop3,
    Laptop4,
    Laptop5,
    Laptop6,
    Laptop7,
    Laptop8,
  ];
  const [imageIndexes, setImageIndexes] = useState([0, 1, 2, 3]);
  let scrollTimeout = null;

  const teamMembers = [
    { id: 1, name: "Md J Uzuu", role: "UI/UX Designer", image: Potrait, linkedin: "https://www.linkedin.com/in/cruxx/" },
    { id: 2, name: "Md J Uzuu", role: "UI/UX Designer", image: Potrait, linkedin: "https://www.linkedin.com/in/cruxx/" },
    { id: 3, name: "Md J Uzuu", role: "UI/UX Designer", image: Potrait, linkedin: "https://www.linkedin.com/in/cruxx/" },
    { id: 4, name: "Md J Uzuu", role: "UI/UX Designer", image: Potrait, linkedin: "https://www.linkedin.com/in/cruxx/" },
    { id: 5, name: "Md J Uzuu", role: "UI/UX Designer", image: Potrait, linkedin: "https://www.linkedin.com/in/cruxx/" },
    { id: 6, name: "Md J Uzuu", role: "UI/UX Designer", image: Potrait, linkedin: "https://www.linkedin.com/in/cruxx/" },
    { id: 7, name: "Md J Uzuu", role: "UI/UX Designer", image: Potrait, linkedin: "https://www.linkedin.com/in/cruxx/" },
    { id: 8, name: "Md J Uzuu", role: "UI/UX Designer", image: Potrait, linkedin: "https://www.linkedin.com/in/cruxx/" },
    { id: 9, name: "Md J Uzuu", role: "UI/UX Designer", image: Potrait, linkedin: "https://www.linkedin.com/in/cruxx/" },
    { id: 10, name: "Md J Uzuu", role: "UI/UX Designer", image: Potrait, linkedin: "https://www.linkedin.com/in/cruxx/" },
    { id: 11, name: "Md J Uzuu", role: "UI/UX Designer", image: Potrait, linkedin: "https://www.linkedin.com/in/cruxx/" },
    { id: 12, name: "Md J Uzuu", role: "UI/UX Designer", image: Potrait, linkedin: "https://www.linkedin.com/in/cruxx/" },
  ];
  const handleToContact = () => {
    navigate('/contact-us')
  }
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout) return;

      scrollTimeout = setTimeout(() => {
        setImageIndexes((prevIndexes) =>
          prevIndexes.map((index) => (index + 1) % imageSet.length)
        );
        scrollTimeout = null;
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="aboutUs-container">
        <div className="circle">
          <div className="content">
            <span className="about-us">
              <h2>ABOUT US</h2>
            </span>
            <h1 className="who-we-are-text"> WHO <br/> WE <br/> ARE </h1>
          </div>
        </div>
        <div className="floating-labels">
          <span className="label developers">DEVELOPERS</span>
          <span className="label developers2">DEVELOPERS</span>
          <span className="label innovators">INNOVATORS</span>
          <span className="label innovators2">INNOVATORS</span>
          <span className="label thinkers">THINKERS</span>
          <span className="label thinkers2">THINKERS</span>
          <span className="label reliable">RELIABLE</span>
          <span className="label reliable2">RELIABLE</span>
          <span className="label visionaries">VISIONARIES</span>
          <span className="label visionaries2">VISIONARIES</span>
          <span className="label developers2">DEVELOPERS</span>
          <span className="label creators">CREATORS</span>
          <span className="label creators2">CREATORS</span>
        </div>
      </div>

      <div className="brand-container px-[20px] ">
      <ParticleEffect
    positions={["top-left", "position-r2-c4","position-r2-c9","position-r3-c7", "position-r5-c1", "position-r5-c10","position-r6-c2", "position-r8-c3","position-r8-c5"]}
    particlesPerPosition={7}
  />
        <div className="about-img-container image-top-left">
          <img src={imageSet[imageIndexes[0]]} alt="Creative team working" />
        </div>
        <div className="about-img-container image-top-right">
          <img src={imageSet[imageIndexes[1]]} alt="Team collaboration" />
        </div>
        <div className="about-img-container image-middle">
          <img src={imageSet[imageIndexes[2]]} alt="Office workspace" />
        </div>
        <div className="about-img-container image-bottom-right">
          <img src={imageSet[imageIndexes[3]]} alt="Brainstorming session" />
        </div>
        <div class="centered-section">
          <h1>
            WE BUILD BRANDS THAT DON’T JUST STAND OUT—
            <br />
            THEY STEAL THE SPOTLIGHT.
          </h1>
        </div>
        <div className="best-section">
          <h2 className="best-heading">
            <span className="we-are">WE ARE THE BEST</span>
          </h2>
          <p className="best-description">
            We Believe That Great Ideas Come From Great People.
            <br />
            Our Team Is A Powerhouse Of{" "}
            <span className="highlight">Creators, Strategists, And</span>
            <br />
            <span className="highlight">Innovators</span> Who Thrive On Pushing
            Boundaries And
            <br />
            Crafting Unforgettable Brand Experiences.
          </p>
        </div>
      </div>
      <div className="h-[10%] w-[100%] bg-black py-4 flex justify-end">
      <div className="w-[50%] overflow-hidden whitespace-nowrap relative">
        <h3 className="overflow-x-auto scrollbar-hide text-gray-400">
          <span className="subtext mx-2">#DESIGNER</span>
          <span className="mx-2">#DIGITAL MARKETING</span>
          <span className="mx-2">#DEVELOPER</span>
          <span className="mx-2">#PHOTOGRAPHY</span>
          <span className="mx-2">#CONTENT CREATOR</span>
          <span className="mx-2">#WEB DESIGN</span>
          <span className="mx-2">#GRAPHICS</span>
        </h3>
      </div>
    </div>
<div className="team-section">
  <div className="team-section-left">  
    <div className="aboutbanner-container">
      <div className="px-4 py-10">
      <h3 className="">Meet Our Team</h3>
      <p className="mt-2 text-lg">We set up teams to shape your identity, push your idea & manage the workflow from pre- to post-production.</p>
      </div>
      <div><a href="" className="ct-button" onClick={handleToContact}>TALK TO OUR EXPERTS{" "}<span className="ml-2"><img src={rightArrow} alt="arrow" className="w-4 h-4" />
        </span>
      </a>
      </div>
    </div>
  </div>
  <div className="team-section-right">
    {teamMembers.map((member) => (
      <div key={member.id} className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg group">
        <img src={member.image} alt={member.name} className="w-full h-80 object-cover transition duration-300 group-hover:brightness-50"/>
        {/* Initial Name & Role */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center transition duration-300 opacity-100 group-hover:opacity-0">
          <h3 className="text-black text-lg font-bold">{member.name}</h3>
          <h5 className="text-yellow-400 text-sm font-medium">{member.role}</h5>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
        {/* Hover Text Content */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition duration-300">
          <h3 className="text-black text-lg font-bold">{member.name}</h3>
          <h5 className="text-yellow-400 text-sm font-medium">{member.role}</h5>
        </div>
        {/* LinkedIn Icon */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
      <Footer />
    </div>
  );
};

export default AboutUs;
