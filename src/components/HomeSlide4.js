import React from "react";
import "../Styles/HomeSlide4.css";
import ArrowGif from "./Assets/uparrow.gif";
import Chair from "./Assets/Chair.png";
import Chair2 from "./Assets/Chair2.png";
import Chair3 from "./Assets/Chair3.png";

const HomeSlide4 = () => {
  const productImages = [Chair, Chair2, Chair3, Chair];

  const products = [
    {
      title: "OFFICE CHAIR | DIY ASSEMBLY",
      description: "Medium Brown, Powder-Coated Base, Brown",
      price: "₹599",
      oldPrice: "₹999",
      rating: "⭐ 4.5",
    },
    {
      title: "Wood Sofa - Single Seater",
      description: "Regular, 1 Seater, Omega Green",
      price: "₹2,599",
      oldPrice: "₹4,999",
      rating: "⭐ 4.5",
    },
    {
      title: "Nylon Base | DIY Assembly",
      description: "High Back, Nylon Base, Multi Lock, White and Grey",
      price: "₹299",
      oldPrice: "₹999",
      rating: "⭐ 4.5",
    },
    {
      title: "OFFICE CHAIR | DIY ASSEMBLY",
      description: "Medium Brown, Powder-Coated Base, Brown",
      price: "₹599",
      oldPrice: "₹999",
      rating: "⭐ 4.5",
    }
  ];
  return (
    <div className="homeSlide4-container">
      <div className="slide4-top">
        <h1>OUR INVENTORY CLEARANCE</h1>
        <h3>
          Lorem Ipsum Dolor Sit Amet Consectetur. Facilisis At B I0d Vestibulum
          Est Egestas Congue Porta.
        </h3>
        <div className="underline"></div>
      </div>

      <div className="slide4-bottom">
        <div className="h-[10%] px-[20px]">
          <div className="filter-buttons">
            <button className="filter-button active">
              <h5>ALL</h5>
            </button>
            <button className="filter-button">
              <h5>New</h5>
            </button>
            <button className="filter-button">
              <h5>New Price</h5>
            </button>
          </div>
        </div>
        <div className="slide4-bottom-card">
          <div className="product-grid">
            {productImages.map((image, index) => (
              <div
                key={index}
                className="product-card"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="overlay">
                  <img src={ArrowGif} alt="Animation" className="w-10 h-10" />
                </div>
                <div className="product-details">
                  <h6 className="badge">NEW</h6>
                  <h5>{products[index]?.title}</h5>
                  <p>{products[index]?.description}</p>
                  <div className="price-rating">
                    <span className="price">
                      <h5>
                        {products[index]?.price}{" "}
                        <del>{products[index]?.oldPrice}</del>
                      </h5>
                    </span>
                    <span className="rating">
                      <h5>{products[index]?.rating}</h5>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slide-bottom-row">
          <div class="line"></div>
          <button class="nav-button">&#8592;</button>
          <button class="nav-button next">&#8594;</button>
          <button class="product-button">Check All Our Products</button>
          <button className="store-button">
            <h5> Check All Our Products &gt; </h5>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide4;
