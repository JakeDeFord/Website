import React from "react";
import Project1 from "../../projects/project1";
import Project2 from "../../projects/project2";
import Project3 from "../../projects/project3";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div className="projects-container content-container">
      <div className="projects-header">
        <h2>THE STACK</h2>
        <p>Tools and domains I work in day to day, plus build stories below.</p>
      </div>

      <section
        className="skills-matrix"
        aria-labelledby="skills-matrix-heading"
      >
        <h3 id="skills-matrix-heading" className="skills-matrix-title">
          Skills
        </h3>
        <div className="skills-matrix-grid">
          <div className="skills-matrix-col">
            <h4>FPGA / RTL</h4>
            <p>
              Verilog · Vivado · AXI/AXIS · SPI · UDP/Ethernet · DAC · xelab ·
              Verible · openFPGALoader
            </p>
          </div>
          <div className="skills-matrix-col">
            <h4>Full-stack</h4>
            <p>
              Django / DRF · React · MySQL · Docker · WebSockets · REST APIs
            </p>
          </div>
          <div className="skills-matrix-col">
            <h4>CI / CD</h4>
            <p>
              Gitea Actions · pytest · Playwright / Jest · Ruff · pip-audit ·
              Docker Buildx · private registries
            </p>
          </div>
          <div className="skills-matrix-col">
            <h4>Languages &amp; tools</h4>
            <p>Python · C · JavaScript · SystemVerilog · Linux · Git</p>
          </div>
        </div>
      </section>

      <h3 className="projects-subheading">Build stories</h3>
      <p className="projects-subtext">
        Personal and academic projects that show how I think about hardware,
        firmware, and integration, not just what appears on a résumé line.
      </p>
      <div className="projects-grid">
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
    </div>
  );
}

export default ProjectsPage;
