import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;
  const navigate = useNavigate();

  const handleToContact = () => {
    navigate('/contact-us')
  }
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "visible-navbar" : "hidden-navbar"}`}>
      <Link to="/" className="cruxx-text"><h1>CRUXX</h1></Link>
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <Link to="/services">
              <p className={location.pathname === "/services" ? "active-page" : ""}>Services</p>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <p className={location.pathname === "/portfolio" ? "active-page" : ""}>Portfolio</p>
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              <p className={location.pathname === "/blogs" ? "active-page" : ""}>Blogs</p>
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              <p className={location.pathname === "/about-us" ? "active-page" : ""}>About Us</p>
            </Link>
          </li>
        </ul>
        <button onClick={handleToContact} className="contact-btn">
          <Link to="/contact-us"><p>CONTACT US</p></Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
