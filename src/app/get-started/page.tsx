import type { Metadata } from "next";
import IntakePage from "@/app/intake/page";

export const metadata: Metadata = {
  title: "Get Started – Reed Web Studio",
};

export default function GetStartedPage() {
  return <IntakePage />;
}
