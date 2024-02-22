import React from 'react';
import './global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Resume from './components/resume';
import Navbar from './components/navbar';
import Footer from './components/footer';
import BackgroundContainer from './components/background';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <BackgroundContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BackgroundContainer>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
