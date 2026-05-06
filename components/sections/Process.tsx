"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, PenTool, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Expert Consultation",
    desc: "Discuss your business goals with our seasoned legal and financial experts to identify the best roadmap.",
    icon: MessageSquare,
  },
  {
    title: "Documentation",
    desc: "We collect and organize all necessary documents, ensuring accuracy and compliance from the start.",
    icon: ClipboardList,
  },
  {
    title: "Filing & Processing",
    desc: "Our team handles all regulatory filings with ROC, SEBI, RBI, or Tax departments on your behalf.",
    icon: PenTool,
  },
  {
    title: "Final Completion",
    desc: "Receive your licenses, registrations, or compliance certificates and focus on growing your business.",
    icon: CheckCircle,
  },
];

const Process = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-24 dark:bg-zinc-950">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl dark:bg-blue-900/10" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-indigo-50/50 blur-3xl dark:bg-indigo-900/10" />

      <div className="mx-auto max-w-7xl relative z-10 px-6 lg:px-8">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-sm font-bold text-blue-700 backdrop-blur-sm dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400"
          >
            <span>Our Workflow</span>
          </motion.div>
          <h2 className="mt-6 font-outfit text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            How We <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Simplify</span> Compliance
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            A seamless, transparent process designed to take the complexity out of
            regulatory requirements so you can focus on building your business.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-[3rem] left-[12%] hidden h-[2px] w-[76%] bg-zinc-100 dark:bg-zinc-800 lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="h-full w-full origin-left bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            />
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Decorative Step Number */}
                <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 font-outfit text-[10rem] font-black leading-none text-zinc-50 transition-colors duration-500 group-hover:text-zinc-100 dark:text-zinc-900/30 dark:group-hover:text-zinc-900/50">
                  {i + 1}
                </div>

                {/* Icon Container */}
                <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-slate-900 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white group-hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:group-hover:bg-slate-900">
                  <step.icon size={28} strokeWidth={1.5} />

                  {/* Step Badge */}
                  <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-indigo-600 text-[10px] font-bold text-white shadow-lg">
                    {i + 1}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-outfit text-lg font-bold text-zinc-900 dark:text-zinc-50 lg:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile Connector (Vertical) */}
                {i < steps.length - 1 && (
                  <div className="mt-12 h-16 w-[2px] bg-linear-to-b from-blue-600 to-transparent lg:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;

