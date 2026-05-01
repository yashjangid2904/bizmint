"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Users, 
  Briefcase, 
  Building2,
  Scale, 
  ArrowRight,
  Clock,
  CheckCircle2,
  FileCheck
} from "lucide-react";
import Link from "next/link";

const InsuranceLicensePage = () => {
  const categories = [
    { title: "Insurance Broker", desc: "Corporate or individual broker license for general and life insurance.", icon: Users, color: "text-blue-600" },
    { title: "Corporate Agent", desc: "Registration for banks and entities to act as insurance intermediaries.", icon: Building2, color: "text-amber-600" },
    { title: "Surveyor & Loss", desc: "Licensing for independent professionals assessing insurance claims.", icon: Scale, color: "text-emerald-600" },
    { title: "Web Aggregator", desc: "Registration for platforms comparing insurance products online.", icon: Shield, color: "text-indigo-600" },
  ];

  const process = [
    { name: "IRDAI Application", desc: "Preparation and filing of the initial application with the regulator." },
    { name: "Documentation", desc: "Submission of net worth certificates, office details, and director KYC." },
    { name: "Interviews", desc: "Facilitating interviews and presentations before the IRDAI committee." },
    { name: "Grant of COR", desc: "Final issuance of the Certificate of Registration." },
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
              IRDAI Compliance
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl leading-tight"
            >
              Insurance <br />
              <span className="text-indigo-600">License Advisory</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Navigate the complex IRDAI regulatory landscape. We provide end-to-end 
              support for obtaining and maintaining insurance intermediary licenses.
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
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">Registration Roadmap</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                Obtaining an insurance license requires strict adherence to net worth and 
                fit-and-proper criteria.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/20">
                <FileCheck className="text-indigo-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">Compliance Check</div>
                  <div className="text-sm text-indigo-600">Audit Ready Advisory</div>
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
            <h2 className="font-outfit text-4xl font-bold text-white">Start Your Insurance Venture</h2>
            <p className="mt-6 text-zinc-400 dark:text-indigo-100 max-w-xl mx-auto">
              Connect with our IRDAI compliance specialists for a detailed eligibility check.
            </p>
            <Link
              href="/contact?service=insurance-license"
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

export default InsuranceLicensePage;
