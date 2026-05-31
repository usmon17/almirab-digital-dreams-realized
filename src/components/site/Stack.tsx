import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const groups = [
  { k: "Frontend", items: ["React", "Next.js", "Vue", "Flutter", "TypeScript", "Tailwind"] },
  { k: "Backend", items: ["Node.js", "NestJS", "Python", "FastAPI", "Go", "GraphQL"] },
  { k: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "Prisma", "Drizzle"] },
  { k: "Cloud", items: ["AWS", "GCP", "Docker", "Kubernetes", "Cloudflare", "Vercel"] },
];

export function Stack() {
  return (
    <section id="stack" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Stack"
          title={<>A modern toolkit, <span className="text-aurora italic">used with intent</span>.</>}
          description="We pick technologies that serve the product — not the other way around."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, gi) => (
            <motion.div
              key={g.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="rounded-3xl glass p-6"
            >
              <div className="font-display text-sm uppercase tracking-[0.25em] text-[var(--neon-pink)] mb-4">
                {g.k}
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-sm hover:border-[var(--neon-pink)] hover:text-[var(--neon-pink)] transition-colors"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
