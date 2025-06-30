// AboutMe.js
import React from 'react';
import dog_pic from '../images/dog_tax.jpg'
import './aboutMe.css'; // Ensure CSS is imported

function AboutMe() {
    return (
        <div className="about-me-container">
            <div className="image-container">
                <img src={process.env.PUBLIC_URL + '/headshot.jpg'} alt="Jake DeFord headshot" className="headshot" width="300" height="300" />
            </div >

            <div className="text-container">
                <p>
                    Hey! Welcome to my webite. My name is Jake and I am a Computer Engineer. I graduated from RIT in 2022 with a bachelors in Computer Engineering.
                    I am currently pursuing embedded programming and Python.
                </p>
                <p>
                    Beyond my technical pursuits, I enjoy exploring new technologies and continuously expanding my skillset.
                    I just adopted a puppy named Daisy. Dog tax below.
                </p>
                <img src={dog_pic} alt="Daisy the puppy" className="dog-tax" width="75%" />
            </div>
        </div >
    );
}

export default AboutMe;
