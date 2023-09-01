// Project1.js
import React from 'react';
import Project1_pic from '../images/dancing_groot.gif';
import './project1.css'; // Import the CSS file

function Project1() {
    return (
        <div className="project-content">
            <h3>Dancing Groot</h3>
            <div className="project-image-container">
                <img src={Project1_pic} alt="Dancing Groot" />
            </div>
            <p>
                Purchased a Dancing Groot from Amazon and was not pleased with its functions. The songs programmed into him were not authentic and were knockoffs.
                I opened the toy up and replaced the internal microcontroller and installed my own. I used a nuvaton microcontroller that had a speaker controller and LED controller already built in.
                I then ripped some youtube videos for music from the movies Groot was in and individualy edited the mp3 files to improve their performance for a toy speaker.
            </p>
        </div>
    );
}

export default Project1;
