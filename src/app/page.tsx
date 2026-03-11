import Link from "next/link";
import { PackageCards } from "@/components/site/package-cards";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-sm text-white/70">Premium freelance web design for local businesses</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Websites that look premium and get you paid.
            </h1>
            <p className="mt-5 max-w-2xl text-white/70">
              I build conversion-focused websites for restaurants, real estate agents,
              home service businesses, and local brands.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-neutral-200"
              >
                Contact Charlie
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                View examples
              </Link>
              <Link
                href="/payment"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                Pay deposit
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="font-semibold">Starter</div>
                <div className="text-xs text-white/70">$249+ (restaurants)</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="font-semibold">Pro</div>
                <div className="text-xs text-white/70">$399+ (real estate)</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="font-semibold">Business</div>
                <div className="text-xs text-white/70">$900+ (multi-page)</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="font-semibold">Management</div>
                <div className="text-xs text-white/70">$20–$100/mo</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8">
              <div className="text-sm font-semibold text-white/80">Fast, guided process</div>
              <ol className="mt-4 space-y-3 text-sm text-white/70">
                <li>1) Pick a package and vibe</li>
                <li>2) Pay deposit (Stripe links added next)</li>
                <li>3) I build + you review</li>
                <li>4) Launch and start converting</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Packages
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Clear options with best-fit positioning so you instantly know what tier
            makes sense.
          </p>
          <div className="mt-8">
            <PackageCards />
          </div>
        </div>
      </section>
    </main>
  );
}
