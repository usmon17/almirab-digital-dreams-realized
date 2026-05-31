import { useI18n } from "./i18n";

export function Marquee() {
  const { t } = useI18n();
  const items = [
    t("s.web.t"), t("s.mob.t"), t("s.ai.t"), t("s.saas.t"),
    t("s.auto.t"), t("s.dsk.t"), t("s.ux.t"), t("s.cons.t"),
  ];
  const row = [...items, ...items];
  return (
    <div className="relative py-10 border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((it, i) => (
          <div key={i} className="flex items-center gap-10 px-10 font-display text-2xl md:text-4xl text-muted-foreground">
            <span>{it}</span>
            <span className="text-[var(--neon-pink)]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
