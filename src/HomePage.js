import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import { Result } from 'postcss';
import Results from './Results';
import ChooseUs from './ChooseUs';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    navigate(`/search?term=${searchTerm}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <div className="home-page">
      <HeroSection/>
      <div className="hero-section">
        <h3>Find a Doctor</h3>
        <input
          type="text"
          placeholder="Search by specialty"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        <button className="button" onClick={handleSearchSubmit}>Search</button>
      </div>
      <Results/>
      <ChooseUs/>
      <ServicesSection/>
    </div>
  );
};

export default HomePage;
