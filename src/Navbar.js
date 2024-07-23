import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img
          loading="lazy"
          srcSet="assets/images/logo-doc.png"
          alt="Logo"
          className="navbar-logo-img"
        />
        <div className="navbar-logo-text">
          <span className="navbar-logo-health">Healthcare</span>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/appointments" className="navbar-link">My Appointments</Link>
          <Link to="/" className="navbar-link">Contact Us</Link>
          <Link to="/" className="navbar-link">Blogs</Link>
        </div>
        <div className="navbar-signup">
          <Link to="/" className="navbar-link">Sign up</Link>
        </div>
        <div className="navbar-login">
          <Link to="/" className="navbar-link">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
