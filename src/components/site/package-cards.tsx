import Link from "next/link";
import { packages } from "@/lib/site-data";

const tierAccent: Record<string, { badge: string; ring: string }> = {
  starter: {
    ring: "ring-[rgba(214,177,94,0.28)]",
    badge: "bg-[rgba(214,177,94,0.16)] text-[rgb(5,8,20)]",
  },
  pro: {
    ring: "ring-[rgba(11,18,36,0.18)]",
    badge: "bg-[rgba(11,18,36,0.08)] text-[rgb(5,8,20)]",
  },
  business: {
    ring: "ring-[rgba(184,141,47,0.22)]",
    badge: "bg-[rgba(184,141,47,0.14)] text-[rgb(5,8,20)]",
  },
  custom: {
    ring: "ring-[rgba(11,18,36,0.14)]",
    badge: "bg-[rgba(11,18,36,0.06)] text-[rgb(5,8,20)]",
  },
};

export function PackageCards({ showManagement = true }: { showManagement?: boolean }) {
  const tiers = showManagement ? packages : packages.filter((p) => p.id !== "management");
  const mainTiers = tiers.filter((p) => p.id !== "management");
  const management = showManagement ? tiers.find((p) => p.id === "management") : undefined;

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {mainTiers.map((p) => {
        const a = tierAccent[p.id] ?? tierAccent.pro;
        const isPopular = p.id === "pro";

        return (
          <div
            key={p.id}
            className={[
              "relative rounded-3xl border border-border bg-card p-6 shadow-sm ring-1",
              a.ring,
              isPopular ? "md:scale-[1.01]" : "",
            ].join(" ")}
          >
            {isPopular ? (
              <div className="absolute -top-3 left-6 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold text-foreground">
                Most popular
              </div>
            ) : null}

            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold tracking-tight text-foreground">{p.title}</div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {p.label ? (
                    <div className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
                      {p.label}
                    </div>
                  ) : null}
                  <div className={["inline-flex rounded-full px-3 py-1 text-xs font-semibold", a.badge].join(" ")}>
                    {p.id.toUpperCase()}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-semibold text-foreground">{p.price}</div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">{p.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {p.includes.slice(0, 5).map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[rgba(11,18,36,0.35)]">•</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[rgb(5,8,20)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[rgb(11,18,36)]"
              >
                Get started
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Pricing
              </Link>
            </div>
          </div>
        );
      })}

      {management ? (
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg font-semibold tracking-tight text-foreground">Monthly Website Management</div>
              <div className="mt-2 text-sm text-muted-foreground">Updates, tweaks, and upkeep after launch.</div>
            </div>
            <div className="text-xl font-semibold text-foreground">{management.price}</div>
          </div>
          <div className="mt-6">
            <Link
              href="/payment"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Pay management
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
