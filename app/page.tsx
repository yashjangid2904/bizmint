import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Bizmint LLP | Premium Business Advisory & Compliance",
  description:
    "Bizmint LLP provides expert regulatory advisory, company registration, GST, LLP, NBFC registration, and compliance services for businesses and investors across India.",
  alternates: {
    canonical: "https://bizmint.in",
  },
};

export default function Home() {
  return <HomePageClient />;
}