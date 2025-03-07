/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../Styles/HomeSlide3.css";
import DM from './Assets/DM.png'
import WD from './Assets/WD.png'
import UI from './Assets/UI.png'
import GD from './Assets/GD.png'
import PV from './Assets/PV.png'
import BD from './Assets/BD.png'
import EM from './Assets/EM.png'

const Slide3 = () => {

  return (
    <div className="service-offering">
      <div className="so-content">
        <div className="so-content-width">
          <h1 className="so-title">SERVICE OFFERING</h1>
          <h5 className="so-description">
            WE SERVE OUR CLIENTS WITH A PLATE FULL OF INNOVATIVE DESIGN SOLUTIONS, SKILLFULLY TOPPED WITH A GREAT USER EXPERIENCE AND A PERFECT BLEND OF <span className="so-highlight">PASSION</span> AND <span className="so-highlight">EXPERTISE</span>.
          </h5>
        </div>
      </div>
      <div className="so-empty-spacer">
        <div className="carousel">
            <img src={DM} alt="Image 1" className="so-card" />
            <img src={WD} alt="Image 2" className="so-card" />
            <img src={UI} alt="Image 3" className="so-card" />
            <img src={GD} alt="Image 4" className="so-card" />
            <img src={PV} alt="Image 5" className="so-card" />
            <img src={BD} alt="Image 6" className="so-card" />
            <img src={EM} alt="Image 7" className="so-card" />
        </div>
      </div>
    </div>
  );
};

export default Slide3;

// import React, { useEffect, useRef, useState } from "react";
// import "../Styles/HomeSlide3.css";
// import DM from "./Assets/DM.png";
// import WD from "./Assets/WD.png";
// import UI from "./Assets/UI.png";
// import GD from "./Assets/GD.png";
// import PV from "./Assets/PV.png";
// import BD from "./Assets/BD.png";
// import EM from "./Assets/EM.png";

// const images = [DM, WD, UI, GD, PV, BD, EM];

// const getTransformStyle = (progress) => {
//   if (progress <= 5) return "translateY(100%) scale(0.5) opacity(0) visibility:hidden;";
//   if (progress <= 15) return "translateY(50%) scale(0.3) opacity(0.4) visibility:visible;";
//   if (progress <= 30) return "translateY(0) scale(0.9) opacity(1) visibility:visible;";
//   if (progress <= 43) return "translateY(-60%) scale(0.5) opacity(0.4) visibility:visible;";
//   if (progress <= 48) return "translateY(-100%) scale(0.3) opacity:0 visibility:visible;";
//   return "translateY(-120%) scale(0.3) opacity:0 visibility:hidden;";
// };

// const Slide3 = () => {
//   const imageRefs = useRef([]);
//   const [scrollPositions, setScrollPositions] = useState([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const newPositions = imageRefs.current.map((img) => {
//         if (!img) return 0;
//         const rect = img.getBoundingClientRect();
//         const progress = Math.max(0, Math.min(100, ((window.innerHeight - rect.top) / window.innerHeight) * 100));
//         return progress;
//       });
//       setScrollPositions(newPositions);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="service-offering">
//       <div className="so-content">
//         <div className="so-content-width">
//           <h1 className="so-title">SERVICE OFFERING</h1>
//           <h5 className="so-description">
//             WE SERVE OUR CLIENTS WITH A PLATE FULL OF INNOVATIVE DESIGN SOLUTIONS, SKILLFULLY TOPPED WITH A GREAT USER EXPERIENCE AND A PERFECT BLEND OF{" "}
//             <span className="so-highlight">PASSION</span> AND <span className="so-highlight">EXPERTISE</span>.
//           </h5>
//         </div>
//       </div>

//       <div className="carousel-container">
//         <div className="carousel">
//           {images.map((src, index) => (
//             <img
//               key={index}
//               ref={(el) => (imageRefs.current[index] = el)}
//               src={src}
//               alt={`Slide ${index}`}
//               className="so-card"
//               style={{ transform: getTransformStyle(scrollPositions[index] || 0) }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slide3;
