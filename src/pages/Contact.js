import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus({ isSubmitting: false, isSubmitted: false, error: 'Failed to send message. Please try again.' });
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'sundarharish64@gmail.com',
      link: 'mailto:sundarharish64@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 9450598364',
      link: 'tel:+919450598364'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Coimbatore, India',
      link: null
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/harish-s-17789b327',
      link: 'https://www.linkedin.com/in/harish-s-17789b327'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/harish-s-17789b327',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: '#',
      color: '#333'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:sundarharish64@gmail.com',
      color: '#ea4335'
    },
    {
      name: 'Phone',
      icon: '📞',
      url: 'tel:+919450598364',
      color: '#25d366'
    }
  ];

  return (
    <div className="contact">
      <div className="contact-header">
        <div className="header-content">
          <h1>Get In Touch</h1>
          <p>Let's discuss opportunities in robotics, aerospace, and innovative engineering projects</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="contact-intro">
                I'm always excited to connect with fellow engineers, researchers, and innovators. 
                Whether you're interested in collaboration, have a project in mind, or want to 
                discuss the latest in robotics and aerospace technology, I'd love to hear from you!
              </p>

              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-details">
                      <h4>{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} target={item.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="availability">
                <h3>Availability</h3>
                <div className="availability-item">
                  <span className="status-indicator available"></span>
                  <span>Available for internships and collaborations</span>
                </div>
                <div className="availability-item">
                  <span className="status-indicator available"></span>
                  <span>Open to research opportunities</span>
                </div>
                <div className="availability-item">
                  <span className="status-indicator available"></span>
                  <span>Interested in aerospace projects</span>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project, opportunity, or what you'd like to collaborate on..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${formStatus.isSubmitting ? 'submitting' : ''}`}
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {formStatus.isSubmitted && (
                  <div className="form-success">
                    <span className="success-icon">✅</span>
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </div>
                )}

                {formStatus.error && (
                  <div className="form-error">
                    <span className="error-icon">❌</span>
                    {formStatus.error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="social-section">
        <div className="container">
          <h2>Connect With Me</h2>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--hover-color': link.color }}
              >
                <div className="social-icon">{link.icon}</div>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
          <p className="social-cta">
            Follow my journey in robotics and engineering, or reach out for collaboration opportunities!
          </p>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Innovate Together?</h2>
            <p>
              Whether you're working on cutting-edge robotics, aerospace technology, or any 
              innovative engineering project, I'm excited to contribute my skills and passion 
              to make it a reality.
            </p>
            <div className="cta-buttons">
              <a href="mailto:sundarharish64@gmail.com" className="cta-btn primary">
                Start a Conversation
              </a>
              <a href="tel:+919450598364" className="cta-btn secondary">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
