import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <p>&copy; {new Date().getFullYear()} JAKE DEFORD &bull; ROCHESTER, NY</p>
                </div>
                <div className="footer-right">
                    <a href="https://www.linkedin.com/in/jake-deford" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                    <a href="https://github.com/JakeDeFord" target="_blank" rel="noopener noreferrer">GITHUB</a>
                    <Link to="/projects">SYSTEMS</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
