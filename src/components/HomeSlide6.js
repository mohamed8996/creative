/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "../Styles/HomeSlide6.css";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import Footer from "./Footer";
import axios from "axios";

const HomeSlide6 = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phone: "",
  });

  const [message, setMessage] = useState("");
  const services = [
    "Digital Marketing",
    "Web Development",
    "Graphic Designing",
    "UI/UX",
    "Photo/ Videography",
    "Branding",
    "Event Management",
  ];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:1337/api/contacts", {
        data: formData,
      });

      if (response.status === 200 || response.status === 201) {
        setMessage("Your request has been submitted!");
        setFormData({ name: "", mail: "", phone: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="home-slide-container6">
        <div className="home-contact">
            <div className="home-contact-one">
              <div>
              <p className="section-title">I'm Looking For Help In..</p>
              <div className="service-buttons">
                {services.map((service) => (
                  <button key={service}className={`service-button ${selectedServices.includes(service) ? "selected" : ""
                    }`}onClick={() => toggleService(service)}><h5>{service.toUpperCase()}</h5>
                  </button>
                ))}
              </div>
              </div>
              <div className="footer-contact">
                <a href="tel:+917589960911" className="contact-link flex">+91 75899 60911
                <span><IoArrowForwardCircleOutline className="h-5 w-5 mt-1 ml-2" /></span>
                </a>
                <a href="mailto:support@cruxxsolution.com" className="contact-link flex">support@cruxxsolution.com
                <span><IoArrowForwardCircleOutline className="h-5 w-5 mt-1 ml-2" /></span>
                </a>
              </div>
            </div>
          <div className="p-5 rounded-xl w-[65%]">
            <h2 className="contact-us">CONTACT US</h2>
            <h1 className="con-heading"> SHALL WE GET STARTED?</h1>
            <p className="con-description">
              Thank you for your interest in Ideassion Technology Solutions.
              Please fill out the form below.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div>
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
                <div className="message-box">
                  <label className="label">Message</label>
                  <textarea className="input textarea"></textarea>
                </div>
                <div>
                  <label className="label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label className="label">Mail Id</label>
                  <input
                    type="email"
                    name="mail"
                    value={formData.mail}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
              </div>
              <div className="contact-button">
                <button className="book-button"><h5>BOOK A CALL</h5><span className="icon-container"><BiSolidPhoneCall className="phone-icon" /></span></button>
              </div>
            </form>
            {message && <p className="text-center mt-4">{message}</p>}
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeSlide6;
