import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { useI18n } from "./i18n";

export function Testimonials() {
  const { t } = useI18n();
  const quotes = [
    { q: t("tst.1.q"), n: "Dilnoza R.", r: "CEO, Lumen" },
    { q: t("tst.2.q"), n: "Mark T.", r: "CTO, Atlas" },
    { q: t("tst.3.q"), n: "Sofia K.", r: "Head of Product, Orbit" },
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t("tst.eyebrow")}
          title={<>{t("tst.title")}</>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="rounded-3xl border border-border bg-card/40 p-7 flex flex-col gap-6"
            >
              <div className="text-[var(--neon-pink)] text-lg leading-none tracking-widest">★★★★★</div>
              <blockquote className="text-lg leading-snug">"{q.q}"</blockquote>
              <figcaption className="flex items-center gap-3 mt-auto">
                <span className="h-10 w-10 rounded-full bg-foreground/10 flex items-center justify-center font-display text-sm">
                  {q.n.charAt(0)}
                </span>
                <span>
                  <span className="block font-medium">{q.n}</span>
                  <span className="block text-sm text-muted-foreground">{q.r}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
