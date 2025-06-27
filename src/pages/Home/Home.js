import React from 'react';
import './Home.css'; // Corrected import to match CSS filename

function Home() {
  return (
    <div className="home-page-wrapper"> {/* Added wrapper div */}
      <div className="home-container">
        <h2>Welcome to My Portfolio</h2>
        <p>
          Hi there! I'm Jake, a passionate computer engineer with a love for coding and technology.
          This is my portfolio website, where I showcase my projects and share my journey in the world of software development.
        </p>
        <p>
          Feel free to explore my projects, learn more about me in the About section, or get in touch with me via the Contact page.
          I'm always excited to collaborate on new projects and connect with fellow developers.
        </p>
      </div>
    </div>
  );
}

export default Home;
