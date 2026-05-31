const items = [
  "Web Apps",
  "Mobile Apps",
  "AI Systems",
  "SaaS Platforms",
  "Automation",
  "Desktop Software",
  "Design Systems",
  "Consulting",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative py-10 border-y border-border/60 overflow-hidden">
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
