// Project1.js
import React from 'react';

function Project2() {
    return (
        <div className="project-content"> {/* Apply the project-content class */}
            <h3>Senior Design</h3>
            <p>
                Designed a mobile application to aide stroke patients and at risk individuals. In our 4 man team I was tasked with developing the mobile application.
                The application allowed the user to log in using an excisting account, or create a new account using an email and password.
                After logging in the user was tasked with answering a survey through the app to collect more information.
                The application also collected data from the phone sensors while the user was completing promted tasks. This data was used in conjunction with the survey data to assess
                a fall risk. This fall risk was generated by sending all the collected data to a server and sending the server information to a matlab server. The matlab server ran a
                script to analyze the data collected. Upon generating the fall risk, the patient/user of the application was sent an email about their fall risk.
            </p>
            {/* Add any other details or images related to Project 2 */}
        </div>
    );
}

export default Project2;
