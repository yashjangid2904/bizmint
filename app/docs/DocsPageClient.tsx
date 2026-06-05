"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  BookOpen, 
  Code2, 
  FileText, 
  ShieldCheck, 
  Globe, 
  ChevronRight,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    articles: ["Company Setup Guide", "Account Configuration", "Dashboard Overview", "First Filing Guide"],
  },
  {
    title: "Compliance API",
    icon: Code2,
    articles: ["Authentication", "Endpoints Reference", "Webhooks Implementation", "Rate Limits"],
  },
  {
    title: "Legal & Regulatory",
    icon: FileText,
    articles: ["ROC Filing Standards", "GST Compliance Rules", "FEMA Regulations", "Audit Guidelines"],
  },
  {
    title: "Security & Trust",
    icon: ShieldCheck,
    articles: ["Data Encryption", "Compliance Certifications", "Access Control", "Privacy Standards"],
  }
];

const DocsPage = () => {
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
            Documentation <span className="text-blue-600">Hub</span>
          </motion.h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Everything you need to know about navigating the Bizmint platform, 
            API integrations, and regulatory standards.
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto relative">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
             <input 
                type="text" 
                placeholder="Search documentation, APIs, guides..."
                className="w-full h-14 pl-12 pr-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-white"
             />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-32">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm hover:shadow-xl transition-all dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-zinc-900">
                   <category.icon size={24} />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">{category.title}</h2>
              </div>
              
              <ul className="space-y-4">
                {category.articles.map((article) => (
                  <li key={article}>
                    <Link 
                      href="#" 
                      className="flex items-center justify-between group text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400"
                    >
                      <span className="font-medium">{article}</span>
                      <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white hover:underline"
              >
                View all articles <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Need Help Section */}
        <div className="rounded-[3rem] bg-zinc-900 p-12 lg:p-20 text-center text-white dark:bg-zinc-950">
           <h2 className="text-3xl font-bold">Can't find what you're looking for?</h2>
           <p className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto">
              Our support team and expert consultants are available 24/7 to help you with 
              technical issues or regulatory queries.
           </p>
           <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Link
                href="/support"
                className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
              >
                Go to Support
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border-2 border-zinc-700 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-zinc-800 active:scale-95"
              >
                Talk to Sales
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
