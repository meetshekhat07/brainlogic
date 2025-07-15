import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const JavaService = () => {
  const features = [
    'Spring Framework Applications',
    'Microservices Architecture',
    'Enterprise Applications',
    'RESTful API Development',
    'Database Integration',
    'Cloud-Native Solutions',
    'Performance Optimization',
    'Security Implementation'
  ];

  const benefits = [
    {
      title: 'Platform Independent',
      description: 'Write once, run anywhere - Java applications work across all platforms',
      icon: '🌍'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built for high-performance, scalable enterprise applications',
      icon: '📈'
    },
    {
      title: 'Robust Ecosystem',
      description: 'Extensive libraries and frameworks for rapid development',
      icon: '🔧'
    },
    {
      title: 'Enterprise Ready',
      description: 'Proven technology trusted by Fortune 500 companies worldwide',
      icon: '🏆'
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
                <span className="service-icon">☕</span>
                Java <span className="gradient-text">Development</span>
              </h1>
              <p className="hero-description">
                Build scalable, high-performance backend solutions with Java. Our expert team 
                creates robust enterprise applications using Spring Framework and modern Java 
                technologies that power your business growth.
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
            <p>Comprehensive Java development services for enterprise solutions</p>
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
            <h2>Why Choose Our Java Services?</h2>
            <p>The advantages of working with our expert Java team</p>
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
            <p>Modern Java technologies for robust application development</p>
          </div>
          <div className="tech-grid">
            <div className="tech-item">Java 21</div>
            <div className="tech-item">Spring Boot</div>
            <div className="tech-item">Spring Security</div>
            <div className="tech-item">Hibernate</div>
            <div className="tech-item">Maven/Gradle</div>
            <div className="tech-item">JUnit</div>
            <div className="tech-item">Docker</div>
            <div className="tech-item">Kubernetes</div>
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
            <h2>Ready to Build Your Java Application?</h2>
            <p>
              Let's create a scalable, high-performance backend solution that powers 
              your business with enterprise-grade Java technologies.
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

export default JavaService;
