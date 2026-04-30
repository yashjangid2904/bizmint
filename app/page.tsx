"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-24 dark:bg-black lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
          <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-blue-400 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] h-[30%] w-[30%] rounded-full bg-indigo-400 blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50/50 px-4 py-1.5 text-sm font-medium text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-50"
            >
              <Zap size={14} className="text-blue-600" />
              <span>Accelerate Your Business Compliance</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl"
            >
              Premium Advisory for <br />
              <span className="text-blue-600">Modern Enterprises.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl"
            >
              Bizmint LLP provides end-to-end regulatory, compliance, and legal advisory services. 
              From company registration to complex SEBI and RBI filings, we handle the complexity so you can focus on growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-blue-600/30 active:scale-[0.98]"
              >
                Talk to an Expert
              </Link>
              <Link
                href="/services"
                className="flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-8 text-base font-semibold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-zinc-50 py-24 dark:bg-zinc-900/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Our Core <span className="text-blue-600">Expertise</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expert Compliance",
                desc: "Navigate complex ROC, GST, and Income Tax filings with our seasoned professionals.",
                icon: ShieldCheck,
              },
              {
                title: "Business Setup",
                desc: "Fast-track your Private Limited or LLP registration with zero hassle.",
                icon: CheckCircle2,
              },
              {
                title: "Regulatory Licensing",
                desc: "Expert assistance for SEBI, RBI, BIS, and specialized insurance licenses.",
                icon: ArrowRight,
              },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{feature.title}</h3>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
}
