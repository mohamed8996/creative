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
