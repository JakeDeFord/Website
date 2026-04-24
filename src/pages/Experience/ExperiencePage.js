import React from "react";
import { Link } from "react-router-dom";
import "./ExperiencePage.css";

function ExperiencePage() {
  return (
    <div className="experience-page content-container">
      <header className="experience-header">
        <h1>EXPERIENCE</h1>
        <p className="experience-lead">
          Selected roles in software, FPGA, and test automation. For a
          one-page, printable version, use{" "}
          <Link to="/resume" className="experience-inline-link">
            the résumé (PDF)
          </Link>
          .
        </p>
      </header>

      <section className="experience-section glass-panel" aria-labelledby="lumetrics-heading">
        <div className="experience-role-header">
          <h2 id="lumetrics-heading">Lumetrics, Inc.</h2>
          <p className="experience-meta">Software Engineer · Rochester, NY</p>
          <p className="experience-dates">April 2024 – Present</p>
        </div>
        <ul className="experience-bullets">
          <li>
            Developed a real-time instrument monitoring platform using{" "}
            <strong>Django</strong> and <strong>React</strong>, including a
            versioned internal API client and <strong>WebSocket</strong>-based telemetry.
          </li>
          <li>
            Engineered a <strong>10 Msps</strong> data acquisition pipeline on
            Xilinx <strong>Artix-7</strong> FPGAs using <strong>Verilog</strong>,
            with custom <strong>UDP/Ethernet</strong> for high-throughput
            transfer.
          </li>
          <li>
            Built a self-hosted <strong>CI/CD</strong> stack with{" "}
            <strong>Docker</strong> and <strong>Gitea Actions</strong>,
            including multi-stage deploys and <strong>90%+</strong> test
            coverage via <strong>pytest</strong> and <strong>Playwright</strong>.
          </li>
          <li>
            Optimized hardware simulation and synthesis with multithreaded{" "}
            <strong>xelab</strong> batch runs and <strong>IP caching</strong> to
            cut iteration time.
          </li>
          <li>
            Refactored <strong>API</strong> architecture and data models for
            complex measurement records, using <strong>DRF</strong> serializers
            and <strong>MySQL</strong>.
          </li>
          <li>
            Streamlined hardware verification with <strong>Python</strong>{" "}
            validation tools and drivers aggregating multi-board test results.
          </li>
        </ul>
      </section>

      <section className="experience-section glass-panel" aria-labelledby="mastodon-heading">
        <div className="experience-role-header">
          <h2 id="mastodon-heading">Mastodon Design</h2>
          <p className="experience-meta">Software Engineer I · Rochester, NY</p>
          <p className="experience-dates">February 2022 – March 2024</p>
        </div>
        <ul className="experience-bullets">
          <li>
            Recovered <strong>$60,000</strong> in hardware assets in two months
            by leading troubleshooting that found and repaired{" "}
            <strong>32</strong> failing boards.
          </li>
          <li>
            Engineered a cost-effective, drop-in replacement for commercial test
            gear: <strong>Ethernet</strong>, <strong>SPI</strong>,{" "}
            <strong>I2C</strong>, <strong>GPIO</strong>, <strong>ADC</strong>,
            and <strong>PWM</strong> support.
          </li>
          <li>
            Built <strong>Python</strong> validation software and drivers to
            aggregate multi-board test results and streamline the verification
            lifecycle.
          </li>
        </ul>
      </section>

      <section className="experience-section glass-panel" aria-labelledby="education-heading">
        <div className="experience-role-header">
          <h2 id="education-heading">Education</h2>
        </div>
        <p className="experience-education">
          <strong>Rochester Institute of Technology</strong>, BS, Computer
          Engineering (May 2022) · Dean&apos;s List, Fall 2020
        </p>
      </section>

      <div className="experience-cta">
        <Link to="/resume" className="btn btn-primary">
          View résumé (PDF)
        </Link>
        <Link to="/projects" className="btn btn-outline">
          Stack &amp; projects
        </Link>
      </div>
    </div>
  );
}

export default ExperiencePage;
