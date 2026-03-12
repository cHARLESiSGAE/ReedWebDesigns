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
    href: "https://buy.stripe.com/test_8x228qgSIeAu34YdXtdfG00",
    buttonLabel: "Pay Starter deposit",
  },
  {
    title: "Pro Site Deposit",
    price: "$399",
    description: "Deposit for a real-estate-ready Pro Site.",
    href: "https://buy.stripe.com/test_bJe4gycCsdwqaxq3iPdfG01",
    buttonLabel: "Pay Pro deposit",
  },
  {
    title: "Business Site Deposit",
    price: "$900",
    description: "Deposit for a multi-page Business Site.",
    href: "https://buy.stripe.com/test_9B69AS0TK1NI5d69HddfG02",
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
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Payment</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Use the buttons below to pay via Stripe checkout.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {payments.map((p) => (
          <Card key={p.title} className="border-white/10 bg-white/5 p-6 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold">{p.title}</div>
                <div className="mt-2 text-sm text-white/70">{p.description}</div>
              </div>
              <div className="text-xl font-semibold">{p.price}</div>
            </div>

            <div className="mt-6">
              {p.href ? (
                <a
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-200"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.buttonLabel}
                </a>
              ) : (
                <button
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-200"
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
    </main>
  );
}
