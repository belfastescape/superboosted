import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, business, email, phone, kind, notes } = body ?? {};

    if (!name || !business || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('[lead]', { name, business, email, phone, kind, notes, ts: new Date().toISOString() });

    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN ?? 'sandboxf8a64112f9f749eaafca42e0a120f5ca.mailgun.org';

    if (!apiKey) {
      console.warn('[mailgun] MAILGUN_API_KEY not set — skipping email');
      return NextResponse.json({ ok: true });
    }

    const params = new URLSearchParams({
      from: `Superboosted <postmaster@${domain}>`,
      to: 'steve@superboosted.design',
      'h:Reply-To': email,
      subject: `New enquiry: ${business}`,
      text:
        `Name: ${name}\n` +
        `Business: ${business}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone ?? '—'}\n` +
        `Kind: ${kind ?? '—'}\n\n` +
        `Message:\n${notes ?? '—'}`,
    });

    const credentials = Buffer.from(`api:${apiKey}`).toString('base64');
    const mgRes = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const mgBody = await mgRes.text();
    console.log('[mailgun] status', mgRes.status, mgBody);

    if (!mgRes.ok) {
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
