// Project1.js
import React from 'react';
import Project1_pic from '../images/dancing_groot.gif';

function Project1() {
    return (
        <div className="project-card">
            <div className="project-image-container">
                <img src={Project1_pic} alt="Dancing Groot" />
            </div>
            <h3>Dancing Groot</h3>
            <p>
                Purchased a Dancing Groot from Amazon and was not pleased with its functions. The songs programmed into him were not authentic and were knockoffs.
                I opened the toy up and replaced the internal microcontroller and installed my own. I used a Nuvoton microcontroller that had a speaker controller and LED controller already built in.
                I replaced the stock soundtrack with MP3s I encoded and individually tuned for the built-in speaker, using licensed and original audio instead of the factory knockoff tracks.
            </p>
        </div>
    );
}

export default Project1;
