"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonClasses } from "@/components/ui";

const navLinks = [
  { label: "Why Enable", href: "#features" },
  { label: "Proof", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-tight text-slate-50"
        >
          Enable<span className="text-cyan-400"> Design</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
          <a href="#cta" className={buttonClasses({ variant: "primary", size: "sm" })}>
            Get Started
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 transition-colors hover:text-cyan-300 md:hidden"
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-800/60 bg-slate-950/95 px-5 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-slate-200 transition-colors hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className={buttonClasses({ variant: "primary", size: "md", className: "mt-2 w-full" })}
            >
              Get Started
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
