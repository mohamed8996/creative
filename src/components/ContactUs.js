import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import particle from "../components/Assets/particle.png";
import "../Styles/ContactUs.css";
import rightArrow from "../components/Assets/rightarrow.png";
import heart from "../components/Assets/heart.png";
import { TbBrandFacebook, TbBrandGithub } from "react-icons/tb";
import { LuLinkedin, LuYoutube } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { CONTACT_QUERY } from "../apolloQueries/contact_query";

const ContactUs = () => {
  const { register,handleSubmit,formState: { errors },reset,} = useForm();
  const [createcontactUs] = useMutation(CONTACT_QUERY);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const onSubmit = async (data) => {
    setMessage("");
    setLoading(true)
  
    try {
      const { data: response } = await createcontactUs({        
        variables: {
          Name: data.name, 
          Mail: data.mail, 
          Mobile: Number(data.mobile), 
          Message: data.message || "", 
        }
      });
  
      if (response?.createcontactUs?.data) {
        setMessage("Your request has been submitted!");
        reset();
      }
      reset();
    } catch (err) {
      console.error("Error submitting form:", err);
      setMessage("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="contact-container">
      <Navbar />
      <div className="contact-div">
        <div className="text-center">
          <div className="cruxx-contact-container">
            <h1 className="cruxx-contact">
              CRUXX <div className="cruxx-contact-blocker" />
            </h1>
          </div>
          <h1 className="contact-subtitle">ALL YOU NEED IN ONE PLACE</h1>
          <p className="contact-description">
            We Don’t Just Create—We Drop Game-Changing Experiences That Leave Jaws On The Floor.
          </p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-grid">
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="error-text">{errors.name.message}</p>}
              </div>

              <div className="message-box">
                <label className="label">Message</label>
                <textarea
                  className="input textarea"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && <p className="error-text">{errors.message.message}</p>}
              </div>

              <div>
                <label className="label">Phone Number</label>
                <input
                  type="tel"
                  className="input"
                  {...register("mobile", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  })}
                />
                {errors.mobile && <p className="error-text">{errors.mobile.message}</p>}
              </div>

              <div>
                <label className="label">Mail Id</label>
                <input
                  type="email"
                  className="input"
                  {...register("mail", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.mail && <p className="error-text">{errors.mail.message}</p>}
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button type="submit" className="contactus-button" disabled={loading}>
                {loading ? "Submitting..." : "JUST CLICK HERE, WE WILL CALL YOU"}
                <span className="ml-2">
                  <img src={rightArrow} alt="arrow" className="w-5 h-5" />
                </span>
                <img src={particle} alt="particle" className="particle-img" />
              </button>
            </div>
          </form>
          {message && <p className="text-center mt-4 error-message">{message}</p>}
        </div>
        <div className="contact-footer">
          <p>© 2025 Cruxx Solutions LLP | All rights reserved</p>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <div className="social-icons">
            <a href="https://www.facebook.com/ideassion" className="hover:text-blue-500"> <TbBrandFacebook /> </a>
            <a href="https://www.linkedin.com/company/ideassion-technology-solutions/" className="hover:text-blue-700"> <LuLinkedin /> </a>
            <a href="https://www.instagram.com/ideassiontechnology" className="hover:text-pink-500"> <FaInstagram /> </a>
            <a href="https://youtube.com/@ideassion6162?si=K0S2j21gbYnMIWuV" className="hover:text-red-500"> <LuYoutube /> </a>
            <a href="https://github.com/ideassion" className="hover:text-gray-500"> <TbBrandGithub /> </a>
          </div>
          <p className="flex items-center space-x-2">
            <img src={heart} alt="heart" className="w-10 h-10" />
            <span>Made with passion and Cruxx</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
