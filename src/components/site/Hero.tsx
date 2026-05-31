import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { useI18n } from "./i18n";
import { useTheme } from "./ThemeProvider";

const word = {
  hidden: { y: "110%", opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export function Hero() {
  const { t } = useI18n();
  const { theme } = useTheme();
  const words = t("hero.title").split(" ");

  return (
    <section id="top" className="relative min-h-dvh overflow-hidden pt-32 pb-24 noise">
      {theme === "dark" && (
        <>
          <img
            src={heroBg}
            alt=""
            width={1920}
            height={1080}
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        </>
      )}
      <div className="absolute inset-0 grid-bg" />

      {/* subtle floating glow — single, restrained */}
      <div className="pointer-events-none absolute top-1/4 -right-32 h-[420px] w-[420px] rounded-full bg-[var(--neon-blue)] opacity-20 blur-[120px] animate-float-slow" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--neon-pink)] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon-pink)]" />
          </span>
          {t("hero.badge")}
        </motion.div>

        <h1 className="font-display text-[clamp(2.5rem,7.5vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.22em]">
              <motion.span
                custom={i}
                variants={word}
                initial="hidden"
                animate="show"
                className={`inline-block ${i === words.length - 1 ? "text-aurora italic" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium transition-transform hover:scale-[1.03]"
          >
            {t("hero.cta1")}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-foreground/5 transition-colors"
          >
            {t("hero.cta2")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground"
        >
          <span className="tracking-[0.3em] uppercase">{t("hero.scroll")}</span>
          <span className="block h-10 w-px bg-gradient-to-b from-foreground/60 to-transparent animate-pulse-glow" />
        </motion.div>
      </div>
    </section>
  );
}
