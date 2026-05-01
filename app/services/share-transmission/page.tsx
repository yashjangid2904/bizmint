"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  ShieldCheck, 
  Search, 
  FileText, 
  ArrowRight,
  Clock,
  CheckCircle2,
  Heart
} from "lucide-react";
import Link from "next/link";

const ShareTransmissionPage = () => {
  const highlights = [
    { title: "Legal Heir Claims", desc: "Assistance in transferring shares to legal heirs in case of the shareholder's demise.", icon: Heart, color: "text-blue-600" },
    { title: "Succession Support", desc: "Guiding you through probate, succession certificates, and letters of administration.", icon: ShieldCheck, color: "text-emerald-500" },
    { title: "Joint Holder Issues", desc: "Deletion of name and transmission of shares in joint-holding accounts.", icon: Users, color: "text-purple-600" },
    { title: "KYC Compliance", desc: "Updating KYC and signatures of claimants to satisfy RTA requirements.", icon: FileText, color: "text-indigo-600" },
  ];

  const process = [
    { name: "Document Audit", desc: "Reviewing death certificates, wills, and succession documents for validity." },
    { name: "Drafting", desc: "Preparing the transmission request set including indemnity and affidavits." },
    { name: "RTA Liaison", desc: "Submission and coordination with the company's Registrar for name transfer." },
    { name: "Final Credit", desc: "Transmission of shares to the claimant's demat account and bank credit of dividends." },
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
              Estate Services
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl leading-tight"
            >
              Share <br />
              <span className="text-blue-600">Transmission</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Secure your inheritance. We provide compassionate and expert legal support 
              to transfer shares and assets to legal heirs and nominees.
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
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">Legal Path</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                Transmission of shares involves complex statutory requirements. We ensure 
                the process is handled with dignity and regulatory accuracy.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
                <CheckCircle2 className="text-blue-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">Heir Verification</div>
                  <div className="text-sm text-blue-600">Statutory Compliant Service</div>
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
            <h2 className="font-outfit text-4xl font-bold text-white">Inherited Physical Shares?</h2>
            <p className="mt-6 text-zinc-400 dark:text-blue-100 max-w-xl mx-auto">
              Transferring shares after a loved one's demise doesn't have to be a 
              bureaucratic nightmare. Connect with our estate specialists for guidance.
            </p>
            <Link
              href="/contact?service=share-transmission"
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

export default ShareTransmissionPage;
