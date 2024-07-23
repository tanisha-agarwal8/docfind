import React from "react";
import "./Results.css";

const Results = () => {
  return (
    <div className="results-container">
      <div className="results-content">
        <div className="results-header">
          <h2 className="results-title">Our results in numbers</h2>
        </div>
        <div className="results-list">
          <div className="results-item">
            <div className="results-percentage">99<span>%</span></div>
            <div className="results-description">Customer satisfaction</div>
          </div>
          <div className="results-item">
            <div className="results-percentage">15<span>k</span></div>
            <div className="results-description">Online Patients</div>
          </div>
          <div className="results-item">
            <div className="results-percentage">12<span>k</span></div>
            <div className="results-description">Patients Recovered</div>
          </div>
          <div className="results-item">
            <div className="results-percentage">240<span>%</span></div>
            <div className="results-description">Company growth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
