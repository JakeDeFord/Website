// ProjectsPage.js
import React from 'react';
import Project1 from '../../projects/project1'; // Adjusted path
import Project2 from '../../projects/project2'; // Adjusted path
import Project3 from '../../projects/project3'; // Adjusted path
import './ProjectsPage.css'; // Adjusted path

function ProjectsPage() { // Renamed component
    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-grid">
                <Project1 />
                <Project2 />
                <Project3 />
            </div>
        </div>
    );
}

export default ProjectsPage;
