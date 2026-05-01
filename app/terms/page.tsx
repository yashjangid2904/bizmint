"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Gavel, UserCheck, ShieldAlert, CreditCard, Ban } from "lucide-react";
import Link from "next/link";

const terms = [
  {
    title: "Acceptance of Terms",
    content: "By accessing and using the services provided by Bizmint LLP, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.",
    icon: UserCheck,
  },
  {
    title: "Scope of Services",
    content: "Bizmint LLP provides business advisory, regulatory filings, and legal consultation. While we strive for absolute precision, our services are based on the information provided by the client and the current regulatory environment in India.",
    icon: Scale,
  },
  {
    title: "Client Obligations",
    content: "Clients are responsible for providing accurate and timely information. Any delays or penalties resulting from incorrect data provided by the client are not the responsibility of Bizmint LLP.",
    icon: ShieldAlert,
  },
  {
    title: "Fees and Payments",
    content: "All fees are due as per the agreed schedule. Government fees and taxes are additional to our professional fees and must be paid as they accrue during the process.",
    icon: CreditCard,
  },
  {
    title: "Intellectual Property",
    content: "All content, trademarks, and logos on this site are the property of Bizmint LLP. No material from this site may be copied, reproduced, or distributed without our prior written consent.",
    icon: Gavel,
  },
  {
    title: "Termination",
    content: "We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users or us.",
    icon: Ban,
  },
];

const TermsPage = () => {
  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 dark:bg-[#030014]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
          >
            Terms of <span className="text-blue-600">Service</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-zinc-600 dark:text-zinc-400"
          >
            Last updated: April 30, 2024
          </motion.p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {terms.map((term, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-3xl border border-zinc-100 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <term.icon size={20} />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{term.title}</h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {term.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            By using our services, you acknowledge that you have read and understood these Terms of Service.
            For any clarifications, please <Link href="/contact" className="text-blue-600 font-bold hover:underline">contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
