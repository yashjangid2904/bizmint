"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What documents are required for Private Limited Company registration?",
    answer: "Typically, you need PAN cards, Aadhaar cards/Passport of all directors, and address proof for the registered office (Utility bill/NOC). Our experts will provide a detailed checklist based on your specific case.",
  },
  {
    question: "How long does it take to register an LLP?",
    answer: "LLP registration usually takes 10-15 working days, depending on name approval and government processing times. We fast-track the process by ensuring all documents are perfect before submission.",
  },
  {
    question: "Can Bizmint help with SEBI and RBI compliance?",
    answer: "Yes, we specialize in high-level regulatory compliance, including SEBI licenses for AIFs, Investment Advisers, and RBI compliance for NBFCs and FEMA filings.",
  },
  {
    question: "Do you provide annual compliance packages?",
    answer: "Absolutely. We offer comprehensive annual maintenance contracts (AMC) that cover ROC filings, GST returns, Income Tax, and other recurring statutory requirements.",
  },
  {
    question: "Is Bizmint available pan-India?",
    answer: "Yes, we operate as a digital-first platform, allowing us to serve businesses and investors across all states and union territories in India.",
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 py-6 dark:border-zinc-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{question}</span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="bg-white pt-16 sm:pt-24 pb-12 dark:bg-black">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Everything you need to know about starting and managing your business with Bizmint.
            </p>
          </motion.div>

          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="relative mt-12 sm:mt-20 overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-zinc-900 px-6 py-10 text-white dark:bg-zinc-950 sm:px-8 sm:py-12 lg:p-16">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-[20%] -right-[10%] h-[150%] w-[50%] skew-x-12 bg-blue-600/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-full w-full opacity-[0.03]"
              style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Still have questions? <br />
                <span className="text-blue-400">Talk to our experts.</span>
              </h3>
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-lg text-zinc-400 leading-relaxed text-center lg:text-left mx-auto lg:mx-0 max-w-xl">
                Our team of seasoned professionals is ready to help you navigate the complexities
                of regulatory compliance and business growth.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <Link href="/contact">
                  <button className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-zinc-950 transition-all hover:bg-zinc-100 active:scale-[0.98]">
                    Talk to an Expert
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-white transition-transform group-hover:translate-x-0.5">
                      <Plus size={12} strokeWidth={3} />
                    </div>
                  </button>
                </Link>
                <Link href="/schedule-call" className="w-full sm:w-auto">
                  <button className="flex w-full items-center justify-center gap-3 text-base font-semibold text-white transition-colors hover:text-blue-400">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50">
                      <div className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white" />
                    </div>
                    Schedule a Call
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
