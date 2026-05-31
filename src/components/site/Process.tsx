import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const steps = [
  { t: "Discovery", d: "Deep conversations to align on the problem, audience and ambition." },
  { t: "Research", d: "Market, users, technical landscape. Evidence before opinions." },
  { t: "Design", d: "Systems, flows, prototypes — pixel-level care from day one." },
  { t: "Development", d: "Modern stack, type-safe end to end, code reviewed daily." },
  { t: "Testing", d: "Automated, manual, and real-world. Nothing ships untested." },
  { t: "Launch", d: "Smooth go-live with monitoring, performance and SEO in place." },
  { t: "Growth", d: "Iteration, experimentation and long-term support after launch." },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Process"
          title={<>How we work — <span className="text-aurora italic">in seven moves</span>.</>}
          description="A clear path from first call to long-term partnership."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" aria-hidden />
          <ol className="space-y-10">
            {steps.map((s, i) => (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.05 * i }}
                className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-16" : "md:text-right md:pr-16"}`}>
                  <div className="font-mono text-xs text-muted-foreground mb-2">0{i + 1}</div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground max-w-md md:inline-block">{s.d}</p>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-aurora glow-pink" />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
