import "./LandingPage.css";

// ⬇️ Mench's store listings. Change them here and every badge on the page updates.
const APP_STORE_URL = "https://apps.apple.com/us/app/mench-hq/id6760744751";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.mench.app";

// The MΞNCH logo, sized to sit inline with text. Use it anywhere the name appears.
function M() {
  return <img src="/mench_logo_inline.png" alt="Mench" className="mench-inline" />;
}

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

function PlayLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="appstore-logo playstore-logo">
      <path
        fill="currentColor"
        d="M4.6 2.3c-.4.3-.6.8-.6 1.4v16.6c0 .6.2 1.1.6 1.4L13.8 12 4.6 2.3zm10.4 8.5 2.6-2.6L6.4 1.9c-.2-.1-.4-.2-.6-.2l9.2 9.1zm0 2.4-9.2 9.1c.2 0 .4-.1.6-.2l11.2-6.3-2.6-2.6zm6.1-2.3-2.4-1.4-2.8 2.5 2.8 2.5 2.4-1.4c.9-.5.9-1.7 0-2.2z"
      />
    </svg>
  );
}

// "Get it on Google Play" badge. Same sizes and variants as AppStoreBadge.
function GooglePlayBadge({ size = "lg", variant = "light" }) {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`appstore-badge appstore-badge--${size} appstore-badge--${variant}`}
      aria-label="Get Mench on Google Play"
    >
      <PlayLogo />
      <span className="appstore-text">
        <span className="appstore-small">Get it on</span>
        <span className="appstore-big">Google Play</span>
      </span>
    </a>
  );
}

// Both store badges side by side; they stack on narrow screens.
function StoreBadges({ size = "lg", variant = "light" }) {
  return (
    <div className={`store-badges store-badges--${size}`}>
      <AppStoreBadge size={size} variant={variant} />
      <GooglePlayBadge size={size} variant={variant} />
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <img src="/mench_logo_transparent.png" alt="Mench" className="nav-logo" />
      <StoreBadges size="sm" variant="dark" />
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-headline">
        <M /> protects the handshake deal.
      </h1>
      <p className="hero-sub">
        AI-drafted contracts, in-app signatures, and SafePay so the money's
        there before the work starts.
      </p>
      <div className="hero-download">
        <StoreBadges size="lg" />
        <p className="hero-download-note">Free on iPhone and Android</p>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    title: "AI-drafted contracts",
    desc: <>Describe the deal in plain English. <M />'s AI drafts the contract.</>,
  },
  {
    title: "In-app signatures",
    desc: "Both sides sign right in the app. No printing, no chasing.",
  },
  {
    title: "SafePay",
    desc: "Our SafePay technology holds the payment until the work is done.",
  },
];

function Features() {
  return (
    <section className="section features-section">
      <h2 className="section-title">Make the handshake deal a little safer.</h2>
      <p className="section-sub section-lede">
        <M /> makes the handshake deal feel a little safer. Small businesses,
        creators, freelancers and athletes describe a deal in plain English,
        {" "}<M />'s AI drafts the contract, both sides sign in the app, and our
        SafePay technology holds the payment until the work is done, so
        everyone gets what they agreed to.
      </p>
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
    title: "Describe the deal",
    desc: <>Tell <M /> the terms in plain English. The AI drafts the contract.</>,
  },
  {
    num: "02",
    title: "Both sides sign",
    desc: "Everyone signs in the app, so the agreement is locked in.",
  },
  {
    num: "03",
    title: "SafePay holds the money",
    desc: "Payment is held until the work is done, then released.",
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
      <h2 className="section-title">Get <M /> on your phone.</h2>
      <p className="section-sub">Free on the App Store and Google Play.</p>
      <StoreBadges size="lg" />
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
      <p className="footer-disclaimer"><M /> provides self-service tools, not legal advice.</p>
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
