"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, X } from "lucide-react";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import { useState } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-30 pb-22 dark:bg-black lg:pt-38 lg:pb-28">
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
          <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-blue-300 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] h-[30%] w-[30%] rounded-full bg-indigo-300 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50/50 px-4 py-1.5 text-sm font-medium text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-50"
              >

              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl xl:text-6xl"
              >
                Premium Advisory<br />
                <span className="text-blue-600">Modern Enterprises</span> <br />

              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl"
              >
                Bizmint LLP provides end-to-end regulatory, compliance, and legal advisory services.
                We handle the complexity so you can focus on growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/contact"
                  className="group flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-base font-semibold text-white transition-all hover:bg-black active:scale-[0.98] dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                >
                  Start Project
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-8 text-base font-semibold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Right Visual: Orbiting Services */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px]">
                {/* Center Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-blue-100 bg-white shadow-2xl dark:border-blue-900/30 dark:bg-zinc-900"
                  >
                    <span className="text-2xl font-bold text-blue-600">100+</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Services</span>
                  </motion.div>
                </div>

                {/* Orbit Rings */}
                {[160, 260, 360].map((size, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-100 dark:border-zinc-800/50"
                    style={{ width: size, height: size }}
                  />
                ))}

                {/* Orbiting Icons */}
                {[
                  { Icon: ShieldCheck, name: "ROC Filing", color: "bg-blue-500", delay: 0, distance: 80, duration: 25 },
                  { Icon: Zap, name: "GST Compliance", color: "bg-amber-500", delay: 8, distance: 130, duration: 30 },
                  { Icon: CheckCircle2, name: "SEBI Advisory", color: "bg-emerald-500", delay: 15, distance: 180, duration: 35 },
                  { Icon: ArrowRight, name: "RBI Filings", color: "bg-indigo-500", delay: 5, distance: 130, duration: 28 },
                  { Icon: ShieldCheck, name: "Company Reg.", color: "bg-rose-500", delay: 20, distance: 180, duration: 32 },
                ].map((item, i) => {
                  // Use a local component or direct motion div to handle the counter-rotation
                  return (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: -item.delay }}
                      className="absolute left-1/2 top-1/2"
                      style={{ width: item.distance * 2, height: item.distance * 2, marginLeft: -item.distance, marginTop: -item.distance }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: -item.delay }}
                        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                      >
                        <AnimatePresence>
                          {activeService === i && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.8 }}
                              animate={{ opacity: 1, y: -50, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.8 }}
                              className="absolute left-1/2 top-0 z-50 -translate-x-1/2 whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-1.5 text-[11px] font-bold text-white shadow-xl dark:bg-zinc-800"
                            >
                              {item.name}
                              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-zinc-900 dark:bg-zinc-800" />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <button
                          onClick={() => setActiveService(activeService === i ? null : i)}
                          className={`group relative flex h-10 w-10 items-center justify-center rounded-xl ${item.color} text-white shadow-lg transition-transform hover:scale-110 active:scale-95`}
                        >
                          <item.Icon size={20} />
                        </button>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Carousel Section */}
      <section className="relative overflow-hidden bg-zinc-50 py-24 dark:bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="font-outfit text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Our Core <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[]
              .map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
                >


                </motion.div>
              ))}
          </div>
        </div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex overflow-hidden"
        >
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
        </motion.div>
      </section>


      <Process />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
}
