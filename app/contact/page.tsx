import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Talk to an Expert",
  description:
    "Get in touch with Bizmint LLP for expert business advisory, company registration, compliance, and regulatory consultation. Response within 30 minutes.",
  alternates: {
    canonical: "https://bizmint.in/contact",
  },
  openGraph: {
    title: "Contact Us | Talk to an Expert | Bizmint LLP",
    description:
      "Get expert business advisory and compliance consultation from Bizmint LLP. Response within 30 minutes.",
    url: "https://bizmint.in/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
