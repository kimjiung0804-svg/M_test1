const footerLinks = [
  { label: "Services", href: "#features" },
  { label: "Case Notes", href: "#testimonials" },
  { label: "Contact", href: "#cta" },
  { label: "Privacy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <a
            href="#hero"
            className="font-display text-lg font-bold tracking-tight text-slate-50"
          >
            Enable<span className="text-cyan-400"> Design</span>
          </a>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            The AI product design partner for teams that ship with confidence.
            enabledesign.io
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-800/60 px-5 pt-6 sm:px-8">
        <p className="text-xs text-slate-500">
          © 2026 Enable Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
