import { business } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold tracking-widest text-[rgb(184,141,47)]">ABOUT</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">About</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {business.owner} builds premium, conversion-focused websites for local businesses.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="text-lg font-semibold text-foreground">What I build</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-[rgba(11,18,36,0.35)]">•</span><span>Restaurant starter sites (fast launch)</span></li>
              <li className="flex gap-2"><span className="text-[rgba(11,18,36,0.35)]">•</span><span>Real estate agent sites (trust + lead capture)</span></li>
              <li className="flex gap-2"><span className="text-[rgba(11,18,36,0.35)]">•</span><span>Multi-page business sites</span></li>
              <li className="flex gap-2"><span className="text-[rgba(11,18,36,0.35)]">•</span><span>Local lead gen landing pages</span></li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="text-lg font-semibold text-foreground">How it works</div>
            <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-[rgba(11,18,36,0.35)]">1.</span><span>Pick a package</span></li>
              <li className="flex gap-2"><span className="text-[rgba(11,18,36,0.35)]">2.</span><span>Pay deposit</span></li>
              <li className="flex gap-2"><span className="text-[rgba(11,18,36,0.35)]">3.</span><span>Review + revise</span></li>
              <li className="flex gap-2"><span className="text-[rgba(11,18,36,0.35)]">4.</span><span>Launch</span></li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
