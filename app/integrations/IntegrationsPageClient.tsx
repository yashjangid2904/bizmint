"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Puzzle, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Database,
  Cloud,
  Code2
} from "lucide-react";
import Link from "next/link";

const integrations = [
  {
    name: "MCA / ROC Portal",
    status: "Native",
    description: "Direct API integration for automated form submissions and status tracking.",
    icon: Cloud,
  },
  {
    name: "GSTN Gateway",
    status: "Direct",
    description: "Seamless data sync for GST returns, E-way bills, and ITC reconciliations.",
    icon: Database,
  },
  {
    name: "Bank Connectivity",
    status: "Beta",
    description: "Connect your business accounts for automated transaction categorization.",
    icon: Zap,
  },
  {
    name: "TRACES / Income Tax",
    status: "Native",
    description: "Integrated TDS management and income tax filing directly from the dashboard.",
    icon: ShieldCheck,
  },
  {
    name: "Cloud Storage",
    status: "Ready",
    description: "Sync your documents with Google Drive, Dropbox, or OneDrive for extra backup.",
    icon: Database,
  },
  {
    name: "Custom API",
    status: "Dev",
    description: "Build custom workflows using our robust REST API for your ERP or CRM.",
    icon: Code2,
  }
];

const IntegrationsPage = () => {
  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 dark:bg-[#030014]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 mb-8 dark:bg-blue-900/30 dark:text-blue-400"
          >
            <Puzzle size={16} />
            <span>Connected Ecosystem</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
          >
            Seamless <span className="text-blue-600">Integrations</span>
          </motion.h1>
          <p className="mt-8 mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Bizmint connects directly with government portals and business tools to automate 
            your compliance workflows and eliminate manual data entry.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-32">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl border border-zinc-100 bg-white transition-all hover:border-blue-600 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 text-blue-600 dark:bg-zinc-900">
                   <item.icon size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 border border-zinc-100 px-2.5 py-1 rounded-full dark:border-zinc-800">
                   {item.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{item.name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:gap-3 transition-all">
                 Learn about integration <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Developer CTA */}
        <div className="relative overflow-hidden rounded-[3rem] bg-zinc-900 p-12 lg:p-20 text-white dark:bg-zinc-950">
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
              <div>
                 <h2 className="text-3xl font-bold sm:text-4xl">Built for Developers</h2>
                 <p className="mt-6 text-lg text-zinc-400">
                    Need a custom integration? Our API allows your team to build powerful 
                    compliance workflows directly into your existing enterprise software.
                 </p>
                 <div className="mt-10 flex flex-wrap gap-6">
                    <Link
                      href="/contact"
                      className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
                    >
                      Request API Access
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-2xl border-2 border-zinc-700 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-zinc-800 active:scale-95"
                    >
                      View Documentation
                    </Link>
                 </div>
              </div>
              <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50 font-mono text-sm overflow-hidden">
                 <div className="flex items-center gap-2 mb-4 border-b border-zinc-700 pb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/50" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                    <div className="h-3 w-3 rounded-full bg-green-500/50" />
                 </div>
                 <pre className="text-blue-400">
{`const bizmint = require('bizmint-api');

// Sync company data
const company = await bizmint.sync({
  cin: 'L12345DL2024LLP',
  include: ['filings', 'tax']
});

console.log('Status:', company.health);`}
                 </pre>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPage;
