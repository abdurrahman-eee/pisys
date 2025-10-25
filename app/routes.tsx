// app/welcome/welcome.tsx
// No Remix import here!

export default function Welcome() {
  return (
    <main className="hero">
      <header className="hero__top">
        <picture>
          <img src="/logo-light.svg" alt="Pi-Sys" className="hero__logo" />
        </picture>

        <nav className="hero__nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero__content">
        <h1>Pi-Sys</h1>
        <p className="tagline">Innovative IT &amp; Software Solutions.</p>

        <div className="cta">
          <a href="#contact" className="btn btn--primary">Get a Quote</a>
          <a href="#services" className="btn btn--ghost">View Services</a>
        </div>
      </section>

      <section id="services" className="features">
        <div className="feature">
          <h3>E-commerce & ERP</h3>
          <p>Shopify / Laravel systems tailored to your workflow.</p>
        </div>
        <div className="feature">
          <h3>Edge-Hosted</h3>
          <p>Cloudflare Workers + Pages for global low-latency apps.</p>
        </div>
        <div className="feature">
          <h3>Secure</h3>
          <p>Automatic SSL, WAF and best practices by default.</p>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About</h2>
        <p>
          We design and build reliable business software: websites, dashboards,
          and internal tools with React/React Router and Cloudflare.
        </p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:info@pi-sys.com">info@pi-sys.com</a></p>
        <p>Phone: +81-XX-XXXX-XXXX</p>
      </section>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Pi-Sys. All rights reserved.</small>
      </footer>
    </main>
  );
}
