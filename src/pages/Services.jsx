import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const services = [
  {
    icon: '🛒',
    color: '#F97316',
    colorBg: 'rgba(249,115,22,0.10)',
    chip: 'Primary Specialty',
    chipClass: 'chip-orange',
    title: 'Magento 2 & Adobe Commerce',
    desc: 'End-to-end Magento 2 development — from scratch builds and M1→M2 migrations to custom extensions, Hyvä themes, and performance optimization. We are Ahmedabad\'s most experienced Magento team.',
    features: [
      'Custom Magento 2 Store Development',
      'Adobe Commerce (Enterprise) Implementations',
      'Magento 1 to Magento 2 Migration',
      'Custom Module & Extension Development',
      'Hyvä / Luma Theme Customization',
      'PWA Storefront Development',
      'Payment Gateway Integrations',
      'ERP / CRM / PIM Integrations',
      'Performance & Core Web Vitals Audit',
      'Magento SEO Optimization',
    ],
    href: '/services/magento',
    featured: true,
  },
  {
    icon: '⚛️',
    color: '#06B6D4',
    colorBg: 'rgba(6,182,212,0.10)',
    chip: 'Frontend',
    chipClass: 'chip-cyan',
    title: 'ReactJS Development',
    desc: 'High-performance React 18 applications with modern hooks, server-side rendering, and composable architecture. Ideal for headless Magento frontends and SaaS dashboards.',
    features: [
      'React 18 / Next.js Applications',
      'Headless eCommerce (Magento + React)',
      'State Management (Redux, Zustand)',
      'Component Library Development',
      'Performance Optimization',
      'PWA with React',
    ],
    href: '/services/react',
  },
  {
    icon: '⚡',
    color: '#8B5CF6',
    colorBg: 'rgba(139,92,246,0.10)',
    chip: 'Frontend',
    chipClass: 'chip-purple',
    title: 'Angular Development',
    desc: 'Enterprise SPAs with Angular 17+, TypeScript, RxJS, and a clean module architecture. Perfect for B2B portals and admin dashboards paired with Magento backends.',
    features: [
      'Angular 17+ Applications',
      'B2B Order Management Portals',
      'TypeScript & RxJS Best Practices',
      'Angular Material Design',
      'Micro-Frontend Architecture',
      'Unit & E2E Testing',
    ],
    href: '/services/angular',
  },
  {
    icon: '🎨',
    color: '#F97316',
    colorBg: 'rgba(249,115,22,0.10)',
    chip: 'Design',
    chipClass: 'chip-orange',
    title: 'UI/UX Design',
    desc: 'Conversion-focused eCommerce design that turns visitors into buyers. We deliver Figma-based prototypes, design systems, and pixel-perfect handoffs that developers love.',
    features: [
      'eCommerce UX Audit & Redesign',
      'Figma Prototyping & Wireframing',
      'Magento Theme Design',
      'Design System Creation',
      'A/B Testing & CRO',
      'Mobile-First Responsive Design',
    ],
    href: '/services/uiux',
  },
  {
    icon: '☕',
    color: '#10B981',
    colorBg: 'rgba(16,185,129,0.10)',
    chip: 'Backend',
    chipClass: 'chip-green',
    title: 'Java Development',
    desc: 'Scalable, high-performance backend systems and microservices using Spring Boot and Java 17+. Ideal for enterprise-grade eCommerce backends and API layers.',
    features: [
      'Spring Boot Microservices',
      'REST & GraphQL APIs',
      'Enterprise Integration Patterns',
      'JPA / Hibernate ORM',
      'Kafka & Message Queues',
      'Cloud-Native Java Apps',
    ],
    href: '/services/java',
  },
  {
    icon: '🐍',
    color: '#06B6D4',
    colorBg: 'rgba(6,182,212,0.10)',
    chip: 'Backend / AI',
    chipClass: 'chip-cyan',
    title: 'Python Development',
    desc: 'Django/FastAPI backends, AI/ML integrations, data pipelines, and automation scripts. Bring intelligence to your eCommerce operations with Python.',
    features: [
      'Django & FastAPI REST APIs',
      'AI/ML Product Recommendations',
      'Data Analytics Dashboards',
      'Automation & Web Scraping',
      'Celery Task Queues',
      'Python + Magento Integration',
    ],
    href: '/services/python',
  },
];

const processSteps = [
  { num: '01', title: 'Discovery Call',   desc: 'We understand your goals, current tech, and desired outcomes.' },
  { num: '02', title: 'Proposal',         desc: 'Detailed scope, timeline, team composition, and transparent pricing.' },
  { num: '03', title: 'Design',           desc: 'UX wireframes and UI designs reviewed and approved by you.' },
  { num: '04', title: 'Development',      desc: 'Agile sprints, daily standups, code reviews, and demo access.' },
  { num: '05', title: 'QA & Launch',      desc: 'Thorough testing, performance audit, and smooth go-live.' },
];

const Services = () => (
  <div>
    <SEOMeta
      title="Magento, React, Angular & UI/UX Development Services"
      description="Full-stack eCommerce & web development services: Magento 2, Adobe Commerce, React, Angular, UI/UX Design, Java, Python. Expert team in Ahmedabad, India serving global clients."
      keywords="Magento 2 development services, Adobe Commerce developer, React development services India, Angular development, UI UX design Ahmedabad, Java development India, Python AI development"
      canonical="/services"
    />
    {/* ── HERO ─────────────────────────────────────────────────── */}
    <section className="page-hero">
      <div className="container page-hero-inner">
        <motion.div
          initial="hidden" animate="show" variants={stagger}
          className="text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">What We Do</motion.span>
          <motion.h1 variants={fadeUp}>
            Expert <span className="gradient-text">Development Services</span>{' '}
            for eCommerce
          </motion.h1>
          <motion.p variants={fadeUp} style={{ maxWidth: 580, margin: '16px auto 0', fontSize: '1.05rem' }}>
            From Magento 2 builds to full-stack web apps — Brain Logic delivers
            solutions that scale your business and convert your visitors.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* ── SERVICES LIST ────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="container">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              variants={fadeUp}
              style={{
                background: svc.featured ? svc.colorBg : 'var(--bg-card)',
                border: `1px solid ${svc.featured ? svc.color + '33' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '22px',
                padding: svc.featured ? '44px' : '32px',
                transition: 'all 0.35s',
                display: 'grid',
                gridTemplateColumns: svc.featured ? '1fr 1fr' : '1fr auto',
                gap: '32px',
                alignItems: svc.featured ? 'start' : 'center',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div style={{
                    width: 52, height: 52, background: svc.colorBg,
                    borderRadius: '14px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0,
                  }}>
                    {svc.icon}
                  </div>
                  <span className={`chip ${svc.chipClass}`}>{svc.chip}</span>
                </div>
                <h3 style={{ marginBottom: '12px' }}>{svc.title}</h3>
                <p style={{ fontSize: '0.93rem', marginBottom: '20px' }}>{svc.desc}</p>
                {svc.featured && (
                  <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
                    {svc.features.map(f => (
                      <li key={f} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '8px',
                        fontSize: '0.875rem', color: 'var(--text-secondary)', listStyle: 'none',
                      }}>
                        <span style={{ color: 'var(--orange)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                <Link to={svc.href} className="btn-primary" style={{ display: 'inline-flex' }}>
                  Learn More →
                </Link>
              </div>

              {svc.featured ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { num: '100+', label: 'Magento Projects' },
                    { num: '5+',   label: 'Years Experience' },
                    { num: '50+',  label: 'Global Clients' },
                    { num: '24/7', label: 'Support' },
                  ].map(m => (
                    <div key={m.label} style={{
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '14px', padding: '18px 20px',
                    }}>
                      <div style={{
                        fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem',
                        fontWeight: 800, color: 'var(--orange)', lineHeight: 1,
                      }}>{m.num}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4 }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {svc.features.slice(0, 4).map(f => (
                    <div key={f} style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      fontSize: '0.83rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap',
                    }}>
                      <span style={{ color: 'var(--orange)', fontWeight: 700 }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── PROCESS ──────────────────────────────────────────────── */}
    <section className="section-pad" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="container">
        <motion.div
          className="text-center"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          <motion.span variants={fadeUp} className="eyebrow">How We Work</motion.span>
          <motion.h2 variants={fadeUp}>Our Development Process</motion.h2>
        </motion.div>
        <motion.div
          className="process-steps"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          {processSteps.map(s => (
            <motion.div key={s.num} className="process-step" variants={fadeUp}>
              <div className="process-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
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
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Start Your Project</span>
          <h2>Get a Free <span className="gradient-text">Project Estimate</span></h2>
          <p>
            Tell us about your project — we'll come back within 24 hours with a detailed
            proposal, timeline, and transparent pricing.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Request a Quote →</Link>
            <a href="https://wa.me/917575011974" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Services;
