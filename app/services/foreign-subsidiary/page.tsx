"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  FileText, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Globe2,
  Building,
  Briefcase
} from "lucide-react";
import Link from "next/link";

const ForeignSubsidiaryPage = () => {
  const benefits = [
    { title: "Market Entry", desc: "Fastest way for international companies to establish a legal presence in India.", icon: Globe2 },
    { title: "Separate Entity", desc: "Distinct legal identity from the parent company for operational clarity.", icon: Building },
    { title: "FDI Benefits", desc: "Access to 100% FDI in most sectors under the automatic route.", icon: Briefcase },
    { title: "Local Operations", desc: "Ability to sign contracts, hire employees, and lease property in India.", icon: ShieldCheck },
  ];

  const steps = [
    { name: "Parent Authorization", desc: "Board resolution and authorization documents from the parent entity." },
    { name: "DSC & Name", desc: "Digital signatures for Indian directors and name reservation." },
    { name: "SPICe+ Filing", desc: "Submission of incorporation forms with parent company details." },
    { name: "RBI Compliance", desc: "Post-incorporation reporting of FDI to the Reserve Bank of India." },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#030014]">
      {/* Hero Section */}
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
              International Business
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl"
            >
              Foreign Subsidiary <br />
              <span className="text-emerald-600">Setup in India</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Empower your global brand. We provide end-to-end assistance for foreign 
              companies looking to incorporate and scale operations in India.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{benefit.title}</h3>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-1/3">
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">The Roadmap</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                Cross-border incorporation requires precision. Our experts handle the legal complexity for you.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20">
                <Clock className="text-emerald-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">Estimated Timeline</div>
                  <div className="text-sm text-emerald-600">25-35 Working Days</div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {steps.map((step, i) => (
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

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[3rem] bg-zinc-900 p-12 text-center dark:bg-emerald-600">
            <h2 className="font-outfit text-4xl font-bold text-white">Enter the Indian market</h2>
            <p className="mt-6 text-zinc-400 dark:text-emerald-100">
              Expert guidance for global corporations looking to establish and thrive in India.
            </p>
            <Link
              href="/contact?service=foreign-subsidiary"
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

export default ForeignSubsidiaryPage;
