import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing | Transparent & Competitive Plans",
  description:
    "Explore Bizmint LLP's transparent pricing plans for company registration, compliance services, GST filing, LLP registration, and business advisory.",
  alternates: {
    canonical: "https://bizmint.co.in/pricing",
  },
  openGraph: {
    title: "Pricing | Bizmint LLP",
    description:
      "Transparent and competitive pricing for company registration, compliance, GST, and business advisory services.",
    url: "https://bizmint.co.in/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
