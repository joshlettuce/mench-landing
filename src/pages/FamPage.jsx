import { useEffect, useState } from "react";
import "./FamPage.css";

const SHARE_MESSAGE =
  "Check out Mench, an app that just launched. It protects your deals so you actually get paid: contract, e-signature, and the money held with Mench's SafePay technology until the work's done. Free to start. Search ‘Mench’ on the App Store or go to mench.app.";

const AUDIENCES = [
  {
    title: "Creators & music",
    who: "Producers, artists, DJs, content creators",
    body: "From co-producer agreements to live performance agreements, Mench can structure it all and make sure you're paid on time.",
  },
  {
    title: "Freelancers",
    who: "Designers, editors, developers, writers, gig workers",
    body: "Lock in the scope and the payment before you start. Break a big project into milestones and get paid in installments as each one is done.",
  },
  {
    title: "Athletes",
    who: "High-school NIL deals with local brands",
    body: "Together with a parent or legal guardian, athletes can take on the NIL deals open to them, structured so they're safe and equitable.",
  },
];

const STEPS = [
  { num: "01", title: "Agree", body: "Describe the deal in plain English. Mench's AI drafts a clear contract with the terms that matter." },
  { num: "02", title: "Sign", body: "Both sides sign in the app. Legally binding." },
  { num: "03", title: "Hold", body: "The payment is held with our SafePay technology, so you know the money is there." },
  { num: "04", title: "Release", body: "Work delivered, money released. Or just send an invoice." },
];

export default function FamPage() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const previous = document.title;
    document.title = "Mench: Friends & Family";
    return () => {
      document.title = previous;
    };
  }, []);

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_MESSAGE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="fam">
      <nav className="fam-nav" aria-label="Main">
        <div className="fam-container fam-nav-inner">
          <a href="/" className="fam-nav-logo" aria-label="Mench home">
            <img src="/mench_wordmark_white.png" alt="Mench" />
          </a>
          <div className="fam-nav-links fam-mono">
            <a href="#who">Who it's for</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href="#share" className="fam-btn fam-btn-primary fam-btn-small fam-mono">
            Share Mench
          </a>
        </div>
      </nav>

      <main>
        <section className="fam-hero">
          <div className="fam-container fam-hero-grid">
          <div className="fam-hero-inner">
            <span className="fam-pill fam-mono">
              <span className="fam-dot" aria-hidden="true" />
              NOW LIVE ON THE APP STORE
            </span>
            <p className="fam-eyebrow fam-mono">...MAKING THE HANDSHAKE DEAL FEEL A LITTLE SAFER</p>
            <h1 className="fam-h1 fam-mono">Everyone you know is doing deals on a handshake.</h1>
            <p className="fam-lead">
              Mench protects deals between two people, so the work gets done and the money actually shows up. Know
              someone who needs it? Put them on.
            </p>
            <div className="fam-hero-actions">
              <a href="#share" className="fam-btn fam-btn-primary fam-mono">
                Send it to someone
              </a>
              <a href="#how" className="fam-btn fam-btn-ghost fam-mono">
                See how it works
              </a>
            </div>
          </div>
          <div className="fam-deal" aria-label="Example of a deal protected by Mench">
            <p className="fam-deal-label fam-mono">EXAMPLE DEAL</p>
            <p className="fam-deal-title fam-mono">Kitchen remodel: phase 1</p>
            <p className="fam-deal-parties">Rivera Contracting &rarr; homeowner</p>
            <div className="fam-deal-amount fam-mono">$4,800</div>
            <ul className="fam-deal-rows">
              <li>
                <span>Contract</span>
                <span className="fam-deal-ok fam-mono">AGREED</span>
              </li>
              <li>
                <span>Signatures</span>
                <span className="fam-deal-ok fam-mono">2 OF 2</span>
              </li>
              <li>
                <span>Payment</span>
                <span className="fam-deal-held fam-mono">HELD IN SAFEPAY</span>
              </li>
              <li>
                <span>Release</span>
                <span className="fam-deal-wait fam-mono">ON COMPLETION</span>
              </li>
            </ul>
          </div>
          </div>
        </section>

        <section id="who" className="fam-band">
          <div className="fam-container fam-section">
            <p className="fam-eyebrow fam-mono">WHO IT'S FOR</p>
            <h2 className="fam-h2 fam-mono">Built for the people doing the work.</h2>
            <div className="fam-card fam-card-feature">
              <p className="fam-card-title fam-mono">Small businesses of any kind</p>
              <p className="fam-card-sub">
                Contractors, caterers, photographers, salons, food vendors, consultants: anyone doing jobs for clients.
              </p>
              <p className="fam-card-body">
                Mench adds a contract protection layer to the invoicing you'd normally use to send a bid, collect
                payment, or bill recurring clients, so every dollar has a signed agreement behind it.
              </p>
            </div>
            <div className="fam-grid fam-grid-3">
              {AUDIENCES.map((a) => (
                <div className="fam-card" key={a.title}>
                  <p className="fam-card-title fam-mono">{a.title}</p>
                  <p className="fam-card-sub">{a.who}</p>
                  <p className="fam-card-body">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="fam-band fam-band-dark">
          <div className="fam-container fam-section">
            <p className="fam-eyebrow fam-mono">HOW IT WORKS</p>
            <h2 className="fam-h2 fam-mono">How Mench protects a deal.</h2>
            <ol className="fam-steps">
              {STEPS.map((step) => (
                <li className="fam-step" key={step.num}>
                  <span className="fam-step-num fam-mono">{step.num}</span>
                  <p className="fam-step-title fam-mono">{step.title}</p>
                  <p className="fam-card-sub">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="fam-band">
          <div className="fam-container fam-section">
            <p className="fam-eyebrow fam-mono">QUICK FAQ</p>
            <h2 className="fam-h2 fam-mono">The two-minute version.</h2>
            <div className="fam-faq">
              <div className="fam-faq-item">
                <h3 className="fam-faq-q fam-mono">Why does it matter?</h3>
                <p>
                  Most deals happen over texts, DMs and Cash App with no contract and no recourse. Lawyers are too
                  expensive for everyday jobs, so most people just hope it works out.
                </p>
              </div>
              <div className="fam-faq-item">
                <h3 className="fam-faq-q fam-mono">Why can't I just use ChatGPT or Claude to do this?</h3>
                <p>
                  A chatbot can draft a document, but that's where it stops. Mench uses AI to draft the contract inside
                  the deal itself: both sides review and sign in the app, the payment is held with our SafePay technology, and it's
                  released when the work is done. It's the whole deal, not just the paperwork.
                </p>
              </div>
              <div className="fam-faq-item">
                <h3 className="fam-faq-q fam-mono">Are these legal contracts?</h3>
                <p>
                  Both sides agree to the terms and sign, and Mench's e-signatures meet the federal ESIGN Act and UETA,
                  with a full audit trail and a signed PDF for each party. Mench drafts contracts with AI and isn't a
                  law firm, so for a large or unusual deal, have your own lawyer take a look.
                </p>
              </div>
              <div className="fam-faq-item">
                <h3 className="fam-faq-q fam-mono">What happens if someone doesn't pay?</h3>
                <p>
                  With our SafePay technology, the client pays up front and the money is held securely, so it's
                  already there before the work starts. It's released when the work is delivered. If you send a plain invoice instead, you still
                  have a signed contract and a clear record of the deal to point to.
                </p>
              </div>
              <div className="fam-faq-item">
                <h3 className="fam-faq-q fam-mono">Is the money safe?</h3>
                <p>Payments run through Stripe, the same payments company behind Shopify, Amazon and Lyft.</p>
              </div>
              <div className="fam-faq-item">
                <h3 className="fam-faq-q fam-mono">What does it cost?</h3>
                <p>
                  Free to start. Pro is $19/mo. Our SafePay technology is 2.5%, paid by whoever receives the money.{" "}
                  <span className="fam-highlight">
                    But for our friends and family, the monthly cost will always be FREE.
                  </span>
                </p>
              </div>
              <div className="fam-faq-item">
                <h3 className="fam-faq-q fam-mono">How do I get it?</h3>
                <p>
                  Search &ldquo;Mench&rdquo; on the App Store, or go to <a href="https://mench.app">mench.app</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="share" className="fam-band fam-band-dark">
          <div className="fam-container">
            <div className="fam-share">
              <p className="fam-eyebrow fam-mono">PUT SOMEONE ON</p>
              <h2 className="fam-share-h2 fam-mono">
                Know someone who's been burned on a deal or by a client? Send them this:
              </h2>
              <p className="fam-quote">&ldquo;{SHARE_MESSAGE}&rdquo;</p>
              <div className="fam-actions">
                <button type="button" className="fam-btn fam-btn-primary fam-mono" onClick={copyMessage}>
                  {copied ? "Copied" : "Copy message"}
                </button>
                <span className="fam-tips fam-mono">
                  <span>&rarr; Share it in a group chat</span>
                  <span>&rarr; Post it on your story</span>
                  <span>&rarr; Leave an App Store review</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="fam-footer">
        <div className="fam-container fam-footer-inner">
          <img className="fam-footer-logo" src="/mench_wordmark_white.png" alt="Mench" />
          <p className="fam-footer-text">Built for the 99%. Making the handshake deal feel a little safer.</p>
          <div className="fam-footer-links">
            <a href="/privacypolicy">Privacy Policy</a>
            <a href="/termsofservice">Terms of Service</a>
            <a href="mailto:support@mench.app">support@mench.app</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
