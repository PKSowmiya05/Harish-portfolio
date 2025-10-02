import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Robotics Intern',
      company: 'e-Yantra, IIT Bombay',
      period: 'May - July 2025',
      location: 'IIT Bombay, India',
      type: 'Internship',
      description: 'Worked on advanced robotics projects focusing on autonomous systems and control mechanisms.',
      responsibilities: [
        'Developed a self-balancing robot using PID control for real-time stability',
        'Implemented wall-following and obstacle avoidance for autonomous navigation',
        'Applied control systems, sensor fusion, and feedback mechanisms in robotic applications',
        'Collaborated with research teams on cutting-edge robotics solutions',
        'Contributed to multiple award-winning projects and innovations'
      ],
      technologies: ['PID Control', 'Sensor Fusion', 'Arduino', 'C/C++', 'Autonomous Navigation'],
      achievements: [
        'Successfully completed advanced robotics training program',
        'Developed award-winning self-balancing robot prototype',
        'Recognized for outstanding performance in autonomous systems'
      ],
      status: 'current'
    },
    {
      id: 2,
      role: 'Signal Telecommunication Intern',
      company: 'Railway Signal Telecommunication Workshop',
      period: 'December 2023',
      location: 'Coimbatore, India',
      type: 'Internship',
      description: 'Gained practical exposure to railway communication systems and signal processing under the Ministry of Railways.',
      responsibilities: [
        'Completed comprehensive training in Signal Telecommunication systems',
        'Learned railway communication networks and protocols',
        'Worked with Power electronics systems and components',
        'Gained hands-on experience with High voltage relay systems',
        'Understood safety protocols and standards in railway systems'
      ],
      technologies: ['Signal Processing', 'Power Electronics', 'Communication Networks', 'High Voltage Systems'],
      achievements: [
        'Successfully completed Ministry of Railways internship program',
        'Gained certification in Signal Telecommunication systems',
        'Developed understanding of critical infrastructure systems'
      ],
      status: 'completed'
    }
  ];

  const skills = [
    { name: 'Control Systems', level: 90 },
    { name: 'Robotics', level: 85 },
    { name: 'Embedded Systems', level: 88 },
    { name: 'Sensor Fusion', level: 82 },
    { name: 'PCB Design', level: 75 },
    { name: 'Programming (C/C++)', level: 80 },
    { name: 'Signal Processing', level: 70 },
    { name: 'Project Management', level: 78 }
  ];

  const certifications = [
    {
      name: 'e-Yantra Robotics Certification',
      issuer: 'IIT Bombay',
      year: '2025',
      type: 'Professional'
    },
    {
      name: 'Signal Telecommunication Systems',
      issuer: 'Ministry of Railways',
      year: '2023',
      type: 'Technical'
    },
    {
      name: 'IEEE Robotics Participation',
      issuer: 'IEEE International',
      year: '2025',
      type: 'Competition'
    }
  ];

  return (
    <div className="experience">
      <div className="experience-header">
        <div className="header-content">
          <h1>Experience & Skills</h1>
          <p>Professional journey in robotics, engineering, and innovation</p>
        </div>
      </div>

      <div className="experience-content">
        <div className="container">
          <section className="timeline-section">
            <h2>Professional Experience</h2>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={exp.id} className={`timeline-item ${exp.status}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="timeline-marker">
                    <div className="marker-icon">
                      {exp.type === 'Internship' ? '🎓' : '💼'}
                    </div>
                  </div>
                  
                  <div className="timeline-content">
                    <div className="experience-header-info">
                      <div className="experience-title">
                        <h3>{exp.role}</h3>
                        <h4>{exp.company}</h4>
                      </div>
                      <div className="experience-meta">
                        <span className="period">{exp.period}</span>
                        <span className="location">{exp.location}</span>
                        <span className={`status-badge ${exp.status}`}>
                          {exp.status === 'current' ? 'Current' : 'Completed'}
                        </span>
                      </div>
                    </div>

                    <p className="experience-description">{exp.description}</p>

                    <div className="experience-details">
                      <div className="responsibilities">
                        <h5>Key Responsibilities</h5>
                        <ul>
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex}>{resp}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="technologies-used">
                        <h5>Technologies Used</h5>
                        <div className="tech-tags">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>

                      <div className="achievements">
                        <h5>Key Achievements</h5>
                        <ul>
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="skills-section">
            <h2>Technical Skills & Proficiency</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="certifications-section">
            <h2>Certifications & Awards</h2>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="cert-icon">
                    {cert.type === 'Professional' ? '🏆' : 
                     cert.type === 'Technical' ? '🔧' : '🥇'}
                  </div>
                  <div className="cert-content">
                    <h4>{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <div className="cert-meta">
                      <span className="cert-year">{cert.year}</span>
                      <span className={`cert-type ${cert.type.toLowerCase()}`}>
                        {cert.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="stats-section">
        <div className="container">
          <h2>Experience Overview</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">💼</div>
              <div className="stat-number">2</div>
              <div className="stat-label">Internships Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">5</div>
              <div className="stat-label">Awards & Recognitions</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🛠️</div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Technical Skills</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">📜</div>
              <div className="stat-number">3</div>
              <div className="stat-label">Professional Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
