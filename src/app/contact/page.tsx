import { business } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Contact</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Text or call {business.owner}. Tell me your business type, the vibe you want,
        and your timeline.
      </p>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="text-lg font-semibold text-white">Call / Text</div>
        <a
          className="mt-2 inline-flex text-white hover:underline"
          href={business.phoneHref}
        >
          {business.phoneDisplay}
        </a>
        <div className="mt-6 text-sm text-white/70">Prefer email?</div>
        <a
          className="mt-2 inline-flex text-white hover:underline"
          href={business.emailHref}
        >
          {business.emailDisplay}
        </a>
      </div>
    </main>
  );
}
