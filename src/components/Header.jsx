import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.89 13.8 19.79 19.79 0 011.82 5.18 2 2 0 013.8 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 10.8a16 16 0 006.29 6.29l1.17-1.17a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const nav = [
  { label: 'Home',      href: '/' },
  { label: 'Services',  href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About',     href: '/about' },
  { label: 'Careers',   href: '/careers' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav-inner">
          {/* Logo */}
          <Link to="/" className="logo-wrap">
            <span className="logo-brand">BRAIN LOGIC</span>
            <span className="logo-sub">Info Solutions</span>
          </Link>

          {/* Desktop nav */}
          <ul className="nav-links">
            {nav.map(({ label, href }) => (
              <li key={href}>
                <Link to={href} className={isActive(href) ? 'active' : ''}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="nav-cta desktop-only">
            <a href="tel:+917575011974" className="nav-phone">
              <PhoneIcon />
              +91 75750 11974
            </a>
            <Link
              to="/contact"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.875rem' }}
            >
              Get Free Quote
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </nav>

        {/* Mobile nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
            >
              {nav.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  className={`mobile-nav-link ${isActive(href) ? 'active' : ''}`}
                >
                  {label}
                </Link>
              ))}
              <div className="mobile-nav-cta" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href="tel:+917575011974" className="btn-outline" style={{ justifyContent: 'center' }}>
                  📞 +91 75750 11974
                </a>
                <Link to="/contact" className="btn-primary" style={{ justifyContent: 'center' }}>
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
