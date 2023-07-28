// Projects.js
import React from 'react';
import Project1 from '../projects/project1';
import Project2 from '../projects/project2';
import Project3 from '../projects/project3';
import './projects.css';

function Projects() {
    return (
        <div className="projects-container"> {/* Add the projects-container class */}
            <h2>My Projects</h2>
            <Project1 />
            <Project2 />
            <Project3 />
        </div>
    );
}

export default Projects;