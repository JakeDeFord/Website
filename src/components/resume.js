import React from 'react';
import './resume.css';
const resumePDF = process.env.PUBLIC_URL + '/resume.pdf';

function Resume() {
  return (
    <div className="resume-container">
      <iframe src={resumePDF} className="resume-pdf" title='Jake DeFord Resume' />
    </div>
  );
}

export default Resume;
