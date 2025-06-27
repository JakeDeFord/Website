// Project3.js
import React from 'react';
import Project3_pic from '../images/communication_instrument.jpg';
// import './project3.css'; // CSS will be handled by projects.css project-card style

function Project3() {
    return (
        <div className="project-card"> {/* Changed class name */}
            <h3>Custom Arduino Project</h3> {/* Corrected typo "Ardiono" to "Arduino" */}
            <div className="project-image-container">
                <img src={Project3_pic} alt="Communication Instrument" />
            </div>
            <p>
                Devised and assessed a budget-friendly alternative to a costly commercial product. This device included an Arduino Due, an ethernet shield, and a proto shield.
                This device was created to be a drop-in instrument that can communicate with hardware using most protocols. These protocols include SPI, I2C, UART, GPIO, and PWM.
                Designed as an ethernet controlled instrument, this device can be used to control a variety of devices as well as program EEPROMs, microcontrollers, and more.
                The device hosted its own TCP server that the python driver connected to and sent commands to. A custom packet message was designed that consisted of a command, an address,
                and a payload.
            </p>
            <a href="https://github.com/JakeDeFord/Arduino_Project" target="_blank" rel="noopener noreferrer"> {/* Removed trailing space in URL */}
                <strong>View Arduino Project on GitHub</strong>
            </a>
        </div>
    );
}

export default Project3;
