import Link from "next/link";

const palette = {
  cream: "#fbf6ee",
  charcoal: "#1f1c18",
  amber: "#d18a2a",
};

export default function HearthHoneyBistroDemo() {
  return (
    <main style={{ background: palette.cream, color: palette.charcoal }}>
      {/* Demo label */}
      <div className="border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
            <span className="font-semibold">Starter Site — $249+</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span className="font-medium">Best for restaurants</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur" style={{ background: "rgba(251,246,238,0.8)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-semibold tracking-tight">
            Hearth &amp; Honey Bistro
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            {[
              ["About", "#about"],
              ["Menu", "#menu"],
              ["Gallery", "#gallery"],
              ["Hours & Location", "#location"],
              ["Reservations", "#reservations"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="hover:underline">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#reservations"
            className="rounded-full px-4 py-2 text-sm font-semibold"
            style={{ background: palette.charcoal, color: palette.cream }}
          >
            Reserve
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="text-sm" style={{ color: "rgba(31,28,24,0.7)" }}>
              Seasonal flavors, crafted with care
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Warm hospitality. Thoughtful plates.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "rgba(31,28,24,0.75)" }}>
              Hearth &amp; Honey is a neighborhood bistro focused on seasonal ingredients,
              simple comforts, and a menu that changes with what’s fresh.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#reservations"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                style={{ background: palette.charcoal, color: palette.cream }}
              >
                Reserve a table
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold"
                style={{ borderColor: "rgba(0,0,0,0.14)" }}
              >
                View menu
              </a>
              <a
                href="tel:8583055764"
                className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold"
                style={{ borderColor: "rgba(0,0,0,0.14)" }}
              >
                Call
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              className="aspect-[4/3] w-full rounded-3xl border"
              style={{
                borderColor: "rgba(0,0,0,0.10)",
                background:
                  "linear-gradient(135deg, rgba(209,138,42,0.18), rgba(31,28,24,0.06))",
              }}
            >
              <div className="h-full w-full p-6">
                <div
                  className="h-full w-full rounded-2xl"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1600&q=80)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  aria-label="Restaurant interior"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(31,28,24,0.75)" }}>
              A small kitchen with a big focus: seasonal ingredients, warm service, and
              a menu designed for sharing.
            </p>
          </div>
          <div className="md:col-span-7 grid gap-4 sm:grid-cols-2">
            {[
              ["Local ingredients", "Fresh produce and rotating specials."],
              ["Comfort + craft", "Classic dishes with modern touches."],
              ["Cozy space", "Date nights, friends, and family."],
              ["Easy reservations", "Book online or call."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-3xl border bg-white p-6"
                style={{ borderColor: "rgba(0,0,0,0.10)" }}
              >
                <div className="font-semibold">{t}</div>
                <p className="mt-2 text-sm" style={{ color: "rgba(31,28,24,0.72)" }}>
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Menu</h2>
            <p className="mt-2 text-sm" style={{ color: "rgba(31,28,24,0.75)" }}>
              A preview of favorites. Full menu PDF/link can be added later.
            </p>
          </div>
          <a
            href="#reservations"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold"
            style={{ background: palette.charcoal, color: palette.cream }}
          >
            Reserve
          </a>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            "Honey-Glazed Salmon",
            "Wood-Fired Margherita Pizza",
            "Roasted Garlic Pasta",
            "House Chocolate Tart",
          ].map((dish) => (
            <div
              key={dish}
              className="rounded-3xl border bg-white p-6"
              style={{ borderColor: "rgba(0,0,0,0.10)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold">{dish}</div>
                  <p className="mt-2 text-sm" style={{ color: "rgba(31,28,24,0.72)" }}>
                    Seasonal ingredients, balanced flavors, and a finish you’ll remember.
                  </p>
                </div>
                <div className="text-sm font-semibold" style={{ color: palette.amber }}>
                  $18
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature dishes */}
      <section id="signature" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Signature dishes</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-4">
          {[
            {
              t: "Honey-Glazed Salmon",
              img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80",
            },
            {
              t: "Margherita Pizza",
              img: "https://images.unsplash.com/photo-1548365328-8b849e6f0f1b?auto=format&fit=crop&w=1200&q=80",
            },
            {
              t: "Roasted Garlic Pasta",
              img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=1200&q=80",
            },
            {
              t: "Chocolate Tart",
              img: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=1200&q=80",
            },
          ].map((d) => (
            <div key={d.t} className="overflow-hidden rounded-3xl border bg-white" style={{ borderColor: "rgba(0,0,0,0.10)" }}>
              <img src={d.img} alt={d.t} className="h-36 w-full object-cover" />
              <div className="p-4">
                <div className="text-sm font-semibold">{d.t}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
        <p className="mt-2 text-sm" style={{ color: "rgba(31,28,24,0.75)" }}>
          Real photos can be swapped in later. These are placeholders.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1555992336-03a23c7b20b1?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
          ].map((src) => (
            <div
              key={src}
              className="aspect-[4/3] overflow-hidden rounded-3xl border bg-white"
              style={{ borderColor: "rgba(0,0,0,0.10)" }}
            >
              <img src={src} alt="Food photo" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Hours & Location */}
      <section id="location" className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight">Hours &amp; Location</h2>
            <div className="mt-4 rounded-3xl border bg-white p-6" style={{ borderColor: "rgba(0,0,0,0.10)" }}>
              <div className="text-sm font-semibold">Hours</div>
              <div className="mt-3 space-y-1 text-sm" style={{ color: "rgba(31,28,24,0.75)" }}>
                <div>Mon–Thu: 4pm – 9pm</div>
                <div>Fri: 4pm – 10pm</div>
                <div>Sat: 12pm – 10pm</div>
                <div>Sun: 12pm – 8pm</div>
              </div>
              <div className="mt-5 text-sm font-semibold">Address</div>
              <div className="mt-2 text-sm" style={{ color: "rgba(31,28,24,0.75)" }}>
                100 Main Street, San Diego, CA
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-3xl border bg-white p-6" style={{ borderColor: "rgba(0,0,0,0.10)" }}>
              <div className="text-sm font-semibold">Map</div>
              <div
                className="mt-4 aspect-[16/9] w-full rounded-2xl"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, rgba(0,0,0,0.06), rgba(0,0,0,0.06) 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)",
                }}
                aria-label="Map placeholder"
              />
              <div className="mt-3 text-xs" style={{ color: "rgba(31,28,24,0.65)" }}>
                Replace this placeholder with an embedded map later.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section id="reservations" className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border bg-white p-8" style={{ borderColor: "rgba(0,0,0,0.10)" }}>
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-semibold tracking-tight">Reservations</h2>
              <p className="mt-3 text-sm" style={{ color: "rgba(31,28,24,0.75)" }}>
                Add OpenTable/Resy links later, or keep a simple form.
              </p>
            </div>
            <div className="md:col-span-4">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                style={{ background: palette.charcoal, color: palette.cream }}
              >
                Book now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border bg-white p-8" style={{ borderColor: "rgba(0,0,0,0.10)" }}>
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-3 text-sm" style={{ color: "rgba(31,28,24,0.75)" }}>
            Call for reservations, catering, or questions.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:8583055764"
              className="inline-flex flex-1 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              style={{ background: palette.charcoal, color: palette.cream }}
            >
              Call (858) 305-5764
            </a>
            <a
              href="#location"
              className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold"
              style={{ borderColor: "rgba(0,0,0,0.14)" }}
            >
              Get directions
            </a>
          </div>
        </div>

        <div className="mt-10 text-sm">
          <Link href="/portfolio" className="hover:underline" style={{ color: "rgba(31,28,24,0.75)" }}>
            ← Back to portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
