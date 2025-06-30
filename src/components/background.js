// background.js
import React from 'react';
import './background.css'; // Add your background container styles here
// Video import removed as video is no longer used
// import background_video from "../videos/background.mp4"

const BackgroundContainer = ({ children }) => {
    return (
        <div className="background">
            {/* Video element removed */}
            {children}
        </div>
    );
}

export default BackgroundContainer;
