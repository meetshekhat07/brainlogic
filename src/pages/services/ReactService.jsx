import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const features = [
  { icon: '⚛️', title: 'React 18 & Next.js 14', desc: 'Cutting-edge React with concurrent rendering, Suspense, Server Components, and App Router for lightning-fast apps.' },
  { icon: '📱', title: 'Headless Magento PWA', desc: 'Blazing-fast storefronts built with React + Magento PWA Studio or custom GraphQL headless layer.' },
  { icon: '📊', title: 'Real-Time Dashboards', desc: 'Executive SaaS dashboards with WebSockets, D3.js charts, and live data feeds for enterprise analytics.' },
  { icon: '🧩', title: 'Component Libraries', desc: 'Scalable design systems and Storybook component libraries aligned with your brand and used across teams.' },
  { icon: '🔄', title: 'Migration to React', desc: 'Lift-and-shift from Angular, Vue, or jQuery to modern React with zero regression and full feature parity.' },
  { icon: '🛡️', title: 'TypeScript & Testing', desc: 'Strict TypeScript codebases with Jest, React Testing Library, and Cypress E2E test coverage from day one.' },
];

const faqs = [
  {
    q: 'React or Next.js — which should we use?',
    a: 'Next.js is our default recommendation for any public-facing app — SEO, SSR, and image optimisation are built in. Pure React (Vite) suits internal tools and SPAs where SSR is not needed.',
  },
  {
    q: 'Can you build a headless Magento storefront in React?',
    a: 'Absolutely. We have shipped multiple PWA Studio and custom GraphQL storefronts that achieve sub-2s LCP scores while maintaining full Magento checkout and catalog functionality.',
  },
  {
    q: 'How long does a typical React project take?',
    a: 'A production-ready dashboard or storefront typically takes 6–12 weeks. We deliver in 2-week sprints so you see working software early and can redirect priorities.',
  },
];

const ReactService = () => (
  <div>
    {/* ── HERO ── */}
    <section className="service-detail-hero">
      <div className="container service-detail-inner">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.span variants={fadeUp} className="eyebrow">React &amp; Next.js Development</motion.span>
          <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', marginBottom: 20 }}>
            ⚛️ ReactJS &amp; Next.js <span className="gradient-text">Development</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ maxWidth: 600, color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 32 }}>
            From lightning-fast PWA storefronts to enterprise SaaS dashboards — we ship production-grade
            React applications that are fast, accessible, and conversion-focused.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Get a Free Quote →</Link>
            <Link to="/portfolio" className="btn-outline">View React Projects</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ── STATS ── */}
    <div className="stats-section">
      <div className="container">
        <motion.div className="stats-grid" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {[
            { num: '30+', label: 'React Projects Shipped' },
            { num: '<2s', label: 'Avg LCP Score' },
            { num: '100%', label: 'TypeScript Projects' },
            { num: '5+', label: 'Years with React' },
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
          <motion.span variants={fadeUp} className="eyebrow">What We Build</motion.span>
          <motion.h2 variants={fadeUp}>React Development Services</motion.h2>
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

    {/* ── TECH STACK ── */}
    <section className="section-pad" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="container">
        <motion.div className="text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ marginBottom: 36 }}>
          <motion.span variants={fadeUp} className="eyebrow">Tech Stack</motion.span>
          <motion.h2 variants={fadeUp}>React Ecosystem We Master</motion.h2>
        </motion.div>
        <motion.div className="tech-pills" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {['React 18', 'Next.js 14', 'TypeScript', 'Redux Toolkit', 'Zustand', 'React Query', 'Tailwind CSS', 'Framer Motion', 'Storybook', 'Jest / RTL', 'Cypress', 'GraphQL', 'Webpack', 'Vite'].map(t => (
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
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Start Your React Project</span>
          <h2>Ready to Build a <span className="gradient-text">World-Class React App</span>?</h2>
          <p>Let's discuss your project requirements and craft a fast, scalable React solution.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Get Free Consultation →</Link>
            <a href="https://wa.me/917575011974" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">💬 WhatsApp Us</a>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default ReactService;
