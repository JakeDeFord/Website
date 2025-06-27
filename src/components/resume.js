import React from 'react';
import './resume.css';

// const resumePDF = process.env.PUBLIC_URL + '/resume.pdf'; // This can be used if serving PDF locally

function Resume() {
  return (
    <div className="resume-page-container"> {/* Changed class to match CSS */}
      <h2>My Resume</h2>
      <div className="resume-iframe-container"> {/* Added a wrapper for better control */}
        <iframe
          src="https://drive.google.com/file/d/1Et9M5ZjyT4HDxjGlioutgIT1KOu3tKVs/preview"
          className="resume-pdf" // Class for the iframe itself
          allow="autoplay"
          title="Jake DeFord Resume" // More descriptive title
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
