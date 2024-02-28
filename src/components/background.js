// background.js
import React from 'react';
import ParticleBackground from './particle_background'; // Import ParticleBackground component
import './background.css'; // Add your background container styles here

const BackgroundContainer = ({ children }) => {
    return (
        <div className="background">
            <ParticleBackground /> {/* Render ParticleBackground component */}
            {children}
        </div>
    );
}

export default BackgroundContainer;
