import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { useI18n } from "./i18n";

export function Process() {
  const { t } = useI18n();
  const steps = [
    { t: t("p.1.t"), d: t("p.1.d") },
    { t: t("p.2.t"), d: t("p.2.d") },
    { t: t("p.3.t"), d: t("p.3.d") },
    { t: t("p.4.t"), d: t("p.4.d") },
    { t: t("p.5.t"), d: t("p.5.d") },
    { t: t("p.6.t"), d: t("p.6.d") },
    { t: t("p.7.t"), d: t("p.7.d") },
  ];

  return (
    <section id="process" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t("process.eyebrow")}
          title={<>{t("process.title")}</>}
          description={t("process.desc")}
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" aria-hidden />
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
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-foreground ring-4 ring-background" />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
