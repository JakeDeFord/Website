import React from "react";
import "./ResumePage.css"; // Adjusted path

// const resumePDF = process.env.PUBLIC_URL + '/resume.pdf'; // This can be used if serving PDF locally

function ResumePage() {
  // Renamed component
  return (
    <div className="resume-page-container">
      <h2>My Resume</h2>
      <div className="resume-iframe-container">
        <iframe
          src="https://drive.google.com/file/d/1uLb4DXeYWtq9Q3hBSUnmcYjRNUpQoY87/preview"
          className="resume-pdf" // Class for the iframe itself
          allow="autoplay"
          title="Jake DeFord Resume" // More descriptive title
        ></iframe>
      </div>
    </div>
  );
}

export default ResumePage;
