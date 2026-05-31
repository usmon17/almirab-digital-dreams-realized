import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const quotes = [
  { q: "ALMIRAB shipped in six weeks what our previous vendor couldn't in six months. The bar is real.", n: "Dilnoza R.", r: "CEO, Lumen" },
  { q: "Quietly the most considered engineering team we've ever worked with. Every decision had a reason.", n: "Mark T.", r: "CTO, Atlas" },
  { q: "They cared about our users more than we did at times. The product is genuinely better for it.", n: "Sofia K.", r: "Head of Product, Orbit" },
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Words from the people we <span className="text-aurora italic">built with</span>.</>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="rounded-3xl glass p-7 flex flex-col gap-6"
            >
              <div className="text-[var(--neon-pink)] text-2xl leading-none">★★★★★</div>
              <blockquote className="text-lg leading-snug">"{q.q}"</blockquote>
              <figcaption className="flex items-center gap-3 mt-auto">
                <span className="h-10 w-10 rounded-full bg-aurora" />
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
