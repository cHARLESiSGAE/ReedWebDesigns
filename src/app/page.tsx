import type { Metadata } from "next";
import { ReedStatic } from "./reed-static";

export const metadata: Metadata = {
  title: "Reed Web Studio — Services, Pricing & Contact",
  description:
    "Premium freelance web design for local businesses in San Diego. Starter sites $249+, Pro builds $399+. Fast turnaround, conversion-focused.",
};

export default function Home() {
  return <ReedStatic />;
}
