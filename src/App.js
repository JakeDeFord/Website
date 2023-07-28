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

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
