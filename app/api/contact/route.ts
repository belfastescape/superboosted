import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN ?? 'sandboxf8a64112f9f749eaafca42e0a120f5ca.mailgun.org';
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY!;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, business, email, phone, kind, notes } = body ?? {};

    if (!name || !business || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('[lead]', {
      name,
      business,
      email,
      phone,
      kind,
      notes,
      ts: new Date().toISOString(),
    });

    if (MAILGUN_API_KEY) {
      const formData = new FormData();
      formData.append('from', `Superboosted <postmaster@${MAILGUN_DOMAIN}>`);
      formData.append('to', 'steve@superboosted.design');
      formData.append('h:Reply-To', email);
      formData.append('subject', `New enquiry: ${business}`);
      formData.append(
        'text',
        `Name: ${name}\n` +
          `Business: ${business}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone ?? '—'}\n` +
          `Kind: ${kind ?? '—'}\n\n` +
          `Message:\n${notes ?? '—'}`,
      );

      const credentials = Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64');
      const mgRes = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
        method: 'POST',
        headers: { Authorization: `Basic ${credentials}` },
        body: formData,
      });

      if (!mgRes.ok) {
        const text = await mgRes.text();
        console.error('[mailgun] error', mgRes.status, text);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
