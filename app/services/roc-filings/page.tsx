"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  FileText, 
  History, 
  Calendar, 
  ArrowRight,
  Clock,
  CheckCircle2,
  ShieldAlert
} from "lucide-react";
import Link from "next/link";

const ROCFilingsPage = () => {
  const services = [
    { title: "Annual Return (MGT-7)", desc: "Mandatory yearly filing of shareholding and management details.", icon: ClipboardCheck, color: "text-blue-600" },
    { title: "Financial Statements (AOC-4)", desc: "Submission of balance sheets and P&L statements to the Registrar.", icon: FileText, color: "text-emerald-500" },
    { title: "Director Changes", desc: "Filing forms for appointment or resignation of company directors.", icon: History, color: "text-purple-600" },
    { title: "Special Resolutions", desc: "Recording major company decisions and constitutional changes.", icon: Calendar, color: "text-indigo-600" },
  ];

  const process = [
    { name: "Document Audit", desc: "Thorough review of minutes, registers, and financial records." },
    { name: "Form Preparation", desc: "Drafting the appropriate e-forms with precise legal language." },
    { name: "Certification", desc: "Review and digital signature by a practicing Company Secretary." },
    { name: "MCA Submission", desc: "Final filing on the MCA portal and generation of SRN." },
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
              Corporate Compliance
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl leading-tight"
            >
              ROC Filings & <br />
              <span className="text-blue-600">Company Secretarial</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Stay compliant with the Ministry of Corporate Affairs. Our CS experts handle 
              all your statutory filings with 100% accuracy and zero delay.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item, i) => (
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
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">Statutory Workflow</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                Companies Act compliance requires meticulous record-keeping. We manage the 
                entire lifecycle of your ROC obligations.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20">
                <ShieldAlert className="text-red-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">Avoid Penalties</div>
                  <div className="text-sm text-red-600">Zero Late-Filing Policy</div>
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
            <h2 className="font-outfit text-4xl font-bold text-white">Statutory Due Dates Approaching?</h2>
            <p className="mt-6 text-zinc-400 dark:text-blue-100 max-w-xl mx-auto">
              Don't wait for the last minute. Get your statutory audit and filings done by 
              our expert CS team today.
            </p>
            <Link
              href="/contact?service=roc-filings"
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

export default ROCFilingsPage;
