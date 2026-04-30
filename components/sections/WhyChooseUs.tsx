"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, BarChart3, Globe2, HeartHandshake } from "lucide-react";

const features = [
  {
    title: "100% Compliance",
    desc: "Strict adherence to ROC, RBI, and SEBI guidelines ensuring zero legal risk for your business.",
    icon: ShieldCheck,
  },
  {
    title: "Real-time Updates",
    desc: "Stay informed with automated status tracking for all your applications and filings.",
    icon: Zap,
  },
  {
    title: "Expert Network",
    desc: "Direct access to CAs, CSs, and Legal experts with decades of collective experience.",
    icon: Users,
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden costs. Get clear, upfront quotes for every service we provide.",
    icon: BarChart3,
  },
  {
    title: "Pan-India Service",
    desc: "Register and manage your business from anywhere in India with our digital-first approach.",
    icon: Globe2,
  },
  {
    title: "Dedicated Support",
    desc: "A personal account manager to guide you through every step of your business journey.",
    icon: HeartHandshake,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-zinc-50 py-24 dark:bg-zinc-900/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Why Forward-Thinking Businesses <br />
              <span className="text-blue-600">Trust Bizmint</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              We combine deep regulatory expertise with modern technology to deliver 
              a premium experience for entrepreneurs and investors.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-950">
              <span className="text-3xl font-bold text-blue-600">500+</span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Clients</span>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-950">
              <span className="text-3xl font-bold text-blue-600">99%</span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Success</span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-blue-900/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 text-zinc-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-zinc-900 dark:text-zinc-400">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{feature.title}</h3>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
