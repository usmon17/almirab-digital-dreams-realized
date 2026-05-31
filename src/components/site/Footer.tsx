import { useI18n } from "./i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative border-t border-border py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background font-display font-bold text-[10px]">A</span>
          <span className="font-display font-semibold text-foreground">ALMIRAB</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div>{t("footer.tag")}</div>
      </div>
    </footer>
  );
}
