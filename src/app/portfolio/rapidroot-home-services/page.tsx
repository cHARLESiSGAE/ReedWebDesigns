import Link from "next/link";

export default function RapidRootHomeServicesDemo() {
  return (
    <main className="bg-white text-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs">
              <span className="font-semibold">Business example</span>
              <span className="text-zinc-500">•</span>
              <span className="font-medium text-zinc-700">Home services</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              RapidRoot Home Services
            </h1>
            <p className="mt-3 max-w-2xl text-zinc-600">
              Reliable home services when you need them most. Fast response times,
              clear pricing, and quality work homeowners can trust.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:8583055764"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Call Now
            </a>
            <a
              href="#emergency"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Schedule Service
            </a>
          </div>
        </div>

        {/* Sales label (keep page design; small premium info panel under hero) */}
        <div className="mt-6 rounded-2xl border border-violet-200 bg-gradient-to-b from-violet-50 to-white p-4">
          <div className="text-xs font-semibold text-violet-700">Example of a Business Site — starting at $900</div>
          <div className="mt-1 text-sm text-zinc-600">
            Best for service companies that want a stronger multi-page website and more leads.
          </div>
          <div className="mt-1 text-sm text-zinc-600">
            Call or text Charlie Reed: <span className="font-semibold">858-305-5764</span>
          </div>
        </div>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Licensed & insured",
              "Same-day service",
              "Locally owned",
              "Free estimates",
            ].map((t) => (
              <div key={t} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold">
                {t}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12" id="services">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              "Drain cleaning",
              "Water heater repair",
              "Pipe replacement",
              "Emergency plumbing",
              "HVAC maintenance",
            ].map((s) => (
              <div key={s} className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="font-semibold">{s}</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Clear pricing, quality work, and fast scheduling.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-12" id="why">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight">Why choose us</h2>
            <p className="mt-3 text-zinc-600">
              Professional, responsive, and straightforward — no surprises.
            </p>
          </div>
          <div className="md:col-span-7 grid gap-4 sm:grid-cols-2">
            {[
              "Fast response times",
              "Up-front communication",
              "Quality workmanship",
              "Clean job sites",
            ].map((w) => (
              <div key={w} className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="font-semibold">{w}</div>
                <p className="mt-2 text-sm text-zinc-600">Built for homeowner trust.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-zinc-200 bg-white p-8" id="areas">
          <h2 className="text-2xl font-semibold tracking-tight">Service areas</h2>
          <p className="mt-3 text-zinc-600">
            Serving local neighborhoods with same-day availability when possible.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {["Arcadia", "San Diego", "Pasadena", "La Mesa", "El Cajon"].map((a) => (
              <span key={a} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1">
                {a}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2" id="reviews">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-3xl border border-zinc-200 bg-white p-8">
              <div className="text-sm font-semibold">Customer review</div>
              <p className="mt-3 text-zinc-600">
                “Fast response, clear pricing, and the job was done right the first time.”
              </p>
              <p className="mt-2 text-sm text-zinc-500">— Homeowner</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50 p-8" id="quote">
          <h2 className="text-2xl font-semibold tracking-tight">Request a quote</h2>
          <p className="mt-3 text-zinc-600">
            Demo form placeholder (replace with real form later).
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <input className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm" placeholder="Name" />
            <input className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm" placeholder="Phone" />
            <input className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm sm:col-span-2" placeholder="What do you need help with?" />
          </div>
          <div className="mt-6">
            <button className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800" type="button">
              Get a Free Quote
            </button>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-zinc-200 bg-white p-8" id="emergency">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Emergency?</h2>
              <p className="mt-2 text-zinc-600">
                Call now for the fastest response.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
              href="tel:8583055764"
            >
              Call Now
            </a>
          </div>
        </section>

        <div className="mt-10 text-sm">
          <Link href="/portfolio" className="text-zinc-600 hover:underline">
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
