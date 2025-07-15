import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AngularService = () => {
  const features = [
    'Modern Angular 17+ Development',
    'TypeScript & JavaScript Support',
    'Reactive Programming with RxJS',
    'Component-Based Architecture',
    'Progressive Web Applications (PWA)',
    'Server-Side Rendering (SSR)',
    'Standalone Components',
    'Signals & Modern State Management',
    'Angular Material & CDK',
    'Micro-Frontend Architecture',
    'Testing with Jest & Cypress',
    'Performance Optimization'
  ];

  const benefits = [
    {
      title: 'Modern Architecture',
      description: 'Latest Angular 17+ with standalone components, signals, and improved performance',
      icon: '🏗️'
    },
    {
      title: 'TypeScript First',
      description: 'Built-in TypeScript support with strict type checking and enhanced developer experience',
      icon: '📝'
    },
    {
      title: 'Enterprise Grade',
      description: 'Scalable architecture perfect for large enterprise applications with complex business logic',
      icon: '🏢'
    },
    {
      title: 'Google Backed',
      description: 'Backed by Google with long-term support, regular updates, and strong community',
      icon: '🚀'
    },
    {
      title: 'Performance Optimized',
      description: 'Built-in lazy loading, tree shaking, and advanced optimization techniques',
      icon: '⚡'
    },
    {
      title: 'Developer Experience',
      description: 'Excellent tooling with Angular CLI, DevKit, and comprehensive debugging support',
      icon: '🛠️'
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
                <span className="service-icon">⚡</span>
                Angular <span className="gradient-text">Development</span>
              </h1>
              <p className="hero-description">
                Build modern, high-performance web applications with the latest Angular framework.
                Our expert team leverages Angular 17+, TypeScript, and cutting-edge features to create
                scalable, maintainable applications that deliver exceptional user experiences.
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
            <p>Comprehensive Angular development services using the latest framework features and best practices</p>
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
            <h2>Why Choose Our Angular Services?</h2>
            <p>The advantages of working with our expert Angular team</p>
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
            <p>Modern tools and libraries for robust Angular development</p>
          </div>
          <div className="tech-grid">
            <div className="tech-item">Angular 17+</div>
            <div className="tech-item">TypeScript 5+</div>
            <div className="tech-item">RxJS & Signals</div>
            <div className="tech-item">NgRx & Akita</div>
            <div className="tech-item">Angular Material</div>
            <div className="tech-item">PrimeNG & Ng-Bootstrap</div>
            <div className="tech-item">Jest & Cypress</div>
            <div className="tech-item">Angular CLI & DevKit</div>
            <div className="tech-item">PWA & Service Workers</div>
            <div className="tech-item">Angular Universal (SSR)</div>
            <div className="tech-item">Nx Monorepo</div>
            <div className="tech-item">Angular Elements</div>
          </div>
        </div>
      </section>

      <section className="service-process section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Angular Development Process</h2>
            <p>Structured approach to deliver high-quality Angular applications</p>
          </div>
          <div className="process-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="process-step"
            >
              <div className="step-number">01</div>
              <h3>Requirements Analysis</h3>
              <p>Understanding your business needs and technical requirements for optimal Angular architecture</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="process-step"
            >
              <div className="step-number">02</div>
              <h3>Architecture Design</h3>
              <p>Designing scalable Angular architecture with modern patterns and best practices</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="process-step"
            >
              <div className="step-number">03</div>
              <h3>Development & Testing</h3>
              <p>Agile development with continuous testing using Jest, Cypress, and Angular testing utilities</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="process-step"
            >
              <div className="step-number">04</div>
              <h3>Deployment & Support</h3>
              <p>Production deployment with CI/CD pipelines and ongoing maintenance support</p>
            </motion.div>
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
            <h2>Ready to Build Your Angular Application?</h2>
            <p>
              Let's create a powerful, scalable web application that meets your 
              business requirements using Angular.
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

export default AngularService;
