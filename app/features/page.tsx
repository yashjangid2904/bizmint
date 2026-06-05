import type { Metadata } from "next";
import FeaturesPageClient from "./FeaturesPageClient";

export const metadata: Metadata = {
  title: "Platform Features | Powerful Tools for Modern Compliance",
  description:
    "Explore Bizmint LLP's compliance platform features — real-time tracking, secure document vault, automated ROC filings, smart notifications, and cross-border advisory.",
  alternates: {
    canonical: "https://bizmint.co.in/features",
  },
  openGraph: {
    title: "Platform Features | Bizmint LLP",
    description:
      "Real-time compliance tracking, secure document vault, automated filings, and cross-border advisory tools.",
    url: "https://bizmint.co.in/features",
  },
};

export default function FeaturesPage() {
  return <FeaturesPageClient />;
}
