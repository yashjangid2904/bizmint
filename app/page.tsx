"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, BarChart3, Users, Building2 } from "lucide-react";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-black">
      {/* Clean Corporate Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#3b82f608_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.02]" 
            style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
          />
        </div>

        <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
                <span className="text-blue-600">Premium</span> Advisory <br />
                for Modern Business
              </h1>
              
              <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                Bizmint LLP bridges the gap between complex regulation and seamless growth. 
                We manage the statutory burden so you can focus on scale.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:bg-black dark:hover:bg-zinc-200 transition-all shadow-lg shadow-zinc-900/10"
                >
                  Talk to an Expert
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center justify-center px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
                >
                  Explore Services
                </Link>
              </div>

              {/* Stats Section */}
              <div className="mt-8 sm:mt-12 flex items-center gap-8 sm:gap-12 border-t border-zinc-100 dark:border-zinc-800 pt-6 sm:pt-8">
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-white">500+</div>
                  <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider mt-1">Clients</div>
                </div>
                <div className="h-10 w-px bg-zinc-100 dark:bg-zinc-800" />
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-white">99%</div>
                  <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider mt-1">Success Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual: Clean Compliance Card Stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-lg ml-auto">
                {/* Main Dashboard Card */}
                <div className="relative z-10 bg-white dark:bg-zinc-900 rounded-[32px] p-8 shadow-2xl border border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-zinc-900 dark:text-white">Compliance Status</div>
                        <div className="text-[10px] text-zinc-500">Live monitoring active</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                      SECURE
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      { label: "ROC Filings", status: "Completed", icon: CheckCircle2, color: "text-emerald-500" },
                      { label: "GST Compliance", status: "In Progress", icon: Zap, color: "text-blue-500" },
                      { label: "Tax Optimization", status: "Strategic", icon: BarChart3, color: "text-purple-500" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                        <div className="flex items-center gap-3">
                          <item.icon className={item.color} size={20} />
                          <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{item.label}</span>
                        </div>
                        <span className="text-xs font-medium text-zinc-500">{item.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${n+10}`} alt="expert" />
                        </div>
                      ))}
                    </div>
                    <div className="text-xs font-medium text-zinc-500">
                      Expert advisors online
                    </div>
                  </div>
                </div>

                {/* Decorative Back Cards */}
                <div className="absolute top-10 -right-4 -z-10 w-full h-full bg-blue-600/5 rounded-[32px] transform rotate-3" />
                <div className="absolute top-4 -left-4 -z-20 w-full h-full bg-zinc-100 dark:bg-zinc-800/30 rounded-[32px] transform -rotate-2" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Other sections */}
      <Process />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
}