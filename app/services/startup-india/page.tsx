"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Scale, 
  ArrowRight,
  Clock,
  CheckCircle2,
  Gem
} from "lucide-react";
import Link from "next/link";

const StartupIndiaPage = () => {
  const highlights = [
    { title: "DPIIT Recognition", desc: "Official recognition from the Department for Promotion of Industry and Internal Trade.", icon: ShieldCheck, color: "text-blue-600" },
    { title: "Tax Exemptions", desc: "Advisory on 80-IAC tax holiday and Angel Tax exemptions for eligible startups.", icon: TrendingUp, color: "text-emerald-500" },
    { title: "Self-Compliance", desc: "Exemption from various labor and environmental law inspections for up to 3 years.", icon: Scale, color: "text-purple-600" },
    { title: "Intellectual Property", desc: "Fast-tracking of patent applications and up to 80% rebate on filing fees.", icon: Gem, color: "text-indigo-600" },
  ];

  const process = [
    { name: "Entity Setup", desc: "Ensuring the business is incorporated as a Pvt Ltd, LLP, or Partnership Firm." },
    { name: "Recognition Filing", desc: "Submission of the application on the Startup India portal with the innovation note." },
    { name: "Inter-Ministerial", desc: "Support for application before the IMB for income tax exemption status." },
    { name: "Benefit Claim", desc: "Assistance in availing patent rebates, tender exemptions, and funding access." },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#030014]">
      {/* Hero */}
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
              Startup Ecosystem
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-7xl leading-tight"
            >
              Startup India <br />
              <span className="text-blue-600">Recognition</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Get recognized as an innovative startup by the Government of India. 
              Unlock massive tax benefits, patent rebates, and easy procurement norms.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-800 ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-1/3">
              <h2 className="font-outfit text-4xl font-bold text-zinc-900 dark:text-white">Growth Hub</h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                Being a DPIIT-recognized startup is a badge of innovation. We help you 
                articulate your innovation note to ensure 100% approval success.
              </p>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
                <Zap className="text-blue-600" size={32} />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">Tax Holiday</div>
                  <div className="text-sm text-blue-600">IMB Certification Support</div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {process.map((step, i) => (
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

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[3rem] bg-zinc-900 p-12 text-center dark:bg-blue-600">
            <h2 className="font-outfit text-4xl font-bold text-white">Is Your Startup DPIIT Recognized?</h2>
            <p className="mt-6 text-zinc-400 dark:text-blue-100 max-w-xl mx-auto">
              Don't miss out on tax exemptions and government funding. Connect with 
              our startup specialists to get your recognition certificate today.
            </p>
            <Link
              href="/contact?service=startup-india"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
            >
              Get Recognized Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StartupIndiaPage;
