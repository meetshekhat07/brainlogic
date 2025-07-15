import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      name: 'Magento Development',
      description: 'Comprehensive eCommerce solutions with custom Magento development, theme customization, and performance optimization.',
      icon: '🛒',
      features: ['Custom Theme Development', 'Extension Development', 'Performance Optimization', 'Migration Services'],
      link: '/services/magento'
    },
    {
      name: 'Angular Development',
      description: 'Modern, scalable web applications with the latest Angular framework, featuring TypeScript, reactive programming, and enterprise-grade architecture.',
      icon: '⚡',
      features: ['Modern Angular 17+', 'TypeScript Integration', 'Reactive Programming', 'Enterprise Architecture', 'PWA Development'],
      link: '/services/angular'
    },
    {
      name: 'ReactJS Development',
      description: 'Modern, interactive user interfaces with React, focusing on performance and user experience.',
      icon: '⚛️',
      features: ['Component Development', 'State Management', 'Performance Optimization', 'Mobile Responsive'],
      link: '/services/react'
    },
    {
      name: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces and exceptional user experiences that engage and convert visitors.',
      icon: '🎨',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing'],
      link: '/services/uiux'
    },
    {
      name: 'Java Development',
      description: 'Scalable backend solutions with Java technologies, perfect for enterprise-level applications.',
      icon: '☕',
      features: ['Spring Framework', 'Microservices', 'Enterprise Applications', 'Database Integration'],
      link: '/services/java'
    },
    {
      name: 'Python Development',
      description: 'AI/ML solutions and web development with Python, leveraging its powerful libraries and frameworks.',
      icon: '🐍',
      features: ['Web Development', 'AI/ML Solutions', 'Data Analysis', 'Automation Scripts'],
      link: '/services/python'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your requirements and understand your business goals'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed project plan with timelines and milestones'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our expert team builds your solution using best practices'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Rigorous testing ensures quality and performance standards'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'We deploy your solution and provide ongoing support'
    }
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="services-hero-content text-center"
          >
            <h1>Our <span className="gradient-text">Services</span></h1>
            <p className="hero-description">
              We offer comprehensive IT solutions using cutting-edge technologies 
              to help your business thrive in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section section-padding">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card-detailed"
              >
                <div className="service-header">
                  <div className="service-icon-large">{service.icon}</div>
                  <h3>{service.name}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <Link to={service.link} className="service-cta">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Development Process</h2>
            <p>A proven methodology that ensures successful project delivery</p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="process-step"
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Technologies We Master</h2>
            <p>We stay current with the latest technologies and frameworks</p>
          </div>
          <div className="tech-categories">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="tech-category"
            >
              <h3>Frontend</h3>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Angular</span>
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">HTML5/CSS3</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="tech-category"
            >
              <h3>Backend</h3>
              <div className="tech-tags">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">PHP</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="tech-category"
            >
              <h3>Design Tools</h3>
              <div className="tech-tags">
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">Adobe XD</span>
                <span className="tech-tag">Sketch</span>
                <span className="tech-tag">Photoshop</span>
                <span className="tech-tag">Illustrator</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="tech-category"
            >
              <h3>Database</h3>
              <div className="tech-tags">
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Redis</span>
                <span className="tech-tag">SQL Server</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content text-center"
          >
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss your project requirements and how we can help 
              bring your vision to life with our expert development services.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
