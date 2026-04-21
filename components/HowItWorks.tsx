const steps = [
  {
    n: '01',
    title: 'Tell us about your business',
    body: 'A 15-minute form, or a coffee in Wellington. We gather photos, services, hours, and your story.',
  },
  {
    n: '02',
    title: 'We design and build',
    body: 'Usually 5 to 7 working days. You get a private preview link before anything goes live.',
  },
  {
    n: '03',
    title: 'You review, we tweak, we launch',
    body: 'Two rounds of revisions included. We hook up your domain, SSL, and Google Business Profile.',
  },
  {
    n: '04',
    title: 'Relax',
    body: "We host, secure, and keep your site online. When something changes, email us — we update it.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
        How it works
      </h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        Four steps. No project-management jargon. No surprises.
      </p>
      <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold tracking-widest text-accent-600">{s.n}</div>
            <h3 className="mt-2 text-base font-semibold text-ink-900">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
