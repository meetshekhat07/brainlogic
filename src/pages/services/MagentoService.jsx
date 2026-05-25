import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const services = [
  {
    icon: '🏗️', title: 'Custom Magento 2 Development',
    desc: 'Ground-up Magento 2 stores built to your exact specifications — scalable, fast, and conversion-optimized.',
  },
  {
    icon: '🔄', title: 'Magento 1 → 2 Migration',
    desc: 'Seamless, data-safe migration from Magento 1 to Magento 2 with zero downtime and full SEO preservation.',
  },
  {
    icon: '🧩', title: 'Custom Module Development',
    desc: 'Bespoke Magento extensions and modules that add the exact functionality your store needs.',
  },
  {
    icon: '🎨', title: 'Theme Development (Hyvä & Luma)',
    desc: 'Blazing-fast Hyvä themes or polished Luma customizations — beautiful, performant, mobile-first.',
  },
  {
    icon: '🏢', title: 'Adobe Commerce (Enterprise)',
    desc: 'Full Adobe Commerce B2B and B2C implementations with advanced catalog, pricing, and ERP integrations.',
  },
  {
    icon: '📱', title: 'PWA Storefront',
    desc: 'Progressive Web App storefronts using Magento PWA Studio or Hyvä + Alpine.js for app-like experiences.',
  },
  {
    icon: '🔗', title: 'Third-Party Integrations',
    desc: 'ERP, CRM, PIM, shipping, payment, tax, and marketing platform integrations done right.',
  },
  {
    icon: '⚡', title: 'Performance Optimization',
    desc: 'Speed audits, caching, CDN setup, image optimization, and Core Web Vitals improvements.',
  },
];

const techStack = [
  'Magento 2 / Adobe Commerce', 'PHP 8+', 'Hyvä Theme', 'GraphQL API',
  'MySQL 8', 'Elasticsearch', 'Redis', 'Varnish',
  'Docker', 'AWS / GCP', 'Nginx', 'RabbitMQ',
];

const faqs = [
  {
    q: 'How long does a Magento 2 migration take?',
    a: 'A typical Magento 1 to Magento 2 migration takes 8–16 weeks, depending on catalog size, custom extensions, and design complexity. We do a detailed audit before committing to a timeline.',
  },
  {
    q: 'Can you work on our existing Magento store?',
    a: 'Yes — we regularly audit, debug, extend, and optimize live Magento stores. We\'ll start with a free audit to understand what needs to be done.',
  },
  {
    q: 'Do you build Hyvä themes?',
    a: 'Absolutely. Hyvä is our preferred theme framework for Magento 2. It results in dramatically faster page loads and better Core Web Vitals scores.',
  },
  {
    q: 'Will my store\'s SEO be preserved during migration?',
    a: '100%. We handle URL redirects, canonical tags, meta data, sitemap, and structured data as part of every migration to ensure zero SEO loss.',
  },
];

const MagentoService = () => (
  <div>
    {/* ── HERO ─────────────────────────────────────────────────── */}
    <section className="service-detail-hero">
      <div className="container">
        <div className="service-detail-inner">
          <motion.div
            initial="hidden" animate="show" variants={stagger}
          >
            <motion.div variants={fadeUp} style={{
              width: 72, height: 72, background: 'rgba(249,115,22,0.15)',
              borderRadius: '20px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '2rem', marginBottom: 24,
            }}>🛒</motion.div>
            <motion.span variants={fadeUp} className="eyebrow">eCommerce Specialists</motion.span>
            <motion.h1 variants={fadeUp}>
              Magento 2 & Adobe Commerce{' '}
              <span className="gradient-text">Development</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.05rem', maxWidth: 600, margin: '16px 0 32px' }}>
              Ahmedabad's most trusted Magento development team. We build, migrate, and optimize
              Magento 2 & Adobe Commerce stores for businesses across the USA, UK, Australia, and beyond.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Get Free Magento Audit →</Link>
              <a href="https://wa.me/917575011974" target="_blank" rel="noopener noreferrer" className="btn-outline">
                💬 WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── STATS BAR ────────────────────────────────────────────── */}
    <div className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {[
            { num: '100+', label: 'Magento Projects Delivered' },
            { num: '50+',  label: 'Global Clients' },
            { num: '5+',   label: 'Years Magento Experience' },
            { num: '24/7', label: 'Post-Launch Support' },
          ].map(s => (
            <div key={s.label} className="stat-box">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── SERVICES ─────────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="container">
        <motion.div
          className="text-center"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          style={{ marginBottom: 48 }}
        >
          <motion.span variants={fadeUp} className="eyebrow">What We Offer</motion.span>
          <motion.h2 variants={fadeUp}>Comprehensive Magento Services</motion.h2>
          <motion.p variants={fadeUp} style={{ maxWidth: 520, margin: '12px auto 0' }}>
            From brand-new builds to complex enterprise implementations — we cover every
            aspect of Magento development.
          </motion.p>
        </motion.div>

        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          {services.map(s => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.35s',
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{s.icon}</div>
              <h4 style={{ marginBottom: 8, fontSize: '1rem' }}>{s.title}</h4>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>{s.desc}</p>
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
          <motion.span variants={fadeUp} className="eyebrow">Tech Stack</motion.span>
          <motion.h2 variants={fadeUp}>Technologies We Use</motion.h2>
        </motion.div>
        <motion.div
          style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 40 }}
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          {techStack.map(t => (
            <motion.span
              key={t}
              variants={fadeUp}
              style={{
                padding: '10px 22px',
                background: 'rgba(249,115,22,0.08)',
                border: '1px solid rgba(249,115,22,0.20)',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--orange-light)',
              }}
            >{t}</motion.span>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── FAQ ──────────────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="container">
        <motion.div
          className="text-center"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          style={{ marginBottom: 40 }}
        >
          <motion.span variants={fadeUp} className="eyebrow">FAQs</motion.span>
          <motion.h2 variants={fadeUp}>Common Questions</motion.h2>
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
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Free Magento Audit</span>
          <h2>Get a Free <span className="gradient-text">Magento Store Audit</span></h2>
          <p>
            Our experts will audit your current store for performance, security, and
            conversion opportunities — completely free, no obligations.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Claim Free Audit →</Link>
            <a href="https://wa.me/917575011974" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default MagentoService;
