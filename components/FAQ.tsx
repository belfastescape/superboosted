const faqs = [
  {
    q: 'Why is this so much cheaper than a regular web agency?',
    a: "We don't design from a blank canvas for every client. We have a small set of proven templates made for Kiwi small businesses, and we make each one yours with your content, colours, and photos. The result is professional, fast, and a fraction of the cost of a bespoke build.",
  },
  {
    q: 'What if I need changes later?',
    a: "Content updates — new photos, price changes, hours, a new team member — are included (2 per year on Essential, 4 on Complete). Bigger changes like a new page or a rebrand are quoted separately and are always reasonable.",
  },
  {
    q: 'What if I already have a domain?',
    a: "Perfect. We'll connect it for you. You stay the owner of your domain at all times.",
  },
  {
    q: 'Can I cancel?',
    a: "Yes — month-to-month, any time, no exit fee. If you leave you take your content and your domain with you. We never hold you hostage.",
  },
  {
    q: 'Can I see a demo first?',
    a: "Yes. Tell us your business name and what you do and we'll build you a free demo page before you commit to anything. If you love it, we go live. If you don't, no hard feelings.",
  },
  {
    q: 'Where are you based?',
    a: 'Wellington, New Zealand. All support is local.',
  },
  {
    q: 'What if my business grows?',
    a: "Great. When you outgrow a 6-page brochure site, we'll help you move to something bigger. We'd rather help you graduate than hold you back.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
        Frequently asked
      </h2>
      <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {faqs.map((f) => (
          <details key={f.q} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="font-medium text-ink-900">{f.q}</span>
              <span className="text-slate-400 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
