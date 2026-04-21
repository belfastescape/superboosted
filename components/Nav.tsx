import Link from 'next/link';

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#whatyouget', label: 'What you get' },
  { href: '#demos', label: 'Demos' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-ink-900 text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
            </svg>
          </span>
          <span className="font-semibold tracking-tight">Superboosted</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink-900">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-ink-900 px-4 py-2 text-sm font-medium text-white hover:bg-ink-800"
        >
          Get a demo
        </a>
      </div>
    </header>
  );
}
