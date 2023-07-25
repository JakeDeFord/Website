import React from 'react';
import './resume.css';

const resumePDF = process.env.PUBLIC_URL + '/resume.pdf';

function Resume() {
  return (
    <div className="resume-container">
      <iframe src="https://drive.google.com/file/d/1aFl2WHnCx_T01kS6Iy6bWpFARwaN5Dgw/preview" width="640" height="480" allow="autoplay"></iframe>
    </div>
  );
}

export default Resume;
