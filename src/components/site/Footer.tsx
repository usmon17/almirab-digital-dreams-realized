export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-aurora" />
          <span className="font-display font-semibold text-foreground">ALMIRAB</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div>Crafted with care. Built to last.</div>
      </div>
    </footer>
  );
}
