import { useState } from "react";

const SUPABASE_URL = "https://xgexwayghogesqhdbzfv.supabase.co";
const SUPABASE_KEY = "sb_publishable_R0INuGkKDXGkBLJUR3sKRg_6A7JTPPe";

export default function MenchLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/beta_signups`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal",
        },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        if (err.code === "23505") {
          throw new Error("You're already on the list.");
        }
        throw new Error(err.message || "Something went wrong. Try again.");
      }
      setSubmitted(true);
    } catch (e) {
      setError(e.message || "Something went wrong. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="page">
      <div className="logo-wrap">
        <img src="/transparentlogo.png" alt="Mench" className="logo" />
      </div>

      <div className="form-wrap">
        {submitted ? (
          <div className="success">
            <div className="check">&#10003;</div>
            <p className="success-text">You're on the list.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form">
            <div className="input-row">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" disabled={loading || !email}>
                {loading ? "..." : "Request Access"}
              </button>
            </div>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
