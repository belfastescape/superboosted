'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
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
    <section id="contact" className="border-y border-slate-200 bg-ink-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Get a free demo of your site
          </h2>
          <p className="mt-3 text-slate-300">
            Tell us a bit about your business. We&rsquo;ll send back a rough preview within a few
            days — no obligation, no sales pitch. If you like it, we launch.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-300">
            <li>· First 10 Wellington customers pay zero setup fee</li>
            <li>· We reply within one working day</li>
            <li>· We only take on businesses we can genuinely help</li>
          </ul>
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
              Anything specific you want?
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-accent-500 focus:outline-none"
              placeholder="A competitor's site you like, colours you want, anything else"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex w-full items-center justify-center rounded-md bg-accent-500 px-4 py-3 text-sm font-medium text-ink-900 hover:bg-accent-500/90 disabled:opacity-70"
          >
            {status === 'sending' ? 'Sending…' : 'Request free demo'}
          </button>
          {status === 'sent' && (
            <p className="text-sm text-emerald-400">
              Thanks — we&rsquo;ve got it. We&rsquo;ll be in touch within one working day.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-rose-400">
              Something went wrong. Email us directly at hello@superboosted.design.
            </p>
          )}
        </form>
      </div>
    </section>
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
  const id = `field-${name}`;
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
