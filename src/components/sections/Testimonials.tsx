import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

const partners = ["Novacore", "Helix AI", "Meridian Labs", "Quantumleaf", "Cloudworks"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Proof
          </p>
          <div className="mt-8 flex flex-col gap-6">
            <Quote size={36} className="text-cyan-400" aria-hidden />
            <blockquote className="font-display text-2xl font-medium leading-snug text-slate-50 sm:text-3xl lg:text-4xl">
              “Enable Design gave our AI feature roadmap structure and
              confidence in under three weeks.”
            </blockquote>
            <p className="text-sm uppercase tracking-widest text-slate-400">
              Product Lead, B2B SaaS
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-16 sm:mt-20">
          <div className="flex flex-col gap-2 border-l-2 border-cyan-400 pl-6 sm:pl-8">
            <span className="font-display text-5xl font-bold text-cyan-400 sm:text-6xl">
              42%
            </span>
            <span className="max-w-md text-base text-slate-300 sm:text-lg">
              Prototype decision time reduced across pilot teams.
            </span>
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-16 sm:mt-20">
          <p className="text-sm uppercase tracking-widest text-slate-500">
            Trusted by product teams at
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4">
            {partners.map((name) => (
              <span
                key={name}
                className="font-display text-lg font-semibold text-slate-500 transition-colors duration-300 hover:text-cyan-300 sm:text-xl"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
