import Link from "next/link";
import { PackageCards } from "@/components/site/package-cards";

export default function Home() {
  return (
    <main>
      <section className="premium-radial relative overflow-hidden min-h-[92vh]">
        {/* extra glow layers */}
        <div aria-hidden className="pointer-events-none absolute -top-36 left-1/2 h-[560px] w-[1080px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/26 via-violet-500/18 to-emerald-500/12 blur-3xl animate-aurora" />
        <div aria-hidden className="pointer-events-none absolute -bottom-52 right-[-10%] h-[520px] w-[640px] rounded-full bg-gradient-to-tr from-amber-500/18 via-pink-500/10 to-transparent blur-3xl" />

        {/* atmospheric left blue + center/right violet + subtle teal corners */}
        <div aria-hidden className="pointer-events-none absolute left-[-18%] top-10 h-[760px] w-[760px] rounded-full bg-cyan-500/12 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute right-[-22%] top-[-6%] h-[840px] w-[840px] rounded-full bg-violet-500/12 blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute left-6 bottom-[-18%] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[110px]" />
        <div aria-hidden className="pointer-events-none absolute right-10 bottom-[-22%] h-[380px] w-[380px] rounded-full bg-teal-400/8 blur-[110px]" />

        <div className="mx-auto max-w-6xl px-6 pt-24 pb-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-sm uppercase tracking-[0.25em] font-semibold text-white/75">
                Premium freelance web design for local businesses
              </p>

              <div className="relative mt-7">
                <div aria-hidden className="pointer-events-none absolute -inset-x-10 -inset-y-6 rounded-[48px] bg-gradient-to-r from-cyan-500/12 via-violet-500/10 to-emerald-500/8 blur-2xl" />
                <h1 className="relative text-5xl font-black font-serif tracking-[-0.015em] leading-[1.01] md:text-7xl lg:text-8xl">
                  <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_18px_70px_rgba(34,211,238,0.22)]">
                    Websites that look premium
                  </span>{" "}
                  <span className="text-white/90 drop-shadow-[0_18px_70px_rgba(168,85,247,0.16)]">and get you paid.</span>
                </h1>
              </div>

              <p className="mt-7 max-w-2xl text-lg leading-8 font-medium text-white/75">
                I build conversion-focused websites for restaurants, real estate agents, home service businesses, and local brands.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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

              <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { t: "Starter", d: "$249+ (restaurants)", glow: "glow-amber" },
                  { t: "Pro", d: "$399+ (real estate)", glow: "glow-cyan" },
                  { t: "Business", d: "$900+ (multi-page)", glow: "glow-purple" },
                  { t: "Management", d: "$20–$100/mo", glow: "glow-emerald" },
                ].map((s) => (
                  <div
                    key={s.t}
                    className={`package-mini glass-panel card-lift ${s.glow} rounded-2xl px-5 py-4 ring-0`}
                  >
                    <div className="text-sm font-semibold tracking-tight">{s.t}</div>
                    <div className="mt-1 text-xs text-white/70">{s.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="hero-glass glass-panel rounded-3xl p-10 relative">
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/12 via-white/6 to-transparent opacity-70" />
                <div aria-hidden className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-500/20 via-violet-500/14 to-emerald-500/12 blur-2xl opacity-60" />

                <div className="relative text-sm uppercase tracking-[0.24em] font-semibold text-white/85">
                  Fast, guided process
                </div>

                <ol className="relative mt-6 space-y-4 text-base font-medium text-white/80">
                  <li>1) Choose the package that fits your business</li>
                  <li>2) Pay deposit (Stripe links added next)</li>
                  <li>3) I build + you review</li>
                  <li>4) Launch and start converting</li>
                </ol>

                <div className="relative mt-8 rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
                  <div className="text-xs uppercase tracking-[0.24em] font-semibold text-white/85">
                    Response time
                  </div>
                  <div className="mt-2 text-base font-medium text-white/80">
                    Same-day replies when you text/call.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-28">
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
