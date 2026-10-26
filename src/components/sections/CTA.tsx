import { ArrowRight, Mail } from "lucide-react";
import { buttonClasses } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12),transparent_60%)]"
      />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Bring clarity to your next AI product move.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Share your context, and get a focused, senior recommendation from
            the Enable Design team within one business day.
          </p>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@enabledesign.io?subject=Project%20Conversation"
              className={buttonClasses({
                variant: "primary",
                size: "lg",
                className: "cta-glow w-full sm:w-auto",
              })}
            >
              Start a Project Conversation
              <ArrowRight size={18} aria-hidden />
            </a>
            <a
              href="mailto:hello@enabledesign.io"
              className={buttonClasses({
                variant: "ghost",
                size: "lg",
                className: "w-full sm:w-auto",
              })}
            >
              <Mail size={18} aria-hidden />
              Email enabledesign.io Team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
