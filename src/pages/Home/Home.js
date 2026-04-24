import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container content-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">ENGINEERING<br />REAL-TIME<br />SYSTEMS</h1>
        <div className="hero-content">
          <p className="hero-description">
            I build high-throughput <strong>FPGA</strong> and networking paths, full-stack
            product software (<strong>Django</strong>, <strong>DRF</strong>, <strong>React</strong>),
            and self-hosted <strong>CI/CD</strong> with heavy automated testing. I work where
            hardware metrology, backend APIs, and operator-facing UIs meet.
          </p>
          <ul className="hero-highlights" aria-label="Recent impact">
            <li>10 Msps Artix-7 acquisition path · UDP/Ethernet</li>
            <li>Real-time monitoring · WebSockets, pytest, Playwright</li>
            <li>Self-hosted pipelines · Docker, Gitea Actions</li>
          </ul>
          <div className="hero-actions">
            <Link to="/experience" className="btn btn-primary">VIEW EXPERIENCE</Link>
            <Link to="/projects" className="btn btn-outline">VIEW STACK</Link>
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
            <p>
              <strong>Verilog</strong> on Xilinx FPGAs, AXI/AXIS fabric, and custom UDP/Ethernet
              for instrument-grade throughput, plus Vivado, simulation, and bring-up.
            </p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              {/* Icon placeholder for Full-Stack */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L4 20M4 4L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>FULL-STACK ARCHITECTURE</h3>
            <p>
              Product backends with <strong>Django</strong> and <strong>DRF</strong>,{' '}
              <strong>MySQL</strong> data models, and <strong>React</strong> UIs;{' '}
              <strong>WebSockets</strong> and REST for live telemetry and integrations.
            </p>
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
            <p>
              <strong>Docker</strong>-ized builds, <strong>Gitea Actions</strong>,{' '}
              <strong>pytest</strong> and <strong>Playwright</strong> gates, and private registries, with
              repeatable deploys and coverage you can point to.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Callout */}
      <section className="contact-callout">
        <div className="home-contact-card glass-panel">
          <div className="home-contact-info">
            <h2>WANT TO LEARN MORE?</h2>
            <p>
              Read the <Link to="/experience" className="home-inline-link">experience</Link> page
              for role detail, the <Link to="/resume" className="home-inline-link">PDF résumé</Link> for
              a one-pager, or <Link to="/projects" className="home-inline-link">stack &amp; projects</Link> for
              build stories.
            </p>
          </div>
          <div className="hero-actions">
            <Link to="/resume" className="btn btn-primary">VIEW RÉSUMÉ (PDF)</Link>
            <Link to="/projects" className="btn btn-outline">VIEW STACK</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
