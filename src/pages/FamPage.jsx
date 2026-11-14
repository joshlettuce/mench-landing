import { useEffect, useState } from "react";
import "./FamPage.css";

const SHARE_MESSAGE =
  "Check out Mench, an app that just launched. It protects your deals so you actually get paid: contract, e-signature, and the money held in escrow until the work's done. Free to start. Search ‘Mench’ on the App Store or go to mench.app.";

const STEPS = [
  { num: "01", title: "Agree", body: "Describe the deal. Mench drafts it from attorney-reviewed templates." },
  { num: "02", title: "Sign", body: "Both sides sign in the app. Legally binding." },
  { num: "03", title: "Hold", body: "The payment sits in escrow, so you know the money is there." },
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
    <main className="fam">
      <div className="fam-wrap">
        <header className="fam-header">
          <img className="fam-logo" src="/mench_wordmark_white.png" alt="Mench" />
          <p className="fam-tagline">Making the handshake deal feel a little safer.</p>
          <span className="fam-pill fam-mono">
            <span className="fam-dot" aria-hidden="true" />
            NOW LIVE ON THE APP STORE
          </span>
        </header>

        <section className="fam-intro">
          <p className="fam-eyebrow fam-mono">...MAKING THE HANDSHAKE DEAL FEEL A LITTLE SAFER</p>
          <h1 className="fam-h1 fam-mono">Everyone you know is doing deals on a handshake.</h1>
          <p className="fam-lead">
            Mench protects deals between two people, so the work gets done and the money actually shows up. Know
            someone who needs it? Put them on.
          </p>
        </section>

        <section className="fam-section">
          <h2 className="fam-h2 fam-mono">Who it's for</h2>
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
            <div className="fam-card">
              <p className="fam-card-title fam-mono">Creators &amp; music</p>
              <p className="fam-card-sub">Producers, artists, DJs, content creators</p>
              <p className="fam-card-body">
                From co-producer agreements to live performance agreements, Mench can structure it all and make sure
                you're paid on time.
              </p>
            </div>
            <div className="fam-card">
              <p className="fam-card-title fam-mono">Freelancers</p>
              <p className="fam-card-sub">Designers, editors, developers, writers, gig workers</p>
              <p className="fam-card-body">
                Lock in the scope and the payment before you start. Break a big project into milestones and get paid
                in installments as each one is done.
              </p>
            </div>
            <div className="fam-card">
              <p className="fam-card-title fam-mono">Athletes</p>
              <p className="fam-card-sub">High-school NIL deals with local brands</p>
              <p className="fam-card-body">
                Together with a parent or legal guardian, athletes can take on the NIL deals open to them, structured
                so they're safe and equitable.
              </p>
            </div>
          </div>
        </section>

        <section className="fam-section">
          <h2 className="fam-h2 fam-mono">How Mench protects a deal</h2>
          <div className="fam-grid fam-grid-4">
            {STEPS.map((step) => (
              <div className="fam-card" key={step.num}>
                <p className="fam-card-title fam-mono">
                  <span className="fam-step-num">{step.num}</span> {step.title}
                </p>
                <p className="fam-card-sub">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="fam-section">
          <h2 className="fam-h2 fam-mono">Quick FAQ</h2>
          <div className="fam-grid fam-grid-2">
            <div className="fam-card">
              <p className="fam-card-title fam-mono">Why does it matter?</p>
              <p className="fam-card-sub">
                Most deals happen over texts, DMs and Cash App with no contract and no recourse. Lawyers are too
                expensive for everyday jobs.
              </p>
            </div>
            <div className="fam-card">
              <p className="fam-card-title fam-mono">Is the money safe?</p>
              <p className="fam-card-sub">
                Payments run through Stripe, the same payments company behind Shopify, Amazon and Lyft.
              </p>
            </div>
            <div className="fam-card">
              <p className="fam-card-title fam-mono">What does it cost?</p>
              <p className="fam-card-sub">
                Free to start. Pro is $19/mo. Escrow is 2.5%, paid by whoever receives the money.{" "}
                <span className="fam-highlight">But for our friends and family, the monthly cost will always be FREE.</span>
              </p>
            </div>
            <div className="fam-card">
              <p className="fam-card-title fam-mono">How do I get it?</p>
              <p className="fam-card-sub">
                Search &ldquo;Mench&rdquo; on the App Store, or go to <a href="https://mench.app">mench.app</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="fam-share">
          <p className="fam-eyebrow fam-mono">PUT SOMEONE ON</p>
          <h2 className="fam-share-h2 fam-mono">Know someone who's been burned on a deal or by a client? Send them this:</h2>
          <p className="fam-quote">&ldquo;{SHARE_MESSAGE}&rdquo;</p>
          <div className="fam-actions">
            <button type="button" className="fam-copy" onClick={copyMessage}>
              {copied ? "Copied" : "Copy message"}
            </button>
            <span className="fam-tips fam-mono">
              <span>&rarr; Share it in a group chat</span>
              <span>&rarr; Post it on your story</span>
              <span>&rarr; Leave an App Store review</span>
            </span>
          </div>
        </section>

        <footer className="fam-footer">
          <p className="fam-footer-text">Built for the 99%. Making the handshake deal feel a little safer.</p>
          <img className="fam-footer-logo" src="/mench_wordmark_white.png" alt="Mench" />
        </footer>
      </div>
    </main>
  );
}
