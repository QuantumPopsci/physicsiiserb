// src/components/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function HomePage() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome, Fellow Stargazer! ✨</h1>
        <p>Your guide through the beautiful and bewildering universe of a physics major at IISER Bhopal.</p>
        <p>From Newton's Laws to Quantum Quirks, we've got you covered.</p>
        <Link to="/courses" className="cta-button">
          Explore Courses
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
