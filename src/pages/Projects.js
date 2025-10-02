import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Thrust Vector Controlled Rocket Engine',
      category: 'aerospace',
      description: 'Designed and prototyped a thrust vector control (TVC) system for a small-scale rocket engine with custom flight controller using ESP32.',
      technologies: ['ESP32', 'PID Control', 'Servo Control', 'Sensor Integration'],
      features: [
        'Custom flight controller development',
        'Real-time sensor data integration',
        'Servo-actuated nozzle deflection',
        'PID-based feedback control for orientation',
        'Dynamic response adjustment'
      ],
      image: '🚀',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Autonomous Self-Balancing Robot',
      category: 'robotics',
      description: 'Self-balancing robot with wall-following and obstacle avoidance capabilities using advanced control systems and sensor fusion.',
      technologies: ['PID Control', 'LQR Control', 'Sensor Fusion', 'Arduino'],
      features: [
        'Real-time stability using PID and LQR control',
        'Wall-following algorithms',
        'Obstacle avoidance system',
        'Encoder feedback integration',
        'Autonomous navigation capabilities',
        'Odometry-based navigation'
      ],
      image: '🤖',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Biomimetic Surgical Robot',
      category: 'medical',
      description: 'Octopus-inspired robotic system for minimally invasive surgeries with haptic feedback and precision control.',
      technologies: ['Raspberry Pi', 'ESP32', 'Arduino', 'I2C Communication', 'PID Control'],
      features: [
        'Octopus-inspired flexible design',
        'Haptic feedback system',
        'Surgeon hand movement mapping',
        'Force-sensing gripper',
        'Real-time robotic actuation',
        'Tissue cutting force monitoring'
      ],
      image: '🐙',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'SevvaiVahana - Autonomous Drone for ISRO',
      category: 'aerospace',
      description: 'Autonomous drone system designed for ISRO with GPS-independent operations, LiDAR mapping, and advanced path planning.',
      technologies: ['Raspberry Pi', 'ESP32', 'LiDAR', 'Path Planning', 'Computer Vision'],
      features: [
        'GPS-independent operation',
        'Lift-off and hovering control',
        'Waypoint navigation system',
        'Sequential landing capability',
        'Automatic return-to-home',
        'LiDAR-based mapping',
        'Image processing for obstacle avoidance',
        'Shortest path optimization'
      ],
      image: '🛸',
      status: 'Completed'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'aerospace', label: 'Aerospace' },
    { id: 'medical', label: 'Medical Tech' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="projects">
      <div className="projects-header">
        <div className="header-content">
          <h1>My Projects</h1>
          <p>Innovative solutions in robotics, aerospace, and biomedical engineering</p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">
          <div className="filter-section">
            <h2>Filter by Category</h2>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-header">
                  <div className="project-icon">{project.image}</div>
                  <div className="project-status">
                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-footer">
                  <button className="project-btn primary">View Details</button>
                  <button className="project-btn secondary">Live Demo</button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <div className="no-projects-icon">📂</div>
              <h3>No projects found</h3>
              <p>No projects match the selected category.</p>
            </div>
          )}
        </div>
      </div>

      <div className="stats-section">
        <div className="container">
          <h2>Project Statistics</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">🚀</div>
              <div className="stat-number">4</div>
              <div className="stat-label">Major Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🛠️</div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies Used</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">3</div>
              <div className="stat-label">Award-Winning</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🔬</div>
              <div className="stat-number">3</div>
              <div className="stat-label">Research Areas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
