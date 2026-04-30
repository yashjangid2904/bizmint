"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Calculator, 
  FileText, 
  ShieldCheck, 
  Wallet, 
  Users,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

interface ServiceCategory {
  title: string;
  icon: any;
  services: string[];
  color: string;
  href: string;
}

const categories: ServiceCategory[] = [
  {
    title: "Start Business",
    icon: Building2,
    color: "#3b82f6",
    href: "/services/start-business",
    services: [
      "Private Limited Company",
      "LLP Registration",
      "OPC Registration",
      "Foreign Subsidiary"
    ]
  },
  {
    title: "Tax & Accounting",
    icon: Calculator,
    color: "#10b981",
    href: "/services/tax-accounting",
    services: [
      "GST Registration & Filing",
      "ITR Filing (Business & Personal)",
      "TDS Compliance",
      "Bookkeeping & Financials"
    ]
  },
  {
    title: "Licenses",
    icon: FileText,
    color: "#f59e0b",
    href: "/services/licenses",
    services: [
      "BIS / BEE / WPC Certifications",
      "NBFC License (RBI)",
      "SEBI License (AIF/IA)",
      "Insurance License (IRDAI)"
    ]
  },
  {
    title: "Compliance",
    icon: ShieldCheck,
    color: "#8b5cf6",
    href: "/services/compliance",
    services: [
      "ROC Filing & Annual Returns",
      "Director KYC & DIN Services",
      "FEMA / RBI Reporting",
      "Secretarial Audit"
    ]
  },
  {
    title: "NBFC & Finance",
    icon: Wallet,
    color: "#ef4444",
    href: "/services/nbfc-finance",
    services: [
      "NBFC Setup & Acquisition",
      "Ongoing NBFC Compliance",
      "P2P Lending License",
      "CIC / Credit Bureau Services"
    ]
  },
  {
    title: "Investor Services",
    icon: Users,
    color: "#6366f1",
    href: "/services/investor-services",
    services: [
      "IEPF Claim Recovery",
      "Duplicate Share Certificates",
      "Share Transmission",
      "Mutual Fund Advisory"
    ]
  }
];

const CategoryCard = ({ category, index }: { category: ServiceCategory; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-8 transition-all duration-300 hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* Hover Background Accent */}
      <div 
        className="absolute inset-0 -z-10 translate-y-full bg-linear-to-b from-transparent transition-transform duration-500 group-hover:translate-y-0"
        style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${category.color}08)` }}
      />

      <div className="flex items-center gap-4 mb-6">
        <div 
          className="flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${category.color}15`, color: category.color }}
        >
          <category.icon size={24} />
        </div>
        <h3 className="font-outfit text-xl font-bold text-zinc-900 dark:text-zinc-50">{category.title}</h3>
      </div>

      <ul className="flex-1 space-y-3 mb-8">
        {category.services.map((service, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
            <div className="mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
              <div className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            </div>
            {service}
          </li>
        ))}
      </ul>

      <Link 
        href={category.href}
        className="inline-flex items-center gap-2 text-sm font-bold transition-all"
        style={{ color: category.color }}
      >
        View All Services
        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

const ExploreServices = () => {
  return (
    <section id="services" className="relative overflow-hidden py-24 dark:bg-[#030014]">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-full -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,#3b82f608_0%,transparent_70%)]" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-outfit text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Explore Our <span className="text-blue-600 dark:text-blue-500">Services</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              End-to-end solutions for business setup, compliance, taxation & finance. 
              Everything you need to grow your enterprise.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <CategoryCard key={category.title} category={category} index={i} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex flex-col items-center gap-6 rounded-[2.5rem] bg-zinc-900 p-10 text-center dark:bg-zinc-900/50 dark:backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold text-white">Can't find what you're looking for?</h3>
          <p className="max-w-xl text-zinc-400">
            Our advisory team handles over 100+ specialized regulatory and financial services. 
            Talk to us for a custom solution.
          </p>
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
          >
            Request Custom Advisory
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreServices;
