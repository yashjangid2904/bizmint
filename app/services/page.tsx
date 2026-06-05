import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Business Services | Company Registration & Compliance",
  description:
    "Explore Bizmint LLP's complete range of business services — company registration, GST, LLP, NBFC, trademark, compliance, tax advisory, and FEMA services.",
  alternates: {
    canonical: "https://bizmint.co.in/services",
  },
  openGraph: {
    title: "Business Services | Bizmint LLP",
    description:
      "Complete range of business services — company registration, GST, compliance, tax advisory, and more.",
    url: "https://bizmint.co.in/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
