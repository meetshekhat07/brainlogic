import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Magento Development', href: '/services/magento' },
    { name: 'AngularJS Development', href: '/services/angular' },
    { name: 'ReactJS Development', href: '/services/react' },
    { name: 'UI/UX Design', href: '/services/uiux' },
    { name: 'Java Development', href: '/services/java' },
    { name: 'Python Development', href: '/services/python' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text gradient-text">BRAIN LOGIC</span>
              <span className="logo-subtitle">INFO SOLUTIONS</span>
            </div>
            <p className="footer-description">
              Leading IT solutions provider specializing in cutting-edge web development, 
              mobile applications, and enterprise software solutions. Transforming ideas 
              into digital reality.
            </p>
            <div className="contact-info">
              <p>📧 info@brainlogicinfosolutions.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Tech Street, Innovation City, IC 12345</p>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="footer-link">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-title">Stay Updated</h3>
            <p className="newsletter-text">
              Subscribe to our newsletter for the latest tech insights and updates.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                Twitter
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Brain Logic Info Solutions. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
