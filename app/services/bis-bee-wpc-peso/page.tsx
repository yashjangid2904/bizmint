"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  HardHat, 
  Radio, 
  ArrowRight,
  Clock,
  CheckCircle2,
  FileSearch
} from "lucide-react";
import Link from "next/link";

const RegulatoryLicensesPage = () => {
  const certifications = [
    { title: "BIS Certification", desc: "Mandatory for electronic products, chemicals, and consumer goods.", icon: ShieldCheck, color: "text-blue-600" },
    { title: "BEE Star Label", desc: "Energy efficiency ratings for appliances and electrical equipment.", icon: Zap, color: "text-amber-500" },
    { title: "WPC ETA", desc: "Wireless Planning & Coordination approval for Bluetooth and Wi-Fi devices.", icon: Radio, color: "text-purple-600" },
    { title: "PESO License", desc: "Petroleum and Explosives Safety Organization approvals for hazardous goods.", icon: HardHat, color: "text-orange-600" },
  ];

  const process = [
    { name: "Product Testing", desc: "Testing in accredited labs to ensure compliance with Indian standards." },
    { name: "Documentation", desc: "Preparation of technical files and application forms." },
    { name: "Factory Inspection", desc: "On-site audit by regulatory officers (where applicable)." },
    { name: "Grant of License", desc: "Final verification and issuance of the certification/license." },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#030014]">
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#f59e0b15_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-sm font-semibold text-amber-600"
            >
              Product Compliance
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl leading-tight"
            >
              BIS, BEE, WPC & <br />
              <span className="text-amber-500">PESO Certifications</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Essential regulatory approvals for manufacturers and importers to sell 
              products in the Indian market. We handle the complexity of testing and audits.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((item, i) => (
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
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">The Compliance Path</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                Regulatory testing and licensing can be rigorous. We simplify it through 
                end-to-end management.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20">
                <FileSearch className="text-amber-500" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">Expert Audit</div>
                  <div className="text-sm text-amber-500">Technical Review Included</div>
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
          <div className="rounded-[3rem] bg-zinc-900 p-12 text-center dark:bg-amber-600">
            <h2 className="font-outfit text-4xl font-bold text-white">Need Product Certification?</h2>
            <p className="mt-6 text-zinc-400 dark:text-amber-100 max-w-xl mx-auto">
              Get a free consultation on the mandatory standards for your product category.
            </p>
            <Link
              href="/contact?service=bis-bee-wpc-peso"
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

export default RegulatoryLicensesPage;
