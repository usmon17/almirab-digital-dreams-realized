import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 max-w-3xl"
    >
      <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span className="h-px w-8 bg-[var(--neon-pink)]" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
