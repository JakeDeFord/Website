import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page-container content-container">
      <div className="contact-header">
        <h2>CONTACT ME</h2>
        <p>
          Open to full-stack, embedded, and FPGA-adjacent software roles in the Rochester
          area or remote-friendly arrangements. Say hello and we can find time to talk.
        </p>
      </div>

      <div className="contact-card glass-panel">
        <div className="contact-method">
          <span className="contact-label">Email</span>
          <a href="mailto:jdeford199@gmail.com" className="contact-link">jdeford199@gmail.com</a>
        </div>

        <div className="contact-method">
          <span className="contact-label">Professional</span>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/jake-deford" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            <a href="https://github.com/JakeDeFord" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
          </div>
        </div>

        <div className="contact-method">
          <span className="contact-label">Calls</span>
          <span className="contact-note">
            Happy to coordinate a voice call after we connect by email or LinkedIn.
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
