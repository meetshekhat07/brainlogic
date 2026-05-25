import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const values = [
  { icon: '💡', title: 'Innovation',      desc: 'We stay ahead of Magento and eCommerce trends to deliver future-proof solutions.' },
  { icon: '⭐', title: 'Quality',         desc: 'Every line of code is reviewed, tested, and optimized before it ships.' },
  { icon: '🤝', title: 'Partnership',     desc: 'We work as an extension of your team — not just a vendor.' },
  { icon: '🛡️', title: 'Reliability',    desc: 'On-time delivery and SLA-backed support you can depend on.' },
];

const stack = [
  {
    category: 'eCommerce',
    tags: ['Magento 2', 'Adobe Commerce', 'PWA Studio', 'Hyvä Theme', 'Shopify', 'WooCommerce'],
  },
  {
    category: 'Frontend',
    tags: ['React 18', 'Angular 17', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'SASS'],
  },
  {
    category: 'Backend',
    tags: ['PHP 8', 'Node.js', 'Java Spring', 'Python Django', 'FastAPI', 'REST / GraphQL'],
  },
  {
    category: 'DevOps & Cloud',
    tags: ['AWS', 'GCP', 'Docker', 'CI/CD', 'Nginx', 'Elasticsearch'],
  },
];

const benefits = [
  'Magento 2 / Adobe Commerce certified developers',
  'Dedicated project manager for every engagement',
  'Agile sprints with transparent weekly reporting',
  '100% code ownership transferred to client',
  'NDA-signed, IP-protected development',
  'Post-launch maintenance and 24/7 monitoring',
  'Competitive pricing — up to 60% less than Western agencies',
  '8–12 hour timezone overlap with US & UK clients',
];

const About = () => (
  <div>
    <SEOMeta
      title="About Us — Magento & eCommerce Development Team"
      description="Brain Logic Info Solutions — Ahmedabad-based eCommerce development agency. Learn about our team, mission, and why 50+ global clients trust us for Magento 2 and web development."
      keywords="about Brain Logic Info Solutions, Magento development team Ahmedabad, eCommerce agency India, web development company Gujarat"
      canonical="/about"
    />
    {/* ── HERO ─────────────────────────────────────────────────── */}
    <section className="page-hero">
      <div className="container page-hero-inner">
        <motion.div
          initial="hidden" animate="show" variants={stagger}
          className="text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">Our Story</motion.span>
          <motion.h1 variants={fadeUp}>
            Ahmedabad's Trusted{' '}
            <span className="gradient-text">Magento Agency</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ maxWidth: 600, margin: '16px auto 0', fontSize: '1.05rem' }}>
            Founded in Ahmedabad, Gujarat, Brain Logic Info Solutions has grown into a
            specialist eCommerce development powerhouse serving clients across 15+ countries.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* ── MISSION & VISION ──────────────────────────────────────── */}
    <section className="section-pad">
      <div className="container">
        <motion.div
          className="about-mission-grid"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          <motion.div variants={fadeUp} className="about-card">
            <span className="about-card-icon">🎯</span>
            <h3>Our Mission</h3>
            <p>
              To empower businesses worldwide with enterprise-grade Magento and eCommerce
              solutions — delivered at the speed, quality, and price point that gives our
              clients a genuine competitive advantage in the digital marketplace.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="about-card">
            <span className="about-card-icon">🚀</span>
            <h3>Our Vision</h3>
            <p>
              To be recognized globally as the leading Magento development company from India —
              known for our technical excellence, transparency, and the measurable business
              outcomes we deliver to every client we work with.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ── STATS ────────────────────────────────────────────────── */}
    <div className="stats-section">
      <div className="container">
        <motion.div
          className="stats-grid"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          {[
            { num: '2019', label: 'Year Founded' },
            { num: '100+', label: 'Projects Delivered' },
            { num: '50+',  label: 'Global Clients' },
            { num: '15+',  label: 'Team Members' },
          ].map(s => (
            <motion.div key={s.label} className="stat-box" variants={fadeUp}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* ── VALUES ────────────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="container">
        <motion.div
          className="text-center"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          <motion.span variants={fadeUp} className="eyebrow">What Drives Us</motion.span>
          <motion.h2 variants={fadeUp}>Our Core Values</motion.h2>
          <motion.p variants={fadeUp} style={{ maxWidth: 500, margin: '12px auto 0' }}>
            The principles that shape every project, every line of code, every client relationship.
          </motion.p>
        </motion.div>
        <motion.div
          className="values-grid"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          {values.map(v => (
            <motion.div key={v.title} variants={fadeUp} className="value-card">
              <span className="value-card-icon">{v.icon}</span>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── TECH STACK ────────────────────────────────────────────── */}
    <section className="section-pad" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="container">
        <motion.div
          className="text-center"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          <motion.span variants={fadeUp} className="eyebrow">Technology</motion.span>
          <motion.h2 variants={fadeUp}>Technologies We Master</motion.h2>
        </motion.div>
        <motion.div
          className="tech-stack-grid"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          {stack.map(cat => (
            <motion.div key={cat.category} variants={fadeUp} className="tech-category">
              <h4>{cat.category}</h4>
              <div className="tech-tag-list">
                {cat.tags.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Why Choose Us</span>
            <h2>The Brain Logic <span className="gradient-text">Difference</span></h2>
            <p style={{ marginTop: 12 }}>
              We're not just a development shop — we're a strategic growth partner for
              your eCommerce business.
            </p>
            <div className="why-choose-list">
              {benefits.map(b => (
                <div key={b} className="why-choose-item">
                  <span className="check">✓</span>
                  {b}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(234,88,12,0.04))',
              border: '1px solid rgba(249,115,22,0.18)',
              borderRadius: '20px',
              padding: '36px',
            }}>
              <h3 style={{ marginBottom: 12 }}>📍 Based in Ahmedabad, India</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Ahmedabad is India's fastest-growing tech hub. Our location gives you
                access to top-tier Magento talent at a fraction of Western agency costs —
                without sacrificing quality or communication.
              </p>
              <a
                href="tel:+917575011974"
                className="btn-primary"
                style={{ marginTop: 20, display: 'inline-flex' }}
              >
                📞 +91 75750 11974
              </a>
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px',
            }}>
              {[
                { num: '15+', label: 'Countries Served' },
                { num: '60%', label: 'Cost Savings vs. West' },
                { num: '12h', label: 'US Timezone Overlap' },
                { num: '48h', label: 'Response SLA' },
              ].map(c => (
                <div key={c.label} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '20px',
                  textAlign: 'center',
                }}>
                  <span style={{
                    fontSize: '1.6rem', fontWeight: 800,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: 'var(--orange)', display: 'block', marginBottom: 4,
                  }}>{c.num}</span>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{c.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── CTA ──────────────────────────────────────────────────── */}
    <div className="container">
      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="cta-inner">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Let's Work Together</span>
          <h2>Ready to Build Something <span className="gradient-text">Extraordinary</span>?</h2>
          <p>Start with a free 30-minute consultation. No strings attached.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Get Free Consultation →</Link>
            <a href="https://wa.me/917575011974" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default About;
