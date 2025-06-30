import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Changed Link to NavLink
import './navbar.css';

function Navbar() {
  // State to track mobile status
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Close menu if resizing to desktop view
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Helper function to render NavLink, applying active class
  const renderNavLink = (to, text) => (
    <NavLink
      to={to}
      onClick={closeMenu} // Close menu on link click for mobile
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      {text}
    </NavLink>
  );

  return (
    <nav className="navbar"> {/* Ensure this class matches CSS */}
      <div className="header">
        <h2>Jake DeFord</h2>
        {isMobile && ( // Show menu icon only on mobile
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776; {/* Hamburger icon */}
          </div>
        )}
      </div>

      {/* Mobile Menu: shown if isMobile and isMenuOpen */}
      {isMobile && (
        <ul className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
          <li>{renderNavLink("/", "Home")}</li>
          <li>{renderNavLink("/about", "About")}</li>
          <li>{renderNavLink("/projects", "Projects")}</li>
          <li>{renderNavLink("/resume", "Resume")}</li>
          <li>{renderNavLink("/contact", "Contact")}</li>
        </ul>
      )}

      {/* Desktop Menu: shown if not isMobile */}
      {!isMobile && (
        <ul className="regular-menu">
          <li>{renderNavLink("/", "Home")}</li>
          <li>{renderNavLink("/about", "About")}</li>
          <li>{renderNavLink("/projects", "Projects")}</li>
          <li>{renderNavLink("/resume", "Resume")}</li>
          <li>{renderNavLink("/contact", "Contact")}</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
