import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const renderNavLink = (to, text) => (
    <NavLink
      to={to}
      onClick={closeMenu}
      className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
    >
      {text}
      <span className="active-dot"></span>
    </NavLink>
  );

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="brand">
          <NavLink to="/" onClick={closeMenu}>Jake DeFord</NavLink>
        </div>

        {isMobile && (
          <button
            className="menu-button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        )}

        <div className={`nav-menu ${isMobile ? 'mobile' : 'desktop'} ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>{renderNavLink("/", "Home")}</li>
            <li>{renderNavLink("/resume", "Experience")}</li>
            <li>{renderNavLink("/projects", "Stack & projects")}</li>
            <li>{renderNavLink("/contact", "Contact")}</li>
          </ul>
          
          <div className="nav-actions">
            <NavLink to="/contact" className="btn-primary" onClick={closeMenu}>Let's Talk</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
