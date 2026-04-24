import React from "react";
import "./global.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/Home.js";
import ExperiencePage from "./pages/Experience/ExperiencePage.js";
import ProjectsPage from "./pages/Projects/ProjectsPage.js";
import ContactPage from "./pages/Contact/ContactPage.js";
import ResumePage from "./pages/Resume/ResumePage.js";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Background from "./components/background";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Background className="background">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/stack" element={<Navigate to="/projects" replace />} />
            <Route path="/systems" element={<Navigate to="/projects" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Background>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
