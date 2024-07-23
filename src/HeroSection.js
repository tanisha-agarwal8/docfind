import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-title">
            <span>Providing Quality </span>
            <span className="highlight-text">Healthcare</span>
            <span> for a </span>
            <span className="highlight-text1">Brighter</span>
            <span> and </span>
            <span className="highlight-text1">Healthy</span>
            <span> Future</span>
          </div>
          <div className="hero-description">
            At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry.
          </div>
          <div className="hero-buttons">
            <button className="appointments-button">Appointments</button>
            <img
              loading="lazy"
              src="assets/images/video.png"
              alt="Healthcare"
              className="hero-image"
            />
            <div className="watch-video">Watch Video</div>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            loading="lazy"
            src="assets/images/Hero.png" // Replace with your image source
            alt="Hero Image"
            className="hero-main-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
