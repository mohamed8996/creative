// import React from "react";
// import "../Styles/ParticleLoader.css";

// const ParticleEffect = () => {

//   return (
//     <>
//       {/* Left-Top */}
//       <div className="particle-container left-top">
//         {Array(7).fill(0).map((_, i) => (
//           <div key={i} className="particle"></div>
//         ))}
//       </div>

//       {/* Middle-Top */}
//       <div className="particle-container middle-top">
//         {Array(7).fill(0).map((_, i) => (
//           <div key={i} className="particle"></div>
//         ))}
//       </div> 
//       <div className="particle-container left">
//         {Array(3).fill(0).map((_, i) => (
//           <div key={i} className="particle"></div>
//         ))}
//       </div> 
//       <div className="particle-container left-bet">
//         {Array(3).fill(0).map((_, i) => (
//           <div key={i} className="particle"></div>
//         ))}
//       </div> 
//       <div className="particle-container left-last">
//         {Array(3).fill(0).map((_, i) => (
//           <div key={i} className="particle"></div>
//         ))}
//       </div> 
//       <div className="bubble bubble1 blinking-bubble"></div>
//  </>
//   );
// };

// export default ParticleEffect;
import React from "react";
import "../Styles/ParticleLoader.css";

const ParticleEffect = ({
  positions,
  particlesPerPosition,
  bubble,
  bubbleClassName
}) => {
  return (
    <>
      {positions.map((position, index) => (
        <div key={index} className={`particle-container ${position}`}>
          {Array(particlesPerPosition)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="particle"></div>
            ))}
        </div>
      ))}

{bubble && <div className={bubbleClassName}></div>}
</>
  );
};

export default ParticleEffect;
