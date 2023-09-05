import React from 'react';
import './resume.css';

// const resumePDF = process.env.PUBLIC_URL + '/resume.pdf';

function Resume() {
  return (
    <div className="resume-container">
      <iframe src="https://drive.google.com/file/d/1Et9M5ZjyT4HDxjGlioutgIT1KOu3tKVs/preview" width="600" height="780" allow="autoplay" title="resume"></iframe>
    </div>
  );
}

export default Resume;
