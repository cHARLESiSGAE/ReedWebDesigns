import { business } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">About</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        {business.owner} builds premium, conversion-focused websites for local
        businesses.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">What I build</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>• Restaurant starter sites (fast launch)</li>
            <li>• Real estate agent sites (trust + lead capture)</li>
            <li>• Multi-page business sites</li>
            <li>• Local lead gen landing pages</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">How it works</div>
          <ol className="mt-4 space-y-2 text-sm text-white/70">
            <li>1) Pick a package</li>
            <li>2) Pay deposit</li>
            <li>3) Review + revise</li>
            <li>4) Launch</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
