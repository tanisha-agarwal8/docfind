import React from "react";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="chooseus-container">
      <div className="chooseus-content">
        <div className="chooseus-wrapper">
          <div className="chooseus-inner">
            <div className="chooseus-text">
              <h2 className="chooseus-title">
                You have lots of reasons to choose us
              </h2>
              <p className="chooseus-description">
                Lorem ipsum dolor sit amet consectetur adipiscing elit mattis
                sit phasellus mollis sit aliquam sit nullam.
              </p>
              <div className="chooseus-buttons">
                <button className="chooseus-button get-started">
                  Get started
                </button>
                <button className="chooseus-button talk-sales">
                  Talk to sales
                </button>
              </div>
            </div>
            <div className="chooseus-image-wrapper">
              <img
                loading="lazy"
                srcSet="assets/images/choose.png"
                alt="Choose Us"
                className="chooseus-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
