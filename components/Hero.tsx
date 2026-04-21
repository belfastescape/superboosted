export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.10),_transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(15,23,42,0.06),_transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Wellington-based · Hosted on Vercel
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 md:text-6xl">
            Websites for small Kiwi businesses.
            <br />
            <span className="text-accent-600">Done properly. Done fast.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 md:text-xl">
            A professional website for your trade, shop or club — designed, built, hosted, and
            maintained from <strong className="text-ink-900">$49 a month</strong>. No tech headaches.
            No surprise invoices. Just a site that looks the part and does its job.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-md bg-ink-900 px-5 py-3 text-sm font-medium text-white hover:bg-ink-800"
            >
              See what yours could look like
            </a>
            <a
              href="#pricing"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-ink-900 hover:bg-slate-50"
            >
              View pricing
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            No setup fee for our first 10 Wellington founding customers.
          </p>
        </div>
      </div>
    </section>
  );
}
