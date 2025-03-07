/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="cruxx-text"><h1>CRUXX</h1></Link>
      <div className="nav-container">
        <ul className="nav-links">
          <li>Services</li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li>Blogs</li>
          <li>About Us</li>
        </ul>
        <button className="contact-btn">CONTACT US</button>
      </div>
    </nav>
  );
};


export default Navbar;
