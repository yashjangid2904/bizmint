import type { Metadata } from "next";
import PrivacyPageClient from "./PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Bizmint LLP's privacy policy — how we collect, use, and protect your personal information and business data.",
  alternates: {
    canonical: "https://bizmint.co.in/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
