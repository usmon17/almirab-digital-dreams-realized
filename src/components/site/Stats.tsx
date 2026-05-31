import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useI18n } from "./i18n";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString());
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  const { t } = useI18n();
  const stats = [
    { n: 120, s: "+", l: t("stats.1") },
    { n: 60, s: "+", l: t("stats.2") },
    { n: 8, s: "", l: t("stats.3") },
    { n: 40, s: "+", l: t("stats.4") },
  ];
  return (
    <section className="relative py-24 px-6 border-y border-border">
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="font-display text-5xl md:text-6xl font-semibold tracking-tight">
              <Counter to={s.n} />{s.s}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
