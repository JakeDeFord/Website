import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page-container content-container">
      <div className="contact-header">
        <h2>CONTACT ME</h2>
        <p>If you have any questions or would like to get in touch, feel free to reach out using the methods below.</p>
      </div>

      <div className="contact-card glass-panel">
        <div className="contact-method">
          <span className="contact-label">Email</span>
          <a href="mailto:jdeford199@gmail.com" className="contact-link">jdeford199@gmail.com</a>
        </div>

        <div className="contact-method">
          <span className="contact-label">Social Media</span>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/jake-deford" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            <a href="https://www.twitter.com/jakedeford" target="_blank" rel="noopener noreferrer" className="contact-link">Twitter</a>
          </div>
        </div>

        <div className="contact-method">
          <span className="contact-label">Calls</span>
          <span className="contact-link">Happy to coordinate a voice call after we connect by email or LinkedIn.</span>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
