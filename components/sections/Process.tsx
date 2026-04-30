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
    <section className="bg-white py-24 dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            How We <span className="text-blue-600">Simplifying</span> Compliance
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            A seamless, transparent process designed to save you time and effort.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-zinc-100 dark:bg-zinc-800 lg:block" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <step.icon size={32} />
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-zinc-900 text-xs font-bold text-white dark:border-black">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
