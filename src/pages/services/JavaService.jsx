import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const features = [
  { icon: '☁️', title: 'Microservices & Spring Boot', desc: 'Domain-driven microservices architecture with Spring Boot 3, service mesh, and Kubernetes orchestration.' },
  { icon: '📨', title: 'Event-Driven Systems', desc: 'Kafka and RabbitMQ event streaming for logistics, fintech, and supply-chain platforms handling 10,000+ events/sec.' },
  { icon: '🔐', title: 'Enterprise Security', desc: 'Spring Security with OAuth2, JWT, RBAC, and OWASP-compliant API security for regulated industries.' },
  { icon: '🛢️', title: 'Database & Caching', desc: 'Hibernate ORM, PostgreSQL, MySQL optimisation, and Redis caching layers that cut query times by 10×.' },
  { icon: '🔗', title: 'REST & GraphQL APIs', desc: 'Versioned REST APIs and GraphQL endpoints with OpenAPI documentation, rate limiting, and circuit breakers.' },
  { icon: '☕', title: 'Java Modernisation', desc: 'Legacy Java EE / JSP / Struts modernisation to Spring Boot with full feature parity and zero downtime migration.' },
];

const faqs = [
  {
    q: 'Java vs Node.js for our backend — what do you recommend?',
    a: 'Java / Spring Boot is the better choice for complex business logic, strict type safety, and teams that will grow. Node.js wins for I/O-heavy real-time apps (chat, notifications) where raw throughput matters more than structure.',
  },
  {
    q: 'Can you handle high-throughput systems?',
    a: 'Yes. We have built logistics ERPs processing 10,000+ daily shipments with 99.98% uptime over 18 months. We use Kafka for event streaming, Redis for caching, and horizontal scaling via Kubernetes.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Yes. We offer tiered SLA support plans (business hours, 24/7) with guaranteed response times, monthly performance reviews, and proactive dependency upgrade cycles.',
  },
];

const JavaService = () => (
  <div>
    {/* ── HERO ── */}
    <section className="service-detail-hero">
      <div className="container service-detail-inner">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.span variants={fadeUp} className="eyebrow">Java / Spring Boot Development</motion.span>
          <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', marginBottom: 20 }}>
            ☕ Java &amp; Spring Boot <span className="gradient-text">Backend Development</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ maxWidth: 600, color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 32 }}>
            Enterprise-grade Java backends — microservices, event-driven systems, and REST APIs
            that power logistics, fintech, and manufacturing platforms at scale with 99.9%+ uptime.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Get a Free Quote →</Link>
            <Link to="/portfolio" className="btn-outline">View Java Projects</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ── STATS ── */}
    <div className="stats-section">
      <div className="container">
        <motion.div className="stats-grid" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {[
            { num: '99.98%', label: 'Uptime Achieved' },
            { num: '10K+', label: 'Events / Day Handled' },
            { num: '10×', label: 'Faster with Redis Cache' },
            { num: 'Java 21', label: 'LTS Version Used' },
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
          <motion.h2 variants={fadeUp}>Java Development Services</motion.h2>
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
          <motion.h2 variants={fadeUp}>Java Ecosystem We Master</motion.h2>
        </motion.div>
        <motion.div className="tech-pills" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {['Java 21', 'Spring Boot 3', 'Spring Security', 'Spring Cloud', 'Kafka', 'RabbitMQ', 'Hibernate / JPA', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Kubernetes', 'Maven / Gradle', 'JUnit 5', 'Mockito'].map(t => (
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
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Start Your Java Project</span>
          <h2>Ready to Build a <span className="gradient-text">Rock-Solid Java Backend</span>?</h2>
          <p>Let's architect a high-performance Java system that scales with your business and stays reliable under load.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Get Free Consultation →</Link>
            <a href="https://wa.me/917575011974" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">💬 WhatsApp Us</a>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default JavaService;
