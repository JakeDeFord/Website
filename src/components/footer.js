// Footer.js
import React from 'react';
import './footer.css';
import githubIcon from '../images/github_button.png';
import linkedinIcon from '../images/linkedin_button.png';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Jake DeFord</p>
            <div className="footer-buttons">
                <a href="https://github.com/JakeDeFord" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="footer-button" />
                </a>
                <a href="https://www.linkedin.com/in/jake-deford" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="footer-button" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
