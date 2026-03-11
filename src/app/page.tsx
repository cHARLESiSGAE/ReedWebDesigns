import Link from "next/link";
import { PackageCards } from "@/components/site/package-cards";

export default function Home() {
  return (
    <main>
      <section className="premium-radial relative overflow-hidden">
        {/* extra glow layers */}
        <div aria-hidden className="pointer-events-none absolute -top-28 left-1/2 h-[480px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/22 via-violet-500/16 to-emerald-500/12 blur-3xl animate-aurora" />
        <div aria-hidden className="pointer-events-none absolute -bottom-44 right-[-10%] h-[440px] w-[560px] rounded-full bg-gradient-to-tr from-amber-500/18 via-pink-500/10 to-transparent blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute left-10 top-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-sm uppercase tracking-[0.25em] font-semibold text-white/75">
                Premium freelance web design for local businesses
              </p>

              <div className="relative mt-7">
                <div aria-hidden className="pointer-events-none absolute -inset-x-10 -inset-y-6 rounded-[48px] bg-gradient-to-r from-cyan-500/12 via-violet-500/10 to-emerald-500/8 blur-2xl" />
                <h1 className="relative text-5xl font-bold font-serif tracking-[0.02em] leading-[1.02] md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_10px_45px_rgba(34,211,238,0.20)]">
                  Websites that look premium
                </span>{" "}
                <span className="text-white/90">and get you paid.</span>
                </h1>
              </div>

              <p className="mt-7 max-w-2xl text-lg leading-8 font-medium text-white/75">
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
              <div className="glass-panel rounded-3xl p-8 relative">
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-transparent opacity-60" />
                <div className="relative text-sm uppercase tracking-[0.22em] font-semibold text-white/80">Fast, guided process</div>
                <ol className="relative mt-5 space-y-3.5 text-sm font-medium text-white/75">
                  <li>1) Pick a package and vibe</li>
                  <li>2) Pay deposit (Stripe links added next)</li>
                  <li>3) I build + you review</li>
                  <li>4) Launch and start converting</li>
                </ol>

                <div className="relative mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] font-semibold text-white/80">Response time</div>
                  <div className="mt-2 text-sm font-medium text-white/75">
                    Same-day replies when you text/call.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Packages</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 font-medium text-white/75">
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
