"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Building2, Crown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Startup",
    price: "₹9,999",
    description: "Ideal for new businesses looking for basic incorporation and compliance.",
    icon: Building2,
    features: [
      "Company Incorporation (PVT / LLP)",
      "Basic ROC Filing Assistance",
      "GST Registration",
      "Digital Signature (1)",
      "Standard Support",
      "PAN & TAN Application"
    ],
    cta: "Start with Startup",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹24,999",
    description: "Perfect for scaling businesses requiring ongoing compliance and advisory.",
    icon: Zap,
    features: [
      "Everything in Startup",
      "Monthly GST Filing",
      "Annual ROC Compliance",
      "Accounting & Financials",
      "Income Tax Returns",
      "Priority Support",
      "Trademark Filing Assistance"
    ],
    cta: "Scale with Growth",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations with complex regulatory needs.",
    icon: Crown,
    features: [
      "Everything in Growth",
      "Specialized SEBI/RBI Advisory",
      "Internal Audit Services",
      "Legal Contract Management",
      "Foreign Subsidiary Support",
      "Dedicated Account Manager",
      "24/7 Premium Support"
    ],
    cta: "Contact Sales",
    popular: false,
  }
];

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("annual");

  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 dark:bg-[#030014]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
          >
            Simple, Transparent <span className="text-blue-600">Pricing</span>
          </motion.h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Choose the right plan for your business journey. No hidden fees, just expert advisory.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
             <span className={cn("text-sm font-bold", billingCycle === "monthly" ? "text-zinc-900 dark:text-white" : "text-zinc-400")}>Monthly</span>
             <button 
                onClick={() => setBillingCycle(billingCycle === "annual" ? "monthly" : "annual")}
                className="relative h-8 w-14 rounded-full bg-zinc-200 dark:bg-zinc-800 p-1 transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-700"
             >
                <div className={cn(
                  "h-6 w-6 rounded-full bg-blue-600 shadow-lg transition-transform",
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-0"
                )} />
             </button>
             <span className={cn("text-sm font-bold", billingCycle === "annual" ? "text-zinc-900 dark:text-white" : "text-zinc-400")}>
                Annual <span className="ml-1 text-[10px] text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-md dark:bg-emerald-900/30">Save 20%</span>
             </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col p-8 rounded-3xl border transition-all",
                plan.popular 
                  ? "border-blue-600 bg-white shadow-2xl scale-105 z-10 dark:bg-zinc-950" 
                  : "border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/30"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <div className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-2xl mb-6",
                  plan.popular ? "bg-blue-600 text-white" : "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white"
                )}>
                  <plan.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-zinc-900 dark:text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-sm text-zinc-500">/ project</span>}
                </div>
                <p className="mt-1 text-xs text-zinc-400">Exclusive of statutory fees and taxes</p>
              </div>

              <ul className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check size={18} className="text-emerald-500 shrink-0" />
                    <span className="text-sm text-zinc-600 dark:text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === "Enterprise" ? "/contact" : "/schedule-call"}
                className={cn(
                  "flex h-14 items-center justify-center rounded-2xl text-base font-bold transition-all active:scale-95",
                  plan.popular 
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/20" 
                    : "bg-zinc-900 text-white hover:bg-black dark:bg-white dark:text-black"
                )}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="mt-32 text-center">
           <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Frequently Asked Questions</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <div>
                 <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Are government fees included?</h4>
                 <p className="text-sm text-zinc-600 dark:text-zinc-400">No, government fees and taxes vary by state and entity type. We charge only for our professional services.</p>
              </div>
              <div>
                 <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Can I switch plans later?</h4>
                 <p className="text-sm text-zinc-600 dark:text-zinc-400">Absolutely. As your business grows, you can upgrade your service level at any time.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
