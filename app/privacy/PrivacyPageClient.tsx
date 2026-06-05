"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Scale, Bell } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information that you provide directly to us when you register for an account, request a consultation, or subscribe to our newsletter. This may include your name, email address, phone number, and business details.",
    icon: Eye,
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services, to process your filings, to communicate with you about your account, and to send you technical notices and support messages.",
    icon: FileText,
  },
  {
    title: "Data Security",
    content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. All data is encrypted using industry-standard protocols.",
    icon: Lock,
  },
  {
    title: "Information Sharing",
    content: "We do not share your personal information with third parties except as described in this policy, such as with your consent or to comply with legal obligations (e.g., filings with ROC, GST departments).",
    icon: Shield,
  },
  {
    title: "Your Rights",
    content: "You have the right to access, update, or delete your personal information at any time. You may also object to the processing of your data or request that we restrict its use.",
    icon: Scale,
  },
  {
    title: "Changes to This Policy",
    content: "We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, providing additional notice.",
    icon: Bell,
  },
];

const PrivacyPage = () => {
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
            Privacy <span className="text-blue-600">Policy</span>
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

        {/* Content Section */}
        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-zinc-900">
                  <section.icon size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                    {section.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-20 p-8 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 dark:bg-zinc-900/50 dark:border-zinc-800 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Questions about our policy?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            If you have any questions or concerns about this Privacy Policy, please contact our data protection team.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-zinc-900 px-8 text-base font-bold text-white transition-all hover:bg-black dark:bg-white dark:text-black"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
