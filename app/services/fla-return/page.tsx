"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  ShieldCheck, 
  Calendar, 
  BarChart, 
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";

const FLAReturnPage = () => {
  const highlights = [
    { title: "Statutory Requirement", desc: "Mandatory annual return for companies with FDI or ODI investments.", icon: ClipboardCheck, color: "text-blue-600" },
    { title: "Asset Valuation", desc: "Reporting of foreign assets and liabilities based on audited financial statements.", icon: BarChart, color: "text-emerald-500" },
    { title: "Annual Deadline", desc: "Filing must be completed on the RBI's FLAIR portal by July 15th every year.", icon: Calendar, color: "text-purple-600" },
    { title: "Portal Management", desc: "Registering and managing the company profile on the RBI's new web portal.", icon: ShieldCheck, color: "text-indigo-600" },
  ];

  const process = [
    { name: "Financial Review", desc: "Analyzing audited balance sheets to identify foreign investments and liabilities." },
    { name: "Portal Registration", desc: "Ensuring the entity is registered on the RBI's FLAIR system." },
    { name: "Drafting", desc: "Preparation of the return with precise financial data as per RBI instructions." },
    { name: "Submission", desc: "Final filing and generation of the acknowledgement for statutory records." },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#030014]">
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f615_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-semibold text-blue-600"
            >
              Annual Compliance
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl leading-tight"
            >
              Annual FLA <br />
              <span className="text-blue-600">Return Filing</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Mandatory annual filing for every entity with foreign direct investment (FDI). 
              Our experts ensure your assets and liabilities are reported accurately to the RBI.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
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
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">Filing Path</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                The FLA return is a critical statutory requirement. Failure to file can lead 
                to heavy compounding fees and blocks on further FDI.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20">
                <AlertTriangle className="text-orange-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">Strict Deadline</div>
                  <div className="text-sm text-orange-600">15th July Every Year</div>
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
          <div className="rounded-[3rem] bg-zinc-900 p-12 text-center dark:bg-blue-600">
            <h2 className="font-outfit text-4xl font-bold text-white">Is your FLA Return Due?</h2>
            <p className="mt-6 text-zinc-400 dark:text-blue-100 max-w-xl mx-auto">
              Avoid penalties. Get your annual FLA return filed by our RBI compliance 
              specialists today.
            </p>
            <Link
              href="/contact?service=fla-return"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
            >
              Consult an Expert
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FLAReturnPage;
