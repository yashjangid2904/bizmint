"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Users,
  BarChart3,
  Globe2,
  HeartHandshake
} from "lucide-react";

const features = [
  {
    title: "100% Compliance",
    desc: "Strict adherence to ROC, RBI, and SEBI guidelines.",
    icon: ShieldCheck,
  },
  {
    title: "Real-time Updates",
    desc: "Automated status tracking for all applications.",
    icon: Zap,
  },
  {
    title: "Expert Network",
    desc: "Direct access to CAs, CSs, and Legal experts.",
    icon: Users,
  },
  {
    title: "Transparent Pricing",
    desc: "Clear, upfront quotes with no hidden costs.",
    icon: BarChart3,
  },
  {
    title: "Pan-India Service",
    desc: "Manage your business from anywhere in India.",
    icon: Globe2,
  },
  {
    title: "Dedicated Support",
    desc: "A personal account manager for every step.",
    icon: HeartHandshake,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-zinc-50 py-16 dark:bg-zinc-950">
      {/* Background visual elements */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-20">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-blue-200 blur-[120px] dark:bg-blue-900" />
        <div className="absolute bottom-[0%] right-[-5%] w-[50%] h-[50%] rounded-full bg-indigo-200 blur-[120px] dark:bg-indigo-900" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 px-6 lg:px-8">
        <div className="mb-12 text-center px-4">
          <h2 className="font-outfit text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl lg:text-5xl leading-tight">
            Why Forward-Thinking Businesses <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Trust Bizmint
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            We combine deep regulatory expertise with modern technology to deliver
            a seamless compliance experience for modern enterprises.
          </p>
        </div>

        {/* Circular Gallery (Desktop) / Grid (Mobile) */}
        <div className="relative flex flex-col lg:flex-row min-h-[450px] items-center justify-center lg:min-h-[650px] gap-12">

          {/* Central Core */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative z-20 flex h-52 w-52 flex-col items-center justify-center rounded-full border border-zinc-200 bg-white/80 p-6 text-center shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/80 sm:h-64 sm:w-64"
          >
            <div className="mb-3 font-outfit text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
              BIZMINT
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-blue-600 sm:text-2xl">500+</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-indigo-600 sm:text-2xl">99%</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Success</span>
              </div>
            </div>
            {/* Pulsing ring */}
            <div className="absolute -inset-3 animate-pulse rounded-full border border-blue-600/20" />
            <div className="absolute -inset-6 animate-pulse rounded-full border border-blue-600/10 [animation-delay:0.5s]" />
          </motion.div>

          {/* Orbits / Features Container */}
          <div className="absolute inset-0 hidden lg:block">
            {features.map((feature, i) => {
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const radius = 280; // Reduced from 340
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  whileInView={{ opacity: 1, x, y }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 50
                  }}
                  className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="flex w-56 flex-col items-center text-center">
                    <div className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                      <feature.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-outfit text-base font-bold text-zinc-900 dark:text-zinc-50">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-tight text-zinc-500 dark:text-zinc-400">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Grid Fallback */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden w-full px-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-white p-5 text-center dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-900 dark:bg-slate-900/20 dark:text-slate-400">
                  <feature.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-outfit text-base font-bold text-zinc-900 dark:text-zinc-50">{feature.title}</h3>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;



