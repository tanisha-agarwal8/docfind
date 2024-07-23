import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="reviews-content">
        <div className="reviews-header">
          <h2 className="reviews-title">Testimonial</h2>
          <p className="reviews-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </p>
        </div>
        <div className="reviews-list">
          <div className="review-card">
            <img
              loading="lazy"
              srcSet="..."
              className="review-avatar"
              alt="Review 1"
            />
            <h3 className="review-title">“An amazing service”</h3>
            <p className="review-text">
              Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a
              nunc mauris scelerisque sed egestas.
            </p>
            <p className="review-author">John Carter</p>
            <p className="review-role">CEO at Google</p>
          </div>
          <div className="review-card">
            <img
              loading="lazy"
              srcSet="..."
              className="review-avatar"
              alt="Review 2"
            />
            <h3 className="review-title">“One of a kind service”</h3>
            <p className="review-text">
              Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
              diam sit amet nisl suscipit adipis.
            </p>
            <p className="review-author">Sophie Moore</p>
            <p className="review-role">MD at Facebook</p>
          </div>
          <div className="review-card">
            <img
              loading="lazy"
              srcSet="..."
              className="review-avatar"
              alt="Review 3"
            />
            <h3 className="review-title">“The best service”</h3>
            <p className="review-text">
              Convallis posuere morbi leo urna molestie at elementum eu
              facilisis sapien pellentesque habitant.
            </p>
            <p className="review-author">Andy Smith</p>
            <p className="review-role">CEO Dot Austere</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
