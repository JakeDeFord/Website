// AboutMe.js
import React from 'react';

function AboutMe() {
    return (
        <div className="about-me-container">
            <div className="image-container">
                <img src={process.env.PUBLIC_URL + '/headshot.jpg'} alt="About Me" width="300" height="300" />
            </div >

            <div className="text-container">
                <p>
                    Your about me text goes here. Add any relevant information about yourself, your background,
                    your interests, or anything you'd like to share with your visitors.
                </p>
            </div>
        </div >
    );
}

export default AboutMe;
