// src/components/pages/ResourcesPage.js
import React from 'react';
import './Pages.css';

function ResourcesPage() {
  return (
    <div className="page-container">
      <h1>Interesting Resources 🔭</h1>

      <div className="resource-section">
        <h2>Papers & Articles</h2>
        <ul>
          <li><a href="https://arxiv.org/abs/1511.06390" target="_blank" rel="noopener noreferrer">"On the Origin of Time Asymmetry" - Sean Carroll</a></li>
          <li><a href="https://www.nature.com/articles/d41586-019-02913-9" target="_blank" rel="noopener noreferrer">The quantum source of space-time - Nature</a></li>
          {/* Add more links */}
        </ul>
      </div>

      <div className="resource-section">
        <h2>Videos to Watch</h2>
        <div className="video-container">
          {/* YouTube Embed Code */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zih7wO_MPjU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
           <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/U_b2i_P-z2c"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
