// About.js
import React from 'react';
import AboutMe from '../../components/aboutMe'; // Adjusted path
import './AboutPage.css'; // Adjusted path

function AboutPage() { // Renamed component
    return (
        <div className="about-page-container">
            <h2>About Me</h2>
            <AboutMe />
        </div>
    );
}

export default AboutPage;
