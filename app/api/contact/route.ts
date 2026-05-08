import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

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

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'leads@superboosted.design',
        to: 'steve@superboosted.design',
        replyTo: email,
        subject: `New enquiry: ${business}`,
        text:
          `Name: ${name}\n` +
          `Business: ${business}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone ?? '—'}\n` +
          `Kind: ${kind ?? '—'}\n\n` +
          `Message:\n${notes ?? '—'}`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
