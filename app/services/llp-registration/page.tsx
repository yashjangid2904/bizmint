"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  FileText, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Handshake,
  Layers,
  Scale
} from "lucide-react";
import Link from "next/link";

const LLPPage = () => {
  const benefits = [
    { title: "Limited Liability", desc: "Partners' liability is limited to their agreed contribution.", icon: ShieldCheck },
    { title: "Lower Compliance", desc: "Easier and fewer regulatory requirements compared to a company.", icon: Layers },
    { title: "Operational Flexibility", desc: "Partners have full control over the management of the firm.", icon: Handshake },
    { title: "No Minimum Capital", desc: "Start your LLP with any amount of capital contribution.", icon: Scale },
  ];

  const steps = [
    { name: "Partner DSC", desc: "Procuring Digital Signatures for all designated partners." },
    { name: "Name Approval", desc: "Applying for name reservation via FiLLiP form." },
    { name: "Incorporation", desc: "Filing of FiLLiP and Form 3 for LLP Agreement." },
    { name: "Agreement Filing", desc: "Submission of the executed LLP Agreement with MCA." },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#030014]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#8b5cf615_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-1.5 text-sm font-semibold text-purple-600"
            >
              Professional Partnership
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl"
            >
              LLP <br />
              <span className="text-purple-600">Registration Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Limited Liability Partnership combines the benefits of a partnership 
              firm with the protection of limited liability. Ideal for professional firms.
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
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 dark:bg-purple-900/20">
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
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">Registration Process</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                A streamlined approach to get your LLP functional with minimal paperwork.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/20">
                <Clock className="text-purple-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">Estimated Timeline</div>
                  <div className="text-sm text-purple-600">12-18 Working Days</div>
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
          <div className="rounded-[3rem] bg-zinc-900 p-12 text-center dark:bg-purple-600">
            <h2 className="font-outfit text-4xl font-bold text-white">Start your partnership</h2>
            <p className="mt-6 text-zinc-400 dark:text-purple-100">
              Launch your professional practice with the right legal foundation today.
            </p>
            <Link
              href="/contact?service=llp-registration"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
            >
              Get Started Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LLPPage;
