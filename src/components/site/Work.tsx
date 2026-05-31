import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { useI18n } from "./i18n";

export function Work() {
  const { t } = useI18n();
  const projects = [
    { t: "Lumen Analytics", c: "SaaS · 2025", d: t("w.1.d") },
    { t: "Orbit Health", c: "Mobile · 2024", d: t("w.2.d") },
    { t: "Atlas Commerce", c: "Web · 2024", d: t("w.3.d") },
    { t: "Nova Ops", c: "AI · 2025", d: t("w.4.d") },
  ];

  return (
    <section id="work" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t("work.eyebrow")}
          title={<>{t("work.title")}</>}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-card elevated"
            >
              <div className="absolute inset-0 grid-bg opacity-60" />
              <div className="absolute top-6 left-6 h-2 w-2 rounded-full bg-[var(--neon-pink)] animate-pulse-glow" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="text-xs text-muted-foreground font-mono mb-2">{p.c}</div>
                <h3 className="font-display text-3xl font-semibold">{p.t}</h3>
                <p className="mt-2 text-muted-foreground max-w-md">{p.d}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {t("work.case")} <span aria-hidden>→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
