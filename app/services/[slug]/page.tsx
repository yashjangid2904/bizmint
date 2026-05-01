"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Building2, 
  Calculator, 
  FileText, 
  ShieldCheck, 
  Wallet, 
  Users,
  ArrowRight,
  CheckCircle2,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

const categoryData: Record<string, any> = {
  "start-business": {
    title: "Start Your Business",
    icon: Building2,
    color: "blue",
    description: "Launch your venture with the right legal structure. We handle everything from name approval to incorporation certificates.",
    services: [
      { name: "Private Limited Company", desc: "Most popular for startups and scale-ups." },
      { name: "LLP Registration", desc: "Ideal for professional services and small businesses." },
      { name: "OPC Registration", desc: "Perfect for solo entrepreneurs with limited liability." },
      { name: "Foreign Subsidiary", desc: "End-to-end setup for international companies in India." },
      { name: "Nidhi Company", desc: "Specialized registration for mutual benefit societies." },
      { name: "Section 8 Company", desc: "Incorporation for non-profit organizations." }
    ]
  },
  "tax-accounting": {
    title: "Tax & Accounting",
    icon: Calculator,
    color: "emerald",
    description: "Stay compliant with tax laws while optimizing your financial health. Our experts manage the numbers so you can manage the growth.",
    services: [
      { name: "GST Registration & Filing", desc: "Monthly, quarterly, and annual GST compliance." },
      { name: "ITR Filing", desc: "Corporate and individual income tax returns." },
      { name: "TDS Compliance", desc: "Timely deduction, deposit, and return filing." },
      { name: "Bookkeeping", desc: "Professional accounting and financial statement preparation." },
      { name: "Tax Audit", desc: "Comprehensive audits as per Income Tax Act." },
      { name: "Internal Audit", desc: "Process review and internal control assessment." }
    ]
  },
  "licenses": {
    title: "Regulatory Licenses",
    icon: FileText,
    color: "amber",
    description: "Obtain the necessary certifications to operate in specialized industries. We navigate the red tape for you.",
    services: [
      { name: "BIS Certification", desc: "Quality standards for manufactured goods." },
      { name: "BEE Certification", desc: "Energy efficiency ratings for electronics." },
      { name: "WPC Approval", desc: "License for wireless and bluetooth devices." },
      { name: "NBFC License", desc: "RBI registration for non-banking financial companies." },
      { name: "SEBI Registration", desc: "Licenses for AIF, IA, and PMS entities." },
      { name: "FSSAI License", desc: "Food safety and standards registration." }
    ]
  },
  "compliance": {
    title: "Ongoing Compliance",
    icon: ShieldCheck,
    color: "violet",
    description: "Never miss a deadline. Our annual compliance packages ensure your business remains in good standing with the law.",
    services: [
      { name: "ROC Annual Filing", desc: "Form MGT-7 and AOC-4 annual returns." },
      { name: "Secretarial Audit", desc: "Independent check on statutory compliance." },
      { name: "FEMA Compliance", desc: "Reporting of foreign direct investment (FDI)." },
      { name: "Director KYC", desc: "Annual verification for all company directors." },
      { name: "Minutes Management", desc: "Drafting board and general meeting minutes." },
      { name: "Statutory Registers", desc: "Maintenance of all required corporate records." }
    ]
  },
  "nbfc-finance": {
    title: "NBFC & Fintech",
    icon: Wallet,
    color: "rose",
    description: "Specialized advisory for the financial services sector. From licensing to ongoing RBI reporting.",
    services: [
      { name: "NBFC Registration", desc: "RBI Type I and Type II NBFC setup." },
      { name: "Fintech Advisory", desc: "Legal structure for digital lending platforms." },
      { name: "P2P License", desc: "Registration for peer-to-peer lending entities." },
      { name: "CIC Reporting", desc: "Credit information company data submission." },
      { name: "RBI Returns", desc: "Filing of all mandatory monthly and quarterly returns." },
      { name: "Takeover/Merger", desc: "Due diligence for NBFC acquisitions." }
    ]
  },
  "investor-services": {
    title: "Investor Services",
    icon: Users,
    color: "indigo",
    description: "Recover and manage your investments. We help individual investors navigate complex share-related processes.",
    services: [
      { name: "IEPF Claim Recovery", desc: "Claiming unpaid dividends and shares from IEPF." },
      { name: "Share Transmission", desc: "Transfer of shares to legal heirs after demise." },
      { name: "Duplicate Shares", desc: "Process for lost or mutilated share certificates." },
      { name: "Demat Services", desc: "Converting physical shares to electronic format." },
      { name: "Mutual Fund Service", desc: "Updating KYC and recovering unclaimed units." },
      { name: "Wealth Monitoring", desc: "Consolidated portfolio tracking and advisory." }
    ]
  }
};

const ServiceCategoryPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const data = categoryData[slug];

  if (!data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-bold">Category Not Found</h1>
        <Link href="/services" className="mt-4 text-blue-600 hover:underline">Return to Services</Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="relative min-h-screen bg-white pt-24 sm:pt-32 pb-12 sm:pb-20 dark:bg-[#030014]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
      </div>
 
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Link 
          href="/services"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-blue-600 transition-colors mb-8 sm:mb-12"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to All Services
        </Link>
 
        {/* Hero Area */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center mb-16 sm:mb-24">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-[1.5rem] sm:rounded-[2rem] bg-${data.color}-50 text-${data.color}-600 dark:bg-${data.color}-900/30 dark:text-${data.color}-400 mb-6 sm:mb-8`}
            >
              <Icon size={28} className="sm:w-8 sm:h-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-outfit text-3xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
              {data.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="rounded-2xl bg-zinc-900 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-black active:scale-95 dark:bg-white dark:text-black"
              >
                Get Started
              </Link>
              <Link
                href="/schedule-call"
                className="rounded-2xl border-2 border-zinc-200 px-8 py-4 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                Free Consultation
              </Link>
            </motion.div>
          </div>
          <div className="hidden lg:block relative">
             <div className={`absolute -inset-4 rounded-[3rem] bg-${data.color}-500/10 blur-3xl`} />
             <div className="relative rounded-[2.5rem] border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2026" 
                  alt={data.title}
                  className="rounded-[2.2rem] w-full h-auto"
                />
             </div>
          </div>
        </div>

        {/* Services Detail List */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-8 rounded-3xl border border-zinc-100 bg-white shadow-sm transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30">
                  <CheckCircle2 size={16} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{service.name}</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-700"
              >
                Learn More
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative overflow-hidden rounded-[3rem] bg-linear-to-br from-blue-600 to-indigo-700 p-12 text-center text-white lg:p-20"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold sm:text-4xl">Still not sure which service is right?</h2>
            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
              Our experts are just a call away. Let's discuss your requirements and build a tailored solution.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Link
                href="/schedule-call"
                className="rounded-2xl bg-white px-10 py-4 text-lg font-bold text-blue-600 transition-all hover:scale-105 shadow-xl active:scale-95"
              >
                Schedule a Free Call
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border-2 border-white/30 bg-white/10 px-10 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCategoryPage;
