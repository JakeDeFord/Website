// BackgroundContainer.js
import React from 'react';
import './background.css'; // Import CSS file for styling

function BackgroundContainer({ children }) {

    return (
        <div className="background-container">
            {children}
        </div>
    );
}

export default BackgroundContainer;
