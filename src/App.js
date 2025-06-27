import React from "react";
import "./global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home.js";
import AboutPage from "./pages/About/AboutPage.js";
import ProjectsPage from "./pages/Projects/ProjectsPage.js";
import ContactPage from "./pages/Contact/ContactPage.js";
import ResumePage from "./pages/Resume/ResumePage.js";
import Navbar from "./components/navbar"; // Path remains the same
import Footer from "./components/footer"; // Path remains the same
import Background from "./components/background"; // Path remains the same

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Background className="background">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Background>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
