import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | Insights & Updates",
  description:
    "Expert analysis on regulatory changes, business strategies, taxation, and compliance updates from Bizmint LLP.",
  alternates: {
    canonical: "https://bizmint.in/blog",
  },
  openGraph: {
    title: "Blog | Insights & Updates | Bizmint LLP",
    description:
      "Expert analysis on regulatory changes, business strategies, taxation, and compliance updates.",
    url: "https://bizmint.in/blog",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
