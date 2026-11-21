// Receives a new-customer intake submission from /letusknow and emails it to Mench.
// Uses the same Resend account as api/notify.js (RESEND_API_KEY).

const TO = 'josh@mench.app';
const MAX_SUMMARY = 12000;

const clip = (v, n) => (typeof v === 'string' ? v.trim().slice(0, n) : '');
const oneLine = (v, n) => clip(v, n).replace(/[\r\n]+/g, ' ');

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const business = body.business && typeof body.business === 'object' ? body.business : {};

  const name = oneLine(business.name, 200);
  const owner = oneLine(business.owner, 200);
  const email = oneLine(business.email, 200);
  const summary = clip(body.summary, MAX_SUMMARY);

  if (!name || !owner || !summary || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[intake] RESEND_API_KEY not set');
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Mench <noreply@mench.app>',
        to: TO,
        reply_to: email,
        subject: `New customer form: ${name}`,
        text: summary,
      }),
    });

    if (!resp.ok) {
      console.error('[intake] Resend error', resp.status, await resp.text());
      return res.status(502).json({ error: 'Could not send' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[intake] failed', err);
    return res.status(502).json({ error: 'Could not send' });
  }
}
