import { PackageCards } from "@/components/site/package-cards";

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold tracking-widest text-[rgb(184,141,47)]">SERVICES</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">Services</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Pick the tier that matches your business. Each package is designed with a specific client type in mind.
        </p>

        <div className="mt-10">
          <PackageCards />
        </div>
      </div>
    </main>
  );
}
