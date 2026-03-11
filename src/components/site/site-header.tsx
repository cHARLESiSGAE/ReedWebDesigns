import Link from "next/link";
import { business } from "@/lib/site-data";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/payment", label: "Payment" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-white">
          {business.name}
        </Link>

        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="hover:text-white">
              {i.label}
            </Link>
          ))}
        </nav>

        <a
          href={business.phoneHref}
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5"
        >
          Call/Text {business.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
