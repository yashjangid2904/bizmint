import type { Metadata } from "next";
import ScheduleCallPageClient from "./ScheduleCallPageClient";

export const metadata: Metadata = {
  title: "Schedule a Call | Free Expert Consultation",
  description:
    "Book a free consultation call with Bizmint LLP's business advisory experts. Get personalized guidance on registration, compliance, and tax planning.",
  alternates: {
    canonical: "https://bizmint.in/schedule-call",
  },
  openGraph: {
    title: "Schedule a Call | Bizmint LLP",
    description:
      "Book a free consultation call with our business advisory experts for personalized guidance.",
    url: "https://bizmint.in/schedule-call",
  },
};

export default function ScheduleCallPage() {
  return <ScheduleCallPageClient />;
}
