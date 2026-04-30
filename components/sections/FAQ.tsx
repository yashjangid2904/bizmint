"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
    <section className="bg-white py-24 dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Everything you need to know about starting and managing your business with Bizmint.
            </p>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-blue-600 p-8 text-center text-white lg:p-12">
            <h3 className="text-2xl font-bold">Still have questions?</h3>
            <p className="mt-4 text-blue-100">
              Our experts are ready to help you navigate the complexities of business compliance.
            </p>
            <div className="mt-8 flex justify-center">
              <button className="rounded-full bg-white px-8 py-3 font-bold text-blue-600 shadow-xl transition-transform hover:scale-105 active:scale-[0.98]">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
