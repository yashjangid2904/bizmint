import type { Metadata } from "next";
import TutorialsPageClient from "./TutorialsPageClient";

export const metadata: Metadata = {
  title: "Tutorials | Step-by-Step Guides",
  description:
    "Learn business registration, compliance filing, and regulatory processes with step-by-step tutorials and video guides from Bizmint LLP.",
  alternates: {
    canonical: "https://bizmint.co.in/tutorials",
  },
};

export default function TutorialsPage() {
  return <TutorialsPageClient />;
}
