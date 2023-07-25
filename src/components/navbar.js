import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const headImage = process.env.PUBLIC_URL + '/headshot.jpg';

function Navbar() {
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
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          &#9776;
        </div>
      </div>

      <ul className={isMenuOpen ? 'dropdown-menu' : ''}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <img src={headImage} alt="Logo" width="100" height="100" />
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
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
    </nav>
  );
}

export default Navbar;
