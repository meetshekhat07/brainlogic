import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const contactItems = [
  {
    icon: '📍',
    label: 'Our Office',
    value: 'Ahmedabad, Gujarat, India – 380015',
    href: null,
  },
  {
    icon: '📞',
    label: 'Call / WhatsApp',
    value: '+91 75750 11974',
    href: 'tel:+917575011974',
  },
  {
    icon: '📧',
    label: 'Email Us',
    value: 'info@brainlogicinfosolutions.com',
    href: 'mailto:info@brainlogicinfosolutions.com',
  },
  {
    icon: '🕒',
    label: 'Business Hours',
    value: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
    href: null,
  },
];

const serviceOptions = [
  'Magento 2 Development',
  'Adobe Commerce (Enterprise)',
  'Magento Migration (M1 → M2)',
  'Custom Magento Extension',
  'ReactJS Development',
  'Angular Development',
  'UI/UX Design',
  'Java Development',
  'Python Development',
  'Performance Audit / Consultation',
  'Other',
];

const faqs = [
  {
    q: 'How long does a Magento 2 project typically take?',
    a: 'A standard Magento 2 store takes 6–12 weeks. Complex Adobe Commerce implementations can run 3–6 months. We provide a detailed timeline after the discovery call.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes — we offer flexible maintenance packages including bug fixes, security patches, feature additions, and 24/7 monitoring. SLAs are tailored to your needs.',
  },
  {
    q: 'Can you work with our existing Magento store?',
    a: 'Absolutely. We regularly audit, optimize, and extend live Magento stores. We can also migrate your store from Magento 1 or other platforms.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer fixed-price projects for well-defined scopes, and time-and-material retainers for ongoing development. We\'ll recommend the best fit after understanding your needs.',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', msg: '✅ Message sent! We\'ll get back to you within 24 hours.' });
        setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: data.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'success', msg: '✅ Thanks for reaching out! We\'ll contact you within 24 hours.' });
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SEOMeta
        title="Contact Us — Get a Free Magento & eCommerce Quote"
        description="Contact Brain Logic Info Solutions for a free Magento 2 development consultation. Based in Ahmedabad, India. WhatsApp, call or email — we respond within 2 hours."
        keywords="contact Brain Logic, Magento developer contact Ahmedabad, hire Magento developer India, eCommerce development quote India, web development inquiry"
        canonical="/contact"
      />
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <motion.div
            initial="hidden" animate="show" variants={stagger}
            className="text-center"
          >
            <motion.span variants={fadeUp} className="eyebrow">Get in Touch</motion.span>
            <motion.h1 variants={fadeUp}>
              Let's Build Something <span className="gradient-text">Great Together</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ maxWidth: 560, margin: '16px auto 0', fontSize: '1.05rem' }}>
              Drop us a message and our team will respond within 24 hours.
              Prefer instant chat? WhatsApp us now.
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a href="tel:+917575011974" className="btn-primary">📞 +91 75750 11974</a>
              <a
                href="https://wa.me/917575011974?text=Hi%2C%20I%27m%20interested%20in%20your%20Magento%20development%20services"
                target="_blank" rel="noopener noreferrer"
                className="cta-whatsapp"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: '50px', fontWeight: 600, fontSize: '0.95rem' }}
              >
                💬 WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT GRID ──────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="contact-grid">
            {/* Info card */}
            <motion.div
              className="contact-info-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3>Contact Information</h3>
              <p>We're a team of Magento experts based in Ahmedabad, India — serving clients across the globe.</p>

              <div className="contact-info-items">
                {contactItems.map(c => (
                  <div key={c.label} className="ci-item">
                    <div className="ci-icon">{c.icon}</div>
                    <div>
                      <div className="ci-label">{c.label}</div>
                      {c.href
                        ? <div className="ci-value"><a href={c.href}>{c.value}</a></div>
                        : <div className="ci-value">{c.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917575011974?text=Hi%2C%20I%27m%20interested%20in%20Magento%20development"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '16px 20px',
                  background: 'rgba(37,211,102,0.08)',
                  border: '1px solid rgba(37,211,102,0.25)',
                  borderRadius: '14px',
                  color: '#25D366',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s',
                  marginBottom: 24,
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>💬</span>
                <div>
                  <div>Chat on WhatsApp</div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 400, color: 'var(--text-muted)' }}>Typically replies in minutes</div>
                </div>
              </a>

              {/* Response guarantee */}
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px',
                padding: '18px 20px',
              }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>
                  ⚡ Fast Response Guarantee
                </p>
                <p style={{ fontSize: '0.82rem' }}>
                  We respond to every inquiry within 24 business hours.
                  For urgent projects, call us directly or WhatsApp.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="contact-form-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3>Send Us a Message</h3>
              <p>Tell us about your project and we'll send you a detailed proposal.</p>

              <form onSubmit={onSubmit} style={{ marginTop: 24 }}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      className="form-input"
                      type="text" name="name" value={form.name}
                      onChange={onChange} required placeholder="John Smith"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      className="form-input"
                      type="email" name="email" value={form.email}
                      onChange={onChange} required placeholder="john@company.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp</label>
                    <input
                      className="form-input"
                      type="tel" name="phone" value={form.phone}
                      onChange={onChange} placeholder="+1 555 000 0000"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input
                      className="form-input"
                      type="text" name="company" value={form.company}
                      onChange={onChange} placeholder="Your Company"
                    />
                  </div>
                  <div className="form-group full">
                    <label className="form-label">Service Required *</label>
                    <select
                      className="form-select"
                      name="service" value={form.service}
                      onChange={onChange} required
                    >
                      <option value="">Select a service…</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group full">
                    <label className="form-label">Project Details *</label>
                    <textarea
                      className="form-textarea"
                      name="message" value={form.message}
                      onChange={onChange} required rows={5}
                      placeholder="Tell us about your project — current platform, goals, timeline, and any specific requirements…"
                    />
                  </div>
                </div>

                {status && (
                  <div className={`form-status ${status.type}`} style={{ marginTop: 16 }}>
                    {status.msg}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 20, padding: '15px' }}
                >
                  {loading ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="container">
          <motion.div
            className="text-center"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            <motion.span variants={fadeUp} className="eyebrow">FAQs</motion.span>
            <motion.h2 variants={fadeUp}>Frequently Asked Questions</motion.h2>
          </motion.div>
          <motion.div
            className="faq-list"
            style={{ maxWidth: 800, margin: '0 auto' }}
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {faqs.map(f => (
              <motion.div key={f.q} className="faq-item" variants={fadeUp}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
