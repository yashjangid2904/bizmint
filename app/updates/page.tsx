import type { Metadata } from "next";
import UpdatesPageClient from "./UpdatesPageClient";

export const metadata: Metadata = {
  title: "Regulatory Updates",
  description:
    "Stay informed with the latest notifications, press releases, and drafts from the Reserve Bank of India (RBI) curated by Bizmint LLP.",
  alternates: {
    canonical: "https://bizmint.co.in/updates",
  },
  openGraph: {
    title: "Regulatory Updates | Bizmint LLP",
    description:
      "Latest notifications, press releases, and drafts from the Reserve Bank of India (RBI).",
    url: "https://bizmint.co.in/updates",
  },
};

export default function UpdatesPage() {
  return <UpdatesPageClient />;
}
