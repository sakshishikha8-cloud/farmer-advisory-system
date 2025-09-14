import React, { useState } from 'react';
import '../styles/LocationInput.css';

const LocationInput = () => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would typically handle the location data
    // For now, we'll just log it
    console.log('Location submitted:', location);
  };

  return (
    <section id="location" className="location-section">
      <div className="location-container">
        <h2>Enter Your Location</h2>
        <p>Get personalized agricultural advice based on your region</p>
        
        <form onSubmit={handleSubmit} className="location-form">
          <div className="input-group">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
              required
            />
            <button type="submit" className="submit-btn">
              Set Location
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LocationInput;