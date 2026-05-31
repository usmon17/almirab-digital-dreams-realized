import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const items = [
  { t: "Premium Quality", d: "Senior team, high bar, every detail intentional." },
  { t: "Fast Delivery", d: "Small teams that ship — weekly, not quarterly." },
  { t: "Scalable Architecture", d: "Foundations that grow with you, not against you." },
  { t: "Modern Technologies", d: "Up-to-date stacks chosen for longevity." },
  { t: "Long-term Support", d: "We stay after launch. Partners, not vendors." },
  { t: "User-Centered Design", d: "Research-led decisions, end users always first." },
];

export function WhyUs() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Why ALMIRAB"
          title={<>Six reasons teams <span className="text-aurora italic">stay</span> with us.</>}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-border bg-card/40 p-6 hover:border-[var(--neon-pink)]/60 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-aurora text-background font-display text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium">{it.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
