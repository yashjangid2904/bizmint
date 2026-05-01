"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  FileText, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  User,
  Zap,
  Globe
} from "lucide-react";
import Link from "next/link";

const OPCPage = () => {
  const benefits = [
    { title: "Single Ownership", desc: "Full control for a solo entrepreneur without sharing power.", icon: User },
    { title: "Limited Liability", desc: "Personal liability is restricted to the unpaid share capital.", icon: ShieldCheck },
    { title: "Succession", desc: "Perpetual existence with a nominee director designated.", icon: Zap },
    { title: "Corporate Status", desc: "Better credibility with suppliers and financial institutions.", icon: Globe },
  ];

  const steps = [
    { name: "DSC & DIN", desc: "Obtaining Digital Signature and DIN for the sole director." },
    { name: "Name Approval", desc: "Securing a unique name ending with (OPC) Private Limited." },
    { name: "Incorporation", desc: "Filing SPICe+ form with MOA and AOA details." },
    { name: "Nominee Consent", desc: "Submission of Form INC-3 for the nominee's details." },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#030014]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#0ea5e915_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-1.5 text-sm font-semibold text-sky-600"
            >
              Solo Entrepreneurs
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl"
            >
              One Person <br />
              <span className="text-sky-600">Company (OPC)</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              The perfect corporate structure for solo founders. Enjoy the benefits 
              of a private limited company without needing a second director.
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
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 dark:bg-sky-900/20">
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
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">The Setup</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                Registering your OPC is straightforward with our digital-first compliance team.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-900/20">
                <Clock className="text-sky-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">Estimated Timeline</div>
                  <div className="text-sm text-sky-600">8-12 Working Days</div>
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
          <div className="rounded-[3rem] bg-zinc-900 p-12 text-center dark:bg-sky-600">
            <h2 className="font-outfit text-4xl font-bold text-white">Go solo with confidence</h2>
            <p className="mt-6 text-zinc-400 dark:text-sky-100">
              Transform your sole proprietorship into a professional OPC today.
            </p>
            <Link
              href="/contact?service=opc-registration"
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

export default OPCPage;
