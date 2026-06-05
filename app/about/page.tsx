import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Bizmint LLP | Business Advisory & Compliance Experts",
  description:
    "Learn about Bizmint LLP — 8+ years empowering 2500+ businesses with expert regulatory advisory, company registration, and compliance solutions across India.",
  alternates: {
    canonical: "https://bizmint.co.in/about",
  },
  openGraph: {
    title: "About Bizmint LLP | Business Advisory & Compliance Experts",
    description:
      "Learn about Bizmint LLP — 8+ years empowering 2500+ businesses with expert regulatory advisory and compliance solutions across India.",
    url: "https://bizmint.co.in/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
