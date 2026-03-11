import * as React from "react";
import Link from "next/link";
import { packages } from "@/lib/site-data";
import { Card } from "@/components/ui/card";

export function PackageCards({ showManagement = true }: { showManagement?: boolean }) {
  const tiers = showManagement ? packages : packages.filter((p) => p.id !== "management");

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {tiers
        .filter((p) => p.id !== "management")
        .map((p) => (
          <Card key={p.id} className="border-white/10 bg-white/5 p-6 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold">{p.title}</div>
                {p.label ? (
                  <div className="mt-1 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {p.label}
                  </div>
                ) : null}
              </div>
              <div className="text-right">
                <div className="text-xl font-semibold">{p.price}</div>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/70">{p.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {p.includes.slice(0, 5).map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-200"
              >
                Get started
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5"
              >
                Pricing
              </Link>
            </div>
          </Card>
        ))}

      {showManagement ? (
        <Card className="border-white/10 bg-white/5 p-6 text-white md:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg font-semibold">Monthly Website Management</div>
              <div className="mt-1 text-sm text-white/70">
                Updates, tweaks, and upkeep after launch.
              </div>
            </div>
            <div className="text-xl font-semibold">$20–$100/mo</div>
          </div>
          <div className="mt-6">
            <Link
              href="/payment"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5"
            >
              Pay management
            </Link>
          </div>
        </Card>
      ) : null}
    </div>
  );
}
