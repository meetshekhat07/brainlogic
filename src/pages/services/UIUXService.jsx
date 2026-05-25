import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const features = [
  { icon: '🔍', title: 'UX Research & Audit', desc: 'Heuristic audits, user interviews, and heatmap analysis to identify friction points before a single pixel is touched.' },
  { icon: '🗺️', title: 'Information Architecture', desc: 'Card sorting, sitemap design, and user flow mapping to ensure your product is intuitive from the very first click.' },
  { icon: '🖼️', title: 'Wireframing & Prototyping', desc: 'Low-fi wireframes to high-fidelity interactive Figma prototypes — validated with real users before development starts.' },
  { icon: '🎨', title: 'Visual Design & Branding', desc: 'Pixel-perfect UI designs with consistent typography, spacing tokens, and colour systems that work in light and dark mode.' },
  { icon: '📐', title: 'Design System Creation', desc: '200+ component Figma libraries with tokens, variants, and Storybook handoff that cut design-to-dev time by 55%.' },
  { icon: '🧪', title: 'CRO & A/B Testing', desc: 'Checkout flow optimisation, A/B test design, and Hotjar analysis to move conversion metrics, not just aesthetics.' },
];

const faqs = [
  {
    q: 'Do you design mobile-first?',
    a: 'Always. Every design starts from a 375px mobile viewport and scales up. We test on real devices and use breakpoints that match your actual traffic — not just desktop assumptions.',
  },
  {
    q: 'How does the handoff to developers work?',
    a: 'We deliver Figma files with Dev Mode enabled — developers can inspect spacing, colours, and export assets directly. We also provide a written design spec and remain available for questions during implementation.',
  },
  {
    q: 'Can you improve an existing design without a full redesign?',
    a: 'Yes. A UX audit + targeted fixes (checkout flow, navigation, mobile layout) often yields 20–40% conversion uplift without touching the brand identity or requiring a full rebuild.',
  },
];

const UIUXService = () => (
  <div>
    {/* ── HERO ── */}
    <section className="service-detail-hero">
      <div className="container service-detail-inner">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.span variants={fadeUp} className="eyebrow">UI/UX Design Services</motion.span>
          <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', marginBottom: 20 }}>
            🎨 UI/UX Design That <span className="gradient-text">Converts</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ maxWidth: 600, color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 32 }}>
            Research-backed UX design and pixel-perfect UI that turns visitors into customers.
            We reduced cart abandonment from 72% to 43% for one client — design drives revenue.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Get a Free Audit →</Link>
            <Link to="/portfolio" className="btn-outline">View Design Projects</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ── STATS ── */}
    <div className="stats-section">
      <div className="container">
        <motion.div className="stats-grid" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {[
            { num: '40%', label: 'Avg CRO Uplift' },
            { num: '200+', label: 'Components per Design System' },
            { num: '55%', label: 'Faster Dev Handoff' },
            { num: '15+', label: 'Industries Designed For' },
          ].map(s => (
            <motion.div key={s.label} className="stat-box" variants={fadeUp}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* ── SERVICES ── */}
    <section className="section-pad">
      <div className="container">
        <motion.div className="text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ marginBottom: 48 }}>
          <motion.span variants={fadeUp} className="eyebrow">What We Do</motion.span>
          <motion.h2 variants={fadeUp}>UI/UX Design Services</motion.h2>
        </motion.div>
        <motion.div className="service-features-grid" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {features.map(f => (
            <motion.div key={f.title} className="sf-card" variants={fadeUp}>
              <div className="sf-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── TOOLS ── */}
    <section className="section-pad" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="container">
        <motion.div className="text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ marginBottom: 36 }}>
          <motion.span variants={fadeUp} className="eyebrow">Design Tools</motion.span>
          <motion.h2 variants={fadeUp}>Tools &amp; Methods We Use</motion.h2>
        </motion.div>
        <motion.div className="tech-pills" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {['Figma', 'FigJam', 'Adobe XD', 'Illustrator', 'Photoshop', 'Lottie / After Effects', 'Storybook', 'Hotjar', 'Maze', 'Optimal Workshop', 'Design Tokens', 'WCAG 2.2 Accessibility'].map(t => (
            <motion.span key={t} className="tech-pill" variants={fadeUp}>{t}</motion.span>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── FAQ ── */}
    <section className="section-pad">
      <div className="container" style={{ maxWidth: 780 }}>
        <motion.div className="text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ marginBottom: 40 }}>
          <motion.span variants={fadeUp} className="eyebrow">FAQ</motion.span>
          <motion.h2 variants={fadeUp}>Common Questions</motion.h2>
        </motion.div>
        <motion.div className="faq-list" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {faqs.map(f => (
            <motion.div key={f.q} className="faq-item" variants={fadeUp}>
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── CTA ── */}
    <div className="container">
      <motion.div className="cta-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="cta-inner">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Start Your Design Project</span>
          <h2>Ready to <span className="gradient-text">Transform Your UX</span>?</h2>
          <p>Let's audit your current experience and design something that converts visitors into loyal customers.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Get Free UX Audit →</Link>
            <a href="https://wa.me/917575011974" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">💬 WhatsApp Us</a>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default UIUXService;
