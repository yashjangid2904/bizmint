"use client";

import React from "react";
import { motion } from "framer-motion";
import { Handshake, Globe, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    title: "Expanded Service Portfolio",
    desc: "Offer your clients a wider range of regulatory and advisory solutions powered by Bizmint.",
    icon: Zap,
  },
  {
    title: "Dedicated Partner Support",
    desc: "Access our expert team directly for high-priority client requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Global Reach",
    desc: "Collaborate on international incorporation and cross-border advisory.",
    icon: Globe,
  },
  {
    title: "Revenue Sharing",
    desc: "Competitive commission structures for successful referrals and integrations.",
    icon: Handshake,
  },
];

const PartnersPage = () => {
  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 dark:bg-[#030014]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
          >
            Partner with <span className="text-blue-600">Bizmint</span>
          </motion.h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            We collaborate with CAs, CSs, Legal Firms, and Fintechs to deliver seamless business solutions. 
            Let's grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-24">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{benefit.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto rounded-[2.5rem] bg-zinc-900 p-12 text-center text-white dark:bg-zinc-950">
          <h2 className="text-2xl font-bold sm:text-3xl">Become a Partner Today</h2>
          <p className="mt-4 text-zinc-400">
            Tell us about your firm and how you'd like to collaborate. Our partnership team will get in touch.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white px-10 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
            >
              Apply for Partnership
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
