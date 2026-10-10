import { CONTACT_EMAIL, PRODUCTS, type Product } from "./config";

const YEAR = new Date().getFullYear();

function Wordmark() {
  return (
    <a href="#top" className="wordmark" aria-label="Nidspace home">
      <span className="wordmark-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" focusable="false">
          <defs>
            <linearGradient id="wm-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#22d3ee" />
              <stop offset="1" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <path d="M8 24V8h3.4L20 19.2V8h3.6v16H20L11.6 14.8V24z" fill="url(#wm-g)" />
        </svg>
      </span>
      <span className="wordmark-text">Nid<span>space</span></span>
    </a>
  );
}

function ProductCard({ product }: { product: Product }) {
  const isLive = product.status === "live";
  return (
    <article className="card">
      <div className="card-top">
        <span className={`status status-${product.status}`}>
          {isLive ? "Live" : "In Development"}
        </span>
      </div>
      <h3 className="card-title">{product.name}</h3>
      <p className="card-text">{product.description}</p>
      <div className="card-footer">
        {isLive && product.url ? (
          <a className="btn btn-outline" href={product.url}>
            {product.ctaLabel}
            <span aria-hidden="true"> →</span>
          </a>
        ) : (
          <span className="card-note">Details will be announced when available.</span>
        )}
      </div>
    </article>
  );
}

export default function App() {
  const hasContact = CONTACT_EMAIL.trim().length > 0;

  return (
    <div id="top" className="page">
      <a className="skip-link" href="#products">Skip to products</a>

      <header className="site-header">
        <div className="container header-inner">
          <Wordmark />
          <nav aria-label="Primary">
            <ul className="nav-list">
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-inner">
            <p className="eyebrow">Nidspace</p>
            <h1 id="hero-title" className="hero-title">
              Practical Software for a <span className="gradient-text">Better Tomorrow</span>
            </h1>
            <p className="hero-lead">
              Nidspace builds useful digital tools and software experiences for individuals,
              families and small businesses.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#products">Explore Our Products</a>
              {hasContact && (
                <a className="btn btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>Contact Us</a>
              )}
            </div>
          </div>
        </section>

        <section id="products" className="section" aria-labelledby="products-title">
          <div className="container">
            <header className="section-head">
              <p className="eyebrow">Products</p>
              <h2 id="products-title" className="section-title">Our products</h2>
            </header>
            <div className="card-grid">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section section-alt" aria-labelledby="about-title">
          <div className="container about-inner">
            <p className="eyebrow">About</p>
            <h2 id="about-title" className="section-title">Technology with a Purpose</h2>
            <p className="about-text">
              Nidspace is an independent software product initiative focused on creating practical,
              accessible digital tools. We develop and improve products through iterative engineering,
              thoughtful design and responsible use of modern technologies.
            </p>
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title">Get in touch</h2>
            {hasContact ? (
              <p className="contact-text">
                Email us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            ) : (
              <p className="contact-text">
                Contact details will be published here soon.
              </p>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Wordmark />
            <p className="footer-desc">
              Nidspace builds practical digital tools for individuals, families and small businesses.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="footer-heading">Products</p>
            <ul className="footer-list">
              {PRODUCTS.filter((p) => p.status === "live" && p.url).map((p) => (
                <li key={p.id}>
                  <a href={p.url}>{p.name.replace("Nidspace ", "")}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company">
            <p className="footer-heading">Nidspace</p>
            <ul className="footer-list">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="container footer-bottom">
          <p>© {YEAR} Nidspace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
