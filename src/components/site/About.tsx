import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { useI18n } from "./i18n";

export function About() {
  const { t } = useI18n();
  const pillars = [
    { k: t("about.mission.k"), v: t("about.mission.v") },
    { k: t("about.vision.k"), v: t("about.vision.v") },
    { k: t("about.values.k"), v: t("about.values.v") },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t("about.eyebrow")}
          title={<>{t("about.title")}</>}
          description={t("about.desc")}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl border border-border bg-card/40 p-8 hover:border-[var(--neon-pink)]/40 transition-colors"
            >
              <div className="font-display text-sm uppercase tracking-[0.25em] text-[var(--neon-pink)]">{p.k}</div>
              <p className="mt-4 text-xl leading-snug">{p.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
