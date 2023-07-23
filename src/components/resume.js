import React from 'react';
const resumePDF = process.env.PUBLIC_URL + '/resume.pdf';

function Resume() {
  return (
    <div>
      <h2>My Resume</h2>
      <iframe src={resumePDF} width="100%" height="600px" title='Jake DeFord Resume'/>
    </div>
  );
}

export default Resume;