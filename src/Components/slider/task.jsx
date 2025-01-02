import React, { useState } from "react";
import "./task.css";
import chromeImage from "../Assets/chrome.png";
import windowsImage from "../Assets/windows.png";
import firewallImage from "../Assets/firewal.png";

const Slider = () => {
  const slides = [
    {
      image: firewallImage,
      title: "Web Application Firewall",
      details: [
        "Integer vitae molestie felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula bibendum commodo. Curabitur porttitor nec nulla id tristique.",
        "Aenean et dapibus nisl. Integer vitae molestie felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Integer vitae molestie felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula bibendum commodo. Curabitur porttitor nec nulla id tristique.",
      ],
      buttonText: "Download WAF",
    },
    {
      image: windowsImage,
      title: "Windows Desktop Application",
      details: [
        "Integer vitae molestie felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula bibendum commodo. Curabitur porttitor nec nulla id tristique.",
        "Aenean et dapibus nisl. Integer vitae molestie felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Integer vitae molestie felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula bibendum commodo. Curabitur porttitor nec nulla id tristique.",
      ],
      buttonText: "Download Application",
    },
    {
      image: chromeImage,
      title: "Chrome Browser Extension",
      details: [
        "Integer vitae molestie felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula bibendum commodo. Curabitur porttitor nec nulla id tristique.",
        "Aenean et dapibus nisl. Integer vitae molestie felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Integer vitae molestie felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula bibendum commodo. Curabitur porttitor nec nulla id tristique.",
      ],
      buttonText: "Download Extension",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="page-container">
      {/* Title Section */}
      <div className="title-section">
        <h1>
          Revolutionizing your <br />
          Productivity with <br />
          <span>Zk Guard</span>
        </h1>
      </div>

      {/* Slider Section */}
      <div className="slider-container">
        {/* Left Card Logic */}
        <div className="left-card-with-arrow">
          <div className="left-card">
            {slides.map((slide, index) => {
              const position =
                index === currentIndex
                  ? "active"
                  : index === (currentIndex - 1 + slides.length) % slides.length
                  ? "left"
                  : "right";

              return (
                <div key={index} className={`card ${position}`}>
                  <div className="card-content">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="card-image"
                    />
                    <h3 className="card-title">{slide.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows Below */}
          <div className="slider-controls">
            <button className="control-button" onClick={prevSlide}>
              &#8592;
            </button>
            <button className="control-button" onClick={nextSlide}>
              &#8594;
            </button>
          </div>
        </div>

        {/* Right Card Logic */}
        <div className="right-card">
          {slides.map((slide, index) => {
            const position =
              index === currentIndex
                ? "active"
                : index === (currentIndex - 1 + slides.length) % slides.length
                ? "left"
                : "right";

            return (
              <div key={index} className={`r-card ${position}`}>
                <h2>{slide.title}</h2>
                <hr />
                <ul className="details-list">
                  {slide.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <button className="download-button">{slide.buttonText}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
