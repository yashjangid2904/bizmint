"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Zap, Bell, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const logs = [
  {
    version: "v2.4.0",
    date: "April 30, 2024",
    title: "The Cinematic Update",
    description: "Major overhaul of the user interface and landing experience with advanced animations and premium aesthetics.",
    changes: [
      "New interactive Service Orbit on Hero page",
      "Standardized typography with Inter & Outfit fonts",
      "Enhanced mobile navigation menu",
      "Added dedicated 'Schedule a Call' flow"
    ],
    type: "Feature",
    icon: Rocket,
  },
  {
    version: "v2.3.5",
    date: "April 15, 2024",
    title: "Direct MCA Integration",
    description: "Backend improvements to speed up ROC filing status updates and document fetching.",
    changes: [
      "Real-time CIN verification API",
      "Automated Form MGT-7 draft generation",
      "Performance optimization for dashboard charts"
    ],
    type: "Update",
    icon: Zap,
  },
  {
    version: "v2.2.0",
    date: "March 20, 2024",
    title: "Security & Compliance Shield",
    description: "Implementing advanced security layers for client data and document storage.",
    changes: [
      "AES-256 encryption for the Document Vault",
      "Two-factor authentication (2FA) for all accounts",
      "Audit logs for all regulatory filings"
    ],
    type: "Security",
    icon: ShieldCheck,
  }
];

const ChangelogPage = () => {
  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 dark:bg-[#030014]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 mb-8 dark:bg-blue-900/30 dark:text-blue-400"
          >
            <Bell size={16} />
            <span>Product Updates</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
          >
            What's <span className="text-blue-600">New</span>
          </motion.h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Track our journey as we build the world's most advanced business advisory platform. 
            New features, fixes, and improvements every month.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-16 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-zinc-100 dark:before:bg-zinc-800 md:before:left-1/2">
          {logs.map((log, i) => (
            <motion.div
              key={log.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col gap-8 md:flex-row md:items-start",
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Timeline Marker */}
              <div className="absolute left-6 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-600 ring-4 ring-white dark:ring-[#030014] md:left-1/2" />

              {/* Content Card */}
              <div className="w-full pl-12 md:w-1/2 md:pl-0 md:px-12">
                <div className={cn(
                  "p-8 rounded-[2rem] border border-zinc-100 bg-white transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950",
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                )}>
                  <div className={cn(
                    "flex items-center gap-3 mb-4",
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  )}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-zinc-900">
                       <log.icon size={20} />
                    </div>
                    <span className="text-sm font-black text-blue-600 uppercase tracking-widest">{log.version}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{log.title}</h3>
                  <div className={cn(
                    "flex items-center gap-2 text-xs text-zinc-400 mb-6",
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  )}>
                    <Clock size={12} />
                    <span>{log.date}</span>
                  </div>
                  
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                    {log.description}
                  </p>
                  
                  <ul className={cn(
                    "space-y-3",
                    i % 2 === 0 ? "md:items-end" : "md:items-start"
                  )}>
                    {log.changes.map((change, idx) => (
                      <li key={idx} className={cn(
                        "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300",
                        i % 2 === 0 ? "md:flex-row-reverse" : ""
                      )}>
                        <div className="h-1 w-1 rounded-full bg-blue-600 shrink-0" />
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty space for opposite side on desktop */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-32 p-12 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 text-center dark:bg-zinc-900/50 dark:border-zinc-800">
           <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Never miss an update</h2>
           <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
              Get the latest news about regulatory changes and Bizmint platform updates delivered to your inbox.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 h-12 px-6 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
              />
              <button className="h-12 px-8 rounded-xl bg-zinc-900 text-white font-bold transition-all hover:bg-black dark:bg-white dark:text-black">
                Subscribe
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for conditional classes
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default ChangelogPage;
