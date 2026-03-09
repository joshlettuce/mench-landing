import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://xgexwayghogesqhdbzfv.supabase.co", "sb_publishable_R0INuGkKDXGkBLJUR3sKRg_6A7JTPPe");

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --black: #060606;
    --bg: #0a0a0a;
    --surface: #111111;
    --surface2: #161616;
    --surface3: #1e1e1e;
    --border: rgba(255,255,255,0.06);
    --border2: rgba(255,255,255,0.1);
    --lavender: #A89EC9;
    --lavender-dim: rgba(168,158,201,0.1);
    --lavender-glow: rgba(168,158,201,0.2);
    --lavender-subtle: rgba(168,158,201,0.04);
    --white: #EFEFEF;
    --white-dim: rgba(239,239,239,0.5);
    --muted: rgba(239,239,239,0.25);
    --font: 'Barlow', sans-serif;
    --font-display: 'Barlow Condensed', sans-serif;
  }

  html, body { background: var(--black); color: var(--white); font-family: var(--font); -webkit-font-smoothing: antialiased; }

  .page { position: relative; min-height: 100vh; overflow: hidden; }

  .bg-grid {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      linear-gradient(rgba(168,158,201,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(168,158,201,0.025) 1px, transparent 1px);
    background-size: 64px 64px;
  }
  .bg-orb {
    position: fixed; width: 900px; height: 900px; border-radius: 50%;
    background: radial-gradient(circle, rgba(168,158,201,0.05) 0%, transparent 65%);
    top: 50%; left: 50%; transform: translate(-50%, -60%);
    pointer-events: none; z-index: 0;
  }

  .content { position: relative; z-index: 1; }

  nav {
    display: flex; align-items: center; justify-content: space-between;
    padding: 22px 40px; border-bottom: 1px solid var(--border);
    position: sticky; top: 0; background: rgba(6,6,6,0.88);
    backdrop-filter: blur(16px); z-index: 10;
  }
  .logo { font-size: 16px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--white); }
  .logo span { color: var(--lavender); }
  .nav-pill {
    font-size: 11px; font-weight: 500; color: var(--lavender);
    background: var(--lavender-dim); border: 1px solid rgba(168,158,201,0.15);
    padding: 5px 14px; border-radius: 20px; letter-spacing: 0.04em;
  }

  .hero {
    padding: 96px 40px 72px;
    max-width: 660px; margin: 0 auto; text-align: center;
    animation: fadeUp 0.45s ease both;
  }
  .hero-chip {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 500; letter-spacing: 0.07em; text-transform: uppercase;
    color: var(--muted); border: 1px solid var(--border2);
    padding: 6px 16px; border-radius: 20px; margin-bottom: 36px;
  }
  .chip-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--lavender); flex-shrink: 0; }

  .hero h1 {
    font-family: var(--font-display);
    font-size: clamp(48px, 9vw, 88px); font-weight: 900; line-height: 0.95;
    letter-spacing: 0.02em; margin-bottom: 22px; text-transform: uppercase;
  }
  .hero h1 .accent { color: var(--lavender); }
  .hero h1 .dim { color: var(--muted); }

  .hero-sub {
    font-size: 15px; line-height: 1.75; color: var(--white-dim);
    font-weight: 400; max-width: 460px; margin: 0 auto 52px;
  }

  .features {
    display: flex; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
    margin-bottom: 72px;
    animation: fadeUp 0.45s 0.08s ease both;
  }
  .feature {
    flex: 1; padding: 26px 22px; border-right: 1px solid var(--border);
    transition: background 0.2s;
  }
  .feature:last-child { border-right: none; }
  .feature:hover { background: var(--lavender-subtle); }
  .feature-label { font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 7px; }
  .feature-title { font-size: 13px; font-weight: 600; color: var(--white); line-height: 1.35; }

  .form-wrap {
    max-width: 400px; margin: 0 auto; padding: 0 20px 96px;
    animation: fadeUp 0.45s 0.14s ease both;
  }
  .form-heading { text-align: center; margin-bottom: 24px; }
  .form-heading h2 { font-size: 19px; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 5px; }
  .form-heading p { font-size: 13px; color: var(--white-dim); }

  .form-box {
    background: var(--surface); border: 1px solid var(--border2);
    border-radius: 14px; padding: 26px; position: relative; overflow: hidden;
  }
  .form-box::after {
    content: ''; position: absolute; top: 0; left: 25%; right: 25%; height: 1px;
    background: linear-gradient(90deg, transparent, var(--lavender-glow), transparent);
  }

  .field { margin-bottom: 13px; }
  .field label { display: block; font-size: 11px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: var(--muted); margin-bottom: 7px; }
  .field input {
    width: 100%; background: var(--surface2); border: 1px solid var(--border);
    border-radius: 8px; padding: 11px 13px; color: var(--white);
    font-family: var(--font); font-size: 14px; font-weight: 400; outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .field input:focus { border-color: rgba(168,158,201,0.4); box-shadow: 0 0 0 3px var(--lavender-dim); }
  .field input::placeholder { color: var(--muted); }

  .sms-note { font-size: 11px; color: var(--muted); margin-top: 6px; line-height: 1.5; }
  .sms-note b { color: var(--lavender); font-weight: 500; }

  .submit-btn {
    width: 100%; margin-top: 18px; padding: 13px;
    background: var(--white); color: var(--black);
    border: none; border-radius: 8px; cursor: pointer;
    font-family: var(--font); font-weight: 700; font-size: 13px;
    letter-spacing: 0.06em; text-transform: uppercase;
    transition: background 0.15s, opacity 0.15s;
  }
  .submit-btn:hover { background: #ddd8ef; }
  .submit-btn:disabled { opacity: 0.28; cursor: not-allowed; }

  .success { text-align: center; padding: 28px 0; }
  .success-check {
    width: 44px; height: 44px; border-radius: 50%;
    background: var(--lavender-dim); border: 1px solid rgba(168,158,201,0.18);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; margin: 0 auto 14px; color: var(--lavender);
  }
  .success h3 { font-size: 16px; font-weight: 700; margin-bottom: 5px; }
  .success p { font-size: 12px; color: var(--muted); }

  .admin-trigger {
    text-align: center; padding-bottom: 28px;
    font-size: 11px; color: var(--border2); cursor: pointer;
    transition: color 0.2s; letter-spacing: 0.04em;
  }
  .admin-trigger:hover { color: var(--muted); }

  .admin-wrap { max-width: 720px; margin: 0 auto 72px; padding: 0 20px; }
  .admin-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
  .admin-label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--lavender); }
  .count-badge { font-size: 11px; color: var(--muted); background: var(--surface); border: 1px solid var(--border); padding: 3px 10px; border-radius: 10px; }

  table { width: 100%; border-collapse: collapse; }
  th { font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); text-align: left; padding: 10px 13px; border-bottom: 1px solid var(--border); }
  td { padding: 12px 13px; font-size: 13px; color: rgba(239,239,239,0.55); border-bottom: 1px solid var(--border); }
  tr:hover td { background: var(--surface); }
  .no-data { text-align: center; padding: 28px; font-size: 12px; color: var(--muted); }

  footer {
    border-top: 1px solid var(--border); padding: 22px 40px;
    display: flex; align-items: center; justify-content: space-between;
  }
  footer p { font-size: 11px; color: var(--muted); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 600px) {
    nav { padding: 16px 20px; }
    .hero { padding: 64px 20px 52px; }
    .features { flex-direction: column; }
    .feature { border-right: none; border-bottom: 1px solid var(--border); }
    .form-wrap { padding: 0 16px 72px; }
    .admin-wrap { padding: 0 16px; }
    footer { padding: 18px 20px; flex-direction: column; gap: 4px; }
  }
`;

export default function MenchLanding() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [signups, setSignups] = useState([]);

  useEffect(() => { loadSignups(); }, []);

  const loadSignups = async () => {
    const { data } = await supabase.from("beta_signups").select("*").order("created_at", { ascending: false });
    if (Array.isArray(data)) setSignups(data);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) return;
    setLoading(true);
    const { error } = await supabase.from("beta_signups").insert({
      name: form.name, email: form.email, phone: form.phone,
    });
    if (error) { alert("Error: " + error.message); }
    else { setSubmitted(true); loadSignups(); }
    setLoading(false);
  };
      const updated = [...signups, entry];
      await window.storage.set("mench-beta-signups", JSON.stringify(updated));
      setSignups(updated);
      setSubmitted(true);
    } catch {}
    setLoading(false);
  };

  const fmtDate = (iso) => new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <>
      <style>{style}</style>
      <div className="page">
        <div className="bg-grid" />
        <div className="bg-orb" />
        <div className="content">
          <nav>
            <div className="logo">MEN<span>CH</span></div>
            <div className="nav-pill">Closed Beta</div>
          </nav>

          <div className="hero">
            <div className="hero-chip"><div className="chip-dot" />Now in closed beta</div>
            <h1>
              Your music.<br />
              <span className="accent">Your business.</span><br />
              <span className="dim">One place.</span>
            </h1>
            <p className="hero-sub">
              From split agreements and record deal analysis to streaming data and show routing — everything you need to run your business is in one place. Every artist's team looks different. This is just the tool to run it.
            </p>
          </div>

          <div className="features">
            {[
              { label: "Contracts", title: "Draft & sign deals without a lawyer on speed dial" },
              { label: "Releases", title: "Track your catalog, royalties, and distribution" },
              { label: "Shows", title: "Manage bookings, advances, and settlements" },
              { label: "Strategy", title: "AI-powered insights built for how you move" },
            ].map(f => (
              <div className="feature" key={f.label}>
                <div className="feature-label">{f.label}</div>
                <div className="feature-title">{f.title}</div>
              </div>
            ))}
          </div>

          <div className="form-wrap">
            <div className="form-heading">
              <h2>Request access</h2>
              <p>Limited beta spots. We'll text you when you're in.</p>
            </div>
            <div className="form-box">
              {submitted ? (
                <div className="success">
                  <div className="success-check">✓</div>
                  <h3>You're on the list.</h3>
                  <p>We'll hit your phone when your spot opens up.</p>
                </div>
              ) : (
                <>
                  <div className="field">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" placeholder="you@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="field">
                    <label>Phone</label>
                    <input type="tel" placeholder="+1 (000) 000-0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    <p className="sms-note"><b>Text only.</b> No spam. We'll reach out when your access is ready.</p>
                  </div>
                  <button className="submit-btn" onClick={handleSubmit} disabled={loading || !form.name || !form.email || !form.phone}>
                    {loading ? "Submitting..." : "Request Access"}
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="admin-trigger" onClick={() => setShowAdmin(!showAdmin)}>
            {showAdmin ? "▲ hide" : "▼ signups"}
          </div>

          {showAdmin && (
            <div className="admin-wrap">
              <div className="admin-bar">
                <div className="admin-label">Beta Signups</div>
                <div className="count-badge">{signups.length}</div>
              </div>
              {signups.length === 0 ? (
                <div className="no-data">No signups yet.</div>
              ) : (
                <table>
                  <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Date</th></tr></thead>
                  <tbody>
                    {signups.map((s, i) => (
                      <tr key={i}><td>{s.name}</td><td>{s.email}</td><td>{s.phone}</td><td>{fmtDate(s.ts)}</td></tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          <footer>
            <p>© 2026 Mench</p>
            <p>mench.app</p>
          </footer>
        </div>
      </div>
    </>
  );
}
