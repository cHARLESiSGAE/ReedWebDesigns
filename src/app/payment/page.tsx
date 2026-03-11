import { Card } from "@/components/ui/card";

type PaymentItem = {
  title: string;
  price: string;
  description: string;
};

const payments: PaymentItem[] = [
  {
    title: "Starter Site Deposit",
    price: "$249",
    description:
      "Deposit for a restaurant-friendly starter site. Stripe link goes here.",
  },
  {
    title: "Pro Site Deposit",
    price: "$399",
    description:
      "Deposit for a real-estate-ready Pro Site. Stripe link goes here.",
  },
  {
    title: "Business Site Deposit",
    price: "$900",
    description: "Deposit for a multi-page Business Site. Stripe link goes here.",
  },
  {
    title: "Monthly Website Management",
    price: "$20–$100/mo",
    description:
      "Ongoing updates and maintenance. Stripe subscription link goes here.",
  },
  {
    title: "Custom Invoice Payment",
    price: "Custom",
    description:
      "Have an invoice? Pay it here. Stripe payment link goes here.",
  },
];

export default function PaymentPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Payment</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Stripe checkout buttons will be added here. For now these are placeholders.
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
              <button
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-200"
                type="button"
                disabled
              >
                Pay with Stripe (add link)
              </button>
              <div className="mt-3 text-xs text-white/60">
                Insert your Stripe Checkout URL here later.
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
