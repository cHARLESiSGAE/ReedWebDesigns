import Link from "next/link";
import { packages } from "@/lib/site-data";
import { Card } from "@/components/ui/card";

const accentById: Record<string, { border: string; glow: string; badge: string }> = {
  starter: {
    border: "from-amber-500/40 via-amber-200/10 to-white/10",
    glow: "hover:shadow-[0_30px_90px_rgba(245,158,11,0.18)]",
    badge: "bg-amber-500/10 text-amber-200 ring-1 ring-amber-500/20",
  },
  pro: {
    border: "from-cyan-500/45 via-blue-300/10 to-white/10",
    glow: "hover:shadow-[0_30px_90px_rgba(34,211,238,0.18)]",
    badge: "bg-cyan-500/10 text-cyan-200 ring-1 ring-cyan-500/20",
  },
  business: {
    border: "from-violet-500/45 via-fuchsia-300/10 to-white/10",
    glow: "hover:shadow-[0_30px_90px_rgba(168,85,247,0.20)]",
    badge: "bg-violet-500/10 text-violet-200 ring-1 ring-violet-500/20",
  },
  custom: {
    border: "from-emerald-500/45 via-emerald-200/10 to-white/10",
    glow: "hover:shadow-[0_30px_90px_rgba(16,185,129,0.18)]",
    badge: "bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-500/20",
  },
};

export default function PricingPage() {
  const tiers = packages.filter((p) => p.id !== "management");

  return (
    <main className="premium-radial relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Pricing
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Clear starting points. Final pricing depends on pages, features, and how custom you want the build.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {tiers.map((p) => {
            const accent = accentById[p.id] ?? accentById.pro;
            const isPopular = p.id === "pro";

            return (
              <div
                key={p.id}
                className={[
                  "relative rounded-3xl p-px",
                  "bg-gradient-to-b",
                  accent.border,
                  "transition",
                  "card-lift",
                  accent.glow,
                  isPopular ? "shadow-[0_0_0_1px_rgba(34,211,238,0.22)]" : "",
                ].join(" ")}
              >
                {isPopular ? (
                  <div className="pointer-events-none absolute -top-3 left-6 z-10 inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 px-3 py-1 text-[11px] font-semibold text-white ring-1 ring-white/15 backdrop-blur">
                    Most popular
                  </div>
                ) : null}

                <Card className="bg-transparent p-6 text-white glass-panel ring-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold tracking-tight">{p.title}</div>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        {p.label ? (
                          <div className="inline-flex rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">
                            {p.label}
                          </div>
                        ) : null}
                        <div className={["inline-flex rounded-full px-3 py-1 text-xs", accent.badge].join(" ")}>
                          {p.id === "starter"
                            ? "Starter"
                            : p.id === "pro"
                              ? "Pro"
                              : p.id === "business"
                                ? "Business"
                                : "Custom"}
                          <span className="sr-only"> tier</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-semibold">{p.price}</div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-white/70">{p.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {p.includes.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-white/40">•</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200 hover:shadow-[0_18px_70px_rgba(255,255,255,0.18)]"
                    >
                      Request a quote
                    </Link>
                    <Link
                      href="/payment"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 hover:shadow-[0_18px_70px_rgba(255,255,255,0.10)]"
                    >
                      Pay deposit
                    </Link>
                  </div>
                </Card>
              </div>
            );
          })}

          <div className="relative rounded-3xl bg-gradient-to-b from-white/15 to-white/5 p-px md:col-span-2 card-lift hover:shadow-[0_30px_90px_rgba(255,255,255,0.08)]">
            <Card className="bg-transparent p-6 text-white glass-panel ring-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold tracking-tight">Monthly Website Management</div>
                  <div className="mt-2 text-sm text-white/70">
                    $20–$100/mo (depending on how much help you want)
                  </div>
                </div>
                <div className="text-xl font-semibold">$20–$100/mo</div>
              </div>
              <div className="mt-6">
                <Link
                  href="/payment"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 hover:shadow-[0_18px_70px_rgba(255,255,255,0.10)]"
                >
                  Pay management
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
