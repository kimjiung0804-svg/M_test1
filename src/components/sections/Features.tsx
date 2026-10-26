import Image from "next/image";
import { Compass, Zap, Workflow } from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: Compass,
    title: "AI Product Framing",
    description:
      "We translate ambiguous AI opportunities into sharp product hypotheses, prioritized use cases, and UX goals your team can actually measure.",
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      alt: "Enable Design strategists framing an AI product roadmap with a client team",
    },
  },
  {
    icon: Zap,
    title: "Rapid UX Validation",
    description:
      "High-risk flows are prototyped and tested with real users in days, not months — cutting downstream engineering rework before it starts.",
    image: {
      src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
      alt: "High-fidelity AI product interface being prototyped and validated on screen",
    },
  },
  {
    icon: Workflow,
    title: "Design-to-Delivery Alignment",
    description:
      "Product, engineering, and stakeholders stay synchronized through implementation-ready design logic, specs, and rationale — no handoff drift.",
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      alt: "Product and engineering team aligned over implementation-ready design work",
    },
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
            Clarity at every step of the AI product journey
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Three senior capabilities that move your team from ambiguity to
            confident, on-time delivery.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 150}>
              <div className="flex h-full flex-col gap-5 border-t border-slate-800 pt-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-800">
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
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
