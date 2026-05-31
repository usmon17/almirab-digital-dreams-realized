import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const services = [
  { n: "01", t: "Web Development", d: "Marketing sites, dashboards, e-commerce. Performance and polish baked in." },
  { n: "02", t: "Mobile Apps", d: "iOS, Android and cross-platform builds people actually want to open." },
  { n: "03", t: "Desktop Software", d: "Native and Electron apps for workflows that demand power and reliability." },
  { n: "04", t: "UI / UX Design", d: "Interfaces with taste — research-led, beautifully detailed, ready to ship." },
  { n: "05", t: "SaaS Platforms", d: "Multi-tenant products with billing, auth and infrastructure to scale safely." },
  { n: "06", t: "AI Integrations", d: "Practical AI features: assistants, search, automation, predictive flows." },
  { n: "07", t: "Business Automation", d: "Workflows, integrations and internal tools that quietly compound value." },
  { n: "08", t: "Technical Consulting", d: "Architecture reviews, team augmentation, and roadmap clarity." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Services"
          title={<>Everything we touch is built to <span className="text-aurora italic">last</span>.</>}
          description="From a single landing page to a full platform — we ship work that holds up under real users and real load."
        />

        <div className="grid gap-px rounded-3xl overflow-hidden border border-border/60 bg-border/40 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group relative bg-background p-7 min-h-[220px] flex flex-col justify-between overflow-hidden transition-colors hover:bg-card"
            >
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--neon-pink)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="font-mono text-xs text-muted-foreground">{s.n}</div>
              <div>
                <h3 className="font-display text-xl font-medium">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
              <div className="absolute top-6 right-6 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2">
                →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
