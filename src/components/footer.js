// Footer.js
import React from 'react';
import './footer.css';
import githubIcon from '../images/github_button.png';
import linkedinIcon from '../images/linkedin_button.png';
import leetcodeIcon from '../images/LeetCode_logo_black.png';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Jake DeFord</p>
            <div className="footer-buttons">
                <a href="https://github.com/JakeDeFord" target="_blank" rel="noopener noreferrer" aria-label="Jake DeFord's GitHub profile">
                    <img src={githubIcon} alt="Jake DeFord's GitHub profile" className="footer-button" />
                </a>
                <a href="https://www.linkedin.com/in/jake-deford" target="_blank" rel="noopener noreferrer" aria-label="Jake DeFord's LinkedIn profile">
                    <img src={linkedinIcon} alt="Jake DeFord's LinkedIn profile" className="footer-button" />
                </a>
                <a href="https://leetcode.com/jakedeford/" target="_blank" rel="noopener noreferrer" aria-label="Jake DeFord's LeetCode profile">
                    <img src={leetcodeIcon} alt="Jake DeFord's LeetCode profile" className="footer-button" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
