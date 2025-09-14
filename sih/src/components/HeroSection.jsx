import React, { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToElement } from "../utils/scrollUtils";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const [location, setLocation] = useState('');

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    console.log('Location submitted:', location);
    // Here you would handle the location data
  };

  return (
    <section className="hero">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <h1>
          Welcome to <span>MySite</span>
        </h1>
        <p>
          Explore the future of sleek and modern interfaces with interactive 3D models seamlessly integrated.
        </p>
        <div className="hero-buttons">
          <Link to="/signup" className="btn solid">
            Get Started
          </Link>
          <button 
            onClick={() => scrollToElement('about', 80)} 
            className="btn outline"
            style={{ background: 'none', border: '2px solid var(--color-accent)', cursor: 'pointer' }}
          >
            Learn More
          </button>
        </div>
        
        <div className="hero-location-input">
          <form onSubmit={handleLocationSubmit}>
            <div className="location-input-group">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
                required
              />
              <button type="submit" className="location-submit-btn">
                Set
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE - Spline */}
      <div className="hero-right">
        <div className="spline-wrapper">
          <spline-viewer
            url="https://prod.spline.design/p0sy6dxb0S391nOP/scene.splinecode"
          ></spline-viewer>
          {/* Cover watermark */}
          <div className="watermark-cover"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


