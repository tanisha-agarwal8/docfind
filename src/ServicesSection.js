import React from "react";
import "./ServicesSection.css";

const services = [
  {
    title: "Dental treatments",
    description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    imgSrc: "assets/images/dental.png", // replace with actual image path
    learnMoreImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f576af1654be3bf0e8d420bae357464ad21d1adcbcc5182e1925bbd690931538?"
  },
  {
    title: "Bones treatments",
    description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    imgSrc: "assets/images/bones.png", // replace with actual image path
    learnMoreImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a28a6b4da7c0b1d0237bbb205b94c8ad22a9306d33f6fbbe30159cc42f823e80?"
  },
  {
    title: "Diagnosis",
    description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    imgSrc: "assets/images/diagnosis.png", // replace with actual image path
    learnMoreImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/469a4bba67f018a779c5c3d959c17977458a22e80557d48fa7d0d6218099a18e?"
  },
  {
    title: "Cardiology",
    description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    imgSrc: "assets/images/cardiology.png", // replace with actual image path
    learnMoreImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f576af1654be3bf0e8d420bae357464ad21d1adcbcc5182e1925bbd690931538?"
  },
  {
    title: "Surgery",
    description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    imgSrc: "assets/images/surgery.png", // replace with actual image path
    learnMoreImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a28a6b4da7c0b1d0237bbb205b94c8ad22a9306d33f6fbbe30159cc42f823e80?"
  },
  {
    title: "Eye care",
    description: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    imgSrc: "assets/images/eye.png", // replace with actual image path
    learnMoreImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/469a4bba67f018a779c5c3d959c17977458a22e80557d48fa7d0d6218099a18e?"
  }
];

const ServicesSection = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h2 className="services-title">Services we provide</h2>
        <p className="services-description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img loading="lazy" src={service.imgSrc} alt={service.title} className="service-image" />
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
            <div className="learn-more">
              <span>Learn more</span>
              <img loading="lazy" src={service.learnMoreImgSrc} alt="Learn more" className="learn-more-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
