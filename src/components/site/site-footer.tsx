import { business } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/70">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-semibold text-white">{business.name}</div>
            <div className="text-white/70">Owner: {business.owner}</div>
          </div>
          <a className="text-white hover:underline" href={business.phoneHref}>
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
