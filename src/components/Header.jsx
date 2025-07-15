import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo">
              <Link to="/" className="logo-link">
                <span className="logo-text gradient-text">BRAIN LOGIC</span>
                <span className="logo-subtitle">INFO SOLUTIONS</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-links desktop-nav">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="mobile-menu-button">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-toggle"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="menu-icon" />
                ) : (
                  <Bars3Icon className="menu-icon" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mobile-nav">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
