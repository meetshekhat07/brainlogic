import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ReactService = () => {
  const features = [
    'Custom Component Development',
    'State Management (Redux/Context)',
    'Performance Optimization',
    'Mobile Responsive Design',
    'API Integration',
    'Testing & Quality Assurance',
    'Progressive Web Apps',
    'Server-Side Rendering'
  ];

  const benefits = [
    {
      title: 'Fast Performance',
      description: 'Lightning-fast user interfaces with optimized React components',
      icon: '⚡'
    },
    {
      title: 'Reusable Components',
      description: 'Modular architecture for maintainable and scalable applications',
      icon: '🔧'
    },
    {
      title: 'Modern UI/UX',
      description: 'Beautiful, intuitive interfaces that engage users',
      icon: '🎨'
    },
    {
      title: 'SEO Friendly',
      description: 'Server-side rendering for better search engine optimization',
      icon: '🔍'
    }
  ];

  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-hero section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="service-hero-content"
          >
            <div className="service-hero-text">
              <h1>
                <span className="service-icon">⚛️</span>
                ReactJS <span className="gradient-text">Development</span>
              </h1>
              <p className="hero-description">
                Build modern, interactive web applications with React. Our expert team creates 
                fast, scalable, and user-friendly interfaces that deliver exceptional user experiences.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn-primary">
                  Get Quote
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  View Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Offer</h2>
            <p>Comprehensive React development services for modern web applications</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-item"
              >
                <span className="feature-check">✓</span>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Choose Our React Services?</h2>
            <p>The advantages of working with our expert React team</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="benefit-card"
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="service-tech section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Technologies We Use</h2>
            <p>Modern tools and libraries for robust React development</p>
          </div>
          <div className="tech-grid">
            <div className="tech-item">React 18+</div>
            <div className="tech-item">TypeScript</div>
            <div className="tech-item">Next.js</div>
            <div className="tech-item">Redux Toolkit</div>
            <div className="tech-item">React Query</div>
            <div className="tech-item">Material-UI</div>
            <div className="tech-item">Styled Components</div>
            <div className="tech-item">Jest & Testing Library</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content text-center"
          >
            <h2>Ready to Build Your React Application?</h2>
            <p>
              Let's create a modern, fast, and engaging web application 
              that your users will love using React.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReactService;
