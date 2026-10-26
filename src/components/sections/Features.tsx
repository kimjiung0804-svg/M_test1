import { Compass, Zap, Workflow } from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: Compass,
    title: "AI Product Framing",
    description:
      "Translate ambiguous AI opportunities into product hypotheses and measurable UX goals.",
  },
  {
    icon: Zap,
    title: "Rapid UX Validation",
    description:
      "Prototype and test high-risk flows early to reduce downstream engineering rework.",
  },
  {
    icon: Workflow,
    title: "Design-to-Delivery Alignment",
    description:
      "Keep product, engineering, and stakeholders synchronized with implementation-ready design logic.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Why Enable
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Clarity at every step of AI product design
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Core capabilities designed to move your team from ambiguity to
            confident delivery.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 150}>
              <div className="flex h-full flex-col gap-5 border-t border-slate-800 pt-8">
                <feature.icon size={32} className="text-cyan-400" aria-hidden />
                <h3 className="font-display text-xl font-semibold text-slate-50 sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-300">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
