import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, business, email, phone, kind, notes } = body ?? {};

    if (!name || !business || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // For now we just log to Vercel's runtime logs so you can see leads while you wire email.
    // View them in Vercel dashboard -> Project -> Logs.
    console.log('[lead]', {
      name,
      business,
      email,
      phone,
      kind,
      notes,
      ts: new Date().toISOString(),
    });

    // ---------------------------------------------------------------------
    // To enable real email delivery with Resend (https://resend.com):
    //   1. npm i resend
    //   2. Set RESEND_API_KEY in Vercel env
    //   3. Uncomment the block below
    // ---------------------------------------------------------------------
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY!);
    // await resend.emails.send({
    //   from: 'leads@superboosted.design',
    //   to: process.env.CONTACT_EMAIL ?? 'hello@superboosted.design',
    //   subject: `New lead: ${business}`,
    //   text:
    //     `Name: ${name}\n` +
    //     `Business: ${business}\n` +
    //     `Email: ${email}\n` +
    //     `Phone: ${phone ?? ''}\n` +
    //     `Kind: ${kind ?? ''}\n\n` +
    //     `${notes ?? ''}`,
    // });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
