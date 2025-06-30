// background.js
import React from "react";
import "./background.css"; // Add your background container styles here
// Video import removed as video is no longer used
// import background_video from "../videos/background.mp4"

const BackgroundContainer = ({ children }) => {
  return (
    <main id="main-content" className="background">
      {/* Video element removed */}
      {children}
    </main>
  );
};

export default BackgroundContainer;
