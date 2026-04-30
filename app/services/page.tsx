"use client";

import React from "react";
import ExploreServices from "@/components/sections/ExploreServices";
import Navbar from "@/components/navbar/Navbar";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#030014]">
      {/* Services Header */}
      <div className="relative pt-32 pb-16 text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f615_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_-20%,#3b82f630_0%,transparent_50%)]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-5xl font-black text-zinc-900 dark:text-white sm:text-6xl"
          >
            All Our <span className="text-blue-600">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-zinc-600 dark:text-zinc-400"
          >
            A comprehensive list of all regulatory, compliance, and advisory solutions we offer.
          </motion.p>
        </div>
      </div>

      <ExploreServices />
    </main>
  );
}
