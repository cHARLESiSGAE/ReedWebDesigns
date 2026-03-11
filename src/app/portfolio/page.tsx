import Link from "next/link";
import { Card } from "@/components/ui/card";
import { portfolio } from "@/lib/site-data";

const accentBySlug: Record<string, { border: string; overlay: string }> = {
  "hearth-honey-bistro": {
    border: "from-amber-500/40 via-amber-200/10 to-white/10",
    overlay: "from-amber-500/20 via-orange-400/10 to-transparent",
  },
  "prestige-property-group": {
    border: "from-cyan-500/45 via-blue-300/10 to-white/10",
    overlay: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  "rapidroot-home-services": {
    border: "from-violet-500/45 via-fuchsia-300/10 to-white/10",
    overlay: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
  },
};

export default function PortfolioPage() {
  return (
    <main className="premium-radial relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Portfolio</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 font-medium text-white/75">
          Client-ready niche demos that show exactly what you’ll get.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {portfolio.demos.map((d) => {
            const accent = accentBySlug[d.slug] ?? accentBySlug["prestige-property-group"];

            return (
              <div
                key={d.slug}
                className={[
                  "relative rounded-3xl p-px",
                  "bg-gradient-to-b",
                  accent.border,
                  "transition",
                  "card-lift",
                ].join(" ")}
              >
                <Card className="bg-transparent p-6 text-white glass-panel ring-0">
                  <div className="rounded-2xl border border-white/10 bg-black/30">
                    <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                      </div>
                      <div className="ml-2 truncate rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/70 ring-1 ring-white/10">
                        {d.title} — Preview
                      </div>
                    </div>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-b-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                      <div className={["absolute inset-0 bg-gradient-to-tr", accent.overlay].join(" ")} />
                      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.10)_1px,transparent_0)] [background-size:22px_22px]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-xs text-white/70">{d.industry}</div>
                        <div className="mt-1 text-lg font-semibold tracking-tight">{d.title}</div>
                        <div className="mt-1 text-sm font-medium text-white/75">{d.tier}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="inline-flex rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">
                      {d.label}
                    </div>
                    <Link
                      href={d.href}
                      className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200 hover:shadow-[0_18px_70px_rgba(255,255,255,0.18)]"
                    >
                      View demo
                    </Link>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
