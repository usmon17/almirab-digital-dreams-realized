import { motion } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass flex items-center gap-2 rounded-full px-2 py-2 elevated">
        <a href="#top" className="flex items-center gap-2 pl-3 pr-4">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-aurora">
            <span className="absolute inset-0 rounded-full bg-aurora blur-md opacity-70" />
            <span className="relative font-display font-bold text-[10px] text-background">A</span>
          </span>
          <span className="font-display font-semibold tracking-tight">ALMIRAB</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 px-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="ml-1 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Start project
          <span aria-hidden>→</span>
        </a>
      </nav>
    </motion.header>
  );
}
