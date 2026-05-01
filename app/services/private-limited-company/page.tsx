"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  FileText, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Building2,
  Users,
  Target
} from "lucide-react";
import Link from "next/link";

const ServicePage = () => {
  const benefits = [
    { title: "Limited Liability", desc: "Your personal assets remain protected from business debts.", icon: ShieldCheck },
    { title: "Separate Entity", desc: "The company is a legal person in its own right.", icon: Building2 },
    { title: "Easy Funding", desc: "Preferred by VCs and Banks for investment and loans.", icon: Target },
    { title: "Global Reach", desc: "FDI is permitted in most sectors under automatic route.", icon: Users },
  ];

  const steps = [
    { name: "DSC & DIN", desc: "Obtaining Digital Signature and Director Identification Numbers." },
    { name: "Name Approval", desc: "Reservation of unique name through RUN service." },
    { name: "SPICe+ Filing", desc: "Submission of main incorporation forms and MOA/AOA." },
    { name: "Certificate", desc: "Issuance of Certificate of Incorporation (COI) and PAN/TAN." },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#030014]">
      {/* Hero Section */}
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
              Business Setup
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl"
            >
              Private Limited <br />
              <span className="text-blue-600">Company Registration</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              The most popular legal structure for startups and businesses in India. 
              Offers credibility, limited liability, and easy access to capital.
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
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/20">
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
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">The Process</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                Our seamless 4-step digital process ensures your company is registered in 
                the fastest possible time.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
                <Clock className="text-blue-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">Estimated Timeline</div>
                  <div className="text-sm text-blue-600">10-15 Working Days</div>
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
          <div className="rounded-[3rem] bg-zinc-900 p-12 text-center dark:bg-blue-600">
            <h2 className="font-outfit text-4xl font-bold text-white">Ready to incorporate?</h2>
            <p className="mt-6 text-zinc-400 dark:text-blue-100">
              Get started with our expert advisory today and build your legacy.
            </p>
            <Link
              href="/contact?service=private-limited-company"
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

export default ServicePage;
