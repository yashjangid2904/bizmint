"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Users2, 
  Award, 
  ShieldCheck, 
  Building2, 
  Globe2,
  TrendingUp,
  Handshake
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Years of Excellence", value: "8+", icon: Award },
  { label: "Businesses Registered", value: "2500+", icon: Building2 },
  { label: "Global Partners", value: "50+", icon: Globe2 },
  { label: "Client Satisfaction", value: "99%", icon: ShieldCheck },
];

const values = [
  {
    title: "Uncompromising Integrity",
    desc: "We adhere to the highest ethical standards in every advisory and filing we handle.",
    icon: ShieldCheck,
  },
  {
    title: "Client-Centric Approach",
    desc: "Your business growth is our priority. We tailor our strategies to your specific goals.",
    icon: Target,
  },
  {
    title: "Expertise-Driven",
    desc: "Our team consists of seasoned CAs, CSs, and legal experts with deep industry knowledge.",
    icon: Users2,
  },
  {
    title: "Modern Efficiency",
    desc: "We leverage cutting-edge technology to streamline complex regulatory processes.",
    icon: TrendingUp,
  },
];

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 dark:bg-[#030014]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 mb-8 dark:bg-blue-900/30 dark:text-blue-400"
          >
            <span>Our Journey</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
          >
            Empowering Global <br />
            <span className="text-blue-600">Business Ecosystems</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            Bizmint LLP was founded with a single mission: to simplify the complexity of regulatory compliance and 
            business advisory. We serve as the bridge between ambitious entrepreneurs and established statutory frameworks.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center p-8 rounded-3xl bg-zinc-50 border border-zinc-100 dark:bg-zinc-900/50 dark:border-zinc-800"
            >
              <stat.icon size={28} className="text-blue-600 mb-4" />
              <span className="text-3xl font-black text-zinc-900 dark:text-white">{stat.value}</span>
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-video"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-indigo-600/20 mix-blend-overlay z-10" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                To become the most trusted global partner for business advisory, where technology meets 
                regulatory excellence to foster sustainable economic growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                To empower businesses of all sizes by providing precise, transparent, and efficient 
                compliance solutions, allowing them to focus entirely on innovation and scaling.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The Bizmint <span className="text-blue-600">Values</span></h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">The principles that guide our every action.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl border border-zinc-100 bg-white transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white dark:bg-zinc-900">
                  <value.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 p-12 text-center text-white dark:bg-zinc-950 lg:p-20"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 h-64 w-64 bg-blue-600/20 blur-[100px]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to scale your business?</h2>
            <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
              Join 2500+ businesses that trust Bizmint for their advisory and compliance needs.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
              >
                Talk to an Expert
              </Link>
              <Link
                href="/services"
                className="rounded-2xl border-2 border-zinc-700 bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-zinc-800 active:scale-95"
              >
                Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
