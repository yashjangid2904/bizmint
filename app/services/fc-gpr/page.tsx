"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  History, 
  ArrowRight,
  Clock,
  Briefcase,
  Layers
} from "lucide-react";
import Link from "next/link";

const FCGPRPage = () => {
  const highlights = [
    { title: "FC-GPR Filing", desc: "Reporting of fresh issue of shares to foreign investors within 30 days.", icon: FileText, color: "text-blue-600" },
    { title: "FC-TRS Filing", desc: "Reporting of share transfers between residents and non-residents.", icon: Layers, color: "text-emerald-500" },
    { title: "Valuation Reports", desc: "Certification by a Chartered Accountant as per FEMA valuation norms.", icon: ShieldCheck, color: "text-purple-600" },
    { title: "FIRMS Registration", desc: "Setting up entity and business user accounts on the RBI's reporting portal.", icon: CheckCircle2, color: "text-indigo-600" },
  ];

  const process = [
    { name: "Entity Master", desc: "Registering and updating the entity profile on the RBI FIRMS portal." },
    { name: "Single Master Form", desc: "Drafting the SMF for GPR or TRS with precise transaction details." },
    { name: "AD Bank Liaison", desc: "Coordinating with the Authorized Dealer bank for document scrutiny." },
    { name: "Acknowledgement", desc: "Generation of the RBI unique identification number for the filing." },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#030014]">
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#4f46e515_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-sm font-semibold text-indigo-600"
            >
              Statutory Reporting
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl leading-tight"
            >
              FC-GPR & <br />
              <span className="text-indigo-600">FC-TRS Filings</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Mandatory RBI reporting for every foreign investment transaction. Stay 
              compliant and avoid heavy compounding fees with our expert filing support.
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
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">Reporting Cycle</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                RBI's FIRMS portal requires precise data entry. We handle the entire 
                documentation cycle from AD bank approval to final filing.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/20">
                <Clock className="text-indigo-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">Strict Timeline</div>
                  <div className="text-sm text-indigo-600">30-60 Day Deadline</div>
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
          <div className="rounded-[3rem] bg-zinc-900 p-12 text-center dark:bg-indigo-600">
            <h2 className="font-outfit text-4xl font-bold text-white">Recent Share Issue or Transfer?</h2>
            <p className="mt-6 text-zinc-400 dark:text-indigo-100 max-w-xl mx-auto">
              Ensure your RBI reporting is done before the deadline. Get your FC-GPR or 
              FC-TRS filed by experts today.
            </p>
            <Link
              href="/contact?service=fc-gpr"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
            >
              Start Filing Process
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FCGPRPage;
