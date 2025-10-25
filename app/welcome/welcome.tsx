// app/welcome/welcome.tsx
import React from "react";

export default function Welcome() {
  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    margin: 0,
    background:
      "radial-gradient(1200px 600px at 20% -10%, rgba(127,152,255,.18), transparent), radial-gradient(900px 500px at 100% 0%, rgba(122,92,255,.12), transparent)",
    backgroundColor: "#0b1220",
    color: "#e9eefc",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    gap: "2rem",
    padding: "20px",
    boxSizing: "border-box",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol"',
  };

  const topBar: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  };

  const navLink: React.CSSProperties = {
    color: "#a7b0c4",
    textDecoration: "none",
    marginLeft: "16px",
    fontWeight: 500,
  };

  const hero: React.CSSProperties = {
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    padding: "2rem 1rem",
  };

  const btn: React.CSSProperties = {
    display: "inline-block",
    padding: ".75rem 1.1rem",
    borderRadius: "10px",
    border: "1px solid transparent",
    textDecoration: "none",
    fontWeight: 700,
    marginRight: "10px",
  };

  const btnPrimary: React.CSSProperties = {
    ...btn,
    background: "linear-gradient(90deg,#4f8cff,#7a5cff)",
    color: "#fff",
  };

  const btnGhost: React.CSSProperties = {
    ...btn,
    background: "transparent",
    borderColor: "#2a3a60",
    color: "#e9eefc",
  };

  const grid: React.CSSProperties = {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    padding: "1rem 0",
  };

  const card: React.CSSProperties = {
    border: "1px solid #223152",
    borderRadius: 12,
    padding: "1rem",
    background: "rgba(20,30,55,.35)",
    textAlign: "left",
  };

  const section: React.CSSProperties = {
    padding: "1rem 0",
    maxWidth: 860,
    margin: "0 auto",
    textAlign: "center",
  };

  const footer: React.CSSProperties = {
    textAlign: "center",
    padding: "1rem 0",
    color: "#a7b0c4",
  };

  return (
    <main style={pageStyle}>
      {/* Top bar */}
      <header style={topBar}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* You can replace with your logo image */}
          <div
            aria-hidden
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background:
                "conic-gradient(from 45deg, #7a5cff, #4f8cff, #7a5cff)",
              boxShadow: "0 6px 18px rgba(127,152,255,.35)",
            }}
          />
          <strong style={{ fontSize: 18 }}>Pi-Sys</strong>
        </div>
        <nav>
          <a href="#services" style={navLink}>
            Services
          </a>
          <a href="#about" style={navLink}>
            About
          </a>
          <a href="#contact" style={navLink}>
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section style={hero}>
        <div>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", margin: 8 }}>
            Innovative IT & Software Solutions
          </h1>
          <p style={{ color: "#a7b0c4", marginTop: 6 }}>
            Fast, secure, and scalable apps powered by Cloudflare.
          </p>
          <div style={{ marginTop: 16 }}>
            <a href="#contact" style={btnPrimary}>
              Get a Quote
            </a>
            <a href="#services" style={btnGhost}>
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="services" style={section}>
        <h2 style={{ marginBottom: 12 }}>Our Services</h2>
        <div style={grid}>
          <div style={card}>
            <h3 style={{ margin: "0 0 .25rem" }}>Web Apps & Dashboards</h3>
            <p style={{ margin: 0 }}>
              React & React Router apps tailored to your business.
            </p>
          </div>
          <div style={card}>
            <h3 style={{ margin: "0 0 .25rem" }}>Edge Hosting</h3>
            <p style={{ margin: 0 }}>
              Cloudflare Workers & Pages for global low latency.
            </p>
          </div>
          <div style={card}>
            <h3 style={{ margin: "0 0 .25rem" }}>Security & Reliability</h3>
            <p style={{ margin: 0 }}>
              SSL, WAF, and best practices built in by default.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={section}>
        <h2 style={{ marginBottom: 12 }}>About Pi-Sys</h2>
        <p style={{ margin: 0 }}>
          We build reliable, maintainable software—landing pages, internal tools,
          and e-commerce—using modern stacks and CI/CD pipelines.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" style={section}>
        <h2 style={{ marginBottom: 12 }}>Contact</h2>
        <p style={{ margin: 0 }}>
          Email:{" "}
          <a href="mailto:info@pi-sys.com" style={{ color: "#e9eefc" }}>
            info@pi-sys.com
          </a>
        </p>
        <p style={{ margin: 0 }}>Phone: +81-XX-XXXX-XXXX</p>
      </section>

      {/* Footer */}
      <footer style={footer}>
        <small>© {new Date().getFullYear()} Pi-Sys. All rights reserved.</small>
      </footer>
    </main>
  );
}
