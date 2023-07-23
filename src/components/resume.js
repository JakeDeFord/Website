import React from 'react';
import './resume.css';

const resumePDF = process.env.PUBLIC_URL + '/resume.pdf';

function Resume() {
  return (
    <div>
      <iframe src={resumePDF} width="100%" height="1130px" title='Jake DeFord Resume'/>
    </div>
  );
}

export default Resume;