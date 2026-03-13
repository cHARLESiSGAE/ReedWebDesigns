import { business } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Contact</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Text or call {business.owner}. Tell me your business type, the vibe you want, and your timeline.
      </p>

      <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-sm">
        <div className="text-lg font-semibold text-foreground">Call / Text</div>
        <a className="mt-2 inline-flex text-foreground hover:underline" href={business.phoneHref}>
          {business.phoneDisplay}
        </a>
        <div className="mt-6 text-sm text-muted-foreground">Prefer email?</div>
        <a className="mt-2 inline-flex text-foreground hover:underline" href={business.emailHref}>
          {business.emailDisplay}
        </a>
      </div>
    </main>
  );
}
