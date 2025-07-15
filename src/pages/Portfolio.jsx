import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'magento',
      description: 'Custom Magento 2 store with advanced features and integrations',
      technologies: ['Magento 2', 'PHP', 'MySQL', 'Redis'],
      image: '🛒',
      link: '#'
    },
    {
      id: 2,
      title: 'Corporate Dashboard',
      category: 'react',
      description: 'Real-time analytics dashboard built with React and D3.js',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
      image: '📊',
      link: '#'
    },
    {
      id: 3,
      title: 'E-Commerce UI/UX Redesign',
      category: 'uiux',
      description: 'Complete UI/UX redesign for e-commerce platform increasing conversions by 40%',
      technologies: ['Figma', 'User Research', 'Prototyping', 'A/B Testing'],
      image: '🎨',
      link: '#'
    },
    {
      id: 4,
      title: 'Learning Management System',
      category: 'java',
      description: 'Comprehensive LMS built with Spring Boot and React',
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
      image: '📚',
      link: '#'
    },
    {
      id: 5,
      title: 'AI-Powered Analytics',
      category: 'python',
      description: 'Machine learning platform for business intelligence',
      technologies: ['Python', 'Django', 'TensorFlow', 'PostgreSQL'],
      image: '🤖',
      link: '#'
    },
    {
      id: 6,
      title: 'Project Management Tool',
      category: 'angular',
      description: 'Collaborative project management application',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Socket.io'],
      image: '📋',
      link: '#'
    },
    {
      id: 7,
      title: 'Healthcare Portal',
      category: 'react',
      description: 'Patient management system with telemedicine features',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      image: '🏥',
      link: '#'
    },
    {
      id: 8,
      title: 'Mobile App UI Design',
      category: 'uiux',
      description: 'Modern mobile app interface design with intuitive user experience',
      technologies: ['Adobe XD', 'Sketch', 'InVision', 'User Testing'],
      image: '📱',
      link: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'react', label: 'React' },
    { key: 'angular', label: 'Angular' },
    { key: 'magento', label: 'Magento' },
    { key: 'uiux', label: 'UI/UX' },
    { key: 'java', label: 'Java' },
    { key: 'python', label: 'Python' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="portfolio-hero section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="portfolio-hero-content text-center"
          >
            <h1>Our <span className="gradient-text">Portfolio</span></h1>
            <p className="hero-description">
              Explore our successful projects and see how we've helped businesses 
              transform their digital presence with innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="portfolio-filters">
        <div className="container">
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="portfolio-grid section-padding">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card"
              >
                <div className="project-image">
                  <span className="project-icon">{project.image}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link">
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="portfolio-stats section-padding">
        <div className="container">
          <div className="stats-grid">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="stat-item"
            >
              <div className="stat-number gradient-text">100+</div>
              <div className="stat-label">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="stat-item"
            >
              <div className="stat-number gradient-text">50+</div>
              <div className="stat-label">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="stat-item"
            >
              <div className="stat-number gradient-text">98%</div>
              <div className="stat-label">Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="stat-item"
            >
              <div className="stat-number gradient-text">24/7</div>
              <div className="stat-label">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="portfolio-testimonials section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>What Our Clients Say</h2>
            <p>Real feedback from our satisfied clients</p>
          </div>
          <div className="testimonials-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="testimonial-card"
            >
              <p>
                "Brain Logic delivered an exceptional e-commerce platform that exceeded our expectations. 
                Their attention to detail and technical expertise is outstanding."
              </p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>CEO, TechStore Inc.</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="testimonial-card"
            >
              <p>
                "The React dashboard they built for us has transformed how we analyze our business data. 
                Highly professional team with excellent communication."
              </p>
              <div className="testimonial-author">
                <strong>Michael Chen</strong>
                <span>CTO, DataViz Solutions</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content text-center"
          >
            <h2>Ready to Start Your Project?</h2>
            <p>
              Join our list of satisfied clients and let us help you build 
              something amazing for your business.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">
                Get Started Today
              </a>
              <a href="/services" className="btn-secondary">
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
