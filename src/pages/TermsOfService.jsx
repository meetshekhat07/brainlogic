import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="terms-of-service">
      <section className="policy-hero section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="policy-hero-content text-center"
          >
            <h1>Terms of <span className="gradient-text">Service</span></h1>
            <p className="hero-description">
              These terms govern your use of our website and services. Please read them carefully 
              before using our services.
            </p>
            <p className="policy-date">Last updated: January 15, 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="policy-content section-padding">
        <div className="container">
          <div className="policy-document">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="policy-section"
            >
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Brain Logic Info Solutions website and services, you accept 
                and agree to be bound by the terms and provision of this agreement. If you do not agree 
                to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you and 
                Brain Logic Info Solutions ("Company," "we," "us," or "our").
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="policy-section"
            >
              <h2>2. Description of Services</h2>
              <p>
                Brain Logic Info Solutions provides IT consulting and development services, including 
                but not limited to:
              </p>
              <ul>
                <li>Magento eCommerce development</li>
                <li>ReactJS and AngularJS web application development</li>
                <li>UI/UX design and user experience consulting</li>
                <li>Java backend development</li>
                <li>Python development and AI/ML solutions</li>
                <li>Website design and development</li>
                <li>IT consulting and technical support</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="policy-section"
            >
              <h2>3. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Brain Logic 
                Info Solutions' website for personal, non-commercial transitory viewing only. This is 
                the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions 
                and may be terminated by us at any time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="policy-section"
            >
              <h2>4. Service Terms and Conditions</h2>
              <h3>Project Agreements</h3>
              <p>
                All development projects are subject to separate written agreements that will specify:
              </p>
              <ul>
                <li>Project scope, deliverables, and timeline</li>
                <li>Payment terms and schedule</li>
                <li>Intellectual property rights</li>
                <li>Support and maintenance terms</li>
                <li>Acceptance criteria and testing procedures</li>
              </ul>

              <h3>Payment Terms</h3>
              <p>
                Unless otherwise specified in a project agreement:
              </p>
              <ul>
                <li>Payment terms are typically 50% upfront, 50% upon completion</li>
                <li>Invoices are due within 30 days of receipt</li>
                <li>Late payments may incur additional charges</li>
                <li>All prices are exclusive of applicable taxes</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="policy-section"
            >
              <h2>5. Intellectual Property Rights</h2>
              <h3>Client-Owned Content</h3>
              <p>
                You retain ownership of all content, data, and materials you provide to us. You grant 
                us a license to use such materials solely for the purpose of providing our services.
              </p>

              <h3>Developed Solutions</h3>
              <p>
                Unless otherwise specified in writing:
              </p>
              <ul>
                <li>Custom code developed specifically for your project becomes your property upon full payment</li>
                <li>We retain rights to general methodologies, techniques, and know-how</li>
                <li>Third-party components remain subject to their respective licenses</li>
                <li>We may retain the right to use project work for portfolio and marketing purposes</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="policy-section"
            >
              <h2>6. Client Responsibilities</h2>
              <p>
                To ensure successful project delivery, clients are responsible for:
              </p>
              <ul>
                <li>Providing accurate and complete project requirements</li>
                <li>Timely provision of necessary content, assets, and access</li>
                <li>Prompt feedback and approval at designated project milestones</li>
                <li>Payment according to agreed terms</li>
                <li>Maintaining backup copies of all data and content</li>
                <li>Compliance with applicable laws and regulations</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="policy-section"
            >
              <h2>7. Disclaimers and Limitations</h2>
              <h3>Service Availability</h3>
              <p>
                While we strive to maintain high service availability, we do not guarantee uninterrupted 
                access to our website or services. We reserve the right to modify, suspend, or discontinue 
                services with reasonable notice.
              </p>

              <h3>Limitation of Liability</h3>
              <p>
                In no event shall Brain Logic Info Solutions be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses.
              </p>

              <h3>Warranty Disclaimer</h3>
              <p>
                Our services are provided "as is" without warranty of any kind. We disclaim all warranties, 
                whether express, implied, statutory, or otherwise, including warranties of merchantability, 
                fitness for a particular purpose, and non-infringement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="policy-section"
            >
              <h2>8. Confidentiality</h2>
              <p>
                We understand that you may share confidential information with us during the course of 
                our business relationship. We commit to:
              </p>
              <ul>
                <li>Maintaining the confidentiality of all proprietary information</li>
                <li>Using confidential information solely for providing our services</li>
                <li>Implementing appropriate security measures to protect sensitive data</li>
                <li>Not disclosing confidential information to third parties without consent</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="policy-section"
            >
              <h2>9. Termination</h2>
              <p>
                Either party may terminate a service agreement with written notice. Upon termination:
              </p>
              <ul>
                <li>All outstanding invoices become immediately due</li>
                <li>We will deliver all completed work and materials</li>
                <li>Each party will return or destroy confidential information</li>
                <li>Provisions regarding intellectual property and confidentiality survive termination</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="policy-section"
            >
              <h2>10. Dispute Resolution</h2>
              <p>
                Any disputes arising from these terms or our services will be resolved through:
              </p>
              <ul>
                <li>Good faith negotiation between the parties</li>
                <li>Mediation if direct negotiation fails</li>
                <li>Binding arbitration as a final resort</li>
              </ul>
              <p>
                These terms are governed by the laws of India, and any legal proceedings will be 
                conducted in the appropriate courts of India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="policy-section"
            >
              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Your continued use of our services after 
                changes are posted constitutes acceptance of the modified terms.
              </p>
              <p>
                For significant changes, we will provide reasonable notice to existing clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="policy-section"
            >
              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="contact-details">
                <p><strong>Brain Logic Info Solutions</strong></p>
                <p>Email: brain.logic08@gmail.com</p>
                <p>Phone: +917575011974</p>
              </div>
              <p>
                We will respond to your inquiry promptly and work to resolve any concerns you may have.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
