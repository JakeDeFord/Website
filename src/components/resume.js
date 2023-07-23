import React from 'react';
// import './resume.css';
const resumePDF = process.env.PUBLIC_URL + '/resume.pdf';

function Resume() {
  return (
    <div>
      <iframe src={resumePDF} width="100%" height="1130px" title='Jake DeFord Resume'/>
    </div>
  );
}

export default Resume;

// import React from 'react';
// import './resume.css'; // Import the CSS file
// const resumePDF = process.env.PUBLIC_URL + '/resume.pdf';


// function Resume() {
//   return (
//     <div>
//       <div className="resizable-box">
//         <div className="iframe-container">
//           <iframe
//             title="Resume"
//             src={resumePDF}
//             frameBorder="0"
//             allowFullScreen
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Resume;