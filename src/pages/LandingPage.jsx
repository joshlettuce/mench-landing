import { useState } from "react";
import "./LandingPage.css";

function Nav() {
  return (
    <nav className="nav">
      <img src="/mench_logo_transparent.png" alt="Mench" className="nav-logo" />
    </nav>
  );
}

function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    );
    await supabase.from('beta_signups').insert({ email });
    setSubmitted(true);
  };

  return (
    <section className="hero">
      <h1 className="hero-headline">
        The back office for the independent artist
      </h1>
      <p className="hero-sub">
        Contracts &amp; Escrow Payments
      </p>
      {submitted ? (
        <p className="beta-thanks">You're on the list.</p>
      ) : (
        <form className="beta-form" onSubmit={handleSubmit}>
          <p className="beta-heading">Join the Beta</p>
          <div className="beta-row">
            <input
              type="email"
              className="beta-input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">
              Request Access
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

const FEATURES = [
  {
    title: "Contracts",
    desc: "Draft and e-sign deals in minutes — NDAs, producer agreements, booking deals.",
  },
  {
    title: "Escrow Payments",
    desc: "Hold funds until the work is delivered, then release payment.",
  },
];

function Features() {
  return (
    <section className="section features-section">
      <h2 className="section-title">Everything your team does — in one app.</h2>
      <div className="features-grid">
        {FEATURES.map((f) => (
          <div key={f.title} className="feature-card">
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  {
    num: "01",
    title: "Set your deal terms",
    desc: "Draft and e-sign contracts — NDAs, producer agreements, booking deals.",
  },
  {
    num: "02",
    title: "Get paid safely",
    desc: "Funds are held in escrow until the work is delivered, then released.",
  },
];

function HowItWorks() {
  return (
    <section className="section how-section">
      <h2 className="section-title">How it works.</h2>
      <div className="steps-grid">
        {STEPS.map((step, i) => (
          <div key={step.num} className="step">
            {i < STEPS.length - 1 && <div className="step-connector" />}
            <div className="step-num">{step.num}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacypolicy" className="footer-link">Privacy Policy</a>
        <span className="footer-divider">·</span>
        <a href="/termsofservice" className="footer-link">Terms of Service</a>
        <span className="footer-divider">·</span>
        <a href="mailto:support@mench.app" className="footer-link">support@mench.app</a>
      </div>
      <p className="footer-disclaimer">Mench provides self-service tools, not legal advice.</p>
      <p className="footer-copy">© 2026 Mench Technologies, Inc.. All rights reserved.</p>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="landing">
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
