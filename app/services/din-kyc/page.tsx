"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Fingerprint, 
  ShieldCheck, 
  FileCheck, 
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

const DINKYCPage = () => {
  const highlights = [
    { title: "DIN Activation", desc: "Keep your Director Identification Number active and legally valid.", icon: Fingerprint, color: "text-blue-600" },
    { title: "KYC Compliance", desc: "Annual verification of personal details including mobile and email.", icon: Users, color: "text-emerald-500" },
    { title: "DSC Integration", desc: "Support for Digital Signature integration for secure e-filing.", icon: ShieldCheck, color: "text-purple-600" },
    { title: "Form DIR-3 KYC", desc: "End-to-end filing of mandatory KYC forms on the MCA portal.", icon: FileCheck, color: "text-indigo-600" },
  ];

  const process = [
    { name: "DSC Verification", desc: "Ensuring your Digital Signature Certificate is valid and ready." },
    { name: "Detail Update", desc: "Verification and update of contact details in the MCA records." },
    { name: "OTP Verification", desc: "Facilitating real-time OTP verification for mobile and email." },
    { name: "Submission", desc: "Final filing of the DIR-3 KYC and generation of the approval note." },
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
              Director Compliance
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl leading-tight"
            >
              DIN KYC <br />
              <span className="text-blue-600">Verification</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Mandatory annual KYC for every DIN holder. Failure to file can lead to 
              disqualification of directors and heavy penalties.
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
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">Quick KYC Path</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                A simple, secure process to ensure your director status remains 'Active' on 
                the MCA portal.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20">
                <AlertCircle className="text-orange-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">Strict Deadline</div>
                  <div className="text-sm text-orange-600">30th Sept Every Year</div>
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
            <h2 className="font-outfit text-4xl font-bold text-white">Is your DIN Active?</h2>
            <p className="mt-6 text-zinc-400 dark:text-blue-100 max-w-xl mx-auto">
              Don't risk disqualification. File your annual DIN KYC in under 15 minutes 
              with our expert assistance.
            </p>
            <Link
              href="/contact?service=din-kyc"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
            >
              File KYC Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DINKYCPage;
