import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const features = [
  { icon: '⚡', title: 'Angular 17+ Applications', desc: 'Modern standalone components, signals-based state management, and deferred loading for blazing-fast enterprise apps.' },
  { icon: '🏢', title: 'Enterprise B2B Portals', desc: 'Complex multi-role portals with order management, invoicing, credit limits, and distributor networks built on Angular.' },
  { icon: '📊', title: 'Data-Heavy Dashboards', desc: 'Real-time analytics dashboards with RxJS streams, AG Grid, and Chart.js handling thousands of concurrent data points.' },
  { icon: '🔄', title: 'Micro-Frontend Architecture', desc: 'Module federation and Nx monorepo setups that let large teams ship independently without stepping on each other.' },
  { icon: '🌐', title: 'Angular Universal (SSR)', desc: 'Server-side rendering for public-facing Angular apps to achieve SEO rankings and sub-second Time to First Byte.' },
  { icon: '🔧', title: 'Migration & Upgrades', desc: 'Safe Angular version upgrades (v12 → v17+) and AngularJS to Angular migrations with full test coverage.' },
];

const faqs = [
  {
    q: 'When should we choose Angular over React?',
    a: 'Angular is the right choice for large enterprise teams — its opinionated structure, built-in DI, and strict TypeScript make it easier to enforce consistency across 10+ developers. React is better for smaller teams or when you need maximum flexibility.',
  },
  {
    q: 'Can you upgrade our old AngularJS (Angular 1) app?',
    a: 'Yes. We follow a hybrid approach — running AngularJS and Angular side by side so you can migrate module by module without a big-bang rewrite. We have done this for manufacturing and logistics clients.',
  },
  {
    q: 'How do you handle state management in Angular?',
    a: 'For most projects we use NgRx with Entity adapter. For simpler apps we use Angular Signals (v17+) or a lightweight service + BehaviorSubject pattern. We choose based on team size and complexity, not hype.',
  },
];

const AngularService = () => (
  <div>
    {/* ── HERO ── */}
    <section className="service-detail-hero">
      <div className="container service-detail-inner">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.span variants={fadeUp} className="eyebrow">Angular Development</motion.span>
          <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', marginBottom: 20 }}>
            ⚡ Angular <span className="gradient-text" style={{ '--grad': 'linear-gradient(135deg,#8B5CF6,#6D28D9)' }}>Enterprise Development</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ maxWidth: 600, color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 32 }}>
            Scalable, maintainable Angular applications for large enterprise teams — B2B portals,
            order management systems, and real-time dashboards that handle complexity with confidence.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Get a Free Quote →</Link>
            <Link to="/portfolio" className="btn-outline">View Angular Projects</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ── STATS ── */}
    <div className="stats-section">
      <div className="container">
        <motion.div className="stats-grid" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {[
            { num: '20+', label: 'Angular Projects Delivered' },
            { num: '500+', label: 'Distributors Connected' },
            { num: '65%', label: 'Faster Order Processing' },
            { num: 'v17+', label: 'Latest Angular Version' },
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
          <motion.h2 variants={fadeUp}>Angular Development Services</motion.h2>
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
          <motion.h2 variants={fadeUp}>Angular Ecosystem We Master</motion.h2>
        </motion.div>
        <motion.div className="tech-pills" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {['Angular 17+', 'TypeScript 5', 'RxJS', 'NgRx', 'Angular Signals', 'Angular Material', 'PrimeNG', 'Angular Universal', 'Jest', 'Cypress', 'Nx Monorepo', 'Spring Boot', 'PostgreSQL', 'Docker'].map(t => (
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
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Start Your Angular Project</span>
          <h2>Ready to Build a <span className="gradient-text">Scalable Enterprise App</span>?</h2>
          <p>Let's discuss your enterprise requirements and architect an Angular solution that scales.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Get Free Consultation →</Link>
            <a href="https://wa.me/917575011974" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">💬 WhatsApp Us</a>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default AngularService;
