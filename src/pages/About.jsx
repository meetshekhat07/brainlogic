import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions',
      icon: '💡'
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards in every project we undertake',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to understand and exceed their expectations',
      icon: '🤝'
    },
    {
      title: 'Reliability',
      description: 'We deliver on time and provide ongoing support for all our solutions',
      icon: '🛡️'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in software development',
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technical expert specializing in modern web technologies',
      image: '👩‍💻'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      description: 'Full-stack developer with expertise in React and Node.js',
      image: '👨‍💻'
    },
    {
      name: 'Emily Davis',
      role: 'UI/UX Designer',
      description: 'Creative designer focused on user-centered design principles',
      image: '👩‍🎨'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-content text-center"
          >
            <h1>About <span className="gradient-text">Brain Logic Info Solutions</span></h1>
            <p className="hero-description">
              We are a passionate team of technology experts dedicated to transforming 
              businesses through innovative digital solutions. Since our founding, we've 
              been committed to delivering excellence in every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section-padding">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mission-card"
            >
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and success. We strive to be the trusted partner that transforms 
                ideas into powerful digital realities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="vision-card"
            >
              <div className="card-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading IT solutions provider, recognized for our innovation, 
                quality, and commitment to client success. We envision a future where 
                technology seamlessly enhances every aspect of business operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="value-card"
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Meet Our Team</h2>
            <p>The talented individuals behind our success</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="team-card"
              >
                <div className="team-image">{member.image}</div>
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="company-stats section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="stats-content text-center"
          >
            <h2>Our Journey in Numbers</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number gradient-text">2019</div>
                <div className="stat-label">Founded</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">100+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">50+</div>
                <div className="stat-label">Satisfied Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">15+</div>
                <div className="stat-label">Team Members</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us section-padding">
        <div className="container">
          <div className="why-choose-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="why-choose-text"
            >
              <h2>Why Choose Brain Logic?</h2>
              <ul className="benefits-list">
                <li>✅ Proven track record of successful project delivery</li>
                <li>✅ Expertise in latest technologies and frameworks</li>
                <li>✅ Agile development methodology for faster results</li>
                <li>✅ 24/7 support and maintenance services</li>
                <li>✅ Competitive pricing with transparent communication</li>
                <li>✅ Dedicated project managers for seamless coordination</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="why-choose-visual"
            >
              <div className="achievement-cards">
                <div className="achievement-card">
                  <span className="achievement-icon">🏆</span>
                  <span>Award Winning</span>
                </div>
                <div className="achievement-card">
                  <span className="achievement-icon">⚡</span>
                  <span>Fast Delivery</span>
                </div>
                <div className="achievement-card">
                  <span className="achievement-icon">🔒</span>
                  <span>Secure Solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
