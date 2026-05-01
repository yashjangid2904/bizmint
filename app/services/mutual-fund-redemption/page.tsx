"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  ShieldCheck, 
  Search, 
  FileText, 
  ArrowRight,
  Clock,
  CheckCircle2,
  Wallet
} from "lucide-react";
import Link from "next/link";

const MFRedemptionPage = () => {
  const highlights = [
    { title: "Physical Redemption", desc: "Assistance in redeeming old physical mutual fund certificates into your bank account.", icon: TrendingUp, color: "text-blue-600" },
    { title: "Unclaimed Units", desc: "Recovery of mutual fund units transferred to IEPF or marked as dormant.", icon: Wallet, color: "text-emerald-500" },
    { title: "KYC Remediation", desc: "Fixing KYC status and signature mismatches to unlock pending redemptions.", icon: ShieldCheck, color: "text-purple-600" },
    { title: "Nominee Claims", desc: "Processing redemption requests for legal heirs and nominees of deceased holders.", icon: CheckCircle2, color: "text-indigo-600" },
  ];

  const process = [
    { name: "Folio Research", desc: "Identifying folio numbers and unit balances across different AMCs." },
    { name: "KYC Update", desc: "Ensuring your KYC and FATCA details are compliant with current norms." },
    { name: "Request Submission", desc: "Filing redemption requests with AMCs or RTAs like CAMS and Karvy." },
    { name: "Bank Credit", desc: "Tracking the fund flow until the redemption amount hits your bank account." },
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
              Asset Management
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl leading-tight"
            >
              Mutual Fund <br />
              <span className="text-blue-600">Redemption</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Unlock your dormant investments. We specialize in redeeming old physical 
              mutual fund units and resolving complex KYC or transmission issues.
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
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">Redemption Path</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                Old folios often have outdated bank details or signatures. We manage the 
                entire remediation process to ensure a successful exit.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
                <Search className="text-blue-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">Folio Discovery</div>
                  <div className="text-sm text-blue-600">Cross-AMC Search Support</div>
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
            <h2 className="font-outfit text-4xl font-bold text-white">Found Old MF Certificates?</h2>
            <p className="mt-6 text-zinc-400 dark:text-blue-100 max-w-xl mx-auto">
              Don't let your investments sit dormant. Get an expert review of your 
              physical folios and start the redemption process today.
            </p>
            <Link
              href="/contact?service=mutual-fund-redemption"
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

export default MFRedemptionPage;
