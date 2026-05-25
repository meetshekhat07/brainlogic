import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

const benefits = [
  { icon: '💰', title: 'Competitive Salary',    desc: 'Market-leading pay with performance bonuses and annual increments.' },
  { icon: '📚', title: 'Learning Budget',       desc: 'Annual budget for courses, certifications, and conference attendance.' },
  { icon: '⏰', title: 'Flexible Hours',        desc: 'Flexible work schedule — results matter more than clock-in time.' },
  { icon: '🏠', title: 'Hybrid Work',           desc: 'Work from our Ahmedabad office or remotely — whichever works best.' },
  { icon: '🚀', title: 'Fast Career Growth',    desc: 'Clear growth paths with mentorship from senior developers.' },
  { icon: '🎉', title: 'Great Culture',         desc: 'Team lunches, hackathons, celebratory outings, and zero politics.' },
];

const openings = [
  {
    title: 'Senior Magento 2 Developer',
    dept: 'Engineering',
    type: 'Full-time',
    loc: 'Ahmedabad / Hybrid',
    exp: '3+ Years',
    desc: 'Own end-to-end Magento 2 development — custom modules, Hyvä themes, GraphQL APIs, and performance tuning for global clients.',
    reqs: ['Magento 2 / Adobe Commerce', 'PHP 8 / OOP / Design Patterns', 'GraphQL & REST APIs', 'MySQL & Elasticsearch', 'Git & Agile workflow'],
    urgent: true,
  },
  {
    title: 'React Frontend Developer',
    dept: 'Engineering',
    type: 'Full-time',
    loc: 'Ahmedabad / Remote',
    exp: '2+ Years',
    desc: 'Build high-performance React apps and headless Magento frontends with TypeScript, modern hooks, and Next.js.',
    reqs: ['React 18 / Next.js', 'TypeScript', 'REST / GraphQL', 'Tailwind CSS / SASS', 'Unit testing (Jest)'],
    urgent: false,
  },
  {
    title: 'Angular Developer',
    dept: 'Engineering',
    type: 'Full-time',
    loc: 'Ahmedabad / Hybrid',
    exp: '2+ Years',
    desc: 'Build enterprise Angular 17+ applications and B2B portals for international clients, with a strong TypeScript and RxJS foundation.',
    reqs: ['Angular 17+ / TypeScript', 'RxJS & NgRx', 'Angular Material', 'REST API integration', 'Jasmine / Cypress'],
    urgent: false,
  },
  {
    title: 'UI/UX Designer',
    dept: 'Design',
    type: 'Full-time',
    loc: 'Ahmedabad',
    exp: '2+ Years',
    desc: 'Design conversion-focused eCommerce experiences, design systems, and interactive prototypes for global clients.',
    reqs: ['Figma (Advanced)', 'UX Research & Testing', 'eCommerce UX patterns', 'Design tokens & systems', 'Basic HTML/CSS knowledge'],
    urgent: false,
  },
];

const hiringSteps = [
  { num: '01', title: 'Apply Online',      desc: 'Submit your resume and portfolio through the form below.' },
  { num: '02', title: 'HR Screening',      desc: '30-min call to discuss your background and role expectations.' },
  { num: '03', title: 'Tech Assessment',   desc: 'A practical, take-home task relevant to the role (2–4 hours).' },
  { num: '04', title: 'Final Interview',   desc: 'Technical deep-dive with the engineering lead and a culture-fit chat.' },
  { num: '05', title: 'Offer & Onboard',   desc: 'Offer letter within 24 hours. Onboarding support on Day 1.' },
];

const Careers = () => {
  const [applyFor, setApplyFor] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleApply = (jobTitle) => {
    setApplyFor(jobTitle);
    setForm(f => ({ ...f, role: jobTitle }));
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setStatus({ type: 'success', msg: '✅ Application received! We\'ll review it and get back to you within 3 business days.' });
    setForm({ name: '', email: '', phone: '', role: '', message: '' });
    setLoading(false);
  };

  return (
    <div>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-center">
            <motion.span variants={fadeUp} className="eyebrow">Join Our Team</motion.span>
            <motion.h1 variants={fadeUp}>
              Build Your Career at <span className="gradient-text">Brain Logic</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ maxWidth: 560, margin: '16px auto 0', fontSize: '1.05rem' }}>
              Work on real global projects, grow fast, and be part of Ahmedabad's leading
              Magento & eCommerce development team.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
              <a href="#openings" className="btn-primary">View Open Roles →</a>
              <a href="mailto:careers@brainlogicinfosolutions.com" className="btn-outline">Email Your CV</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY JOIN US ────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <motion.div
            className="text-center"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            style={{ marginBottom: 40 }}
          >
            <motion.span variants={fadeUp} className="eyebrow">Life at Brain Logic</motion.span>
            <motion.h2 variants={fadeUp}>
              Why Developers <span className="gradient-text">Love Working Here</span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{ maxWidth: 520, margin: '12px auto 0' }}>
              We believe great code comes from happy, well-supported developers. Here's what
              makes Brain Logic different.
            </motion.p>
          </motion.div>

          <motion.div
            className="benefits-grid-3"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {benefits.map(b => (
              <motion.div key={b.title} className="benefit-card" variants={fadeUp}>
                <span className="benefit-icon">{b.icon}</span>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CULTURE STRIP ──────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(249,115,22,0.06), rgba(234,88,12,0.03))',
        border: '1px solid rgba(249,115,22,0.12)',
        borderLeft: 'none', borderRight: 'none',
        padding: '48px 0',
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">Our Culture</span>
              <h2 style={{ marginBottom: 16 }}>
                A Team That <span className="gradient-text">Ships, Learns & Grows</span> Together
              </h2>
              <p style={{ marginBottom: 16 }}>
                We work on high-impact projects for clients in the USA, UK, Australia, and beyond.
                Every developer here has direct ownership of their work — no bureaucracy, no
                micromanagement.
              </p>
              <p>
                We review code as a team, share knowledge weekly, and celebrate every launch.
                If you want to level up fast, Brain Logic is the place.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
            >
              {[
                { num: '15+', label: 'Team Members' },
                { num: '5+', label: 'Years in Business' },
                { num: '100+', label: 'Projects Shipped' },
                { num: '0', label: 'Months Avg. Notice (they stay!)' },
              ].map(c => (
                <div key={c.label} style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 14, padding: '20px', textAlign: 'center',
                }}>
                  <span style={{
                    fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.8rem',
                    fontWeight: 800, color: 'var(--orange)', display: 'block', marginBottom: 6,
                  }}>{c.num}</span>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{c.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── JOB OPENINGS ───────────────────────────────────────── */}
      <section className="section-pad" id="openings">
        <div className="container">
          <motion.div
            className="text-center"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            style={{ marginBottom: 40 }}
          >
            <motion.span variants={fadeUp} className="eyebrow">Hiring Now</motion.span>
            <motion.h2 variants={fadeUp}>Current Openings</motion.h2>
            <motion.p variants={fadeUp} style={{ maxWidth: 480, margin: '12px auto 0' }}>
              All positions are based in Ahmedabad with hybrid/remote options.
            </motion.p>
          </motion.div>

          <motion.div
            className="job-listing"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {openings.map(job => (
              <motion.div key={job.title} className="job-card" variants={fadeUp}>
                <div className="job-card-top">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <h4>{job.title}</h4>
                      {job.urgent && (
                        <span style={{
                          padding: '3px 10px', background: 'rgba(249,115,22,0.15)',
                          border: '1px solid rgba(249,115,22,0.3)', borderRadius: 50,
                          fontSize: '0.68rem', fontWeight: 700, color: 'var(--orange)',
                          textTransform: 'uppercase', letterSpacing: '0.1em',
                        }}>Urgent</span>
                      )}
                    </div>
                    <div className="job-badges">
                      <span className="job-badge dept">🏢 {job.dept}</span>
                      <span className="job-badge type">⏱ {job.type}</span>
                      <span className="job-badge loc">📍 {job.loc}</span>
                      <span className="job-badge exp">🎯 {job.exp}</span>
                    </div>
                  </div>
                  <button
                    className="btn-primary"
                    style={{ flexShrink: 0, padding: '10px 22px', fontSize: '0.875rem' }}
                    onClick={() => handleApply(job.title)}
                  >
                    Apply Now
                  </button>
                </div>
                <p>{job.desc}</p>
                <div className="job-reqs">
                  {job.reqs.map(r => (
                    <span key={r} className="job-req-tag">✓ {r}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HIRING PROCESS ─────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="container">
          <motion.div
            className="text-center"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            <motion.span variants={fadeUp} className="eyebrow">Hiring Process</motion.span>
            <motion.h2 variants={fadeUp}>Simple, Transparent, Fast</motion.h2>
            <motion.p variants={fadeUp} style={{ maxWidth: 480, margin: '12px auto 0' }}>
              From application to offer in under 10 days.
            </motion.p>
          </motion.div>
          <motion.div
            className="process-steps"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {hiringSteps.map(s => (
              <motion.div key={s.num} className="process-step" variants={fadeUp}>
                <div className="process-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── APPLICATION FORM ───────────────────────────────────── */}
      <section className="section-pad" id="apply-form">
        <div className="container" style={{ maxWidth: 720 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form-card"
          >
            <h3>Apply Now</h3>
            <p style={{ marginBottom: 24 }}>
              {applyFor
                ? `You're applying for: ${applyFor}. Fill in your details below.`
                : "Don't see your role? Send us your CV and we'll reach out when we have a match."}
            </p>

            <form onSubmit={onSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input className="form-input" type="text" name="name" value={form.name}
                    onChange={onChange} required placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input className="form-input" type="email" name="email" value={form.email}
                    onChange={onChange} required placeholder="you@email.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp</label>
                  <input className="form-input" type="tel" name="phone" value={form.phone}
                    onChange={onChange} placeholder="+91 98765 43210" />
                </div>
                <div className="form-group">
                  <label className="form-label">Role Applying For *</label>
                  <select className="form-select" name="role" value={form.role}
                    onChange={onChange} required>
                    <option value="">Select a role…</option>
                    {openings.map(j => <option key={j.title} value={j.title}>{j.title}</option>)}
                    <option value="Other / Open Application">Other / Open Application</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label className="form-label">Cover Letter / Why Brain Logic? *</label>
                  <textarea className="form-textarea" name="message" value={form.message}
                    onChange={onChange} required rows={4}
                    placeholder="Tell us about your experience, relevant projects, and why you'd like to join Brain Logic…" />
                </div>
              </div>

              {status && (
                <div className={`form-status ${status.type}`} style={{ marginTop: 16 }}>
                  {status.msg}
                </div>
              )}

              <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                  style={{ flex: 1, justifyContent: 'center', padding: 15, minWidth: 160 }}
                >
                  {loading ? 'Submitting…' : 'Submit Application →'}
                </button>
                <a
                  href="mailto:careers@brainlogicinfosolutions.com?subject=Job Application"
                  className="btn-outline"
                  style={{ flex: 1, justifyContent: 'center', minWidth: 160 }}
                >
                  Email CV Directly
                </a>
              </div>
            </form>
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
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Questions?</span>
            <h2>Not Sure Which Role <span className="gradient-text">Fits You</span>?</h2>
            <p>
              Chat with our HR team on WhatsApp. We'll help you figure out the best fit
              based on your skills and career goals.
            </p>
            <div className="cta-actions">
              <a
                href="https://wa.me/917575011974?text=Hi%2C%20I%27m%20interested%20in%20a%20career%20at%20Brain%20Logic%20Info%20Solutions"
                target="_blank" rel="noopener noreferrer"
                className="cta-whatsapp"
              >
                💬 Chat with HR on WhatsApp
              </a>
              <a href="mailto:careers@brainlogicinfosolutions.com" className="btn-outline">
                Email Us Your CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
