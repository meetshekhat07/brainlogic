import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const dynamicTexts = [
    "Digital Reality",
    "Innovative Solutions",
    "Modern Experiences",
    "Business Success",
    "Digital Innovation",
    "Tech Excellence"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
        setIsTyping(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      name: 'Magento',
      description: 'Powerful eCommerce solutions with custom Magento development',
      icon: '🛒',
      link: '/services/magento'
    },
    {
      name: 'Angular',
      description: 'Modern web applications with Angular 17+ framework and TypeScript',
      icon: '⚡',
      link: '/services/angular'
    },
    {
      name: 'ReactJS',
      description: 'Modern, interactive user interfaces with React',
      icon: '⚛️',
      link: '/services/react'
    },
    {
      name: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces and exceptional user experiences that engage and convert',
      icon: '🎨',
      link: '/services/uiux'
    },
    {
      name: 'Java',
      description: 'Scalable backend solutions with Java technologies',
      icon: '☕',
      link: '/services/java'
    },
    {
      name: 'Python',
      description: 'AI/ML solutions and web development with Python',
      icon: '🐍',
      link: '/services/python'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero interactive-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Interactive Background Elements */}
        <div className="hero-background">
          <motion.div
            className="bg-particle"
            animate={{
              x: mousePosition.x * 0.02,
              y: mousePosition.y * 0.02,
            }}
            transition={{ type: "spring", stiffness: 50 }}
          />
          <motion.div
            className="bg-particle"
            animate={{
              x: mousePosition.x * -0.01,
              y: mousePosition.y * -0.01,
            }}
            transition={{ type: "spring", stiffness: 30 }}
          />
          <motion.div
            className="bg-particle"
            animate={{
              x: mousePosition.x * 0.015,
              y: mousePosition.y * -0.015,
            }}
            transition={{ type: "spring", stiffness: 40 }}
          />
        </div>

        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <motion.h1
                className="hero-title"
                animate={{
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: isHovered ? "200% center" : "0% center",
                  }}
                  transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
                  className="animated-text"
                >
                  Transforming Ideas into
                </motion.span>
                <motion.span
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{
                    opacity: isTyping ? 1 : 0,
                    y: isTyping ? 0 : -20,
                    scale: isTyping ? 1 : 0.8
                  }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="gradient-text dynamic-text"
                >
                  {" " + dynamicTexts[currentTextIndex]}
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hero-description"
              >
                Brain Logic Info Solutions is your trusted partner for cutting-edge web development,
                UI/UX design, and enterprise software solutions. We specialize in modern
                technologies and exceptional user experiences to bring your vision to life.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hero-buttons"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -1, 1, 0],
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/contact" className="btn-primary interactive-btn magnetic-btn">
                    <motion.span
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Get Started
                    </motion.span>
                    <motion.span
                      className="btn-arrow"
                      initial={{ x: 0 }}
                      whileHover={{ x: 8, scale: 1.2 }}
                      transition={{ duration: 0.2, type: "spring" }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0, 102, 204, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/portfolio" className="btn-secondary interactive-btn pulse-btn">
                    <span>View Our Work</span>
                    <motion.div
                      className="btn-ripple"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Interactive Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="hero-stats"
              >
                <motion.div
                  className="hero-stat"
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="stat-number"
                    animate={{
                      textShadow: isHovered ? "0 0 20px rgba(0, 102, 204, 0.5)" : "none"
                    }}
                  >
                    100+
                  </motion.span>
                  <span className="stat-label">Projects</span>
                </motion.div>
                <motion.div
                  className="hero-stat"
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="stat-number"
                    animate={{
                      textShadow: isHovered ? "0 0 20px rgba(0, 102, 204, 0.5)" : "none"
                    }}
                  >
                    50+
                  </motion.span>
                  <span className="stat-label">Clients</span>
                </motion.div>
                <motion.div
                  className="hero-stat"
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -3, 3, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="stat-number"
                    animate={{
                      textShadow: isHovered ? "0 0 20px rgba(0, 102, 204, 0.5)" : "none"
                    }}
                  >
                    5+
                  </motion.span>
                  <span className="stat-label">Years</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-visual"
            >
              <div className="hero-graphic">
                <motion.div
                  className="floating-card"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    y: -15,
                    boxShadow: "0 20px 50px rgba(0, 102, 204, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="tech-icon"
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    💻
                  </motion.span>
                  <span>Web Development</span>
                </motion.div>
                <motion.div
                  className="floating-card"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, -2, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, 8, -8, 0],
                    y: -18,
                    boxShadow: "0 25px 60px rgba(99, 102, 241, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="tech-icon"
                    whileHover={{
                      scale: 1.4,
                      rotate: [0, 180, 360],
                      transition: { duration: 0.6 }
                    }}
                  >
                    🎨
                  </motion.span>
                  <span>UI/UX Design</span>
                </motion.div>
                <motion.div
                  className="floating-card"
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 3, 0]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -10, 10, 0],
                    y: -20,
                    boxShadow: "0 30px 70px rgba(0, 212, 255, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="tech-icon"
                    whileHover={{
                      scale: 1.5,
                      y: [0, -10, 0],
                      transition: { duration: 0.4, repeat: 2 }
                    }}
                  >
                    🚀
                  </motion.span>
                  <span>Enterprise Solutions</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Expertise</h2>
            <p>We specialize in cutting-edge technologies to deliver exceptional results</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="stat-item"
              >
                <div className="stat-number gradient-text">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content text-center"
          >
            <h2>Ready to Start Your Next Project?</h2>
            <p>
              Let's discuss how we can help transform your ideas into powerful digital solutions. 
              Our team of experts is ready to bring your vision to life.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
