import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const UIUXService = () => {
  const features = [
    'User Research & Analysis',
    'Information Architecture',
    'Wireframing & Prototyping',
    'Visual Design & Branding',
    'Interaction Design',
    'Usability Testing',
    'Responsive Design',
    'Design System Creation'
  ];

  const benefits = [
    {
      title: 'User-Centered Design',
      description: 'Research-driven designs that prioritize user needs and business goals',
      icon: '👥'
    },
    {
      title: 'Increased Conversions',
      description: 'Optimized user flows and interfaces that drive engagement and sales',
      icon: '📈'
    },
    {
      title: 'Brand Consistency',
      description: 'Cohesive design systems that strengthen your brand identity',
      icon: '🎯'
    },
    {
      title: 'Mobile-First Approach',
      description: 'Responsive designs that work perfectly across all devices',
      icon: '📱'
    }
  ];

  const designProcess = [
    {
      step: '1',
      title: 'Research & Discovery',
      description: 'Understanding your users, business goals, and market landscape'
    },
    {
      step: '2',
      title: 'Information Architecture',
      description: 'Organizing content and features for optimal user experience'
    },
    {
      step: '3',
      title: 'Wireframing',
      description: 'Creating low-fidelity layouts to establish structure and flow'
    },
    {
      step: '4',
      title: 'Visual Design',
      description: 'Applying colors, typography, and visual elements to create stunning interfaces'
    },
    {
      step: '5',
      title: 'Prototyping',
      description: 'Building interactive prototypes to test and validate design concepts'
    },
    {
      step: '6',
      title: 'Testing & Iteration',
      description: 'Conducting usability tests and refining designs based on feedback'
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
                <span className="service-icon">🎨</span>
                UI/UX <span className="gradient-text">Design</span>
              </h1>
              <p className="hero-description">
                Create exceptional user experiences with our expert UI/UX design services. 
                We craft beautiful, intuitive interfaces that engage users and drive business results 
                through research-driven design and user-centered approaches.
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
            <p>Comprehensive UI/UX design services for exceptional digital experiences</p>
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
            <h2>Why Choose Our UI/UX Design Services?</h2>
            <p>The advantages of working with our expert design team</p>
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

      <section className="design-process section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Design Process</h2>
            <p>A systematic approach to creating exceptional user experiences</p>
          </div>
          <div className="process-timeline">
            {designProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="timeline-item"
              >
                <div className="timeline-number">{item.step}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-tech section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Design Tools We Use</h2>
            <p>Industry-leading tools for professional UI/UX design</p>
          </div>
          <div className="tech-grid">
            <div className="tech-item">Figma</div>
            <div className="tech-item">Adobe XD</div>
            <div className="tech-item">Sketch</div>
            <div className="tech-item">Photoshop</div>
            <div className="tech-item">Illustrator</div>
            <div className="tech-item">InVision</div>
            <div className="tech-item">Principle</div>
            <div className="tech-item">Framer</div>
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
            <h2>Ready to Transform Your User Experience?</h2>
            <p>
              Let's create beautiful, intuitive designs that engage your users 
              and drive business growth through exceptional user experiences.
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

export default UIUXService;
