import Image from "next/image";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { buttonClasses } from "@/components/ui";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      {/* Full-bleed dominant visual with slow parallax drift (≤12px perceived) */}
      <div className="animate-hero-drift absolute inset-0" aria-hidden>
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-5 pb-24 pt-32 text-center sm:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Enable Design
        </p>
        <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl xl:text-7xl">
          From idea to validated AI product design, faster and with confidence.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Enable Design helps teams turn complex AI concepts into clear, trusted
          product experiences that ship.
        </p>
        <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#cta"
            className={buttonClasses({
              variant: "primary",
              size: "lg",
              className: "cta-glow w-full sm:w-auto",
            })}
          >
            Book a Strategy Call
            <ArrowRight size={18} aria-hidden />
          </a>
          <a
            href="#testimonials"
            className={buttonClasses({
              variant: "outline",
              size: "lg",
              className: "w-full sm:w-auto",
            })}
          >
            <Play size={18} aria-hidden />
            View Case Snapshots
          </a>
        </div>
      </div>

      <a
        href="#features"
        aria-label="Scroll to features"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-slate-400 transition-colors hover:text-cyan-300 motion-safe:animate-bounce"
      >
        <ChevronDown size={28} aria-hidden />
      </a>
    </section>
  );
}
