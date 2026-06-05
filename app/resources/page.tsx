import type { Metadata } from "next";
import ResourcesPageClient from "./ResourcesPageClient";

export const metadata: Metadata = {
  title: "Resources & Downloads",
  description:
    "Access free compliance guides, business templates, video tutorials, and downloadable resources from Bizmint LLP.",
  alternates: {
    canonical: "https://bizmint.in/resources",
  },
  openGraph: {
    title: "Resources & Downloads | Bizmint LLP",
    description:
      "Free compliance guides, business templates, video tutorials, and downloadable resources.",
    url: "https://bizmint.in/resources",
  },
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}