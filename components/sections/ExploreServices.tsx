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
  Globe,
  Target,
  Zap,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

interface ServiceItem {
  name: string;
  href: string;
}

interface ServiceCategory {
  title: string;
  icon: any;
  services: (string | ServiceItem)[];
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
      { name: "Private Limited Company", href: "/services/private-limited-company" },
      { name: "LLP Registration", href: "/services/llp-registration" },
      { name: "OPC Registration", href: "/services/opc-registration" },
      { name: "Foreign Subsidiary", href: "/services/foreign-subsidiary" }
    ]
  },
  {
    title: "Tax & Accounting",
    icon: Calculator,
    color: "#10b981",
    href: "/services/tax-accounting",
    services: [
      { name: "GST Registration & Filing", href: "/services/gst-income-tax" },
      { name: "Income Tax (ITR) Filing", href: "/services/gst-income-tax" },
      { name: "TDS Compliance", href: "/services/gst-income-tax" },
      { name: "Bookkeeping & Financials", href: "/services/annual-compliance" }
    ]
  },
  {
    title: "Licenses",
    icon: FileText,
    color: "#f59e0b",
    href: "/services/licenses",
    services: [
      { name: "BIS / BEE / WPC / PESO", href: "/services/bis-bee-wpc-peso" },
      { name: "NBFC License (RBI)", href: "/services/nbfc-registration" },
      { name: "SEBI License (AIF/IA)", href: "/services/sebi-license" },
      { name: "Insurance License (IRDAI)", href: "/services/insurance-license" }
    ]
  },
  {
    title: "Compliance",
    icon: ShieldCheck,
    color: "#8b5cf6",
    href: "/services/compliance",
    services: [
      { name: "ROC Filing & Annual Returns", href: "/services/roc-filings" },
      { name: "Director KYC (DIN)", href: "/services/din-kyc" },
      { name: "Annual Compliance", href: "/services/annual-compliance" },
      { name: "FEMA / RBI Reporting", href: "/services/fdi-fema" }
    ]
  },
  {
    title: "NBFC & Finance",
    icon: Wallet,
    color: "#ef4444",
    href: "/services/nbfc-finance",
    services: [
      { name: "NBFC Setup & Acquisition", href: "/services/nbfc-setup" },
      { name: "Ongoing NBFC Compliance", href: "/services/nbfc-compliance" },
      { name: "P2P Lending License", href: "/services/p2p-license" },
      { name: "RBI Statutory Services", href: "/services/rbi-services" }
    ]
  },
  {
    title: "International",
    icon: Globe,
    color: "#06b6d4",
    href: "/services/international",
    services: [
      { name: "FDI / FEMA Advisory", href: "/services/fdi-fema" },
      { name: "FC-GPR / FC-TRS Reporting", href: "/services/fc-gpr" },
      { name: "Annual FLA Return", href: "/services/fla-return" },
      { name: "Foreign Subsidiary Setup", href: "/services/foreign-subsidiary" }
    ]
  },
  {
    title: "Investor Services",
    icon: Target,
    color: "#6366f1",
    href: "/services/investor-services",
    services: [
      { name: "IEPF Claim Recovery", href: "/services/iepf-claim" },
      { name: "Duplicate Share Certificates", href: "/services/duplicate-shares" },
      { name: "Share Transmission", href: "/services/share-transmission" },
      { name: "Mutual Fund Redemption", href: "/services/mutual-fund-redemption" }
    ]
  },
  {
    title: "Registrations",
    icon: Zap,
    color: "#ec4899",
    href: "/services/registrations",
    services: [
      { name: "Digital Signature (DSC)", href: "/services/dsc" },
      { name: "IEC Registration", href: "/services/iec-registration" },
      { name: "MSME Registration", href: "/services/msme-registration" },
      { name: "Startup India Recognition", href: "/services/startup-india" }
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
        {category.services.map((service, i) => {
          const isObject = typeof service !== "string";
          const name = isObject ? service.name : service;
          const href = isObject ? service.href : "#";

          return (
            <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
              <div className="mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                <div className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              </div>
              {isObject ? (
                <Link href={href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {name}
                </Link>
              ) : (
                <span>{name}</span>
              )}
            </li>
          );
        })}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <p className="text-zinc-600 dark:text-zinc-400 font-medium text-center sm:text-left">
            Need a custom solution for your business?
          </p>
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-2xl bg-zinc-900 px-8 py-4 font-bold text-white transition-all hover:bg-black active:scale-95 dark:bg-white dark:text-black w-full sm:w-auto justify-center"
          >
            Request a Proposal
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreServices;
