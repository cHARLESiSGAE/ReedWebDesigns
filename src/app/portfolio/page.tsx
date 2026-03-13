import Link from "next/link";
import { portfolio } from "@/lib/site-data";

export default function PortfolioPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold tracking-widest text-[rgb(184,141,47)]">PORTFOLIO</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">Portfolio</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Client-ready niche demos that show exactly what you’ll get.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {portfolio.demos.map((d) => (
            <div key={d.slug} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="text-xs text-muted-foreground">{d.industry}</div>
              <div className="mt-1 text-lg font-semibold text-foreground">{d.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{d.tier}</div>
              <div className="mt-4 inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
                {d.label}
              </div>

              <div className="mt-6">
                <Link
                  href={d.href}
                  className="inline-flex items-center justify-center rounded-full bg-[rgb(5,8,20)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[rgb(11,18,36)]"
                >
                  View demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
