import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

/* ── LIVE CLIENT PROJECTS (real websites we built) ─────────── */
const liveClients = [
  {
    id: 'c1',
    brand: 'Newhall Huber',
    domain: 'newhallhuber.com',
    url: 'https://www.newhallhuber.com/default/',
    country: '🇩🇪 Germany',
    desc: 'Full Magento 2 build for a premium German fashion & lifestyle brand — custom Hyvä theme, multi-currency checkout, and Klarna payment integration for European markets.',
    tech: ['Magento 2', 'Hyvä Theme', 'PHP 8.2', 'Klarna', 'Redis'],
    result: 'PageSpeed 91 · +34% mobile conversion',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#e94560',
  },
  {
    id: 'c2',
    brand: 'Brembati Stores',
    domain: 'brembatistores.com',
    url: 'https://www.brembatistores.com/default/',
    country: '🇮🇹 Italy',
    desc: 'Multi-store Magento 2 implementation for an Italian fashion retailer with 10+ boutique locations — unified inventory, POS integration, and loyalty programme.',
    tech: ['Magento 2', 'Multi-Store', 'POS Integration', 'Varnish', 'MySQL 8'],
    result: '10 stores unified · Inventory sync <2s',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)',
    accent: '#e8a838',
  },
  {
    id: 'c3',
    brand: 'BAX Fashion',
    domain: 'bax-fashion.com',
    url: 'https://www.bax-fashion.com/default/',
    country: '🇪🇺 Europe',
    desc: 'High-performance Magento 2 fashion eCommerce with custom size-guide configurator, advanced layered navigation, and ElasticSearch-powered catalogue search.',
    tech: ['Magento 2', 'ElasticSearch', 'PWA', 'Stripe', 'CloudFlare CDN'],
    result: '2.3s LCP · +41% search-to-purchase rate',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)',
    accent: '#ff6b35',
  },
];

/* ── CASE STUDY PROJECTS (filterable grid) ──────────────────── */
const projects = [
  {
    id: 1,
    category: 'magento',
    label: 'Magento',
    title: 'Newhall Huber — Magento 2 Fashion Store',
    desc: 'Full Magento 2 build with Hyvä theme for a German premium fashion brand with Klarna payments and multi-currency European checkout.',
    tech: ['Magento 2', 'Hyvä', 'PHP 8.2', 'Klarna', 'Redis'],
    icon: '👗', color: 'c-orange',
    result: 'PageSpeed 91 · +34% mobile conversion',
    liveUrl: 'https://www.newhallhuber.com/default/',
    isLive: true,
  },
  {
    id: 2,
    category: 'magento',
    label: 'Magento',
    title: 'Brembati Stores — Italian Multi-Store',
    desc: 'Multi-store Magento 2 for an Italian fashion retailer with 10+ boutiques — unified inventory, POS sync, and loyalty programme across all locations.',
    tech: ['Magento 2', 'Multi-Store', 'POS Integration', 'Varnish', 'MySQL 8'],
    icon: '🛍️', color: 'c-orange',
    result: '10 stores unified · Inventory sync <2s',
    liveUrl: 'https://www.brembatistores.com/default/',
    isLive: true,
  },
  {
    id: 3,
    category: 'magento',
    label: 'Magento',
    title: 'BAX Fashion — High-Performance eCommerce',
    desc: 'Magento 2 fashion store with custom size-guide configurator, ElasticSearch catalogue, and CloudFlare CDN for European audiences.',
    tech: ['Magento 2', 'ElasticSearch', 'Stripe', 'PWA', 'CloudFlare CDN'],
    icon: '👠', color: 'c-orange',
    result: '2.3s LCP · +41% search-to-purchase rate',
    liveUrl: 'https://www.bax-fashion.com/default/',
    isLive: true,
  },
  {
    id: 4,
    category: 'magento',
    label: 'Magento',
    title: 'B2B Adobe Commerce — Manufacturing Portal',
    desc: 'Adobe Commerce B2B implementation with company accounts, custom pricing tiers, and quote management for a US manufacturer.',
    tech: ['Adobe Commerce', 'B2B Module', 'GraphQL', 'MySQL 8'],
    icon: '🏭', color: 'c-orange',
    result: '120+ B2B clients onboarded in Month 1',
  },
  {
    id: 5,
    category: 'magento',
    label: 'Magento',
    title: 'M1 → M2 Migration — Health & Beauty Brand',
    desc: 'Zero-downtime Magento 1 to Magento 2.4 migration preserving all orders, customers, SEO rankings, and custom functionality.',
    tech: ['Magento 2.4', 'Data Migration', 'Redis', 'Varnish'],
    icon: '💄', color: 'c-green',
    result: 'Zero data loss. PageSpeed: 45 → 92',
  },
  {
    id: 6,
    category: 'react',
    label: 'React',
    title: 'Real-Time Analytics Dashboard',
    desc: 'Executive-level SaaS analytics dashboard with React 18, WebSockets for live data, and export to PDF/Excel.',
    tech: ['React 18', 'TypeScript', 'WebSocket', 'D3.js', 'Node.js'],
    icon: '📊', color: 'c-cyan',
    result: 'Used by 300+ enterprise users daily',
  },
  {
    id: 7,
    category: 'react',
    label: 'React',
    title: 'Headless Magento PWA Storefront',
    desc: 'Lightning-fast PWA storefront built with React + Magento PWA Studio for an Australian grocery chain.',
    tech: ['React', 'Magento PWA Studio', 'GraphQL', 'Service Worker'],
    icon: '📱', color: 'c-cyan',
    result: '2.1s LCP. 40% mobile checkout lift',
  },
  {
    id: 8,
    category: 'angular',
    label: 'Angular',
    title: 'B2B Order Management Portal',
    desc: 'Angular 17 enterprise portal connecting 500+ distributors with real-time order tracking, invoicing, and credit management.',
    tech: ['Angular 17', 'RxJS', 'Spring Boot', 'PostgreSQL'],
    icon: '📋', color: 'c-purple',
    result: 'Reduced order processing time by 65%',
  },
  {
    id: 9,
    category: 'uiux',
    label: 'UI/UX',
    title: 'eCommerce UX Redesign — 40% CRO Uplift',
    desc: 'Complete UX audit and redesign for a European electronics retailer. A/B tested checkout flow reduced cart abandonment by 40%.',
    tech: ['Figma', 'User Research', 'A/B Testing', 'Hotjar'],
    icon: '🎨', color: 'c-pink',
    result: 'Cart abandonment: 72% → 43%',
  },
  {
    id: 10,
    category: 'uiux',
    label: 'UI/UX',
    title: 'SaaS Design System & Brand Identity',
    desc: 'Full design system with 200+ components, tokens, and Figma library for a fast-growing Indian SaaS startup.',
    tech: ['Figma', 'Design Tokens', 'Storybook', 'Lottie'],
    icon: '🖥️', color: 'c-pink',
    result: 'Cut design-to-dev time by 55%',
  },
  {
    id: 11,
    category: 'java',
    label: 'Java',
    title: 'Microservices ERP — Logistics Platform',
    desc: 'Spring Boot microservices ERP for a logistics firm handling 10,000+ daily shipments with Kafka event streaming.',
    tech: ['Spring Boot', 'Kafka', 'Docker', 'PostgreSQL', 'Redis'],
    icon: '🚚', color: 'c-green',
    result: '99.98% uptime over 18 months',
  },
  {
    id: 12,
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
    quote: 'Brain Logic delivered our Magento 2 store on time and within budget. The Hyvä theme is blazing fast and our conversion rate jumped 38% within 30 days.',
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
    quote: 'Our B2B portal in Angular is exactly what we envisioned. Code quality is excellent, communication was daily, and they handled complex pricing rules perfectly.',
    name: 'Mark Thompson',
    role: 'CTO, IndustrialHub USA',
    initials: 'MT',
  },
];

/* ── LIVE CLIENT CARD ───────────────────────────────────────── */
const LiveClientCard = ({ client }) => (
  <motion.div className="live-client-card" variants={fadeUp}>
    <div className="live-client-header" style={{ background: client.gradient }}>
      <div className="live-client-header-inner">
        <span className="live-badge">● LIVE</span>
        <span className="live-country">{client.country}</span>
      </div>
      <div className="live-brand-name">{client.brand}</div>
      <div className="live-domain-pill">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        {client.domain}
      </div>
    </div>
    <div className="live-client-body">
      <p className="live-client-desc">{client.desc}</p>
      <div className="live-result-row">
        <span className="result-label">📈 Result</span>
        <span className="result-value">{client.result}</span>
      </div>
      <div className="live-tech-row">
        {client.tech.map(t => <span key={t} className="project-tag">{t}</span>)}
      </div>
      <div className="live-client-footer">
        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-site-btn"
        >
          Visit Live Site
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
        <Link to="/contact" className="discuss-btn">Discuss Similar →</Link>
      </div>
    </div>
  </motion.div>
);

/* ── PROJECT CARD ───────────────────────────────────────────── */
const ProjectCard = ({ p }) => (
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
      {p.isLive && <span className="thumb-live-dot">● LIVE</span>}
      <span className="project-thumb-icon">{p.icon}</span>
    </div>
    <div className="project-info">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span className="project-category">{p.label}</span>
        {p.isLive && <span className="project-live-tag">Live Client</span>}
      </div>
      <h4>{p.title}</h4>
      <p>{p.desc}</p>
      <div className="project-result-box">
        <span className="result-icon">📈</span>
        <span>{p.result}</span>
      </div>
      <div className="project-tags" style={{ marginTop: 12 }}>
        {p.tech.map(t => <span key={t} className="project-tag">{t}</span>)}
      </div>
    </div>
    <div className="project-link-row">
      {p.liveUrl
        ? <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View Live Site ↗</a>
        : <Link to="/contact">Discuss Similar Project →</Link>
      }
    </div>
  </motion.div>
);

/* ── PAGE ───────────────────────────────────────────────────── */
const Portfolio = () => {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <div>
      <SEOMeta
        title="Portfolio — Real Magento & eCommerce Projects"
        description="View Brain Logic's live Magento 2 projects — Newhall Huber, Brembati Stores, BAX Fashion — plus React, Angular, UI/UX and Java case studies from 15+ countries."
        keywords="Magento portfolio, eCommerce case studies, Magento 2 projects, newhall huber magento, brembati stores, bax fashion magento, Brain Logic portfolio"
        canonical="/portfolio"
      />

      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-center">
            <motion.span variants={fadeUp} className="eyebrow">Our Work</motion.span>
            <motion.h1 variants={fadeUp}>
              Real Projects, <span className="gradient-text">Real Results</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ maxWidth: 600, margin: '16px auto 0', fontSize: '1.05rem' }}>
              100+ projects across Magento, React, Angular, UI/UX and more —
              live websites and enterprise platforms serving clients in 15+ countries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-section">
        <div className="container">
          <motion.div className="stats-grid" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
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

      {/* ── LIVE MAGENTO CLIENTS ── */}
      <section className="section-pad">
        <div className="container">
          <motion.div className="text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ marginBottom: 48 }}>
            <motion.span variants={fadeUp} className="eyebrow">Live Magento Websites</motion.span>
            <motion.h2 variants={fadeUp}>
              Real Clients, <span className="gradient-text">Live in Production</span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{ maxWidth: 560, margin: '12px auto 0', color: 'var(--text-secondary)' }}>
              These are live Magento 2 stores we built and launched for fashion brands across Europe.
            </motion.p>
          </motion.div>

          <motion.div className="live-clients-grid" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            {liveClients.map(c => <LiveClientCard key={c.id} client={c} />)}
          </motion.div>
        </div>
      </section>

      {/* ── ALL PROJECTS (filterable) ── */}
      <section className="section-pad" style={{ background: 'rgba(255,255,255,0.012)' }}>
        <div className="container">
          <motion.div className="text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ marginBottom: 40 }}>
            <motion.span variants={fadeUp} className="eyebrow">Case Studies</motion.span>
            <motion.h2 variants={fadeUp}>All Projects</motion.h2>
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
          <motion.div className="portfolio-grid-4" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map(p => <ProjectCard key={p.id} p={p} />)}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad">
        <div className="container">
          <motion.div className="text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ marginBottom: 48 }}>
            <motion.span variants={fadeUp} className="eyebrow">Client Feedback</motion.span>
            <motion.h2 variants={fadeUp}>What Our Clients Say</motion.h2>
          </motion.div>
          <motion.div className="testimonials-grid" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
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

      {/* ── CTA ── */}
      <div className="container">
        <motion.div className="cta-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="cta-inner">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Start Your Project</span>
            <h2>Ready to Build Your <span className="gradient-text">Success Story</span>?</h2>
            <p>Join 50+ businesses worldwide that trust Brain Logic for their digital growth.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">Get Free Consultation →</Link>
              <a href="https://wa.me/917575011974" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">💬 WhatsApp Us</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
