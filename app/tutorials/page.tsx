"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  PlayCircle, 
  Clock, 
  Signal, 
  ArrowRight, 
  Layout, 
  ShieldCheck, 
  FileText,
  Calculator
} from "lucide-react";
import Link from "next/link";

const tutorials = [
  {
    title: "How to Incorporate a PVT LTD Company",
    duration: "12 mins",
    level: "Beginner",
    category: "Setup",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2022",
    icon: Layout,
  },
  {
    title: "Navigating the GST Filing Dashboard",
    duration: "8 mins",
    level: "Intermediate",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2026",
    icon: Calculator,
  },
  {
    title: "Setting up 2FA for Document Vault",
    duration: "5 mins",
    level: "Beginner",
    category: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
    icon: ShieldCheck,
  },
  {
    title: "Managing Board Meeting Minutes",
    duration: "15 mins",
    level: "Advanced",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070",
    icon: FileText,
  }
];

const TutorialsPage = () => {
  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 dark:bg-[#030014]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 mb-8 dark:bg-blue-900/30 dark:text-blue-400"
          >
            <PlayCircle size={16} />
            <span>Learning Center</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
          >
            Video <span className="text-blue-600">Tutorials</span>
          </motion.h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Step-by-step visual guides to help you master business compliance 
            and get the most out of the Bizmint platform.
          </p>
        </div>

        {/* Featured Tutorial */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative group overflow-hidden rounded-[3rem] aspect-video lg:aspect-[21/9] mb-16 shadow-2xl"
        >
           <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071" 
            alt="Featured Tutorial"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
           <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">Featured Course</span>
              <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl lg:text-5xl">Compliance Masterclass 2024</h2>
              <p className="text-zinc-300 max-w-2xl text-lg mb-8">
                 A comprehensive 2-hour guide covering everything from ROC filings to complex tax planning for startups.
              </p>
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600 shadow-xl transition-transform hover:scale-110 active:scale-95">
                 <PlayCircle size={32} fill="currentColor" fillOpacity={0.2} />
              </button>
           </div>
        </motion.div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-32">
          {tutorials.map((tutorial, i) => (
            <motion.div
              key={tutorial.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="relative aspect-video overflow-hidden">
                 <img 
                  src={tutorial.image} 
                  alt={tutorial.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                       <PlayCircle size={24} />
                    </div>
                 </div>
              </div>
              <div className="p-8">
                 <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-zinc-400">
                       <Clock size={14} /> {tutorial.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider">
                       <Signal size={14} /> {tutorial.level}
                    </span>
                 </div>
                 <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 group-hover:text-blue-600 transition-colors">
                    {tutorial.title}
                 </h3>
                 <div className="flex items-center justify-between border-t border-zinc-50 pt-6 dark:border-zinc-900">
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-400">{tutorial.category}</span>
                    <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white">
                       Watch Now <ArrowRight size={14} />
                    </Link>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="rounded-[3rem] bg-blue-600 p-12 lg:p-20 text-center text-white shadow-2xl shadow-blue-600/20">
           <h2 className="text-3xl font-bold sm:text-4xl">Want a personalized demo?</h2>
           <p className="mt-6 text-lg text-blue-100 max-w-xl mx-auto">
              Our experts can walk you through the platform and answer your specific business queries live.
           </p>
           <div className="mt-10">
              <Link
                href="/schedule-call"
                className="rounded-2xl bg-white px-10 py-4 text-lg font-bold text-blue-600 transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                Schedule a Demo
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;
