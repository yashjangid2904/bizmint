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
      <section className="relative min-h-[90vh] overflow-hidden bg-white pt-32 pb-24 dark:bg-black lg:pt-48 lg:pb-32 flex items-center">
        {/* Advanced Background Design */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          {/* Animated Gradient Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] -left-[10%] h-[50%] w-[50%] rounded-full bg-blue-400/20 blur-[120px] dark:bg-blue-600/10" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] -right-[10%] h-[40%] w-[40%] rounded-full bg-indigo-400/20 blur-[120px] dark:bg-indigo-600/10" 
          />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              {/* Premium Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-sm font-bold text-blue-700 backdrop-blur-sm dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400 font-display"
              >
                <Zap size={14} className="animate-pulse" />
                <span>Accelerate Your Business Compliance</span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-8 font-display text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl lg:text-8xl"
              >
                Premium Advisory for <br />
                <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  Modern Enterprises.
                </span>
              </motion.h1>
              
              {/* Subtext */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl"
              >
                Bizmint LLP provides end-to-end regulatory, compliance, and legal advisory services. 
                We handle the statutory complexity so you can focus on building the future.
              </motion.p>
              
              {/* Hero Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 flex flex-wrap items-center justify-center gap-5"
              >
                <Link
                  href="/contact"
                  className="group relative flex h-14 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-indigo-700 px-10 text-lg font-bold text-white shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:shadow-[0_25px_60px_-10px_rgba(37,99,235,0.5)] active:scale-95"
                >
                  Talk to an Expert
                </Link>
                <Link
                  href="/services"
                  className="flex h-14 items-center justify-center rounded-full border border-zinc-200 bg-white px-10 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-50 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900 active:scale-95 shadow-sm"
                >
                  Explore Services
                </Link>
              </motion.div>

              {/* Trust/Stats Card - Centers visual weight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-20 inline-flex flex-wrap items-center justify-center gap-10 rounded-[2rem] border border-zinc-200/50 bg-white/50 p-8 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/50"
              >
                {[
                  { label: "Trusted By", value: "500+ Businesses" },
                  { label: "Success Rate", value: "99.9%" },
                  { label: "Expert Network", value: "50+ Professionals" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                      {stat.label}
                    </span>
                    <span className="font-display text-xl font-black text-zinc-900 dark:text-zinc-50">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Carousel Section */}
      <section className="relative overflow-hidden bg-zinc-50 py-24 dark:bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-outfit text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Our Core <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Specialized solutions for every stage of your business growth.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative flex overflow-hidden">
          {/* Gradient Fades for Carousel edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-zinc-50 to-transparent dark:from-zinc-950" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-zinc-50 to-transparent dark:from-zinc-950" />

          <motion.div 
            animate={{ 
              x: ["0%", "-50%"],
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-8 px-4"
          >
            {[...Array(2)].map((_, listIndex) => (
              <div key={listIndex} className="flex gap-8">
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
                  {
                    title: "Intellectual Property",
                    desc: "Protect your brand with Trademark, Copyright, and Patent registration services.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Audit & Assurance",
                    desc: "Comprehensive internal and statutory audits to ensure financial transparency.",
                    icon: CheckCircle2,
                  },
                  {
                    title: "Tax Strategy",
                    desc: "Strategic tax planning and optimization for domestic and cross-border operations.",
                    icon: Zap,
                  },
                ].map((feature, i) => (
                  <div 
                    key={i}
                    className="group relative w-80 shrink-0 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:border-slate-900 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-slate-800"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white dark:bg-slate-900/20 dark:text-slate-400">
                      <feature.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-outfit text-xl font-bold text-zinc-900 dark:text-zinc-50">{feature.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
                    
                    {/* Decorative hover accent */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-slate-900 transition-all duration-500 group-hover:w-full" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      <Process />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
}
