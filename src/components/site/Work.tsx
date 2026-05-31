import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const projects = [
  { t: "Lumen Analytics", c: "SaaS · 2025", d: "Realtime product analytics dashboard with AI-assisted insights.", g: "from-[var(--neon-pink)] to-[var(--neon-purple)]" },
  { t: "Orbit Health", c: "Mobile · 2024", d: "Patient companion app for a regional clinic network.", g: "from-[var(--neon-blue)] to-[var(--neon-cyan)]" },
  { t: "Atlas Commerce", c: "Web · 2024", d: "Headless storefront and merchant tooling for a fashion brand.", g: "from-[var(--neon-purple)] to-[var(--neon-blue)]" },
  { t: "Nova Ops", c: "AI · 2025", d: "Automation suite that replaces 30+ internal spreadsheets.", g: "from-[var(--neon-cyan)] to-[var(--neon-pink)]" },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Selected work"
          title={<>Recent things we're <span className="text-aurora italic">proud of</span>.</>}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass elevated"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.g} opacity-40 transition-opacity duration-700 group-hover:opacity-70`} />
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="text-xs text-muted-foreground font-mono mb-2">{p.c}</div>
                <h3 className="font-display text-3xl font-semibold">{p.t}</h3>
                <p className="mt-2 text-muted-foreground max-w-md">{p.d}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  View case study <span aria-hidden>→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
