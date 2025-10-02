import React from 'react';
import './Footer.css';

const Footer = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const handleQuickLinkClick = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      // Scroll to top when navigating
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Harish S</h3>
            <p>Electronics & Communication Engineering Student</p>
            <p>Robotics & Control Systems Specialist</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => handleQuickLinkClick('home')} className="footer-link">Home</button></li>
              <li><button onClick={() => handleQuickLinkClick('about')} className="footer-link">About</button></li>
              <li><button onClick={() => handleQuickLinkClick('projects')} className="footer-link">Projects</button></li>
              <li><button onClick={() => handleQuickLinkClick('experience')} className="footer-link">Experience</button></li>
              <li><button onClick={() => handleQuickLinkClick('contact')} className="footer-link">Contact</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/harish-s-17789b327" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="mailto:sundarharish64@gmail.com" className="social-link">
                Email
              </a>
              <a href="tel:+919450598364" className="social-link">
                Phone
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Harish S. All rights reserved.</p>
          <p>Built with React.js & Pure CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
