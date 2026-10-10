import { useEffect, useId, useState } from "react";
import { CONTACT_EMAIL, PRODUCTS, type Product } from "./config";

const YEAR = new Date().getFullYear();
const MAILTO = `mailto:${CONTACT_EMAIL}`;

const NAV_ITEMS = [
  { href: "#top", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#approach", label: "Our Approach" },
  { href: "#contact", label: "Contact" },
];

/* ---------- Brand ---------- */

function Wordmark({ id }: { id: string }) {
  return (
    <a href="#top" className="wordmark" aria-label="Nidspace home">
      <svg className="wordmark-mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="#0b1330" />
        <path d="M8 24V8h3.4L20 19.2V8h3.6v16H20L11.6 14.8V24z" fill={`url(#${id})`} />
      </svg>
      <span className="wordmark-text">
        Nid<span>space</span>
      </span>
    </a>
  );
}

/* ---------- Navigation ---------- */

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const wmId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Wordmark id={wmId} />
        <nav aria-label="Primary" className={`site-nav ${open ? "is-open" : ""}`} id={menuId}>
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary btn-sm nav-cta" href="#products" onClick={() => setOpen(false)}>
            Explore Products
          </a>
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="menu-bars" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

/* ---------- Product visuals ---------- */

function ProductIcon({ id }: { id: Product["id"] }) {
  const common = { viewBox: "0 0 48 48", "aria-hidden": true as const, focusable: false as const };
  if (id === "emi") {
    return (
      <svg {...common} className="product-icon">
        <rect x="6" y="6" width="36" height="36" rx="8" className="icon-bg" />
        <rect x="13" y="13" width="22" height="8" rx="2" className="icon-screen" />
        <g className="icon-keys">
          <rect x="13" y="26" width="5" height="4" rx="1" />
          <rect x="21.5" y="26" width="5" height="4" rx="1" />
          <rect x="30" y="26" width="5" height="4" rx="1" />
          <rect x="13" y="33" width="5" height="4" rx="1" />
          <rect x="21.5" y="33" width="5" height="4" rx="1" />
          <rect x="30" y="33" width="5" height="4" rx="1" />
        </g>
      </svg>
    );
  }
  if (id === "tamil-cinema") {
    return (
      <svg {...common} className="product-icon">
        <rect x="6" y="6" width="36" height="36" rx="8" className="icon-bg" />
        <rect x="13" y="12" width="22" height="18" rx="3" className="icon-screen" />
        <path d="M20 19.5v5l5-2.5z" className="icon-play" />
        <rect x="13" y="33" width="22" height="3" rx="1.5" className="icon-keys" />
      </svg>
    );
  }
  return (
    <svg {...common} className="product-icon">
      <rect x="6" y="6" width="36" height="36" rx="8" className="icon-bg" />
      <circle cx="24" cy="16" r="4" className="icon-screen" />
      <circle cx="16" cy="30" r="4" className="icon-keys" />
      <circle cx="32" cy="30" r="4" className="icon-keys" />
      <path d="M24 20v6M24 26l-8 4M24 26l8 4" className="icon-line" />
    </svg>
  );
}

/** Original CSS mockup that previews the portfolio in the hero. */
function HeroPreview() {
  return (
    <div className="preview" aria-hidden="true">
      <div className="preview-window">
        <div className="preview-bar">
          <span /> <span /> <span />
        </div>
        <div className="preview-body">
          <div className="preview-tile tile-emi">
            <span className="tile-label">EMI</span>
            <div className="tile-bars">
              <i style={{ height: "38%" }} />
              <i style={{ height: "62%" }} />
              <i style={{ height: "48%" }} />
              <i style={{ height: "84%" }} />
            </div>
          </div>
          <div className="preview-tile tile-cinema">
            <span className="tile-label">Cinema</span>
            <div className="tile-poster">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="preview-tile tile-heritage">
            <span className="tile-label">Heritage</span>
            <div className="tile-tree">
              <span className="node n1" />
              <span className="node n2" />
              <span className="node n3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const isLive = product.status === "live";
  return (
    <article className={`card card-${product.id}`}>
      <div className="card-head">
        <ProductIcon id={product.id} />
        <span className={`status status-${product.status}`}>
          {isLive ? "Live" : "In Development"}
        </span>
      </div>
      <h3 className="card-title">{product.name}</h3>
      <p className="card-text">{product.description}</p>
      <ul className="feature-list" aria-label={`${product.name} features`}>
        {product.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div className="card-footer">
        {isLive && product.url ? (
          <a className="btn btn-outline" href={product.url}>
            {product.ctaLabel}
            <span aria-hidden="true"> →</span>
          </a>
        ) : (
          <span className="card-note">In development. No public release yet.</span>
        )}
      </div>
    </article>
  );
}

/* ---------- Page ---------- */

const PRINCIPLES = [
  {
    title: "Practical by Design",
    text: "Every feature starts from a task someone is trying to complete, not from a list of possibilities.",
  },
  {
    title: "Built Around Real Needs",
    text: "We prioritise problems that people face in everyday money, media and family life.",
  },
  {
    title: "Continuously Improving",
    text: "Products are refined in small, deliberate steps based on how they are actually used.",
  },
];

const STAGES = [
  {
    no: "01",
    title: "Understand",
    text: "Identify real user needs and practical problems worth solving.",
  },
  {
    no: "02",
    title: "Design",
    text: "Create clear, accessible experiences that make software easier to use.",
  },
  {
    no: "03",
    title: "Build",
    text: "Develop and test useful digital products with maintainability in mind.",
  },
  {
    no: "04",
    title: "Improve",
    text: "Refine products through iteration, testing and user feedback.",
  },
];

export default function App() {
  const footerWordmarkId = useId();
  return (
    <div id="top" className="page">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />

      <main id="main">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Independent software product initiative</p>
              <h1 id="hero-title" className="hero-title">
                Practical Software.
                <br />
                <span className="gradient-text">Designed for Real Life.</span>
              </h1>
              <p className="hero-lead">
                Nidspace creates useful digital products that help people make informed decisions,
                discover information and preserve what matters.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#products">Explore Our Products</a>
                <a className="btn btn-ghost" href="#contact">Get in Touch</a>
              </div>
            </div>
            <HeroPreview />
          </div>
        </section>

        {/* Products */}
        <section id="products" className="section" aria-labelledby="products-title">
          <div className="container">
            <header className="section-head">
              <p className="eyebrow">Products</p>
              <h2 id="products-title" className="section-title">
                Digital Products Built Around Real Needs
              </h2>
              <p className="section-lead">
                Explore our live products and see what we are building next.
              </p>
            </header>
            <div className="card-grid">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section section-alt" aria-labelledby="about-title">
          <div className="container">
            <header className="section-head">
              <p className="eyebrow">About</p>
              <h2 id="about-title" className="section-title">Technology with a Purpose</h2>
              <p className="section-lead">
                Nidspace is an independent software product initiative focused on developing practical
                digital tools for individuals, families and small businesses. Our approach combines
                thoughtful design, iterative development and responsible use of modern technology to
                create accessible, useful software experiences.
              </p>
            </header>
            <ul className="principles">
              {PRINCIPLES.map((p, i) => (
                <li key={p.title} className="principle">
                  <span className="principle-no" aria-hidden="true">{i + 1}</span>
                  <h3 className="principle-title">{p.title}</h3>
                  <p className="principle-text">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="section" aria-labelledby="approach-title">
          <div className="container">
            <header className="section-head">
              <p className="eyebrow">Our Approach</p>
              <h2 id="approach-title" className="section-title">
                From Useful Ideas to Practical Software
              </h2>
              <p className="section-lead">
                We focus on clear experiences, practical functionality and continuous improvement.
              </p>
            </header>
            <ol className="stages">
              {STAGES.map((s) => (
                <li key={s.no} className="stage">
                  <span className="stage-no">{s.no}</span>
                  <h3 className="stage-title">{s.title}</h3>
                  <p className="stage-text">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section section-alt" aria-labelledby="contact-title">
          <div className="container contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title" className="section-title">Have a Question or Product Idea?</h2>
              <p className="section-lead">
                Get in touch to share feedback, ask a question or discuss a potential collaboration.
              </p>
            </div>
            <div className="contact-action">
              <a className="btn btn-primary" href={MAILTO}>
                Email {CONTACT_EMAIL}
              </a>
              <p className="contact-fallback">
                Or write to <a href={MAILTO}>{CONTACT_EMAIL}</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Wordmark id={footerWordmarkId} />
            <p className="footer-desc">
              Nidspace builds practical digital tools for individuals, families and small businesses.
            </p>
          </div>
          <nav aria-label="Quick links">
            <p className="footer-heading">Quick links</p>
            <ul className="footer-list">
              <li><a href="#top">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#approach">Our Approach</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <nav aria-label="Products">
            <p className="footer-heading">Products</p>
            <ul className="footer-list">
              {PRODUCTS.filter((p) => p.status === "live" && p.url).map((p) => (
                <li key={p.id}>
                  <a href={p.url}>{p.name.replace("Nidspace ", "")}</a>
                </li>
              ))}
              <li><span className="footer-muted">Family Heritage (in development)</span></li>
            </ul>
          </nav>
          <div>
            <p className="footer-heading">Contact</p>
            <a className="footer-email" href={MAILTO}>{CONTACT_EMAIL}</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {YEAR} Nidspace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
