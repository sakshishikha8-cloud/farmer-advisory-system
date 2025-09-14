import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About AgriAid</h2>
        <p className="about-intro">
          AgriAid is a revolutionary platform designed to assist farmers with cutting-edge AI technology.
        </p>
        

        
        <div className="about-details">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              We provide farmers with the tools and information they need to make informed decisions, increase productivity, and ensure sustainable farming practices.
            </p>
          </div>
          <div className="about-text">
            <h3>What We Offer</h3>
            <p>
              From real-time crop disease detection to personalized advisory services, AgriAid is your trusted partner in modern agriculture. We leverage the power of artificial intelligence to bring you accurate, timely, and actionable insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;