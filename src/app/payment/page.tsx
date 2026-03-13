import Link from "next/link";
import { Card } from "@/components/ui/card";

type PaymentItem = {
  title: string;
  price: string;
  description: string;
  href?: string;
  buttonLabel: string;
};

const payments: PaymentItem[] = [
  {
    title: "Starter Site Deposit",
    price: "$249",
    description: "Deposit for a restaurant-friendly starter site.",
    href: "https://buy.stripe.com/9B64gy0SfaeNeDg4QhgA800",
    buttonLabel: "Pay Starter deposit",
  },
  {
    title: "Pro Site Deposit",
    price: "$399",
    description: "Deposit for a real-estate-ready Pro Site.",
    href: "https://buy.stripe.com/28E3cubwT86FgLo2I9gA802",
    buttonLabel: "Pay Pro deposit",
  },
  {
    title: "Business Site Deposit",
    price: "$900",
    description: "Deposit for a multi-page Business Site.",
    href: "https://buy.stripe.com/eVq14m0Sf4Ut3YC2I9gA801",
    buttonLabel: "Pay Business deposit",
  },
  {
    title: "Monthly Website Management",
    price: "$50/mo",
    description: "Monthly management subscription.",
    href: "https://buy.stripe.com/test_3cI4gyeKA4ZU492aLhdfG04",
    buttonLabel: "Start management subscription",
  },
  {
    title: "Custom Invoice Payment",
    price: "Custom",
    description: "Have an invoice? Pay it here.",
    buttonLabel: "Pay invoice (add link)",
  },
];

export default function PaymentPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold tracking-widest text-[rgb(184,141,47)]">PAYMENT</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">Pay via Stripe</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Use the buttons below to pay via Stripe checkout.
        </p>

        <div className="mt-6 max-w-2xl rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
          Before paying, please fill out the quick intake form so we can hit the ground running: {" "}
          <Link className="font-semibold text-foreground hover:underline" href="/intake">
            /intake
          </Link>
          .
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {payments.map((p) => (
            <Card key={p.title} className="rounded-3xl border-border bg-card p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-foreground">{p.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{p.description}</div>
                </div>
                <div className="text-xl font-semibold text-foreground">{p.price}</div>
              </div>

              <div className="mt-6">
                {p.href ? (
                  <a
                    className="inline-flex w-full items-center justify-center rounded-full bg-[rgb(5,8,20)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[rgb(11,18,36)]"
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.buttonLabel}
                  </a>
                ) : (
                  <button
                    className="inline-flex w-full items-center justify-center rounded-full bg-muted px-4 py-2.5 text-sm font-semibold text-muted-foreground"
                    type="button"
                    disabled
                  >
                    {p.buttonLabel}
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
