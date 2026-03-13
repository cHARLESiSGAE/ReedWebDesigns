import Link from "next/link";
import { PackageCards } from "@/components/site/package-cards";

export default function Home() {
  return (
    <main>
      {/* HERO (warm + bright, inspired by the demo landing) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* background image */}
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2600&q=80"
            alt="Luxury home"
            loading="eager"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,8,20,0.68)] via-[rgba(5,8,20,0.52)] to-[rgba(5,8,20,0.80)]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 520px at 22% 20%, rgba(214,177,94,.18), transparent 55%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-16">
          <div className="py-14 sm:py-20">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/90">
              <span className="h-2 w-2 rounded-full bg-[rgb(214,177,94)]" />
              Reed Web Studio
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Warm, premium websites for local businesses — built to convert.
            </h1>

            <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
              Restaurants, real estate agents, home services, and local brands. Clear messaging,
              fast load times, and strong calls-to-action — without the “generic template” feel.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[rgb(5,8,20)] shadow-[0_16px_44px_rgba(5,8,20,.35)] hover:bg-[rgb(250,249,247)]"
              >
                Contact Charlie
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                View examples
              </Link>
              <Link
                href="/payment"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                Pay deposit
              </Link>
            </div>

            <div className="mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[{
                t: "Mobile-first",
                d: "Designed to convert on phones",
              },
              {
                t: "High-trust",
                d: "Credibility + clarity",
              },
              {
                t: "Custom-built",
                d: "Not a one-size template",
              },
              {
                t: "Fast launch",
                d: "From demo → live site",
              }].map((s) => (
                <div
                  key={s.t}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div className="text-lg font-semibold text-white">{s.t}</div>
                  <div className="text-xs text-white/70">{s.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 max-w-2xl rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80">
              <span className="font-semibold text-white">Quick process:</span> send your business type + market + vibe.
              I’ll reply with next steps and a simple scope (same day when you text/call).
              If you want, start with the <Link className="underline underline-offset-4" href="/get-started">intake form</Link>.
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-widest text-[rgb(184,141,47)]">
                PACKAGES
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Clear options — pick what fits.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Simple tiers so you know what makes sense right away. We can always customize.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full bg-[rgb(5,8,20)] px-6 py-3 text-sm font-semibold text-white hover:bg-[rgb(11,18,36)]"
                >
                  See pricing
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted"
                >
                  Ask what fits
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <PackageCards />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
