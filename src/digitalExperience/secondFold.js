import React, { useState, useEffect } from "react";
import sun from '../asset/sun.png'
import "./secondScene.css";
import circle from '../asset/circleButton.png';

const SecondScene = ({opacity}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showSun, setShowSun] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      if (position > 1000) {
        setShowSun(true);
      } else {
        setShowSun(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sunTransform = showSun
    ? "translate(-50%, -50%) scale(1)"
    : "translate(-50%, -50%) scale(0.5)";

  return (
    <div  style={{ opacity, transition: "opacity 0.5s ease-out" }}
      className={`second-scene-container ${
        showSun ? "bg-transition" : ""
      }`}
    >
      <div className="sun-container">
        <img
          src={sun}
          alt="Transitioning Circle to Sun"
          className={`sun-image ${showSun ? "sun-active" : ""}`}
          style={{   transform: sunTransform,
            transition: "transform 1s ease-out, opacity 1s ease-out", }}
        />
      </div>
      <div
        className={`text-next-level ${showSun ? "text-visible" : ""}`}
      >
        <div>Taking digital experience to</div>
        <div className="text-highlight">NEXT LEVEL</div>
      </div>
    </div>
  );
};

export default SecondScene;
