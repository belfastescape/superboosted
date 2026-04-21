const features = [
  { title: 'Up to 6 pages', body: 'Home, About, Services, Gallery, Contact — whatever fits your business.' },
  { title: 'Contact / quote form', body: 'Customers email you straight from your site. Lead notifications to your phone.' },
  { title: 'Your own domain', body: 'yourbusiness.co.nz included. Or we connect a domain you already own.' },
  { title: 'Mobile-first design', body: 'Over 70% of visitors use a phone. We design for that screen first.' },
  { title: 'Google Business Profile', body: 'We set yours up (or tidy it up), so you appear on Maps and local search.' },
  { title: 'Basic SEO', body: 'Clean titles, descriptions, sitemap, fast loading. Google likes all of it.' },
  { title: 'SSL and security', body: 'HTTPS, automatic updates, no "not secure" warnings. Done.' },
  { title: 'Content updates', body: "Changed your hours? New photo? Email us — it's included." },
];

export default function WhatYouGet() {
  return (
    <section id="whatyouget" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
          What you get
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Every plan includes the lot. No &ldquo;basic&rdquo; package missing things you actually need.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent-500/10 text-accent-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-ink-900">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
