"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Zap, Bell, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const logs = [
  {
    version: "v2.4.0",
    date: "April 30, 2024",
    title: "The Cinematic Update",
    description: "Major overhaul of the user interface and landing experience with advanced animations and premium aesthetics.",
    changes: [
      "New interactive Service Orbit on Hero page",
      "Standardized typography with Inter & Outfit fonts",
      "Enhanced mobile navigation menu",
      "Added dedicated 'Schedule a Call' flow"
    ],
    type: "Feature",
    icon: Rocket,
  },
  {
    version: "v2.3.5",
    date: "April 15, 2024",
    title: "Direct MCA Integration",
    description: "Backend improvements to speed up ROC filing status updates and document fetching.",
    changes: [
      "Real-time CIN verification API",
      "Automated Form MGT-7 draft generation",
      "Performance optimization for dashboard charts"
    ],
    type: "Update",
    icon: Zap,
  },
  {
    version: "v2.2.0",
    date: "March 20, 2024",
    title: "Security & Compliance Shield",
    description: "Implementing advanced security layers for client data and document storage.",
    changes: [
      "AES-256 encryption for the Document Vault",
      "Two-factor authentication (2FA) for all accounts",
      "Audit logs for all regulatory filings"
    ],
    type: "Security",
    icon: ShieldCheck,
  }
];

const ChangelogPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Subscription failed");
      }

      setStatus("success");
      setMessage(data.message || "Thank you for subscribing!");
      localStorage.setItem("bizmint_subscribed", "true");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 dark:bg-[#030014]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 mb-6 dark:bg-blue-900/30 dark:text-blue-400"
          >
            <Bell size={14} />
            <span>Product Updates</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
          >
            What's <span className="text-blue-600">New</span>
          </motion.h1>
          <p className="mt-4 mx-auto max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            Track our journey as we build the world's most advanced business advisory platform. 
            New features, fixes, and improvements every month.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {logs.map((log, i) => (
            <motion.div
              key={log.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col justify-between p-6 rounded-[2rem] border border-zinc-200/60 bg-white/70 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500/30 hover:-translate-y-1 dark:border-zinc-800/60 dark:bg-zinc-950/40"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400">
                       <log.icon size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-black text-blue-600 uppercase tracking-widest leading-none">{log.version}</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {log.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{log.title}</h3>
                
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-4">
                  <Clock size={11} />
                  <span>{log.date}</span>
                </div>
                
                <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 mb-6">
                  {log.description}
                </p>
              </div>
              
              <ul className="space-y-2.5 border-t border-zinc-100 dark:border-zinc-800/60 pt-4 mt-auto">
                {log.changes.map((change, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                    <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400 mt-0.5">
                      <span className="h-1 w-1 rounded-full bg-blue-600 dark:bg-blue-400" />
                    </span>
                    <span className="leading-normal">{change}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-32 p-12 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 text-center dark:bg-zinc-900/50 dark:border-zinc-800">
           <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Never miss an update</h2>
           <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
              Get the latest news about regulatory changes and Bizmint platform updates delivered to your inbox.
           </p>
           {status === "success" ? (
             <div className="text-center py-4 space-y-2">
               <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-bold mb-2">✓</span>
               <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Subscription Successful!</h3>
               <p className="text-sm text-zinc-500 dark:text-zinc-400">{message}</p>
             </div>
           ) : (
             <form onSubmit={handleSubscribe} className="space-y-4 max-w-md mx-auto">
               <div className="flex flex-col sm:flex-row gap-4">
                 <input 
                   type="email" 
                   required
                   placeholder="Enter your email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   disabled={isSubmitting}
                   className="flex-1 h-12 px-6 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all dark:bg-zinc-900 dark:border-zinc-800 dark:text-white disabled:opacity-50"
                 />
                 <button 
                   type="submit"
                   disabled={isSubmitting}
                   className="h-12 px-8 rounded-xl bg-zinc-900 text-white font-bold transition-all hover:bg-black dark:bg-white dark:text-black disabled:opacity-50"
                 >
                   {isSubmitting ? "Subscribing..." : "Subscribe"}
                 </button>
               </div>
               {status === "error" && (
                 <p className="text-xs font-bold text-red-600 dark:text-red-400 text-left">
                   {message}
                 </p>
               )}
             </form>
           )}
        </div>
      </div>
    </div>
  );
};

// Helper component for conditional classes
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default ChangelogPage;
