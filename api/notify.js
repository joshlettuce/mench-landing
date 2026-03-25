export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const secret = process.env.WEBHOOK_SECRET;
  if (req.headers['x-webhook-secret'] !== secret) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { record } = req.body;
  const email = record?.email;
  if (!email) return res.status(400).json({ error: 'No email' });

  const results = await Promise.allSettled([
    // Email via Resend
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Mench <noreply@mench.app>',
        to: 'josh@mench.app',
        subject: '🎵 New Mench signup',
        text: `New beta signup: ${email}`,
      }),
    }),

    // SMS via Twilio
    fetch(`https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        From: process.env.TWILIO_FROM_NUMBER,
        To: process.env.TWILIO_TO_NUMBER,
        Body: `New Mench signup: ${email}`,
      }),
    }),
  ]);

  console.log('Notify results:', results.map((r) => r.status));
  return res.status(200).json({ ok: true });
}
