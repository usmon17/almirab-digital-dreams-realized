import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-aurora opacity-20 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's build something <span className="text-aurora italic">remarkable</span>.</>}
          description="Tell us about your project. We respond within one business day."
        />

        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="glass rounded-3xl p-8 space-y-5"
          >
            <Field label="Your name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Company" name="company" />
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Project details</label>
              <textarea
                rows={4}
                required
                className="w-full rounded-2xl bg-input/60 border border-border px-4 py-3 text-foreground outline-none focus:border-[var(--neon-pink)] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3.5 text-sm font-medium text-background glow-pink hover:scale-[1.02] transition-transform"
            >
              {sent ? "Thank you — we'll be in touch ✨" : "Send message"}
              {!sent && <span>→</span>}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <InfoRow k="Email" v="hello@almirab.studio" />
            <InfoRow k="Phone" v="+998 90 000 00 00" />
            <InfoRow k="Studio" v="Tashkent · Remote worldwide" />
            <div className="pt-4 border-t border-border/60">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Social</div>
              <div className="flex gap-3">
                {["X", "in", "GH", "Dr"].map((s) => (
                  <a key={s} href="#" className="h-10 w-10 rounded-full glass flex items-center justify-center text-sm hover:text-[var(--neon-pink)] hover:border-[var(--neon-pink)] transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full rounded-2xl bg-input/60 border border-border px-4 py-3 text-foreground outline-none focus:border-[var(--neon-pink)] transition-colors"
      />
    </div>
  );
}

function InfoRow({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</div>
      <div className="mt-1 text-lg">{v}</div>
    </div>
  );
}
