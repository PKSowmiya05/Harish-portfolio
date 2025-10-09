import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = ({ setCurrentPage }) => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Robotics Engineer',
    'Control Systems Specialist', 
    'ECE Student',
    'Innovation Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const handleViewWork = () => {
    if (setCurrentPage) {
      setCurrentPage('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume/Harish_S_Resume.pdf';
    link.download = 'Harish_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [imgError, setImgError] = useState(false);
  const [imgSrc, setImgSrc] = useState('/images/harish-profile.jpg');

  useEffect(() => {
    // try a couple of common paths if image is available in different folders
    const candidates = ['/images/harish-profile.jpg', '/harish-profile.jpg', '/assets/harish-profile.jpg'];
    let found = false;

    const checkNext = (idx) => {
      if (idx >= candidates.length) { setImgError(true); return; }
      const img = new Image();
      img.onload = () => { setImgSrc(candidates[idx]); found = true; };
      img.onerror = () => { if (!found) checkNext(idx + 1); };
      img.src = candidates[idx];
    };

    checkNext(0);
  }, []);

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">Hello, I'm</div>
            <h1 className="name">Harish S</h1>
            <div className="role-container">
              <span className="role-prefix">I'm a </span>
              <span className="animated-role">{roles[currentRole]}</span>
            </div>
            <p className="hero-description">
              Electronics and Communication Engineering student passionate about robotics, 
              control systems, and aerospace applications. National awardee at e-Yantra, IIT Bombay, 
              with expertise in UAVs, thrust vector control, and biomedical robotics.
            </p>
            <div className="hero-buttons">
              <button className="btn primary" onClick={handleViewWork}>View My Work</button>
              <button className="btn secondary" onClick={handleDownloadCV}>Download CV</button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="profile-container">
              <div className="profile-image">
                {imgError ? (
                  <div className="profile-placeholder">
                    <div className="initials">HS</div>
                  </div>
                ) : (
                  <div className="profile-photo">
                    <img
                      src={imgSrc}
                      alt="Harish S - Robotics Engineer"
                      className="profile-img"
                      onError={() => setImgError(true)}
                    />
                  </div>
                )}
                <div className="profile-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Major Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5</div>
            <div className="stat-label">Awards Won</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2</div>
            <div className="stat-label">Internships</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4+</div>
            <div className="stat-label">Years Learning</div>
          </div>
        </div>
      </div>

      <div className="highlights-section">
        <div className="highlights-container">
          <h2>Key Achievements</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🏆</div>
              <h3>e-Yantra National Awardee</h3>
              <p>Recognized at IIT Bombay for excellence in robotics and innovation</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🤖</div>
              <h3>IEEE Robotics Competition</h3>
              <p>International recognition for advanced robotic system development</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h3>Thrust Vector Control</h3>
              <p>Designed and prototyped TVC system for rocket engine applications</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🧠</div>
              <h3>Biomimetic Robotics</h3>
              <p>Developed octopus-inspired surgical robot with haptic feedback</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
