import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Remote / On-site',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our team to build cutting-edge React applications for our clients.',
      requirements: ['React.js expertise', 'TypeScript knowledge', 'REST API integration', 'Git proficiency']
    },
    {
      title: 'Magento Developer',
      department: 'Engineering',
      location: 'On-site',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Develop and customize Magento e-commerce solutions for various clients.',
      requirements: ['Magento 2.x experience', 'PHP proficiency', 'MySQL knowledge', 'Problem-solving skills']
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / On-site',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Create beautiful and intuitive user interfaces for web and mobile applications.',
      requirements: ['Figma/Adobe XD', 'User research', 'Prototyping', 'Design systems']
    },
    {
      title: 'Project Manager',
      department: 'Management',
      location: 'On-site',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Lead project teams and ensure successful delivery of client projects.',
      requirements: ['Agile methodology', 'Client communication', 'Team leadership', 'Risk management']
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Market-competitive compensation with performance bonuses'
    },
    {
      icon: '🏥',
      title: 'Health Benefits',
      description: 'Comprehensive health, dental, and vision insurance'
    },
    {
      icon: '🏖️',
      title: 'Flexible PTO',
      description: 'Generous paid time off and flexible working arrangements'
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: 'Professional development budget and conference attendance'
    },
    {
      icon: '🏠',
      title: 'Remote Work',
      description: 'Flexible remote work options and modern office space'
    },
    {
      icon: '🎯',
      title: 'Career Growth',
      description: 'Clear career progression paths and mentorship programs'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies'
    },
    {
      title: 'Collaboration',
      description: 'We work together as a team to achieve common goals'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    },
    {
      title: 'Growth',
      description: 'We invest in our people and their professional development'
    }
  ];

  return (
    <div className="careers">
      {/* Hero Section */}
      <section className="careers-hero section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="careers-hero-content text-center"
          >
            <h1>Join Our <span className="gradient-text">Team</span></h1>
            <p className="hero-description">
              Build your career with Brain Logic Info Solutions. We're looking for 
              passionate individuals who want to make a difference in the tech industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="company-culture section-padding">
        <div className="container">
          <div className="culture-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="culture-text"
            >
              <h2>Why Work With Us?</h2>
              <p>
                At Brain Logic Info Solutions, we believe that great software is built by great teams. 
                We foster a collaborative environment where innovation thrives and every team member 
                has the opportunity to grow and make an impact.
              </p>
              <p>
                Our culture is built on trust, respect, and continuous learning. We encourage 
                experimentation, celebrate successes, and learn from failures together.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="culture-values"
            >
              <h3>Our Values</h3>
              <div className="values-list">
                {values.map((value, index) => (
                  <div key={value.title} className="value-item">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Benefits & Perks</h2>
            <p>We take care of our team members</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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

      {/* Job Openings */}
      <section className="job-openings section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Current Openings</h2>
            <p>Find your next opportunity with us</p>
          </div>
          <div className="jobs-list">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="job-card"
              >
                <div className="job-header">
                  <div className="job-title-section">
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-department">{job.department}</span>
                      <span className="job-location">{job.location}</span>
                      <span className="job-type">{job.type}</span>
                    </div>
                  </div>
                  <div className="job-experience">
                    {job.experience}
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="btn-primary job-apply">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="application-process section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Application Process</h2>
            <p>How to join our team</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Apply Online</h3>
                <p>Submit your application and resume through our website</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Initial Screening</h3>
                <p>HR team reviews your application and conducts initial screening</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Technical Interview</h3>
                <p>Technical assessment and interview with our engineering team</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Final Interview</h3>
                <p>Meet with team leads and discuss role expectations</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Welcome Aboard</h3>
                <p>Onboarding process and integration with the team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content text-center"
          >
            <h2>Don't See a Perfect Match?</h2>
            <p>
              We're always looking for talented individuals. Send us your resume 
              and we'll keep you in mind for future opportunities.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">
                Send Your Resume
              </a>
              <a href="mailto:careers@brainlogicinfosolutions.com" className="btn-secondary">
                Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
