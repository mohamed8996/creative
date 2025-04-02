// import React, { useState, useEffect, useRef } from "react";
// import "../Styles/StoresSlide.css";
// import AdidasImg from "../components/Assets/Adidas.png";
// import Ikea from "../components/Assets/Ikea.png";

// const Adidas = () => {
//   const [isAdidas, setIsAdidas] = useState(true);
//   const [moveButtonUp, setMoveButtonUp] = useState(false);
//   const [scrollPos, setScrollPos] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
  
//   const adidasRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.2 }
//     );

//     if (adidasRef.current) {
//       observer.observe(adidasRef.current);
//     }

//     return () => {
//       if (adidasRef.current) {
//         observer.unobserve(adidasRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return; // Only listen to scroll when visible

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY) {
//         setIsAdidas(false);
//         setMoveButtonUp(true);
//       } else if (currentScrollY < lastScrollY) {
//         setIsAdidas(true);
//         setMoveButtonUp(false);
//       }
      
//       // setScrollPos((prevPos) => (prevPos === 0 ? 15 : 0));
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, isVisible]);

//   useEffect(() => {
//     setScrollPos(isAdidas ? 0 : 15)
//   }, [isAdidas]);

//   return (
//     <div ref={adidasRef} className="store-container">
//       <div className="store-left">
//         <div className={`text-container1 ${moveButtonUp ? "button-up" : ""}`}>
//           <h1 className={`store-title ${isAdidas ? "show" : "hide"}`}>ADIDAS</h1>
//           <h1 className={`store-title ${isAdidas ? "hide" : "show"}`}>Ikea</h1>
//         </div>
//         <div className={`text-container2 ${moveButtonUp ? "button-up" : ""}`}>
//           <h6 className={`store-subtitle ${isAdidas ? "show" : "hide"}`}>
//             Scores The Perfect Digital Landing In UAE
//           </h6>
//           <h6 className={`store-subtitle ${isAdidas ? "hide" : "show"}`}>
//             Expands as a digital consumer experience leader
//           </h6>
//         </div>
//         <div className="store-results">
//           <h4 className="store-results-title">RESULTS</h4>
//           <div className="store-stats">
//             <div className="store-stat">
//               <span className={`store-number ${isAdidas ? "show" : "hide"}`}><h1>2M+</h1></span>
//               <span className={`store-number ${isAdidas ? "hide" : "show"}`}><h1>2+</h1></span>
//               <p className={`store-label ${isAdidas ? "show" : "hide"}`}>App Downloads</p>
//               <p className={`store-label ${isAdidas ? "hide" : "show"}`}>Stores using the solution</p>
//             </div>
//             <div className="store-divider"></div>
//             <div className="store-stat">
//               <span className={`store-number ${isAdidas ? "show" : "hide"}`}><h1>500K</h1></span>
//               <span className={`store-number ${isAdidas ? "hide" : "show"}`}><h1>#1</h1></span>
//               <p className={`store-label ${isAdidas ? "show" : "hide"}`}>New Users Acquired</p>
//               <p className={`store-label ${isAdidas ? "hide" : "show"}`}>Ikea Users Acquired</p>
//             </div>
//           </div>
//         </div>
//         <div className="h-[20%]">
//           <button className={`store-button ${moveButtonUp ? "" : "button-up"}`} >
//             <h5>View full case Study &gt; </h5>
//           </button>
//         </div>
//       </div>

//       <div className="store-right">
//         <div className="cursor-light1"></div>
//         <div className="image-container">
//           <img src={AdidasImg} alt="Adidas Store" className={`image-transition ${isAdidas ? "fade-in" : "fade-out"}`}/>
//           <img src={Ikea} alt="IKEA Store" className={`image-transition ${isAdidas ? "fade-out" : "fade-in"}`}/>
//         </div>
//         <div className="scroll-container">
//           <div className="scroll-track"></div>
//           <div className="scroll-thumb" style={{ top: `${scrollPos}%` }}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adidas;


// import React, { useState, useEffect, useRef } from "react";
// import "../Styles/StoresSlide.css";
// import AdidasImg from "../components/Assets/Adidas.png";
// import Ikea from "../components/Assets/Ikea.png";
// import Nike from "../components/Assets/Nike.jpg";
// import Apple from "../components/Assets/Apple.jpg";

// const storeData = [
//   { title: "ADIDAS", subtitle: "Scores The Perfect Digital Landing In UAE", img: AdidasImg, stats: ["2M+", "500K"], labels: ["App Downloads", "New Users Acquired"] },
//   { title: "IKEA", subtitle: "Expands as a digital consumer experience leader", img: Ikea, stats: ["2+", "#1"], labels: ["Stores using the solution", "Ikea Users Acquired"] },
//   { title: "NIKE", subtitle: "Leading the Future of Digital Footwear", img: Nike, stats: ["1.5M", "800K"], labels: ["Sneakers Sold Online", "New Members Joined"] },
//   { title: "APPLE", subtitle: "Pioneering a new digital shopping experience", img: Apple, stats: ["10M+", "500K"], labels: ["iPhones Sold", "App Store Downloads"] }
// ];

// const Adidas = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [imageChangeCount, setImageChangeCount] = useState(0);
//   const [isScrollingLocked, setIsScrollingLocked] = useState(false);
//   const adidasRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsScrollingLocked(true);
//         }
//       },
//       { threshold: 1 }
//     );

//     if (adidasRef.current) {
//       observer.observe(adidasRef.current);
//     }

//     return () => {
//       if (adidasRef.current) {
//         observer.unobserve(adidasRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!isScrollingLocked) return;

//     let scrollTimeout;
//     const handleScroll = (e) => {
//       if (imageChangeCount < storeData.length - 1) {
//         e.preventDefault();
//       }

//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         if (imageChangeCount < storeData.length - 1) {
//           setCurrentIndex((prevIndex) => {
//             const newIndex = prevIndex + 1;
//             setImageChangeCount(newIndex);
//             return newIndex;
//           });
//         } else {
//           setIsScrollingLocked(false);
//         }
//       }, 300);
//     };

//     window.addEventListener("wheel", handleScroll, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, [isScrollingLocked, imageChangeCount]);

//   return (
//     <div ref={adidasRef} className="store-container">
//       <div className="store-left">
//         <div className="text-container1">
//           <h1 className="store-title">{storeData[currentIndex].title}</h1>
//         </div>
//         <div className="text-container2">
//           <h6 className="store-subtitle">{storeData[currentIndex].subtitle}</h6>
//         </div>
//         <div className="store-results">
//           <h4 className="store-results-title">RESULTS</h4>
//           <div className="store-stats">
//             <div className="store-stat">
//               <span className="store-number"><h1>{storeData[currentIndex].stats[0]}</h1></span>
//               <p className="store-label">{storeData[currentIndex].labels[0]}</p>
//             </div>
//             <div className="store-divider"></div>
//             <div className="store-stat">
//               <span className="store-number"><h1>{storeData[currentIndex].stats[1]}</h1></span>
//               <p className="store-label">{storeData[currentIndex].labels[1]}</p>
//             </div>
//           </div>
//         </div>
//         <div className="h-[20%]">
//           <button className="store-button">
//             <h5>View full case Study &gt; </h5>
//           </button>
//         </div>
//       </div>

//       <div className="store-right">
//         <div className="cursor-light1"></div>
//         <div className="image-container">
//           {storeData.map((store, index) => (
//             <img key={index} src={store.img} alt={`${store.title} Store`} className={`image-transition ${index === currentIndex ? "fade-in" : "fade-out"}`} />
//           ))}
//         </div>
//         <div className="scroll-container">
//           <div className="scroll-track"></div>
//           {/* <div className="scroll-thumb" style={{ top: `${scrollPos}%` }}></div> */}
//           <div className="scroll-thumb" style={{
//       height: `${100 / storeData.length}%`, // Adjust thumb height based on storeData length
//       top: `${(100 / storeData.length) * currentIndex}%`, // Move the thumb dynamically
//     }}></div> 
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adidas;

import React, { useState, useEffect, useRef } from "react";
import "../Styles/StoresSlide.css";
import AdidasImg from "../components/Assets/Adidas.png";
import Ikea from "../components/Assets/Ikea.png";
import Nike from "../components/Assets/Nike.jpg";
import Apple from "../components/Assets/Apple.jpg";

const storeData = [
  { title: "ADIDAS", subtitle: "Scores The Perfect Digital Landing In UAE", img: AdidasImg, stats: ["2M+", "500K"], labels: ["App Downloads", "New Users Acquired"] },
  { title: "IKEA", subtitle: "Expands as a digital consumer experience leader", img: Ikea, stats: ["2+", "#1"], labels: ["Stores using the solution", "Ikea Users Acquired"] },
  { title: "NIKE", subtitle: "Leading the Future of Digital Footwear", img: Nike, stats: ["1.5M", "800K"], labels: ["Sneakers Sold Online", "New Members Joined"] },
  { title: "APPLE", subtitle: "Pioneering a new digital shopping experience", img: Apple, stats: ["10M+", "500K"], labels: ["iPhones Sold", "App Store Downloads"] }
];

const Adidas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [containerScrollable, setContainerScrollable] = useState(false);
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const adidasRef = useRef(null);
  const totalItems = storeData.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContainerVisible(entry.isIntersecting);
      },
      { threshold: 0.8 }
    );

    if (adidasRef.current) {
      observer.observe(adidasRef.current);
    }

    return () => {
      if (adidasRef.current) {
        observer.unobserve(adidasRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!isContainerVisible) return;

      if (containerScrollable) {
        // If container is set to scroll normally, do not prevent default
        return;
      }

      event.preventDefault();

      if (!isScrolling) {
        setIsScrolling(true);
        setCurrentIndex((prevIndex) => {
          if (event.deltaY > 0) {
            if (prevIndex < totalItems - 1) {
              return prevIndex + 1;
            } else {
              setContainerScrollable(true); // Allow container to scroll normally after last image
              return prevIndex;
            }
          } else {
            if (prevIndex > 0) {
              setContainerScrollable(false); // Lock container scrolling when moving back up
              return prevIndex - 1;
            }
            return prevIndex;
          }
        });

        setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => window.removeEventListener("wheel", handleScroll);
  }, [isScrolling, totalItems, isContainerVisible, containerScrollable]);

  return (
    <div ref={adidasRef} className="store-container">
      <div className="store-left">
        <div className="text-container1">
          <h1 className="store-title">{storeData[currentIndex].title}</h1>
        </div>
        <div className="text-container2">
          <h6 className="store-subtitle">{storeData[currentIndex].subtitle}</h6>
        </div>
        <div className="store-results">
          <h4 className="store-results-title">RESULTS</h4>
          <div className="store-stats">
            <div className="store-stat">
              <span className="store-number"><h1>{storeData[currentIndex].stats[0]}</h1></span>
              <p className="store-label">{storeData[currentIndex].labels[0]}</p>
            </div>
            <div className="store-divider"></div>
            <div className="store-stat">
              <span className="store-number"><h1>{storeData[currentIndex].stats[1]}</h1></span>
              <p className="store-label">{storeData[currentIndex].labels[1]}</p>
            </div>
          </div>
        </div>
        <div className="h-[20%]">
          <button className="store-button">
            <h5>View full case Study &gt; </h5>
          </button>
        </div>
      </div>

      <div className="store-right">
        <div className="cursor-light1"></div>
        <div className="image-container">
          {storeData.map((store, index) => (
            <img key={index} src={store.img} alt={`${store.title} Store`} className={`image-transition ${index === currentIndex ? "fade-in" : "fade-out"}`} />
          ))}
        </div>
        <div className="scroll-container">
          <div className="scroll-track"></div>
          <div className="scroll-thumb" style={{
            height: `${100 / totalItems}%`,
            top: `${(100 / totalItems) * currentIndex}%`,
          }}></div> 
        </div>
      </div>
    </div>
  );
};

export default Adidas;
