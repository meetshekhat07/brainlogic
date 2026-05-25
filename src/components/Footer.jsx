import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { label: 'Magento Development',  href: '/services/magento' },
  { label: 'eCommerce Solutions',  href: '/services/magento' },
  { label: 'ReactJS Development',  href: '/services/react' },
  { label: 'Angular Development',  href: '/services/angular' },
  { label: 'UI/UX Design',         href: '/services/uiux' },
  { label: 'Python Development',   href: '/services/python' },
  { label: 'Java Development',     href: '/services/java' },
];

const quickLinks = [
  { label: 'About Us',       href: '/about' },
  { label: 'Portfolio',      href: '/portfolio' },
  { label: 'Blog',           href: '/blog' },
  { label: 'Careers',        href: '/careers' },
  { label: 'Contact Us',     href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

const MapIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.89 13.8 19.79 19.79 0 011.82 5.18 2 2 0 013.8 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 10.8a16 16 0 006.29 6.29l1.17-1.17a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  const handleNewsletter = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="logo-wrap" style={{ display: 'inline-flex', marginBottom: '0' }}>
              <span className="logo-brand">BRAIN LOGIC</span>
              <span className="logo-sub">Info Solutions</span>
            </Link>
            <p>
              Ahmedabad-based Magento & eCommerce development experts helping businesses
              scale globally with powerful, conversion-focused digital stores.
            </p>
            <ul className="footer-contact-list">
              <li>
                <MapIcon />
                Ahmedabad, Gujarat, India – 380015
              </li>
              <li>
                <PhoneIcon />
                <a href="tel:+917575011974">+91 75750 11974</a>
              </li>
              <li>
                <MailIcon />
                <a href="mailto:info@brainlogicinfosolutions.com">info@brainlogicinfosolutions.com</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="footer-heading">Our Services</p>
            <ul className="footer-links">
              {services.map(s => (
                <li key={s.href + s.label}>
                  <Link to={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="footer-heading">Quick Links</p>
            <ul className="footer-links">
              {quickLinks.map(l => (
                <li key={l.href + l.label}>
                  <Link to={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div className="footer-newsletter">
            <p className="footer-heading">Stay Updated</p>
            <p>Get the latest Magento tips, eCommerce trends, and company updates.</p>
            <form className="newsletter-row" onSubmit={handleNewsletter}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
            <p className="footer-heading" style={{ marginTop: '8px' }}>Follow Us</p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">in</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Twitter">𝕏</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">f</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">ig</a>
              <a href="https://wa.me/917575011974" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">wa</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>&copy; {year} Brain Logic Info Solutions. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
