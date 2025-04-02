import React, { useState } from "react";
import { FaStar, FaHeart, FaTruck, FaUndo } from "react-icons/fa";
import "../Styles/Products.css";
import p1 from "../components/Assets/p1.png";
import p2 from "../components/Assets/p2.png";
import p3 from "../components/Assets/p3.png";
import p4 from "../components/Assets/p4.png";
import p5 from "../components/Assets/p5.png";
import rightArrow from "../components/Assets/rightarrow.png";
import propertyOne from "../components/Assets/property-1.png";
import propertyTwo from "../components/Assets/property-2.png";
import propertyThree from "../components/Assets/property-3.png";
import propertyFour from "../components/Assets/property-4.png";
import propertyFive from "../components/Assets/property-5.png";
import propertySix from "../components/Assets/property-6.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Products = () => {
  const images = [p1, p2, p3, p4, p5];
  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("specifications");

  return (
    <>
    <Navbar/>
      <div className="product-top">
        {/* <div className="text-center py-6 px-4 relative">
          <h2 className="product-tit">Product</h2>
          <div className="subtitle">
            Success Stories That Demonstrate Our Expertise To Deliver
            Technology-Led Business Breakthroughs Across Startups, Global
            Brands, And Fortune 500s
          </div>
          <div className="divider"></div>
        </div> */}
      </div>
      <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <div className="product-container">
        {/* Left Side - Images */}
        <div className="image-section">
          <div className="thumbnail-container">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Product ${idx}`}
                className={`thumbnail ${mainImage === img ? "active" : ""}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <div className="img-img">
        <div className="main-image-container">
          {mainImage && <img src={mainImage} alt="Main product" className="main-image" />}
        </div>
        </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="details-section">
          <h2 className="products-title">HAVIC HV G-92 GAMEPAD</h2>
          <div className="rating-section">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
            <span className="reviews-text">(150 Reviews)</span>
            <span>|</span>
            <span className="stock-status">In Stock</span>
          </div>
          <h5 className="price">₹599</h5>
          <p className="description mb-2">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble-free install & mess-free removal.
          </p>
          <hr className="border-gray-600" />
          {/* Color Selection */}
          <div className="color-section">
            <span className="section-title">Colours:</span>
            <div className="choose-options">
              {["white", "red"].map((color) => (
                <button
                  key={color}
                  className={`color-btn ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  <div className={`color-circle ${color}`}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="size-section">
            <span className="section-title">Size:</span>
            <div className="size-options">
              {["XS", "S", "M", "L", "X"].map((size) => (
                <button
                  key={size}
                  className={`size-btn ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="action-section">
            <div className="flex border border-gray-500 rounded-xl">
              <button
                onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
                className="px-4 py-2 border-r text-xl"
              >
                -
              </button>
              <span className="px-4 py-2 text-xl">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-2 border-l bg-yellow-500 text-black rounded-r-xl"
              >
                +
              </button>
            </div>
            <button className="buy-btn"><h5>BUY NOW</h5></button>
            <button
              className="wishlist-btn"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <FaHeart className={isFavorite ? "favorite" : ""} />
            </button>
          </div>

          {/* Delivery & Return Information */}
          <div className="info-section">
            <div className="info-box">
              <FaTruck className="info-icon" />
              <div>
                <p className="info-title">Free Delivery</p>
                <p className="info-text">
                  <a href="#" className="link">
                    Enter your postal code for Delivery Availability
                  </a>
                </p>
              </div>
            </div>
            <hr/>
            <div className="info-box">
              <FaUndo className="info-icon" />
              <div>
                <p>Return Delivery</p>
                <p className="info-text">
                  Free 30 Days Delivery Returns.{" "}
                  <a href="#" className="link">
                    Details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-details-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "specifications" ? "active" : ""}`}
          onClick={() => setActiveTab("specifications")}
        >
          SPECIFICATION
        </button>
        <button
          className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          REVIEWS
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "specifications" ? (
          <div className="specifications">
            <ul className="a">
              <li>Connectivity: Wired (USB 2.0)</li>
              <li>Compatibility: Windows XP/7/8/10/11</li>
              <li>Design: Ergonomic design with textured grip for comfortable handling</li>
              <li>Buttons:</li>
              <ul>
                <li>12 action buttons</li>
                <li>2 analog sticks</li>
                <li>D-pad for precise movement</li>
              </ul>
              <li>Vibration Feedback: Dual vibration motors for an immersive gaming experience</li>
              <li>Cable Length: Approximately 1.5 meters</li>
              <li>Plug & Play: No additional drivers required for most Windows systems</li>
              <li>Build Material: Durable plastic with rubberized grips</li>
              <li>Supported Games: Works with most PC games that support gamepad input</li>
            </ul>
            <p className="description">
              This gamepad is ideal for casual and competitive gaming, offering responsive
              controls and a comfortable grip for extended play sessions.
            </p>
          </div>
        ) : (
          <div className="reviews">
            <p>No reviews available yet.</p>
          </div>
        )}
      </div>
    </div>
      <div className="product-section-container">
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

        <a href="#" className="cta-button">
            PARTNER WITH US
            <span className="arrow-icon"><img src={rightArrow} alt="arrow" /></span>
        </a>
    </div>
    <div className="product-footer">
  <Footer />
  </div>
      </div>
    </>
  );
};

export default Products;
