import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { category: 'Control Systems', items: ['PID Control', 'Basic LQR Control', 'Feedback Systems'] },
    { category: 'Sensor Fusion', items: ['IMU Integration', 'Encoder Feedback', 'Inertial Navigation', 'Sensor Calibration'] },
    { category: 'Robotics & Motion', items: ['Trajectory Planning', 'Actuator Control', 'Autonomous Navigation'] },
    { category: 'Embedded Systems', items: ['C/C++', 'Arduino', 'PIC', 'ESP32', 'UART/I2C/SPI', 'RTOS'] },
    { category: 'Tools & Design', items: ['PCB Design', 'Prototyping', 'Octave', 'EasyEDA', 'Proteus', 'Python', 'Fusion 360'] }
  ];

  const education = [
    {
      degree: 'B.E Electronics and Communication Engineering',
      institution: 'KIT-Kalaignar Karunanidhi Institution of Technology',
      period: 'Nov 2022 – May 2026',
      location: 'Coimbatore, India',
      status: 'Pursuing'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Shree Ramana Vikas Higher Secondary School',
      period: 'Jun 2021 – Apr 2022',
      location: 'Sivagangai, India',
      status: 'Completed'
    }
  ];

  const achievements = [
    'e-Yantra Innovation Challenge Awardee - IIT Bombay (2024)',
    'IEEE IAS R10 Robotic Competition - Taiwan (2025)',
    'e-Yantra Summer Internship - IIT Bombay (2025)',
    'PALS InnoWAH Competition - IIT Madras (2025)',
    'Vidya Innovation & Incubation Centre - Tamil Nadu (2025)'
  ];

  return (
    <div className="about">
      <div className="about-header">
        <div className="header-content">
          <h1>About Me</h1>
          <p>Passionate about robotics, control systems, and aerospace applications</p>
        </div>
        <div className="header-visual">
          <div className="profile-section">
            <div className="profile-avatar">
              <img 
                src="/images/harish-profile.jpg" 
                alt="Harish S - Profile" 
                className="avatar-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-content">
        <section className="bio-section">
          <div className="container">
            <div className="bio-grid">
              <div className="bio-text">
                <h2>Who I Am</h2>
                <p>
                  I'm an Electronics and Communication Engineering student with a deep passion for 
                  robotics, control systems, and aerospace applications. My journey in engineering 
                  has been marked by hands-on experience with UAVs, thrust vector control, and 
                  biomedical robotics.
                </p>
                <p>
                  As a National awardee at e-Yantra, IIT Bombay, and recognized participant in 
                  IEEE International Robotics Competition, I bring both theoretical knowledge and 
                  practical experience to complex engineering challenges. My work focuses on 
                  developing innovative solutions that bridge the gap between cutting-edge research 
                  and real-world applications.
                </p>
                <p>
                  I have a strong interest in contributing to the future of space technology and 
                  am particularly drawn to Agnikul Cosmos' vision of accessible and modular launch 
                  vehicles. My expertise in control systems and robotics positions me well to 
                  contribute to the next generation of aerospace innovations.
                </p>
              </div>
              <div className="bio-highlights">
                <div className="highlight-item">
                  <div className="highlight-number">4+</div>
                  <div className="highlight-text">Years of Learning</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">5+</div>
                  <div className="highlight-text">Major Projects</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">5</div>
                  <div className="highlight-text">Awards Won</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">2</div>
                  <div className="highlight-text">Internships</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="container">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-card">
                  <h3>{skillGroup.category}</h3>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="education-section">
          <div className="container">
            <h2>Education</h2>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-icon">
                    <div className="icon-circle">🎓</div>
                  </div>
                  <div className="education-content">
                    <h3>{edu.degree}</h3>
                    <h4>{edu.institution}</h4>
                    <div className="education-details">
                      <span className="period">{edu.period}</span>
                      <span className="location">{edu.location}</span>
                      <span className={`status ${edu.status.toLowerCase()}`}>{edu.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="achievements-section">
          <div className="container">
            <h2>Awards & Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-icon">🏆</div>
                  <div className="achievement-text">{achievement}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
