import * as React from "react";
import Link from "next/link";
import { packages } from "@/lib/site-data";
import { Card } from "@/components/ui/card";

const accentById: Record<string, { border: string; glow: string; chip: string }> = {
  starter: {
    border: "from-amber-500/40 via-amber-200/10 to-white/10",
    glow: "hover:shadow-[0_30px_90px_rgba(245,158,11,0.18)]",
    chip: "bg-amber-500/10 text-amber-200 ring-1 ring-amber-500/20",
  },
  pro: {
    border: "from-cyan-500/45 via-blue-300/10 to-white/10",
    glow: "hover:shadow-[0_30px_90px_rgba(34,211,238,0.18)]",
    chip: "bg-cyan-500/10 text-cyan-200 ring-1 ring-cyan-500/20",
  },
  business: {
    border: "from-violet-500/45 via-fuchsia-300/10 to-white/10",
    glow: "hover:shadow-[0_30px_90px_rgba(168,85,247,0.20)]",
    chip: "bg-violet-500/10 text-violet-200 ring-1 ring-violet-500/20",
  },
  custom: {
    border: "from-emerald-500/45 via-emerald-200/10 to-white/10",
    glow: "hover:shadow-[0_30px_90px_rgba(16,185,129,0.18)]",
    chip: "bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-500/20",
  },
};

export function PackageCards({ showManagement = true }: { showManagement?: boolean }) {
  const tiers = showManagement ? packages : packages.filter((p) => p.id !== "management");

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {tiers
        .filter((p) => p.id !== "management")
        .map((p) => {
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
                isPopular ? "shadow-[0_0_0_1px_rgba(34,211,238,0.22)] md:scale-[1.02] md:-translate-y-1 z-10" : "",
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
                      <div className={["inline-flex rounded-full px-3 py-1 text-xs", accent.chip].join(" ")}>
                        {p.id === "starter"
                          ? "Amber"
                          : p.id === "pro"
                            ? "Cyan"
                            : p.id === "business"
                              ? "Purple"
                              : "Emerald"}
                        <span className="sr-only"> accent</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-semibold">{p.price}</div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 font-medium text-white/75">{p.description}</p>
                <ul className="mt-4 space-y-2 text-sm font-medium text-white/75">
                  {p.includes.slice(0, 5).map((i) => (
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
                    Get started
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 hover:shadow-[0_18px_70px_rgba(255,255,255,0.10)]"
                  >
                    Pricing
                  </Link>
                </div>
              </Card>
            </div>
          );
        })}

      {showManagement ? (
        <div className="relative rounded-3xl bg-gradient-to-b from-white/15 to-white/5 p-px md:col-span-2 card-lift hover:shadow-[0_30px_90px_rgba(255,255,255,0.08)]">
          <Card className="bg-transparent p-6 text-white glass-panel ring-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold tracking-tight">Monthly Website Management</div>
                <div className="mt-1 text-sm text-white/70">Updates, tweaks, and upkeep after launch.</div>
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
      ) : null}
    </div>
  );
}
