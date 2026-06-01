import { motion } from "framer-motion";
import { useI18n, type Lang } from "./i18n";
import { useTheme } from "./ThemeProvider";

export function Nav() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();

  const links = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.process"), href: "#process" },
    { label: t("nav.work"), href: "#work" },
    { label: t("nav.stack"), href: "#stack" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass flex items-center gap-1 rounded-full px-2 py-2 elevated">
        <a href="#top" className="flex items-center gap-2 pl-3 pr-4">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground">
            <span className="font-display font-bold text-[10px] text-background">A</span>
          </span>
          <span className="font-display font-semibold tracking-tight">almirab</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 px-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-foreground/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Lang switcher */}
        <div className="hidden sm:flex items-center gap-0.5 rounded-full bg-foreground/5 p-0.5 mr-1">
          {(["uz", "ru", "en"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2.5 py-1 text-[11px] font-medium uppercase rounded-full transition-colors ${
                lang === l ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="mr-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-foreground"
        >
          {theme === "dark" ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {t("nav.cta")}
          <span aria-hidden>→</span>
        </a>
      </nav>
    </motion.header>
  );
}
