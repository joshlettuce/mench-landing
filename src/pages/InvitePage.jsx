import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function InvitePage() {
  const { token } = useParams();
  const [state, setState] = useState("loading"); // loading | pending | accepted | expired | invalid | error
  const [invite, setInvite] = useState(null);

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }

    fetch(`/api/invite/${token}`)
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          setState(body.status || "invalid");
          return;
        }
        const data = await res.json();
        setInvite(data);
        setState(data.status);
      })
      .catch(() => setState("error"));
  }, [token]);

  if (state === "loading") {
    return (
      <div className="page">
        <div className="logo-wrap">
          <img src="/transparentlogo.png" alt="Mench" className="logo" />
        </div>
        <div className="invite-card">
          <p className="invite-loading">Loading invite...</p>
        </div>
      </div>
    );
  }

  if (state === "pending" && invite) {
    return (
      <div className="page">
        <div className="logo-wrap">
          <img src="/transparentlogo.png" alt="Mench" className="logo" />
        </div>
        <div className="invite-card">
          <p className="invite-greeting">Hi {invite.partnerName},</p>
          <p className="invite-message">
            You've been invited to join{" "}
            <strong>{invite.artistName}</strong> on Mench as their{" "}
            <strong>{invite.role}</strong>.
          </p>
          <a
            href="https://testflight.apple.com/join/mench"
            className="invite-btn"
          >
            Accept Invite
          </a>
          <p className="invite-footer">
            Mench — Your music manager in an app.
          </p>
        </div>
      </div>
    );
  }

  if (state === "accepted") {
    return (
      <div className="page">
        <div className="logo-wrap">
          <img src="/transparentlogo.png" alt="Mench" className="logo" />
        </div>
        <div className="invite-card">
          <div className="check">&#10003;</div>
          <p className="invite-message">This invite has already been accepted.</p>
          <a
            href="https://testflight.apple.com/join/mench"
            className="invite-btn"
          >
            Open Mench
          </a>
        </div>
      </div>
    );
  }

  // expired, invalid, error
  return (
    <div className="page">
      <div className="logo-wrap">
        <img src="/transparentlogo.png" alt="Mench" className="logo" />
      </div>
      <div className="invite-card">
        <p className="invite-message">
          {state === "expired"
            ? "This invite link has expired. Ask your artist to send a new one."
            : "This invite link is no longer valid."}
        </p>
      </div>
    </div>
  );
}
