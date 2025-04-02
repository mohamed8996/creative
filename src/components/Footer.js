/* eslint-disable jsx-a11y/anchor-is-valid */
import "../Styles/Footer.css";
import ParticleEffect from "./ParticalEffect";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
    
  const handleToContact = () => {
    navigate('/contact-us')
  }

  return (
    <div className="footerbg relative overflow-hidden h-[40%]"> 
      <ParticleEffect
        positions={["top-left", "position-r8-c3", "position-r2-c4", "position-r6-c9", "position-r9-c7"]}
        particlesPerPosition={5}
      />
      <div className="footeru">
        <div className="footeru-top">
          <div className="footeru-left">
           <div className="cruxx-footer-container"> <h1 className="cruxx-footer"> CRUXX <div className="cruxx-footer-blocker" /></h1></div>
            <button className="footeru-button" onClick={handleToContact}><h5>LET'S TALK</h5></button>
          </div>
          <div className="footeru-rightu">
            <div className="footeru-right1">
              <Link to="" className={location.pathname === "/terms-of-service" ? "active-page" : ""}>Terms of Service</Link>
              <Link to="" className={location.pathname === "/privacy-policy" ? "active-page" : ""}>Privacy Policy</Link>
              <Link to="/services" className={location.pathname === "/services" ? "active-page" : ""}>Services</Link>
              <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active-page" : ""}>Portfolio</Link>
              <Link to="/about-us" className={location.pathname === "/about-us" ? "active-page" : ""}>About Us</Link>
              <Link to="/blogs" className={location.pathname === "/blogs" ? "active-page" : ""}>Blogs</Link>
              <Link to="/contact-us" className={location.pathname === "/contact-us" ? "active-page" : ""}>Contact Us</Link>
            </div>
            <div className="footeru-right2">
              <div className="footeru-right2-left">
                <p className="mb-4">Address</p>
                <p>190-192, 2nd Floor, Hameed Complex, Anna Salai, Chennai 60000</p>
              </div>
              {/* <div className="text-xs mt-2">© 2025 Abs, Inc.</div> */}
            </div>
          </div>
        </div>
        <div className="footeru-bottom">
          <p>© 2025 Cruxx Solutions LLP | All rights reserved</p>
          <div className="footeru-bottom-right">
            <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <span className="arrow-up">▲</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
