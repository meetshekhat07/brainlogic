import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const projects = [
  {
    id: 1,
    category: 'magento',
    label: 'Magento',
    title: 'Fashion eCommerce — Full Magento 2 Build',
    desc: 'Custom Magento 2 store for a UK-based fashion brand with Hyvä theme, Stripe payments, and real-time inventory sync to SAP.',
    tech: ['Magento 2', 'Hyvä', 'PHP 8', 'Stripe', 'SAP ERP'],
    icon: '🛒', color: 'c-orange',
    result: '+38% conversion rate after launch',
  },
  {
    id: 2,
    category: 'magento',
    label: 'Magento',
    title: 'B2B Adobe Commerce — Manufacturing Portal',
    desc: 'Adobe Commerce B2B implementation with company accounts, custom pricing tiers, and quote management for a US manufacturer.',
    tech: ['Adobe Commerce', 'B2B Module', 'GraphQL', 'MySQL 8'],
    icon: '🏭', color: 'c-orange',
    result: '120+ B2B clients onboarded in Month 1',
  },
  {
    id: 3,
    category: 'magento',
    label: 'Magento',
    title: 'M1 → M2 Migration — Health & Beauty Brand',
    desc: 'Zero-downtime Magento 1 to Magento 2.4 migration preserving all orders, customers, SEO rankings, and custom functionality.',
    tech: ['Magento 2.4', 'Data Migration', 'Redis', 'Varnish'],
    icon: '💄', color: 'c-green',
    result: 'Zero data loss. PageSpeed: 45 → 92',
  },
  {
    id: 4,
    category: 'react',
    label: 'React',
    title: 'Real-Time Analytics Dashboard',
    desc: 'Executive-level analytics SaaS dashboard with React 18, WebSockets for live data, and export to PDF/Excel.',
    tech: ['React 18', 'TypeScript', 'WebSocket', 'D3.js', 'Node.js'],
    icon: '📊', color: 'c-cyan',
    result: 'Used by 300+ enterprise users daily',
  },
  {
    id: 5,
    category: 'react',
    label: 'React',
    title: 'Headless Magento PWA Storefront',
    desc: 'Lightning-fast PWA storefront built with React + Magento PWA Studio for an Australian grocery chain.',
    tech: ['React', 'Magento PWA Studio', 'GraphQL', 'Service Worker'],
    icon: '📱', color: 'c-cyan',
    result: '2.1s LCP. 40% mobile checkout lift',
  },
  {
    id: 6,
    category: 'angular',
    label: 'Angular',
    title: 'B2B Order Management Portal',
    desc: 'Angular 17 enterprise portal connecting 500+ distributors with real-time order tracking, invoicing, and credit management.',
    tech: ['Angular 17', 'RxJS', 'Spring Boot', 'PostgreSQL'],
    icon: '📋', color: 'c-purple',
    result: 'Reduced order processing time by 65%',
  },
  {
    id: 7,
    category: 'uiux',
    label: 'UI/UX',
    title: 'eCommerce UX Redesign — 40% CRO Uplift',
    desc: 'Complete UX audit and redesign for a European electronics retailer. A/B tested checkout flow reduced cart abandonment by 40%.',
    tech: ['Figma', 'User Research', 'A/B Testing', 'Hotjar'],
    icon: '🎨', color: 'c-pink',
    result: 'Cart abandonment: 72% → 43%',
  },
  {
    id: 8,
    category: 'uiux',
    label: 'UI/UX',
    title: 'SaaS Design System & Brand Identity',
    desc: 'Full design system with 200+ components, tokens, and Figma library for a fast-growing Indian SaaS startup.',
    tech: ['Figma', 'Design Tokens', 'Storybook', 'Lottie'],
    icon: '🖥️', color: 'c-pink',
    result: 'Cut design-to-dev time by 55%',
  },
  {
    id: 9,
    category: 'java',
    label: 'Java',
    title: 'Microservices ERP — Logistics Platform',
    desc: 'Spring Boot microservices ERP for a logistics firm handling 10,000+ daily shipments with Kafka event streaming.',
    tech: ['Spring Boot', 'Kafka', 'Docker', 'PostgreSQL', 'Redis'],
    icon: '🚚', color: 'c-green',
    result: '99.98% uptime over 18 months',
  },
  {
    id: 10,
    category: 'python',
    label: 'Python',
    title: 'AI Product Recommendation Engine',
    desc: 'ML-powered product recommendation engine integrated into Magento, increasing average order value by 28%.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Magento API', 'Redis'],
    icon: '🤖', color: 'c-cyan',
    result: 'AOV increased by 28% in 3 months',
  },
];

const filters = [
  { key: 'all',     label: 'All Projects' },
  { key: 'magento', label: '🛒 Magento' },
  { key: 'react',   label: '⚛️ React' },
  { key: 'angular', label: '⚡ Angular' },
  { key: 'uiux',    label: '🎨 UI/UX' },
  { key: 'java',    label: '☕ Java' },
  { key: 'python',  label: '🐍 Python' },
];

const testimonials = [
  {
    stars: '★★★★★',
    quote: 'Brain Logic delivered our Magento 2 store on time and within budget. The Hyvä theme they built is blazing fast and our conversion rate jumped 38% within 30 days.',
    name: 'Daniel Harrison',
    role: 'Head of eCommerce, StyleHub UK',
    initials: 'DH',
  },
  {
    stars: '★★★★★',
    quote: 'The M1 to M2 migration was flawless — zero downtime, all our SEO preserved, and our PageSpeed went from 45 to 92. Absolutely outstanding team.',
    name: 'Priya Kapoor',
    role: 'Founder, WellnessFirst India',
    initials: 'PK',
  },
  {
    stars: '★★★★★',
    quote: 'Our B2B portal in Angular is exactly what we envisioned. The code quality is excellent, communication was daily, and they handled our complex pricing rules perfectly.',
    name: 'Mark Thompson',
    role: 'CTO, IndustrialHub USA',
    initials: 'MT',
  },
];

const Portfolio = () => {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <div>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-center">
            <motion.span variants={fadeUp} className="eyebrow">Our Work</motion.span>
            <motion.h1 variants={fadeUp}>
              Real Projects, <span className="gradient-text">Real Results</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ maxWidth: 580, margin: '16px auto 0', fontSize: '1.05rem' }}>
              100+ projects delivered across Magento, React, Angular, UI/UX and more —
              serving clients in 15+ countries with measurable business outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <div className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {[
              { num: '100+', label: 'Projects Delivered' },
              { num: '50+',  label: 'Happy Clients' },
              { num: '15+',  label: 'Countries Served' },
              { num: '98%',  label: 'Client Retention' },
            ].map(s => (
              <motion.div key={s.label} className="stat-box" variants={fadeUp}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── PROJECTS ───────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <motion.div
            className="text-center"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            style={{ marginBottom: 40 }}
          >
            <motion.span variants={fadeUp} className="eyebrow">Case Studies</motion.span>
            <motion.h2 variants={fadeUp}>Featured Projects</motion.h2>
          </motion.div>

          {/* Filters */}
          <div className="filter-bar">
            {filters.map(f => (
              <button
                key={f.key}
                className={`filter-btn ${active === f.key ? 'active' : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            className="portfolio-grid-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map(p => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="project-card"
                >
                  <div className={`project-thumb ${p.color}`}>
                    {p.icon}
                  </div>
                  <div className="project-info">
                    <span className="project-category">{p.label}</span>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '8px 12px',
                      background: 'rgba(249,115,22,0.08)',
                      border: '1px solid rgba(249,115,22,0.18)',
                      borderRadius: 8,
                      marginTop: 4,
                    }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--orange)', fontWeight: 700 }}>📈 RESULT</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--orange-light)', fontWeight: 600 }}>{p.result}</span>
                    </div>
                    <div className="project-tags" style={{ marginTop: 12 }}>
                      {p.tech.map(t => (
                        <span key={t} className="project-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-link-row">
                    <a href="/contact">Discuss Similar Project →</a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="container">
          <motion.div
            className="text-center"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            style={{ marginBottom: 48 }}
          >
            <motion.span variants={fadeUp} className="eyebrow">Client Feedback</motion.span>
            <motion.h2 variants={fadeUp}>What Our Clients Say</motion.h2>
          </motion.div>

          <motion.div
            className="testimonials-grid"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {testimonials.map(t => (
              <motion.div key={t.name} className="testimonial-card" variants={fadeUp}>
                <div className="testimonial-stars">{t.stars}</div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <div className="container">
        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="cta-inner">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Start Your Project</span>
            <h2>Ready to Build Your <span className="gradient-text">Success Story</span>?</h2>
            <p>Join 50+ businesses worldwide that trust Brain Logic for their digital growth.</p>
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
};

export default Portfolio;
