import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { useState } from "react";
import { useI18n } from "./i18n";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="relative mx-auto max-w-5xl">
        <SectionHeader
          eyebrow={t("contact.eyebrow")}
          title={<>{t("contact.title")}</>}
          description={t("contact.desc")}
        />

        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card/40 p-8 space-y-5"
          >
            <Field label={t("contact.name")} name="name" />
            <Field label={t("contact.email")} name="email" type="email" />
            <Field label={t("contact.company")} name="company" />
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{t("contact.details")}</label>
              <textarea
                rows={4}
                required
                className="w-full rounded-2xl bg-input/60 border border-border px-4 py-3 text-foreground outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              {sent ? t("contact.sent") : t("contact.send")}
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
            <InfoRow k={t("contact.email")} v="hello@almirab.studio" />
            <InfoRow k={t("contact.phone.k")} v="+998 90 000 00 00" />
            <InfoRow k={t("contact.studio.k")} v={t("contact.studio.v")} />
            <div className="pt-4 border-t border-border">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{t("contact.social")}</div>
              <div className="flex gap-3">
                {["X", "in", "GH", "Dr"].map((s) => (
                  <a key={s} href="#" className="h-10 w-10 rounded-full border border-border bg-card/40 flex items-center justify-center text-sm hover:border-foreground hover:text-foreground transition-colors">
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
        className="w-full rounded-2xl bg-input/60 border border-border px-4 py-3 text-foreground outline-none focus:border-foreground transition-colors"
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
