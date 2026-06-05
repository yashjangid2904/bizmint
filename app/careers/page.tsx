import type { Metadata } from "next";
import CareersPageClient from "./CareersPageClient";

export const metadata: Metadata = {
  title: "Careers at Bizmint LLP | Join Our Team",
  description:
    "Join Bizmint LLP — explore careers in business advisory, compliance, tax, audit, and regulatory technology. Build the future of business services.",
  alternates: {
    canonical: "https://bizmint.in/careers",
  },
  openGraph: {
    title: "Careers at Bizmint LLP | Join Our Team",
    description:
      "Explore career opportunities in business advisory, compliance, tax, and regulatory technology at Bizmint LLP.",
    url: "https://bizmint.in/careers",
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
