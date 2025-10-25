// app/welcome/welcome.tsx
import { Link } from "@remix-run/react";
import logoLight from "./logo-light.svg";
import logoDark from "./logo-dark.svg";

export default function Welcome() {
  return (
    <main className="hero">
      <header className="hero__top">
        <picture>
          {/* Dark mode prefers the first source */}
          <source srcSet={logoDark} media="(prefers-color-scheme: dark)" />
          <img src={logoLight} alt="Pi-Sys" className="hero__logo" />
        </picture>

        <nav className="hero__nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero__content">
        <h1>Pi-Sys</h1>
        <p className="tagline">
          Innovative IT &amp; Software Solutions for modern businesses.
        </p>

        <div className="cta">
          <Link to="#contact" className="btn btn--primary">Get a Quote</Link>
          <Link to="#services" className="btn btn--ghost">View Services</Link>
        </div>
      </section>

      <section id="services" className="features">
        <div className="feature">
          <h3>Fast</h3>
          <p>Edge-hosted on Cloudflare for ultra-low latency worldwide.</p>
        </div>
        <div className="feature">
          <h3>Secure</h3>
          <p>Automatic SSL, WAF, and DNS security baked in.</p>
        </div>
        <div className="feature">
          <h3>Scalable</h3>
          <p>From landing pages to APIs using Workers &amp; KV/D1.</p>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Pi-Sys</h2>
        <p>
          We build reliable, maintainable web apps, ecommerce, and internal tools.
          Our stack includes React/Remix, Cloudflare Workers, and modern CI/CD.
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
