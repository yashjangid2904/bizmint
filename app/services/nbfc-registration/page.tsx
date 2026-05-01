"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  CreditCard, 
  Wallet, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  CheckCircle2,
  Settings
} from "lucide-react";
import Link from "next/link";

const NBFCRegistrationPage = () => {
  const categories = [
    { title: "NBFC-ICC", desc: "Investment and Credit Company registration for lending and asset financing.", icon: CreditCard, color: "text-blue-600" },
    { title: "P2P Lending", desc: "Licensing for Peer-to-Peer lending platforms to facilitate crowd-based credit.", icon: Wallet, color: "text-emerald-500" },
    { title: "MFI Registration", desc: "Micro Finance Institution setup for serving low-income groups.", icon: Building2, color: "text-purple-600" },
    { title: "Acquisition", desc: "End-to-end advisory for the takeover of existing shell NBFCs.", icon: Settings, color: "text-indigo-600" },
  ];

  const process = [
    { name: "RBI Application", desc: "Preparation of the detailed application via the RBI's COSMOS portal." },
    { name: "Net Owned Fund", desc: "Assistance in satisfying the NOF requirement (Minimum ₹2 - ₹10 Crore)." },
    { name: "Business Model", desc: "Drafting the financial projections and lending policies for RBI review." },
    { name: "Final COR", desc: "Grant of the Certificate of Registration from the RBI." },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#030014]">
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#05966915_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-semibold text-emerald-600"
            >
              RBI Regulatory Advisory
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl leading-tight"
            >
              NBFC Registration <br />
              <span className="text-emerald-600">& Acquisition</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Build your own financial institution. We specialize in complex RBI licensing 
              and the takeover of existing Non-Banking Financial Companies.
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
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">Setup Journey</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                NBFC registration is one of the most rigorous regulatory processes in India. 
                We manage the entire compliance burden.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20">
                <ShieldCheck className="text-emerald-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">RBI Expert Panel</div>
                  <div className="text-sm text-emerald-600">Zero Documentation Error</div>
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
            <h2 className="font-outfit text-4xl font-bold text-white">Acquire or Setup an NBFC?</h2>
            <p className="mt-6 text-zinc-400 dark:text-emerald-100 max-w-xl mx-auto">
              Our financial legal team provides end-to-end advisory for obtaining your 
              RBI license or executing a shell company acquisition.
            </p>
            <Link
              href="/contact?service=nbfc-registration"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
            >
              Start Registration
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NBFCRegistrationPage;
