"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Search, 
  Bell, 
  Layers, 
  BarChart3, 
  Cpu, 
  Globe,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Real-time Compliance Tracking",
    desc: "Monitor your regulatory status in real-time. Never miss a deadline with our automated tracking system.",
    icon: Zap,
    color: "blue",
  },
  {
    title: "Secure Document Vault",
    desc: "Industry-standard encryption for all your sensitive business documents and incorporation records.",
    icon: Shield,
    color: "emerald",
  },
  {
    title: "Automated ROC Filings",
    desc: "Smart algorithms that handle your annual returns and forms with 99.9% precision.",
    icon: Cpu,
    color: "violet",
  },
  {
    title: "Smart Notifications",
    desc: "Get instant alerts via WhatsApp and email for upcoming compliance dates and policy changes.",
    icon: Bell,
    color: "amber",
  },
  {
    title: "Cross-Border Advisory",
    desc: "Expert guidance for FEMA and RBI filings, tailored for global expansion and foreign investments.",
    icon: Globe,
    color: "indigo",
  },
  {
    title: "Detailed Financial Analytics",
    desc: "Interactive dashboards that visualize your tax position and financial health over time.",
    icon: BarChart3,
    color: "rose",
  },
];

const FeaturesPage = () => {
  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 dark:bg-[#030014]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 mb-8 dark:bg-blue-900/30 dark:text-blue-400"
          >
            <span>Platform Features</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
          >
            Powerful Tools for <br />
            <span className="text-blue-600">Modern Compliance</span>
          </motion.h1>
          <p className="mt-8 mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            A comprehensive suite of advisory and technology solutions designed to make 
            business management seamless, secure, and future-proof.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-32">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl border border-zinc-100 bg-white transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-${feature.color}-50 text-${feature.color}-600 transition-all group-hover:scale-110 dark:bg-zinc-900`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Feature Highlight */}
        <div className="relative overflow-hidden rounded-[3rem] bg-zinc-50 border border-zinc-100 dark:bg-zinc-900/50 dark:border-zinc-800 p-8 lg:p-16 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Smart Compliance Dashboard</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10">
                Our central command center gives you a 360-degree view of your business's legal 
                health. Track everything from upcoming board meetings to pending tax filings.
              </p>
              <div className="space-y-4">
                {[
                  "Automated deadline reminders",
                  "One-click document generation",
                  "Expert-verified filing drafts",
                  "Multi-company management"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-blue-600" />
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
               <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
                alt="Dashboard preview"
                className="w-full h-auto"
               />
               <div className="absolute inset-0 bg-linear-to-t from-zinc-50/50 to-transparent dark:from-zinc-900/50 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Global CTA */}
        <div className="text-center bg-zinc-900 rounded-[2.5rem] p-12 lg:p-20 text-white dark:bg-zinc-950">
          <h2 className="text-3xl font-bold sm:text-4xl">Experience the power of Bizmint</h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Ready to streamline your business operations? Start your journey with us today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
            >
              Get Started Now
            </Link>
            <Link
              href="/schedule-call"
              className="rounded-2xl border-2 border-zinc-700 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-zinc-800 active:scale-95"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
