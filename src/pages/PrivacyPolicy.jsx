import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <section className="policy-hero section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="policy-hero-content text-center"
          >
            <h1>Privacy <span className="gradient-text">Policy</span></h1>
            <p className="hero-description">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
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
              <h2>1. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>
                When you contact us through our website, we may collect the following personal information:
              </p>
              <ul>
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and job title</li>
                <li>Project requirements and service interests</li>
                <li>Any other information you voluntarily provide in contact forms</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we automatically collect certain information:
              </p>
              <ul>
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website and search terms used</li>
                <li>Device type and operating system</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="policy-section"
            >
              <h2>2. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li><strong>Service Delivery:</strong> To respond to your inquiries and provide requested services</li>
                <li><strong>Communication:</strong> To send you project updates, service information, and respond to your questions</li>
                <li><strong>Website Improvement:</strong> To analyze website usage and improve user experience</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                <li><strong>Business Operations:</strong> To maintain records and conduct our business operations</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="policy-section"
            >
              <h2>3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except in the following circumstances:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting business</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="policy-section"
            >
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction:
              </p>
              <ul>
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="policy-section"
            >
              <h2>5. Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience:
              </p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p>
                You can control cookie settings through your browser preferences. However, disabling 
                cookies may affect website functionality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="policy-section"
            >
              <h2>6. Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request access to your personal information we hold</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
                <li><strong>Objection:</strong> Object to certain processing of your information</li>
                <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us at brain.logic08@gmail.com.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="policy-section"
            >
              <h2>7. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes 
                outlined in this privacy policy, unless a longer retention period is required by law. 
                Factors we consider when determining retention periods include:
              </p>
              <ul>
                <li>The nature and sensitivity of the information</li>
                <li>Legal and regulatory requirements</li>
                <li>Business and operational needs</li>
                <li>Your relationship with our company</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="policy-section"
            >
              <h2>8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices or content of these external sites. We encourage you to review the 
                privacy policies of any third-party websites you visit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="policy-section"
            >
              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not directed to children under the age of 13. We do not knowingly 
                collect personal information from children under 13. If we become aware that we have 
                collected personal information from a child under 13, we will take steps to delete 
                such information promptly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="policy-section"
            >
              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices 
                or applicable laws. We will notify you of any material changes by posting the updated 
                policy on our website and updating the "Last updated" date.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="policy-section"
            >
              <h2>11. Contact Information</h2>
              <p>
                If you have any questions, concerns, or requests regarding this privacy policy or 
                our data practices, please contact us:
              </p>
              <div className="contact-details">
                <p><strong>Brain Logic Info Solutions</strong></p>
                <p>Email: brain.logic08@gmail.com</p>
                <p>Phone: +917575011974</p>
              </div>
              <p>
                We will respond to your inquiry within a reasonable timeframe and in accordance 
                with applicable laws.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
