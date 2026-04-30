"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Headset, 
  MessageSquare, 
  Mail, 
  Phone, 
  FileQuestion, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Globe
} from "lucide-react";
import Link from "next/link";

const supportChannels = [
  {
    title: "Live Chat Support",
    desc: "Average response time: 2 mins. Best for quick technical issues.",
    icon: MessageSquare,
    color: "blue",
    cta: "Start Chat",
  },
  {
    title: "Expert Hotline",
    desc: "Connect with our advisory leads for complex regulatory queries.",
    icon: Phone,
    color: "emerald",
    cta: "Request Call",
  },
  {
    title: "Email Support",
    desc: "For detailed inquiries and document reviews. Guaranteed response in 12h.",
    icon: Mail,
    color: "violet",
    cta: "Send Email",
  }
];

const faqs = [
  {
    q: "How long does it take to register a new company?",
    a: "On average, company incorporation in India takes 7-10 working days, depending on name approval and document verification."
  },
  {
    q: "Do you handle foreign direct investment (FDI) reporting?",
    a: "Yes, we specialize in FEMA and RBI compliance for international businesses expanding into India."
  },
  {
    q: "Is my document data secure?",
    a: "Absolutely. Every document uploaded to Bizmint is encrypted with AES-256 and stored in secure, SOC 2 compliant vaults."
  }
];

const SupportPage = () => {
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
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 mb-8 dark:bg-blue-900/30 dark:text-blue-400"
          >
            <Headset size={16} />
            <span>Support Center</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
          >
            How can we <span className="text-blue-600">Help</span>?
          </motion.h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Get the support you need, when you need it. Our team of experts 
            is ready to assist you with any technical or regulatory challenge.
          </p>
        </div>

        {/* Support Channels Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-24">
          {supportChannels.map((channel, i) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] border border-zinc-100 bg-white transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-${channel.color}-50 text-${channel.color}-600 transition-all group-hover:scale-110 dark:bg-zinc-900`}>
                <channel.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{channel.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">{channel.desc}</p>
              <button className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-blue-600 hover:text-blue-700">
                {channel.cta} <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-32">
           <div className="flex items-center gap-3 mb-12">
              <FileQuestion className="text-blue-600" size={32} />
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Quick Answers</h2>
           </div>
           <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl border border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/30"
                >
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">{faq.q}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Contact CTA */}
        <div className="relative overflow-hidden rounded-[3rem] bg-zinc-900 p-12 lg:p-20 text-center text-white dark:bg-zinc-950">
           <div className="relative z-10">
              <h2 className="text-3xl font-bold">Still have questions?</h2>
              <p className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto">
                 Don't hesitate to reach out. We're here to help you navigate 
                 every step of your business journey.
              </p>
              <div className="mt-10">
                 <Link
                   href="/contact"
                   className="rounded-2xl bg-white px-10 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
                 >
                   Send a Message
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
