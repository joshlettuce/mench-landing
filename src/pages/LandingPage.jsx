import { useState } from "react";
import "./LandingPage.css";

// ⬇️ Mench's App Store listing. Change it here and every badge on the page updates.
const APP_STORE_URL = "https://apps.apple.com/us/app/REPLACE_WITH_MENCH_APP_ID";

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="appstore-logo">
      <path
        fill="currentColor"
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
      />
    </svg>
  );
}

// "Download on the App Store" badge. size: "lg" (hero / bottom CTA) or "sm" (nav).
function AppStoreBadge({ size = "lg", variant = "light" }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`appstore-badge appstore-badge--${size} appstore-badge--${variant}`}
      aria-label="Download Mench on the App Store"
    >
      <AppleLogo />
      <span className="appstore-text">
        <span className="appstore-small">Download on the</span>
        <span className="appstore-big">App Store</span>
      </span>
    </a>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <img src="/mench_logo_transparent.png" alt="Mench" className="nav-logo" />
      <AppStoreBadge size="sm" variant="dark" />
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
        The back office for the independent creator
      </h1>
      <p className="hero-sub">
        Contracts &amp; Escrow Payments
      </p>
      <div className="hero-download">
        <AppStoreBadge size="lg" />
        <p className="hero-download-note">Free on iPhone</p>
      </div>
      {submitted ? (
        <p className="beta-thanks">You're on the list.</p>
      ) : (
        <form className="beta-form" onSubmit={handleSubmit}>
          <p className="beta-heading">Not on iPhone? Get notified</p>
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

function DownloadCTA() {
  return (
    <section className="section download-section">
      <h2 className="section-title">Get Mench on your iPhone.</h2>
      <p className="section-sub">Free to download.</p>
      <AppStoreBadge size="lg" />
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
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
