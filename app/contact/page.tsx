'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.08),_transparent_60%)]" />
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Wellington-based · We reply within one working day
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl">
              Let&rsquo;s talk.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Want a free demo, have a question, or just want to find out if we&rsquo;re the right fit?
              Drop us a message below.
            </p>
          </div>
        </section>

        <section className="bg-ink-900 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:py-20">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Send us a message
              </h2>
              <p className="mt-3 text-slate-300">
                Fill in the form and we&rsquo;ll get back to you within one working day — no
                obligation, no sales pitch.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  First 10 Wellington customers pay zero setup fee
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  We reply within one working day
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  We only take on businesses we can genuinely help
                </li>
              </ul>
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-sm text-slate-400">Prefer to email directly?</p>
                <a
                  href="mailto:hello@superboosted.design"
                  className="mt-1 inline-block text-sm text-accent-500 hover:text-accent-500/80"
                >
                  hello@superboosted.design
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Your name" name="name" required />
                <Field label="Business name" name="business" required />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <Field
                label="What kind of business?"
                name="kind"
                placeholder="e.g. electrician, cafe, rugby club"
              />
              <div>
                <label className="mb-1 block text-sm text-slate-300" htmlFor="notes">
                  How can we help?
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-accent-500 focus:outline-none"
                  placeholder="Tell us about your business, what you're after, a competitor's site you like — anything helps."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="inline-flex w-full items-center justify-center rounded-md bg-accent-500 px-4 py-3 text-sm font-medium text-ink-900 hover:bg-accent-500/90 disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'sent' && (
                <p className="text-sm text-emerald-400">
                  Thanks — we&rsquo;ve got it. We&rsquo;ll be in touch within one working day.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-rose-400">
                  Something went wrong. Email us directly at{' '}
                  <a href="mailto:hello@superboosted.design" className="underline">
                    hello@superboosted.design
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label className="mb-1 block text-sm text-slate-300" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-accent-500 focus:outline-none"
      />
    </div>
  );
}
