import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PythonService = () => {
  const features = [
    'Web Development (Django/Flask)',
    'AI/ML Solutions',
    'Data Analysis & Visualization',
    'Automation Scripts',
    'API Development',
    'Scientific Computing',
    'Data Pipeline Development',
    'Machine Learning Models'
  ];

  const benefits = [
    {
      title: 'AI/ML Powerhouse',
      description: 'Leading language for artificial intelligence and machine learning projects',
      icon: '🤖'
    },
    {
      title: 'Rapid Development',
      description: 'Clean syntax and extensive libraries enable faster development cycles',
      icon: '⚡'
    },
    {
      title: 'Data Science Ready',
      description: 'Comprehensive ecosystem for data analysis, visualization, and processing',
      icon: '📊'
    },
    {
      title: 'Versatile Applications',
      description: 'From web development to automation, Python handles diverse use cases',
      icon: '🔧'
    }
  ];

  return (
    <div className="service-detail">
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
                <span className="service-icon">🐍</span>
                Python <span className="gradient-text">Development</span>
              </h1>
              <p className="hero-description">
                Harness the power of Python for AI/ML solutions, web development, and data analysis. 
                Our expert team creates intelligent applications that leverage Python's extensive 
                ecosystem to solve complex business challenges.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn-primary">Get Quote</Link>
                <Link to="/portfolio" className="btn-secondary">View Projects</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="service-features section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Offer</h2>
            <p>Comprehensive Python development services for modern applications</p>
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

      <section className="service-benefits section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Choose Our Python Services?</h2>
            <p>The advantages of working with our expert Python team</p>
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

      <section className="service-tech section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Technologies We Use</h2>
            <p>Modern Python technologies for intelligent application development</p>
          </div>
          <div className="tech-grid">
            <div className="tech-item">Python 3.12</div>
            <div className="tech-item">Django</div>
            <div className="tech-item">Flask</div>
            <div className="tech-item">FastAPI</div>
            <div className="tech-item">TensorFlow</div>
            <div className="tech-item">PyTorch</div>
            <div className="tech-item">Pandas</div>
            <div className="tech-item">NumPy</div>
          </div>
        </div>
      </section>

      <section className="service-cta section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content text-center"
          >
            <h2>Ready to Build Your Python Solution?</h2>
            <p>
              Let's create intelligent applications that leverage AI/ML, data analysis, 
              and automation to transform your business operations.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Start Your Project</Link>
              <Link to="/services" className="btn-secondary">View All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PythonService;
