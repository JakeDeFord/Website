// About.js
import React from 'react';
import AboutMe from './aboutMe';
import './about.css'

function About() {
    return (
        <div className="about-page-container"> {/* Changed class name */}
            <h2>About Me</h2>
            <AboutMe />
        </div>
    );
}

export default About;
