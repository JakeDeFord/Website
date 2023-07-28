import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const isMobile = navigator.maxTouchPoints > 0;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Header and menu icon for mobile */}
      <div className="header">
        <h2>Jake DeFord</h2>
        {isMobile && (
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            &#9776;
          </div>
        )}
      </div>

      {/* Dropdown menu on mobile when the menu is active */}
      {isMobile && isMenuOpen ? (
        <ul className="dropdown-menu">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={closeMenu}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      ) : (
        // Regular menu for larger screens
        <ul className="regular-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
