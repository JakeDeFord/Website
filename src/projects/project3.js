// Project3.js
import React from 'react';
import Project3_pic from '../images/communication_instrument.jpg';
import './project3.css'; // Import the CSS file

function Project3() {
    return (
        <div className="project-content"> {/* Apply the project-content class */}
            <h3>Custom Ardiono Project</h3>
            <div className="project-image-container">
                <img src={Project3_pic} alt="Communication Instrument" />
            </div>
            <a href="https://github.com/JakeDeFord/Arduino_Project" target="_blank" rel="noopener noreferrer"><strong>Arduino Project source code on GitHub</strong></a>
            <p>
                Devised and assessed a budget-friendly alternative to a costly commercial product. This device included an Arduino Due, an ethernet shield, and a proto shield.
                This device was created to be a drop-in instrument that can communicate with hardware using most protocols. These protocols include SPI, I2c, UART, GPIO, and PWM.
                Designed as an ethernet controlled instrument, this device can be used to control a variety of devices as well as program EEPROMS, microcontrollers, and more.
                The device hosted its own TCP server that the python driver connected to and sent commands to. A custom packet message was designed that consisted of a command, an address,
                and a payload.
            </p>
        </div>
    );
}

export default Project3;
