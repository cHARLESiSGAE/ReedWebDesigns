import { PackageCards } from "@/components/site/package-cards";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Services</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Pick the tier that matches your business. Each package is designed with a
        specific client type in mind.
      </p>

      <div className="mt-10">
        <PackageCards />
      </div>
    </main>
  );
}
