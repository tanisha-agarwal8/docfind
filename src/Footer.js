import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section footer-branding">
          <div className="footer-logo">
            <img
              loading="lazy"
              srcSet="assets/images/logo-doc.png"
              className="footer-logo-image"
              alt="Healthcare logo"
            />
            <div className="footer-logo-text">
              <span className="footer-logo-health">Healthcare</span>
              {/* <span className="footer-logo-care">care</span> */}
            </div>
          </div>
          <div className="footer-copyright">
            Made with 💗 by Tanisha!
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-title">Product</div>
          <div className="footer-link">Features</div>
          <div className="footer-link">Pricing</div>
          <div className="footer-link">Case studies</div>
          <div className="footer-link">Reviews</div>
          <div className="footer-link">Updates</div>
        </div>
        <div className="footer-section">
          <div className="footer-title">Company</div>
          <div className="footer-link">About</div>
          <div className="footer-link">Contact us</div>
          <div className="footer-link">Careers</div>
          <div className="footer-link">Culture</div>
          <div className="footer-link">Blog</div>
        </div>
        <div className="footer-section">
          <div className="footer-title">Support</div>
          <div className="footer-link">Getting started</div>
          <div className="footer-link">Help center</div>
          <div className="footer-link">Server status</div>
          <div className="footer-link">Report a bug</div>
          <div className="footer-link">Chat support</div>
        </div>
        <div className="footer-section footer-social">
          <div className="footer-title">Follow us</div>
          <div className="footer-social-link">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ee9665b1fea37b0b3bce6214ae1ac61357c0f8043b9319047baff1e3764f859?"
              className="footer-social-icon"
              alt="Facebook"
            />
            <span>Facebook</span>
          </div>
          <div className="footer-social-link">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/559df5dbd354a13084cf822b54d70b45ee726d728ad145932eb3ccf9248325bf?"
              className="footer-social-icon"
              alt="Twitter"
            />
            <span>Twitter</span>
          </div>
          <div className="footer-social-link">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d6b6deca63721a9cdb5b09f81bf6378a7f8a38c947a048771cd1edbea9c09de?"
              className="footer-social-icon"
              alt="Instagram"
            />
            <span>Instagram</span>
          </div>
          <div className="footer-social-link">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4439ad4e1331d3196b007f4242c794f9577ed4ec47ddde95878e093ddfbc822?"
              className="footer-social-icon"
              alt="LinkedIn"
            />
            <span>LinkedIn</span>
          </div>
          <div className="footer-social-link">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/62cbf34aa0e35274b4ed3a5084afdf1c20abc5e1c8829ae466ea59e17873ad3e?"
              className="footer-social-icon"
              alt="YouTube"
            />
            <span>YouTube</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
