import type { Metadata } from "next";
import PartnersPageClient from "./PartnersPageClient";

export const metadata: Metadata = {
  title: "Partners | Strategic Alliance Program",
  description:
    "Partner with Bizmint LLP — join our strategic alliance program for CAs, CSs, lawyers, and business consultants. Grow together with referral and white-label opportunities.",
  alternates: {
    canonical: "https://bizmint.in/partners",
  },
};

export default function PartnersPage() {
  return <PartnersPageClient />;
}
