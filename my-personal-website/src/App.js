import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo"></div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" className="nav-link">Projects</a>
            </li>
            {/* You can add more navigation items here later */}
          </ul>
        </div>
      </nav>
      <main className="container">
        <section className="profile-section">
          <div className="profile-image">
            {/* Replace with your actual image */}
            <img src="/images/headshot.png" alt="Your Name" />
          </div>
          
          <div className="profile-content">
            <h1>Ben Wyant</h1>
            <h2>MSCS @ Northwestern | Research @ <a href="https://www.alexander.vision/">BiVlab</a></h2>
            
            <div className="bio">
              <p>
                I'm currently a graduate student at Northwestern University pursuing a Master's in Computer Science (expected December 2025).
                I completed my undergraduate degree in Data Science at Northeastern University in 2024.
              </p>
              <p>
                I'm interested in implicit neural representations and solving inverse problems in computer vision. 
                I am also currently working as the lead machine learning engineer at <a href="https://www.sensifyrecycling.com/">Sensify</a>,
                where we are building a waste auditing device using computer vision.
              </p>
              <p>
                In my free time, I enjoy training mixed martial arts, cooking, and skiing.
              </p>
              
            </div>
            
            <div className="links">
              <a href="https://www.linkedin.com/in/benjamin-z-wyant/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
              <a href="https://github.com/bzwyant" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="mailto:benjaminwyant2026@u.northwestern.edu" className="btn">Email</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Ben Wyant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;