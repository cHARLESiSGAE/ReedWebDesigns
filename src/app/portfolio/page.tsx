import Link from "next/link";
import { Card } from "@/components/ui/card";
import { portfolio } from "@/lib/site-data";

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Portfolio</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Client-ready niche demos that show exactly what you’ll get.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {portfolio.demos.map((d) => (
          <Card key={d.slug} className="border-white/10 bg-white/5 p-6 text-white">
            <div className="text-xs text-white/60">{d.industry}</div>
            <div className="mt-2 text-lg font-semibold">{d.title}</div>
            <div className="mt-2 text-sm text-white/70">{d.tier}</div>
            <div className="mt-3 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              {d.label}
            </div>
            <div className="mt-6">
              <Link
                href={d.href}
                className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-200"
              >
                View demo
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
