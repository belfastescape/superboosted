export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-10 text-sm text-slate-500">
        <div>
          &copy; {new Date().getFullYear()} Superboosted. Websites for small Kiwi businesses. Made in
          Wellington.
        </div>
        <div className="flex gap-4">
          <a href="mailto:hello@superboosted.design" className="hover:text-ink-900">
            hello@superboosted.design
          </a>
        </div>
      </div>
    </footer>
  );
}
