import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MagentoService = () => {
  const features = [
    'Custom Theme Development',
    'Extension Development',
    'GraphQL API Development',
    'Performance Optimization',
    'Migration Services',
    'Multi-store Setup',
    'Payment Gateway Integration',
    'SEO Optimization',
    'Mobile Responsive Design',
    'Headless Commerce Solutions'
  ];

  const benefits = [
    {
      title: 'Scalable Solutions',
      description: 'Build eCommerce platforms that grow with your business',
      icon: '📈'
    },
    {
      title: 'Custom Features',
      description: 'Tailored functionality to meet your specific requirements',
      icon: '⚙️'
    },
    {
      title: 'Performance Focused',
      description: 'Optimized for speed and excellent user experience',
      icon: '⚡'
    },
    {
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability standards',
      icon: '🔒'
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
                <span className="service-icon">🛒</span>
                Magento <span className="gradient-text">Development</span>
              </h1>
              <p className="hero-description">
                Transform your eCommerce vision into reality with our expert Magento development services.
                Specializing in GraphQL APIs, headless commerce, and modern architecture, we create powerful,
                scalable online stores that drive sales and enhance customer experience.
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
            <p>Comprehensive Magento development services for your eCommerce success</p>
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
            <h2>Why Choose Our Magento Services?</h2>
            <p>The advantages of working with our expert Magento team</p>
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

      {/* GraphQL Expertise Section */}
      <section className="graphql-expertise section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>🚀 GraphQL Expertise</h2>
            <p>Advanced GraphQL solutions for modern Magento development</p>
          </div>
          <div className="graphql-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="graphql-info"
            >
              <h3>Why GraphQL for Magento?</h3>
              <p>
                GraphQL revolutionizes how frontend applications interact with Magento, providing
                efficient data fetching, reduced network overhead, and enhanced performance for
                modern eCommerce experiences.
              </p>
              <div className="graphql-benefits">
                <div className="graphql-benefit">
                  <span className="benefit-icon">⚡</span>
                  <div>
                    <h4>Performance Optimization</h4>
                    <p>Fetch only the data you need, reducing payload size and improving load times</p>
                  </div>
                </div>
                <div className="graphql-benefit">
                  <span className="benefit-icon">🔧</span>
                  <div>
                    <h4>Flexible API Design</h4>
                    <p>Single endpoint for all data requirements with powerful query capabilities</p>
                  </div>
                </div>
                <div className="graphql-benefit">
                  <span className="benefit-icon">📱</span>
                  <div>
                    <h4>Headless Commerce</h4>
                    <p>Perfect for PWA, mobile apps, and modern frontend frameworks</p>
                  </div>
                </div>
                <div className="graphql-benefit">
                  <span className="benefit-icon">🛠️</span>
                  <div>
                    <h4>Developer Experience</h4>
                    <p>Strong typing, introspection, and excellent tooling support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Magento Development Process</h2>
            <p>A structured approach to deliver exceptional eCommerce solutions</p>
          </div>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Requirements Analysis</h3>
                <p>We analyze your business needs and eCommerce requirements</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Design & Planning</h3>
                <p>Create wireframes and plan the store architecture</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Development</h3>
                <p>Build custom themes, extensions, and functionality</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Testing & Launch</h3>
                <p>Thorough testing and smooth deployment to production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="service-tech section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Technologies We Use</h2>
            <p>Modern tools and technologies for robust Magento development</p>
          </div>
          <div className="tech-grid">
            <div className="tech-item">Magento 2.x</div>
            <div className="tech-item">PHP 8+</div>
            <div className="tech-item">GraphQL</div>
            <div className="tech-item">MySQL</div>
            <div className="tech-item">Elasticsearch</div>
            <div className="tech-item">Redis</div>
            <div className="tech-item">Varnish</div>
            <div className="tech-item">Docker</div>
            <div className="tech-item">AWS/Azure</div>
            <div className="tech-item">REST APIs</div>
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
            <h2>Ready to Build Your Magento Store?</h2>
            <p>
              Let's discuss your eCommerce project and create a powerful 
              Magento solution that drives your business growth.
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

export default MagentoService;
