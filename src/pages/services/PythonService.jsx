import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const features = [
  { icon: '🤖', title: 'AI / ML Solutions', desc: 'Recommendation engines, demand forecasting, fraud detection, and NLP models deployed as production FastAPI microservices.' },
  { icon: '🌐', title: 'Django & FastAPI Backends', desc: 'High-performance REST APIs and admin portals with Django REST Framework or async FastAPI, used by 10,000+ daily users.' },
  { icon: '📊', title: 'Data Analytics & ETL', desc: 'Pandas / PySpark ETL pipelines, automated reporting dashboards, and scheduled data-warehouse jobs on Airflow.' },
  { icon: '🔗', title: 'Magento AI Integration', desc: 'Plug ML models directly into Magento via API — personalised recommendations, dynamic pricing, and smart search.' },
  { icon: '🤖', title: 'Automation & Scripting', desc: 'Web scraping (Scrapy / Playwright), workflow automation, and scheduled background workers that eliminate manual tasks.' },
  { icon: '☁️', title: 'MLOps & Model Deployment', desc: 'End-to-end MLOps pipelines — training, versioning, A/B testing models, and monitoring drift in production on AWS / GCP.' },
];

const faqs = [
  {
    q: 'Can you integrate AI recommendations into our existing Magento store?',
    a: 'Yes. We build a Python ML service that reads your Magento order and product data, trains a collaborative-filtering model, and exposes a FastAPI endpoint. The Magento frontend calls this API to show personalised "You may also like" blocks. This integration typically increases AOV by 20–30%.',
  },
  {
    q: 'Django or FastAPI — which should we use?',
    a: 'Django is better for content-rich apps with admin panels, auth, and ORM needs. FastAPI is our choice for pure API services where async performance and auto-generated OpenAPI docs matter — it handles 3–5× more requests per second than Django for the same hardware.',
  },
  {
    q: 'How do you ensure ML model quality in production?',
    a: 'We implement offline evaluation (precision/recall/AUC), A/B shadow testing before full rollout, real-time monitoring for data drift using Evidently AI, and automated retraining triggers when metrics degrade.',
  },
];

const PythonService = () => (
  <div>
    {/* ── HERO ── */}
    <section className="service-detail-hero">
      <div className="container service-detail-inner">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.span variants={fadeUp} className="eyebrow">Python &amp; AI/ML Development</motion.span>
          <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', marginBottom: 20 }}>
            🐍 Python &amp; <span className="gradient-text">AI/ML Development</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ maxWidth: 600, color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 32 }}>
            ML-powered product recommendations, intelligent automation, and high-performance APIs —
            we build Python solutions that make your data work for you and measurably grow revenue.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Get a Free Quote →</Link>
            <Link to="/portfolio" className="btn-outline">View Python Projects</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ── STATS ── */}
    <div className="stats-section">
      <div className="container">
        <motion.div className="stats-grid" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {[
            { num: '+28%', label: 'AOV with AI Recommendations' },
            { num: '10K+', label: 'Daily API Requests Served' },
            { num: '3–5×', label: 'Faster with FastAPI' },
            { num: 'GPT-4', label: 'LLM Integration Ready' },
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
          <motion.h2 variants={fadeUp}>Python Development Services</motion.h2>
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
          <motion.h2 variants={fadeUp}>Python Ecosystem We Master</motion.h2>
        </motion.div>
        <motion.div className="tech-pills" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {['Python 3.12', 'FastAPI', 'Django', 'Flask', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Apache Airflow', 'PySpark', 'Redis', 'PostgreSQL', 'Docker', 'AWS SageMaker', 'OpenAI API'].map(t => (
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
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Start Your Python / AI Project</span>
          <h2>Ready to Make Your <span className="gradient-text">Data Work for You</span>?</h2>
          <p>Let's discuss how AI/ML and Python automation can unlock new revenue streams for your business.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Get Free Consultation →</Link>
            <a href="https://wa.me/917575011974" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">💬 WhatsApp Us</a>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default PythonService;
