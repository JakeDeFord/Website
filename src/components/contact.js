import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>If you have any questions or would like to get in touch, feel free to reach out using the methods below:</p>

      <div className="contact-method">
        <span className="contact-label">Email:</span>
        <a href="mailto:jdeford199@gmail.com">jdeford199@gmail.com</a>
      </div>

      <div className="contact-method">
        <span className="contact-label">Social Media:</span>
        <a href="https://www.linkedin.com/in/jake-deford" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.twitter.com/jakedeford" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>

      <div className="contact-method">
        <span className="contact-label">Phone:</span>
        <a href="tel:585-494-7522">(585) 494-7522</a>
      </div>
    </div>
  );
}

export default Contact;
