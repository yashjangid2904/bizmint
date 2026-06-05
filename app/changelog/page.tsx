import type { Metadata } from "next";
import ChangelogPageClient from "./ChangelogPageClient";

export const metadata: Metadata = {
  title: "Changelog | Product Updates",
  description:
    "Track the latest updates, new features, security improvements, and platform enhancements at Bizmint LLP.",
  alternates: {
    canonical: "https://bizmint.in/changelog",
  },
};

export default function ChangelogPage() {
  return <ChangelogPageClient />;
}
