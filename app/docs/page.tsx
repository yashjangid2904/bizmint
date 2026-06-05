import type { Metadata } from "next";
import DocsPageClient from "./DocsPageClient";

export const metadata: Metadata = {
  title: "Documentation Hub",
  description:
    "Explore the Bizmint documentation — guides on company setup, compliance API reference, legal standards, and security certifications.",
  alternates: {
    canonical: "https://bizmint.co.in/docs",
  },
};

export default function DocsPage() {
  return <DocsPageClient />;
}
