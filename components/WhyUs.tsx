const points = [
  {
    title: "You don't need to learn anything",
    body: 'We handle the design, the words, the hosting, the domain, the Google listing. You get on with running your business.',
  },
  {
    title: 'One clear monthly price',
    body: 'No $2,500 upfront. No hidden renewal fees. Month-to-month, or save two months paying annually. Cancel any time.',
  },
  {
    title: 'Actually fast',
    body: 'Built with Next.js, served from a global edge network. Your site loads in under a second — Google notices, and so do customers.',
  },
  {
    title: 'Made for Kiwis',
    body: "Wellington-based. Real phone support from someone who knows your suburb. You won't be passed around an overseas call centre.",
  },
];

export default function WhyUs() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
          Why small businesses pick us
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
