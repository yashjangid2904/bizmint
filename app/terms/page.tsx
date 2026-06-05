import type { Metadata } from "next";
import TermsPageClient from "./TermsPageClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read Bizmint LLP's terms of service — the legal agreement governing your use of our business advisory and compliance platform.",
  alternates: {
    canonical: "https://bizmint.co.in/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsPageClient />;
}
