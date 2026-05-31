import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { useI18n } from "./i18n";

export function WhyUs() {
  const { t } = useI18n();
  const items = [
    { t: t("why.1.t"), d: t("why.1.d") },
    { t: t("why.2.t"), d: t("why.2.d") },
    { t: t("why.3.t"), d: t("why.3.d") },
    { t: t("why.4.t"), d: t("why.4.d") },
    { t: t("why.5.t"), d: t("why.5.d") },
    { t: t("why.6.t"), d: t("why.6.d") },
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t("why.eyebrow")}
          title={<>{t("why.title")}</>}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-border bg-card/40 p-6 hover:border-foreground/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border font-mono text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
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
