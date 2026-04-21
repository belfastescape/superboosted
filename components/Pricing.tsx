const plans = [
  {
    name: 'Essential',
    price: '$49',
    annual: '$490 / year',
    tagline: 'A simple presence that builds trust.',
    features: [
      'Up to 4 pages',
      'Contact form',
      'Your domain (or connect your own)',
      'Hosting, SSL, automatic updates',
      'Google Business Profile setup',
      '2 content updates per year',
      'Email support',
    ],
    highlight: false,
  },
  {
    name: 'Complete',
    price: '$79',
    annual: '$790 / year',
    tagline: 'Everything most small businesses need.',
    features: [
      'Up to 6 pages',
      'Contact + quote form',
      'Photo gallery',
      'Your domain (or connect your own)',
      'Hosting, SSL, automatic updates',
      'Google Business Profile setup + monthly post',
      'Basic SEO (titles, descriptions, sitemap)',
      '4 content updates per year',
      'Priority email support',
    ],
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
          Simple pricing
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Pay monthly, or save two months by paying for the year up front. No setup fee for our
          first 10 Wellington founding customers.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                'rounded-2xl border bg-white p-6 ' +
                (p.highlight
                  ? 'border-ink-900 shadow-lg ring-2 ring-ink-900/10'
                  : 'border-slate-200')
              }
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-ink-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
                </div>
                {p.highlight && (
                  <span className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-600">
                    Most popular
                  </span>
                )}
              </div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-ink-900">{p.price}</span>
                <span className="text-slate-500">/month NZD</span>
              </div>
              <div className="text-sm text-slate-500">or {p.annual} (save 2 months)</div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-none text-accent-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  'mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-medium ' +
                  (p.highlight
                    ? 'bg-ink-900 text-white hover:bg-ink-800'
                    : 'border border-slate-300 bg-white text-ink-900 hover:bg-slate-50')
                }
              >
                Get started with {p.name}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500">
          All prices in NZD, GST included. Month-to-month, cancel any time. Your content and domain
          are yours — we&rsquo;ll hand them over if you ever leave.
        </p>
      </div>
    </section>
  );
}
