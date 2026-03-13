import Link from "next/link";
import { business } from "@/lib/site-data";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/real-estate", label: "Real estate" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/payment", label: "Payment" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-foreground">
          {business.name}
        </Link>

        <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="hover:text-foreground">
              {i.label}
            </Link>
          ))}
        </nav>

        <a
          href={business.phoneHref}
          className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted"
        >
          Call/Text {business.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
