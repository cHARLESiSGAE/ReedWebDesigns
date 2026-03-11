import Link from "next/link";
import { PackageCards } from "@/components/site/package-cards";

export default function Home() {
  return (
    <main>
      <section className="premium-radial relative overflow-hidden">
        {/* extra glow layers */}
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-violet-500/15 to-emerald-500/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 right-[-10%] h-[420px] w-[520px] rounded-full bg-gradient-to-tr from-amber-500/18 via-pink-500/10 to-transparent blur-3xl" />

        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-sm text-white/70">Premium freelance web design for local businesses</p>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight leading-[1.02] md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_10px_45px_rgba(34,211,238,0.20)]">
                  Websites that look premium
                </span>{" "}
                <span className="text-white/90">and get you paid.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base text-white/70 md:text-lg">
                I build conversion-focused websites for restaurants, real estate agents, home service businesses, and local brands.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 hover:shadow-[0_18px_70px_rgba(255,255,255,0.18)]"
                >
                  Contact Charlie
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:shadow-[0_18px_70px_rgba(34,211,238,0.14)]"
                >
                  View examples
                </Link>
                <Link
                  href="/payment"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:shadow-[0_18px_70px_rgba(168,85,247,0.16)]"
                >
                  Pay deposit
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { t: "Starter", d: "$249+ (restaurants)" },
                  { t: "Pro", d: "$399+ (real estate)" },
                  { t: "Business", d: "$900+ (multi-page)" },
                  { t: "Management", d: "$20–$100/mo" },
                ].map((s) => (
                  <div
                    key={s.t}
                    className="glass-panel card-lift rounded-2xl px-4 py-3 ring-0"
                  >
                    <div className="font-semibold">{s.t}</div>
                    <div className="text-xs text-white/70">{s.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-panel rounded-3xl p-8">
                <div className="text-sm font-semibold text-white/80">Fast, guided process</div>
                <ol className="mt-4 space-y-3 text-sm text-white/70">
                  <li>1) Pick a package and vibe</li>
                  <li>2) Pay deposit (Stripe links added next)</li>
                  <li>3) I build + you review</li>
                  <li>4) Launch and start converting</li>
                </ol>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold text-white/80">Response time</div>
                  <div className="mt-1 text-sm text-white/70">
                    Same-day replies when you text/call.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Packages</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Clear options with best-fit positioning so you instantly know what tier makes sense.
            </p>
            <div className="mt-8">
              <PackageCards />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
