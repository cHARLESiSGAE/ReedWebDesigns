import Link from "next/link";

export default function PrestigePropertyGroupDemo() {
  return (
    <main className="bg-white text-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs">
              <span className="font-semibold">Pro Site — $399+</span>
              <span className="text-zinc-500">•</span>
              <span className="font-medium text-zinc-700">Best for real estate</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Prestige Property Group
            </h1>
            <p className="mt-3 max-w-2xl text-zinc-600">
              Areas served: <span className="font-medium">Arcadia</span>,{" "}
              <span className="font-medium">San Diego</span>,{" "}
              <span className="font-medium">San Gabriel Valley</span>, nearby cities
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Schedule a Consultation
            </a>
            <a
              href="#valuation"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Request Home Value
            </a>
            <a
              href="#listings"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              View Listings
            </a>
          </div>
        </div>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-8">
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-700">
            Welcome! Whether you're buying, selling, or exploring your options, I
            provide local market insight, personal guidance, and responsive service
            every step of the way. From first-time buyers to homeowners preparing to
            sell, my goal is to make the process clear, strategic, and less stressful.
            Let’s talk about your real estate goals and build a plan that works for
            you.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Request a Call
            </a>
            <a
              href="#buy"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Buying
            </a>
            <a
              href="#sell"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Selling
            </a>
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-12" id="intro">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight">Your local advocate</h2>
            <p className="mt-3 text-zinc-600">
              I’m a boutique agent focused on clarity, responsiveness, and smart
              strategy — from the first conversation to closing day.
            </p>
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
              <div className="text-sm font-semibold">Quick facts</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li>• Responsive communication (same-day replies)</li>
                <li>• Negotiation-first approach</li>
                <li>• Clean, step-by-step process</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold">Buy with confidence</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Find the right home, avoid surprises, and move quickly when a deal
                  is right.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold">Sell with strategy</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Prep, pricing, and marketing that positions your home to attract the
                  best offers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div id="buy" className="rounded-3xl border border-zinc-200 bg-white p-8">
            <h3 className="text-xl font-semibold">Buy a home</h3>
            <p className="mt-3 text-zinc-600">
              Neighborhood guidance, offer strategy, inspection navigation, and clear
              next steps.
            </p>
            <div className="mt-6">
              <a
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
                href="#contact"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
          <div id="sell" className="rounded-3xl border border-zinc-200 bg-white p-8">
            <h3 className="text-xl font-semibold">Sell your home</h3>
            <p className="mt-3 text-zinc-600">
              Listing prep checklist, pricing plan, photography, and marketing that
              creates demand.
            </p>
            <div className="mt-6">
              <a
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                href="#valuation"
              >
                Request Home Value
              </a>
            </div>
          </div>
        </section>

        <section className="mt-12" id="listings">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Featured listings</h2>
              <p className="mt-2 text-zinc-600">A few example listings for the demo.</p>
            </div>
            <a
              href="#contact"
              className="hidden rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 sm:inline-flex"
            >
              Request a Call
            </a>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { addr: "123 Maple Drive", price: "$925,000" },
              { addr: "742 Oceanview Ave", price: "$1,450,000" },
              { addr: "19 Hillcrest Lane", price: "$780,000" },
            ].map((l) => (
              <div key={l.addr} className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm text-zinc-500">For sale</div>
                <div className="mt-2 font-semibold">{l.addr}</div>
                <div className="mt-2 text-lg font-semibold">{l.price}</div>
                <div className="mt-4 text-sm text-zinc-600">3 bd • 2 ba • 1,820 sqft</div>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
                  >
                    Request a Tour
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2" id="testimonials">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8">
            <div className="text-sm font-semibold">Testimonials</div>
            <p className="mt-3 text-zinc-600">
              “Clear communication and a plan we could trust. We never felt lost in the
              process.”
            </p>
            <p className="mt-2 text-sm text-zinc-500">— Client, Arcadia</p>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-white p-8">
            <div className="text-sm font-semibold">Testimonials</div>
            <p className="mt-3 text-zinc-600">
              “Strategic, responsive, and honest. We’d recommend Prestige to any buyer.”
            </p>
            <p className="mt-2 text-sm text-zinc-500">— Client, San Diego</p>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50 p-8" id="valuation">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-semibold tracking-tight">Home valuation</h2>
              <p className="mt-3 text-zinc-600">
                Get a clear estimate and a pricing plan — no pressure.
              </p>
            </div>
            <div className="md:col-span-4">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Request Home Value
              </a>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-zinc-200 bg-white p-8" id="contact">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-3 text-zinc-600">
            Tell me what you’re trying to do and I’ll recommend next steps.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Request a Call
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Schedule a Consultation
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
