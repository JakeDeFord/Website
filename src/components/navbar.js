import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const headImage = process.env.PUBLIC_URL + '/headshot.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <h2>Jake DeFord</h2>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <img src={headImage} alt="Logo" width="100" height="100" />
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
