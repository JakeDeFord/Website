import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container content-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">ENGINEERING<br />REAL-TIME<br />SYSTEMS</h1>
        <div className="hero-content">
          <p className="hero-description">
            I specialize in building high-performance, embedded systems and scalable full-stack applications. With a focus on precision and efficiency, I bridge the gap between hardware and software to create robust, architectural solutions.
          </p>
          <div className="hero-actions">
            <a href="/resume" className="btn btn-primary">VIEW EXPERIENCE</a>
            <a href="/projects" className="btn btn-outline">VIEW STACK</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-header">
          <h2 className="section-title">CORE COMPETENCIES</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              {/* Icon placeholder for FPGA/Hardware */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3H15M3 9V15M21 9V15M9 21H15M7 7H17V17H7V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>FPGA & EMBEDDED</h3>
            <p>Designing high-speed digital circuits and real-time processing systems using VHDL/Verilog and modern FPGAs.</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              {/* Icon placeholder for Full-Stack */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L4 20M4 4L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>FULL-STACK ARCHITECTURE</h3>
            <p>Developing scalable backend services and responsive frontend interfaces using React, Node.js, and cloud native technologies.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              {/* Icon placeholder for CI/CD */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>SYSTEMS AUTOMATION</h3>
            <p>Implementing robust CI/CD pipelines and infrastructure as code to ensure reliable deployment and system monitoring.</p>
          </div>
        </div>
      </section>

      {/* Contact Callout */}
      <section className="contact-callout">
        <div className="home-contact-card glass-panel">
          <div className="home-contact-info">
            <h2>WANT TO LEARN MORE?</h2>
            <p>Browse selected projects on Stack, or view my full experience, to see what I can bring to the table.</p>
          </div>
          <div className="hero-actions">
            <a href="/resume" className="btn btn-primary">VIEW RESUME</a>
            <a href="/projects" className="btn btn-outline">VIEW STACK</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
