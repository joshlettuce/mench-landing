const SUPABASE_URL = "https://xgexwayghogesqhdbzfv.supabase.co";

const ROLE_LABELS = {
  manager: "Manager",
  booking_agent: "Booking Agent",
  lawyer: "Lawyer",
  accountant: "Accountant",
  business_manager: "Business Manager",
  label: "Label",
  publisher: "Publisher",
  brand: "Brand",
};

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const { token } = req.query;
  if (!token || token.length < 32) {
    return res.status(400).json({ error: "Missing token" });
  }

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    console.error("[invite] SUPABASE_SERVICE_ROLE_KEY not set");
    return res.status(500).json({ error: "Server misconfigured" });
  }

  try {
    // Fetch invite + partner + artist in one query
    const url = new URL(`${SUPABASE_URL}/rest/v1/partner_invites`);
    url.searchParams.set("select", "id,token,expires_at,accepted_at,partner:partners(name,role,status,artist:artists(name))");
    url.searchParams.set("token", `eq.${token}`);

    console.log("[invite] Looking up token:", token);
    console.log("[invite] Supabase URL:", url.toString());

    const resp = await fetch(url.toString(), {
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
      },
    });

    const rawBody = await resp.text();
    console.log("[invite] Supabase status:", resp.status, "body:", rawBody);

    if (!resp.ok) {
      return res.status(500).json({ error: "Failed to look up invite" });
    }

    const rows = JSON.parse(rawBody);
    if (!rows.length) {
      console.log("[invite] No rows found for token:", token);
      return res.status(404).json({ error: "Invalid invite", status: "invalid" });
    }

    const invite = rows[0];
    const partner = invite.partner;
    const artist = partner?.artist;
    const expired = new Date(invite.expires_at) < new Date();

    let status;
    if (invite.accepted_at) {
      status = "accepted";
    } else if (expired) {
      status = "expired";
    } else {
      status = "pending";
    }

    return res.status(200).json({
      partnerName: partner?.name ?? "",
      role: ROLE_LABELS[partner?.role] ?? partner?.role ?? "",
      artistName: artist?.name ?? "",
      status,
    });
  } catch (e) {
    console.error("[invite] Error:", e);
    return res.status(500).json({ error: "Internal server error" });
  }
}
