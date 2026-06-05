import type { Metadata } from "next";
import IntegrationsPageClient from "./IntegrationsPageClient";

export const metadata: Metadata = {
  title: "Integrations | Seamless Connected Ecosystem",
  description:
    "Bizmint connects with MCA, GSTN, TRACES, and cloud storage to automate your compliance workflows. Explore our native integrations and developer API.",
  alternates: {
    canonical: "https://bizmint.co.in/integrations",
  },
};

export default function IntegrationsPage() {
  return <IntegrationsPageClient />;
}
