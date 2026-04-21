const demos = [
  {
    name: 'All Trades Co.',
    kind: 'Tradesperson',
    tagline: 'Licensed electricians, Lower Hutt',
    accent: 'from-sky-500 to-indigo-600',
    bullets: ['Services & coverage map', 'Photo gallery of past jobs', 'Quick quote form'],
  },
  {
    name: 'Cafe Piko',
    kind: 'Shop / Cafe',
    tagline: 'Small-batch coffee in Newtown',
    accent: 'from-amber-500 to-rose-500',
    bullets: ['Opening hours & menu', 'Google Maps directions', 'Events & specials'],
  },
  {
    name: 'Wellington Squash Club',
    kind: 'Sports club',
    tagline: 'Members, fixtures, contact',
    accent: 'from-emerald-500 to-teal-600',
    bullets: ['Fixtures & results', 'Committee & coaches', 'Membership enquiry form'],
  },
];

export default function Demos() {
  return (
    <section id="demos" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
        Example sites
      </h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        Three live templates. Pick one as a starting point and we&rsquo;ll make it yours — your
        words, your photos, your colours.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {demos.map((d) => (
          <div key={d.name} className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className={`relative h-40 bg-gradient-to-br ${d.accent}`}>
              <div className="absolute left-4 top-4 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/70" />
                <span className="h-2 w-2 rounded-full bg-white/50" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-ink-900">
                  {d.kind}
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-ink-900">{d.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{d.tagline}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                {d.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 flex-none rounded-full bg-slate-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-600 hover:text-accent-500"
              >
                Preview this template &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
