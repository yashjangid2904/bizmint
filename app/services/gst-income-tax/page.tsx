"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  PieChart, 
  Calculator, 
  Receipt, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  CheckCircle2,
  FileText
} from "lucide-react";
import Link from "next/link";

const TaxServicesPage = () => {
  const categories = [
    { title: "GST Filing", desc: "Monthly and quarterly filing of GSTR-1, 3B, and GSTR-9 annual returns.", icon: Receipt, color: "text-blue-600" },
    { title: "Income Tax", desc: "Corporate and individual tax planning and filing (ITR-1 to ITR-7).", icon: Calculator, color: "text-emerald-500" },
    { title: "TDS Compliance", desc: "Calculation, deposit, and quarterly return filing for Tax Deducted at Source.", icon: FileText, color: "text-purple-600" },
    { title: "Tax Advisory", desc: "Strategic advice on GST optimization and income tax planning for startups.", icon: PieChart, color: "text-indigo-600" },
  ];

  const process = [
    { name: "Data Processing", desc: "Analyzing purchase and sales registers to ensure data consistency." },
    { name: "Reconciliation", desc: "Matching GSTR-2B with purchase data to maximize Input Tax Credit (ITC)." },
    { name: "Drafting", desc: "Preparation of tax computations and return drafts for your approval." },
    { name: "Final Filing", desc: "Timely submission of returns on the official government portals." },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#030014]">
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#10b98115_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-semibold text-emerald-600"
            >
              Tax & Accounting
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl leading-tight"
            >
              GST & Income <br />
              <span className="text-emerald-600">Tax Management</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Expert-led taxation services to keep your business compliant and 
              financially efficient. Maximize your credits and minimize your liabilities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-800 ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-1/3">
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">Tax Roadmap</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                A seamless data-to-filing workflow that ensures precision and 
                maximizes your legitimate tax savings.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20">
                <ShieldCheck className="text-emerald-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">ITC Audit</div>
                  <div className="text-sm text-emerald-600">Recover Lost Credits</div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {process.map((step, i) => (
                  <div key={i} className="relative p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                    <div className="absolute top-8 right-8 text-4xl font-black text-zinc-100 dark:text-zinc-800">0{i+1}</div>
                    <h4 className="text-xl font-bold text-zinc-900 dark:text-white">{step.name}</h4>
                    <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[3rem] bg-zinc-900 p-12 text-center dark:bg-emerald-600">
            <h2 className="font-outfit text-4xl font-bold text-white">Need a Dedicated Tax Team?</h2>
            <p className="mt-6 text-zinc-400 dark:text-emerald-100 max-w-xl mx-auto">
              Get an expert CA to handle your monthly GST and annual income tax filings. 
              Plans starting for businesses of all sizes.
            </p>
            <Link
              href="/contact?service=gst-income-tax"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
            >
              Consult a Tax Expert
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TaxServicesPage;
