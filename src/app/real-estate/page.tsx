import Link from "next/link";

const concepts = [
  {
    title: "Signature Luxury",
    subtitle: "High-end, editorial presentation",
    tags: ["Luxury", "Editorial", "High-trust"],
    demoPath: "/demo/luxury-template/",
  },
  {
    title: "Coastal Modern",
    subtitle: "Bright, airy, calm",
    tags: ["Coastal", "Modern", "Bright"],
    demoPath: "/demo/coastal-modern/",
  },
  {
    title: "Minimal Prestige",
    subtitle: "Whitespace + premium typography",
    tags: ["Minimal", "Premium", "Clean"],
    demoPath: "/demo/minimal-prestige/",
  },
  {
    title: "Brokerage Pro",
    subtitle: "Team-ready credibility sections",
    tags: ["Team", "Brokerage", "Credibility"],
    demoPath: "/demo/brokerage-pro/",
  },
  {
    title: "Neighborhood Expert",
    subtitle: "Local guides + market pages",
    tags: ["Local", "Guides", "SEO-ready"],
    demoPath: "/demo/neighborhood-expert/",
  },
  {
    title: "Urban Edge",
    subtitle: "Bold grid for city markets",
    tags: ["Urban", "Bold", "Modern"],
    demoPath: "/demo/urban-edge/",
  },
  {
    title: "Editorial Living",
    subtitle: "Magazine-style lifestyle",
    tags: ["Editorial", "Lifestyle", "Story"],
    demoPath: "/demo/editorial-living/",
  },
  {
    title: "Lead Conversion",
    subtitle: "CTA-first, fast inquiry flow",
    tags: ["Conversion", "CTA", "Fast"],
    demoPath: "/demo/lead-conversion/",
  },
  {
    title: "Classic Showcase",
    subtitle: "Timeless, familiar, polished",
    tags: ["Classic", "Trust", "Simple"],
    demoPath: "/demo/classic-showcase/",
  },
];

const DEMO_BASE = "https://ckwmc-demo-sites.pages.dev";

export default function RealEstateConceptsPage() {
  return (
    <main className="bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs font-semibold tracking-widest text-[rgb(184,141,47)]">REAL ESTATE</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
            Modern real estate website concepts
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Pick a style direction you like. I’ll tailor it to your market, branding, brokerage requirements, and lead goals.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[rgb(5,8,20)] px-6 py-3 text-sm font-semibold text-white hover:bg-[rgb(11,18,36)]"
            >
              Request a personalized demo
            </Link>
            <a
              href="#concepts"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Browse concepts
            </a>
          </div>
        </div>
      </section>

      <section id="concepts">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Choose a style direction</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Each option is a starting point — we customize typography, sections, imagery, and lead flow.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[rgba(214,177,94,0.95)] px-5 py-2.5 text-sm font-semibold text-[rgb(5,8,20)] hover:bg-[rgba(201,162,75,0.95)]"
            >
              Get a demo link
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((c) => {
              const demoUrl = `${DEMO_BASE}${c.demoPath}`;
              return (
                <div key={c.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <div className="text-lg font-semibold text-foreground">{c.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{c.subtitle}</div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-[rgb(5,8,20)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[rgb(11,18,36)]"
                    >
                      Preview design
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
                    >
                      Use this style
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">Want it customized for your brand?</h3>
            <p className="mt-2 text-muted-foreground">
              Send your market + brokerage + favorite style. I’ll recommend a direction and build a personalized demo.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[rgb(5,8,20)] px-6 py-3 text-sm font-semibold text-white hover:bg-[rgb(11,18,36)]"
              >
                Contact Charlie
              </Link>
              <Link
                href="/intake"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Fill intake form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
