import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const pillars = [
  {
    k: "Mission",
    v: "Build software so refined it feels inevitable — clear, fast, and deeply considered.",
  },
  {
    k: "Vision",
    v: "A world where every digital product respects the person on the other side of the screen.",
  },
  {
    k: "Values",
    v: "Craft over speed. Substance over noise. Trust earned through every interaction.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About"
          title={<>A studio for teams who care <span className="text-aurora italic">how</span> things are made.</>}
          description="ALMIRAB is a small, senior team of engineers and designers. We partner with founders and product teams to ship work that earns attention."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl glass p-8 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-aurora opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative">
                <div className="font-display text-sm uppercase tracking-[0.25em] text-[var(--neon-pink)]">{p.k}</div>
                <p className="mt-4 text-xl leading-snug">{p.v}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
