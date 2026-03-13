import { business } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-semibold text-foreground">{business.name}</div>
            <div>Owner: {business.owner}</div>
          </div>
          <div className="flex flex-col items-start gap-1 sm:items-end">
            <a className="text-foreground hover:underline" href={business.phoneHref}>
              {business.phoneDisplay}
            </a>
            <a className="text-foreground hover:underline" href={business.emailHref}>
              {business.emailDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
