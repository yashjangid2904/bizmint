"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    title: "Senior Chartered Accountant",
    location: "Gurugram / Remote",
    type: "Full-time",
    department: "Tax & Audit",
  },
  {
    title: "Company Secretary",
    location: "Gurugram",
    type: "Full-time",
    department: "Compliance",
  },
  {
    title: "Legal Advisory Lead",
    location: "Mumbai",
    type: "Full-time",
    department: "Legal",
  },
  {
    title: "Business Development Manager",
    location: "Remote",
    type: "Contract",
    department: "Sales",
  },
];

const CareersPage = () => {
  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 dark:bg-[#030014]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
          >
            Join the <span className="text-blue-600">Bizmint</span> Team
          </motion.h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Help us redefine the future of business advisory and regulatory technology. 
            We're always looking for ambitious minds.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-3xl border border-zinc-100 bg-white hover:border-blue-600 transition-all dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-sm text-zinc-500">
                      <MapPin size={14} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-zinc-500">
                      <Clock size={14} /> {job.type}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md dark:bg-blue-900/30">
                      {job.department}
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-zinc-900 px-6 text-sm font-bold text-white transition-all hover:bg-black dark:bg-white dark:text-black"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
