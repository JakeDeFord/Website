// Project1.js
import React from 'react';
import Project1_pic from '../images/dancing_groot.gif';

function Project1() {
    return (
        <div className="project-content"> {/* Apply the project-content class */}
            <h3>Dancing Groot</h3>
            <div className="project-image-container"> {/* Add a container for the image */}
                <img src={Project1_pic} alt="Dancing Groot" />
            </div>
            <p>Description of Project 1</p>
            {/* Add any other details or images related to Project 1 */}
        </div>
    );
}

export default Project1;
