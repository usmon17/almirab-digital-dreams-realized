import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { useI18n } from "./i18n";

export function Services() {
  const { t } = useI18n();
  const services = [
    { n: "01", t: t("s.web.t"), d: t("s.web.d") },
    { n: "02", t: t("s.mob.t"), d: t("s.mob.d") },
    { n: "03", t: t("s.dsk.t"), d: t("s.dsk.d") },
    { n: "04", t: t("s.ux.t"), d: t("s.ux.d") },
    { n: "05", t: t("s.saas.t"), d: t("s.saas.d") },
    { n: "06", t: t("s.ai.t"), d: t("s.ai.d") },
    { n: "07", t: t("s.auto.t"), d: t("s.auto.d") },
    { n: "08", t: t("s.cons.t"), d: t("s.cons.d") },
  ];

  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t("services.eyebrow")}
          title={<>{t("services.title")}</>}
          description={t("services.desc")}
        />

        <div className="grid gap-px rounded-3xl overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group relative bg-background p-7 min-h-[220px] flex flex-col justify-between overflow-hidden transition-colors hover:bg-card"
            >
              <div className="absolute inset-x-0 -bottom-px h-px bg-[var(--neon-pink)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
