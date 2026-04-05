import "./LandingPage.css";

const APP_STORE_URL = "#";

function Nav() {
  return (
    <nav className="nav">
      <span className="nav-logo">MENCH</span>
      <a href={APP_STORE_URL} className="btn-outline">
        Download on App Store
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-headline">
        The back office every independent artist deserves.
      </h1>
      <p className="hero-sub">
        Contracts. Payments. Distribution. Content. All in one app.
      </p>
      <a href={APP_STORE_URL} className="btn-primary">
        Download on App Store
      </a>
    </section>
  );
}

const FEATURES = [
  {
    title: "Contracts",
    desc: "Generate and e-sign deals instantly. NDAs, producer agreements, booking contracts — drafted by AI in seconds.",
  },
  {
    title: "Escrow Payments",
    desc: "Hold funds until work is delivered. Both parties sign, then Mench releases payment automatically.",
  },
  {
    title: "Tour Strategy",
    desc: "Manage shows, routing, and offers in one place. Evaluate deals, track guarantees, plan your routing.",
  },
  {
    title: "Content Seeding",
    desc: "Get your music in front of real audiences organically. Schedule drops, track placements, own your reach.",
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

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "",
    highlight: false,
    features: [
      "25 AI messages / month",
      "Contracts & e-signing",
      "Show pipeline",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    highlight: true,
    features: [
      "1,000 AI messages / month",
      "Escrow payments",
      "Tour routing & offers",
      "Content scheduling & seeding",
    ],
  },
  {
    name: "Label",
    price: "$199",
    period: "/mo",
    highlight: false,
    features: [
      "5,000 AI messages / month",
      "Multi-artist management",
      "Partner & team access",
      "Priority support",
    ],
  },
];

function Pricing() {
  return (
    <section className="section pricing-section">
      <h2 className="section-title">Simple pricing.</h2>
      <p className="section-sub">No hidden fees. Cancel anytime.</p>
      <div className="pricing-grid">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`pricing-card${tier.highlight ? " pricing-card--highlight" : ""}`}
          >
            {tier.highlight && <div className="pricing-badge">Most Popular</div>}
            <div className="pricing-name">{tier.name}</div>
            <div className="pricing-price">
              {tier.price}
              {tier.period && <span className="pricing-period">{tier.period}</span>}
            </div>
            <ul className="pricing-features">
              {tier.features.map((f) => (
                <li key={f} className="pricing-feature">
                  <span className="pricing-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              className={tier.highlight ? "btn-primary" : "btn-outline"}
              style={{ display: "block", textAlign: "center" }}
            >
              Get started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  {
    num: "01",
    title: "Add your artist profile",
    desc: "Tell Mench about your music, your goals, and your team in minutes.",
  },
  {
    num: "02",
    title: "Talk to your manager",
    desc: "Chat with your AI manager to draft contracts, plan tours, or handle payments.",
  },
  {
    num: "03",
    title: "Mench handles the rest",
    desc: "Execution happens in the app — signed, paid, scheduled, and tracked.",
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
      <p className="footer-copy">© 2026 PRNTS LLC. All rights reserved.</p>
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
        <Pricing />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
