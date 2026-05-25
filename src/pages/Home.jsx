import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

/* ─── Animated Counter ────────────────────────────────────────── */
const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const end = parseInt(target, 10);
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, end);
      setCount(current);
      if (current >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── Marquee data ────────────────────────────────────────────── */
const techItems = [
  'Magento 2', 'Adobe Commerce', 'React.js', 'Angular', 'Node.js',
  'MySQL', 'AWS', 'PHP', 'TypeScript', 'GraphQL',
  'Elasticsearch', 'Redis', 'Docker', 'Tailwind CSS', 'Figma',
  'PWA', 'REST API', 'Shopify', 'WooCommerce', 'Stripe',
];

/* ─── Services data ───────────────────────────────────────────── */
const otherServices = [
  {
    icon: '⚛️',
    color: 'cyan',
    title: 'ReactJS Development',
    desc: 'Fast, interactive UIs with React 18+, hooks, and modern state management.',
    href: '/services/react',
  },
  {
    icon: '⚡',
    color: 'purple',
    title: 'Angular Development',
    desc: 'Enterprise-grade SPAs with Angular 17+, TypeScript, and RxJS.',
    href: '/services/angular',
  },
  {
    icon: '🎨',
    color: 'orange',
    title: 'UI/UX Design',
    desc: 'Pixel-perfect, conversion-focused designs crafted in Figma.',
    href: '/services/uiux',
  },
  {
    icon: '☕',
    color: 'green',
    title: 'Java Development',
    desc: 'Robust backend systems with Spring Boot and microservices.',
    href: '/services/java',
  },
  {
    icon: '🐍',
    color: 'cyan',
    title: 'Python Development',
    desc: 'AI/ML pipelines, automation, and Django/FastAPI backends.',
    href: '/services/python',
  },
];

/* ─── Why Choose Us ───────────────────────────────────────────── */
const reasons = [
  { icon: '🏆', title: 'Magento Experts',       desc: '5+ years of dedicated Magento 2 & Adobe Commerce experience.' },
  { icon: '🌍', title: 'Global Clients',         desc: 'Serving clients across USA, UK, Australia, Europe, and Middle East.' },
  { icon: '⚡', title: 'On-Time Delivery',       desc: 'Agile sprints ensure your project ships on schedule, every time.' },
  { icon: '💰', title: 'Competitive Pricing',    desc: 'Premium quality at India-competitive pricing — best of both worlds.' },
  { icon: '🔒', title: 'Secure & Scalable',      desc: 'PCI-DSS compliant, performance-tuned stores that grow with you.' },
  { icon: '🛠️', title: '24/7 Support',           desc: 'Dedicated post-launch maintenance and round-the-clock assistance.' },
];

/* ─── Process ─────────────────────────────────────────────────── */
const steps = [
  { num: '01', title: 'Discovery',    desc: 'We study your business goals, audience, and competitors.' },
  { num: '02', title: 'Planning',     desc: 'Detailed roadmap with milestones, stack selection, and estimates.' },
  { num: '03', title: 'Design',       desc: 'Wireframes, prototypes, and pixel-perfect UI handoff.' },
  { num: '04', title: 'Development',  desc: 'Agile sprints with daily updates and code reviews.' },
  { num: '05', title: 'Launch',       desc: 'Rigorous QA, performance audit, then smooth deployment.' },
];

/* ─── Testimonials ────────────────────────────────────────────── */
const testimonials = [
  {
    stars: '★★★★★',
    quote: 'Brain Logic transformed our Magento store completely. Revenue jumped 40% in 3 months after launch. Exceptional team!',
    name: 'James Mitchell',
    role: 'CEO, RetailTech USA',
    avatar: 'JM',
  },
  {
    stars: '★★★★★',
    quote: 'Outstanding Magento 2 migration from M1. Zero downtime, faster load times, and the checkout conversion rate tripled.',
    name: 'Sarah O\'Brien',
    role: 'eCommerce Director, FashionHub UK',
    avatar: 'SO',
  },
  {
    stars: '★★★★★',
    quote: 'Best offshore Magento team we\'ve worked with. Communication is top-notch and the code quality is enterprise-level.',
    name: 'Arjun Mehta',
    role: 'CTO, NexaCommerce India',
    avatar: 'AM',
  },
];

/* ─── fade-up animation variant ──────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

/* ═══════════════════════════════════════════════════════════════ */
const Home = () => (
  <div>

    {/* ── HERO ─────────────────────────────────────────────────── */}
    <section className="hero-section">
      <div className="hero-bg-gradient" />
      <div className="hero-grid-overlay" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="container">
        <div className="hero-inner">
          {/* Text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="hero-badge">
              <span className="hero-badge-dot" />
              🏆 Magento Certified Experts · Ahmedabad, India
            </motion.div>

            <motion.h1 variants={fadeUp} className="hero-h1">
              Build Powerful{' '}
              <span className="gradient-text">eCommerce&nbsp;Stores</span>{' '}
              That Convert
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-desc">
              We are Brain Logic Info Solutions — Ahmedabad's leading Magento & eCommerce
              development agency. From custom Magento 2 builds to Adobe Commerce
              Enterprise, we craft stores that scale globally and sell relentlessly.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-actions">
              <Link to="/contact" className="btn-primary">
                Start Your Project →
              </Link>
              <Link to="/services/magento" className="btn-outline">
                Our Magento Services
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-stats-row">
              {[
                { num: 100, suffix: '+', label: 'Projects Delivered' },
                { num: 50,  suffix: '+', label: 'Happy Clients' },
                { num: 5,   suffix: '+', label: 'Years Experience' },
                { num: 24,  suffix: '/7', label: 'Support' },
              ].map(s => (
                <div key={s.label} className="hero-stat">
                  <span className="hero-stat-num">
                    <Counter target={s.num} suffix={s.suffix} />
                  </span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating visual */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero-float-grid">
              <div className="hf-card hf-card-1">
                <span className="hf-icon">🛒</span>
                <div className="hf-title">Magento 2</div>
                <div className="hf-sub">Adobe Commerce Expert</div>
              </div>
              <div className="hf-card hf-card-2">
                <span className="hf-num">+40%</span>
                <div className="hf-title">Avg. Revenue Lift</div>
                <div className="hf-sub">After store migration</div>
              </div>
              <div className="hf-card hf-card-3">
                <span className="hf-icon">⚡</span>
                <div className="hf-title">Performance First</div>
                <div className="hf-sub">Core Web Vitals optimized</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── MARQUEE ───────────────────────────────────────────────── */}
    <div className="marquee-section">
      <div className="marquee-track">
        {[...techItems, ...techItems].map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* ── SERVICES ─────────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="container">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          className="text-center"
          style={{ marginBottom: '52px' }}
        >
          <motion.span variants={fadeUp} className="eyebrow">Our Expertise</motion.span>
          <motion.h2 variants={fadeUp}>
            eCommerce & Web <span className="gradient-text">Development Services</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ maxWidth: 560, margin: '12px auto 0' }}>
            From Magento 2 custom development to full-stack web apps — we cover the
            entire digital commerce spectrum.
          </motion.p>
        </motion.div>

        {/* Magento hero card */}
        <motion.div
          className="services-hero-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="shc-left">
            <div className="shc-icon">🛒</div>
            <div>
              <span className="chip chip-orange" style={{ marginBottom: 12 }}>Primary Service</span>
              <h3 style={{ marginBottom: 10 }}>Magento 2 & Adobe Commerce Development</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.75 }}>
                We are Ahmedabad's most trusted Magento development partner. Whether you
                need a greenfield Magento 2 build, a M1→M2 migration, custom extension
                development, or performance tuning — our certified team delivers it
                all with production-grade quality.
              </p>
            </div>
            <ul className="shc-features">
              {['Custom Magento 2 / Adobe Commerce Development',
                'Magento Theme & UI Design',
                'Custom Module & Extension Development',
                'Magento 1 → Magento 2 Migration',
                'Performance Optimization & Speed Audit',
                'Payment Gateway & Third-Party Integrations',
                'PWA Storefront (Venia / Custom)',
                'Magento SEO & Conversion Rate Optimization',
              ].map(f => <li key={f}>{f}</li>)}
            </ul>
            <Link to="/services/magento" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
              Explore Magento Services →
            </Link>
          </div>
          <div className="shc-right">
            {[
              { num: '100+', label: 'Magento Projects' },
              { num: '50+',  label: 'Global Clients' },
              { num: '5★',   label: 'Client Rating' },
              { num: '48h',  label: 'Free Audit Turnaround' },
            ].map(m => (
              <div key={m.label} className="shc-metric">
                <div className="shc-metric-num">{m.num}</div>
                <div className="shc-metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Other services */}
        <motion.div
          className="services-grid-3"
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={stagger}
        >
          {otherServices.map(svc => (
            <motion.div key={svc.title} className="svc-card" variants={fadeUp}>
              <div className={`svc-card-icon ${svc.color}`}>{svc.icon}</div>
              <h4>{svc.title}</h4>
              <p>{svc.desc}</p>
              <Link to={svc.href} className="svc-card-link">
                Learn More <span>→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── STATS ────────────────────────────────────────────────── */}
    <div className="stats-section">
      <div className="container">
        <motion.div
          className="stats-grid"
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { num: 100, suffix: '+', label: 'Projects Delivered' },
            { num: 50,  suffix: '+', label: 'Happy Clients' },
            { num: 5,   suffix: '+', label: 'Years of Expertise' },
            { num: 98,  suffix: '%', label: 'Client Retention Rate' },
          ].map(s => (
            <motion.div key={s.label} className="stat-box" variants={fadeUp}>
              <span className="stat-num">
                <Counter target={s.num} suffix={s.suffix} />
              </span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="container">
        <div className="why-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Why Brain Logic</span>
            <h2>
              The Preferred Magento Partner for{' '}
              <span className="gradient-text">Global Brands</span>
            </h2>
            <p style={{ marginTop: 12 }}>
              Based in Ahmedabad, India — we combine world-class Magento expertise with
              cost-efficient delivery, making us the go-to choice for startups and
              enterprises worldwide.
            </p>
            <div className="why-features">
              {reasons.map(r => (
                <div key={r.title} className="why-feature">
                  <div className="why-feature-icon">{r.icon}</div>
                  <div className="why-feature-text">
                    <h4>{r.title}</h4>
                    <p>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            className="why-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="why-card-big">
              <h3>India-Based, <span className="gradient-text">Globally Trusted</span></h3>
              <p style={{ fontSize: '0.9rem', marginTop: 8 }}>
                Ahmedabad's time zone gives us an 8–12 hour overlap with US/UK clients,
                ensuring daily collaboration without the premium agency price tag.
              </p>
            </div>
            <div className="why-cards-row">
              {[
                { num: '40%', label: 'Avg. Revenue Increase' },
                { num: '3x',  label: 'Faster Load Times' },
                { num: '99%', label: 'Uptime Guarantee' },
                { num: '48h', label: 'Free Audit' },
              ].map(c => (
                <div key={c.label} className="why-mini-card">
                  <span className="num">{c.num}</span>
                  <p>{c.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
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
          <motion.h2 variants={fadeUp}>Our Proven Development Process</motion.h2>
          <motion.p variants={fadeUp} style={{ maxWidth: 520, margin: '12px auto 0' }}>
            A transparent, agile workflow that keeps you informed and in control at every stage.
          </motion.p>
        </motion.div>

        <motion.div
          className="process-steps"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          {steps.map(s => (
            <motion.div key={s.num} className="process-step" variants={fadeUp}>
              <div className="process-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="container">
        <motion.div
          className="text-center"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          <motion.span variants={fadeUp} className="eyebrow">Client Testimonials</motion.span>
          <motion.h2 variants={fadeUp}>
            Trusted by eCommerce <span className="gradient-text">Leaders Worldwide</span>
          </motion.h2>
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
                <div className="author-avatar">{t.avatar}</div>
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
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Ready to Scale?</span>
          <h2>
            Let's Build Your Dream <span className="gradient-text">eCommerce Store</span>
          </h2>
          <p>
            Get a free project audit and consultation from our Magento experts.
            No commitment, just real actionable insights for your business.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">
              Get Free Consultation →
            </Link>
            <a
              href="https://wa.me/917575011974?text=Hi%2C%20I%20need%20Magento%20development%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </div>

  </div>
);

export default Home;
