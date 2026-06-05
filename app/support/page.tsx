import type { Metadata } from "next";
import SupportPageClient from "./SupportPageClient";

export const metadata: Metadata = {
  title: "Support Center | Help & FAQs",
  description:
    "Get help from Bizmint LLP — access our support center for FAQs, troubleshooting guides, and direct expert assistance for your compliance needs.",
  alternates: {
    canonical: "https://bizmint.co.in/support",
  },
};

export default function SupportPage() {
  return <SupportPageClient />;
}
