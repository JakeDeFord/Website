// background.js
import React from 'react';
import './background.css'; // Add your background container styles here
import background_video from "../videos/background.mp4"

const BackgroundContainer = ({ children }) => {
    return (
        <div className="background">
            <video autoPlay loop muted className="background-video">
                <source src={background_video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {children}
        </div>
    );
}

export default BackgroundContainer;
