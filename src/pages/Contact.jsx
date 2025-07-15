import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We have received your inquiry and will get back to you soon. You should also receive email and WhatsApp notifications.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'There was an error submitting your message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'info@brainlogicinfosolutions.com',
      link: 'mailto:info@brainlogicinfosolutions.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '123 Tech Street, Innovation City, IC 12345',
      link: '#'
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#'
    }
  ];

  const services = [
    'Magento Development',
    'ReactJS Development',
    'AngularJS Development',
    '.NET Development',
    'Java Development',
    'Python Development',
    'Custom Software Development',
    'Consulting Services'
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-content text-center"
          >
            <h1>Get In <span className="gradient-text">Touch</span></h1>
            <p className="hero-description">
              Ready to start your next project? We'd love to hear from you. 
              Let's discuss how we can help bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main section-padding">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-form-section"
            >
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  ></textarea>
                </div>
                {/* Status Message */}
                {submitStatus && (
                  <div className={`form-status ${submitStatus.type}`}>
                    <p>{submitStatus.message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-info-section"
            >
              <h2>Contact Information</h2>
              <p className="contact-intro">
                We're here to help and answer any questions you might have. 
                We look forward to hearing from you.
              </p>
              
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      {info.link !== '#' ? (
                        <a href={info.link}>{info.details}</a>
                      ) : (
                        <p>{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response */}
              <div className="quick-response">
                <h3>Quick Response Guarantee</h3>
                <p>
                  We typically respond to all inquiries within 24 hours. 
                  For urgent matters, please call us directly.
                </p>
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">Twitter</a>
                  <a href="#" className="social-link">GitHub</a>
                  <a href="#" className="social-link">Facebook</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="faq-item"
            >
              <h3>How long does a typical project take?</h3>
              <p>
                Project timelines vary based on complexity and requirements. 
                Simple websites typically take 2-4 weeks, while complex applications 
                can take 2-6 months. We'll provide a detailed timeline during consultation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="faq-item"
            >
              <h3>Do you provide ongoing support?</h3>
              <p>
                Yes, we offer comprehensive support and maintenance packages 
                to ensure your application continues to perform optimally after launch.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="faq-item"
            >
              <h3>What is your development process?</h3>
              <p>
                We follow an agile methodology with regular client communication, 
                including discovery, planning, development, testing, and deployment phases.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
