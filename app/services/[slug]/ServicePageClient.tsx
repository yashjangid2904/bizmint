"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Calculator, 
  FileText, 
  ShieldCheck, 
  Wallet, 
  Users,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
  UserCheck,
  BadgeCheck,
  Clock,
  Plus,
  Minus,
  Info,
  FileCheck2,
  MapPin,
  Activity,
  HelpCircle,
  Zap,
  TrendingUp,
  Globe,
  Check
} from "lucide-react";
import Link from "next/link";

import { ALL_SERVICES, type Service, type ServiceCategory } from "@/lib/services-data";

const CategoryView = ({ data }: { data: ServiceCategory }) => {
  const Icon = data.icon;
  const colors: Record<string, string> = {
    blue: '#3b82f6',
    emerald: '#10b981',
    rose: '#f43f5e',
    amber: '#f59e0b',
    purple: '#a855f7',
    indigo: '#6366f1',
    cyan: '#06b6d4',
    teal: '#14b8a6',
    orange: '#f97316'
  };

  const hexColor = colors[data.color] || data.color;

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Link 
        href="/services"
        className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-blue-600 transition-colors mb-12"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        Back to All Services
      </Link>

      {/* Hero Area */}
      <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center mb-12 sm:mb-24">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex h-16 w-16 items-center justify-center rounded-[2rem] mb-8"
            style={{ backgroundColor: `${hexColor}15`, color: hexColor }}
          >
            <Icon size={32} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white lg:text-6xl"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            {data.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              href={`/contact?service=${encodeURIComponent(data.title)}`}
              className="rounded-2xl bg-zinc-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white transition-all hover:bg-black active:scale-95 dark:bg-white dark:text-black text-center"
            >
              Get Started
            </Link>
            <Link
              href="/schedule-call"
              className="rounded-2xl border-2 border-zinc-200 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white text-center"
            >
              Free Consultation
            </Link>
          </motion.div>
        </div>
        <div className="hidden lg:block relative">
           <div className="absolute -inset-4 rounded-[3rem] blur-3xl opacity-10" style={{ backgroundColor: data.color }} />
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
        {data.services.map((service, i) => (
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
              {service.description}
            </p>
            <Link 
              href={service.href}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-700"
            >
              Learn More
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 py-6 dark:border-zinc-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 transition-colors">{question}</span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
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

const ServiceView = ({ service }: { service: Service }) => {
  // Fallback data if detailed fields are missing
  const benefits = service.benefits || [
    { title: "Expert Guidance", desc: "Professional advisory for all your business needs.", icon: UserCheck },
    { title: "Legal Compliance", desc: "Stay on the right side of the law with our help.", icon: ShieldCheck },
    { title: "Timely Delivery", desc: "Fast and efficient service to save you time.", icon: Clock },
    { title: "Transparent Pricing", desc: "No hidden costs, clear and upfront pricing.", icon: BadgeCheck }
  ];

  const steps = service.steps || [
    { number: "01", title: "Consultation", desc: "Discuss your requirements with our expert team." },
    { number: "02", title: "Documentation", desc: "Collect and verify all necessary documents." },
    { number: "03", title: "Filing", desc: "Online submission of application to relevant authorities." },
    { number: "04", title: "Completion", desc: "Receive your final registration or approval certificate." }
  ];

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative pt-12 pb-12 overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {service.badge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-8 dark:bg-blue-900/20 dark:border-blue-800"
            >
              {service.badge}
            </motion.div>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white lg:text-7xl mb-6 sm:mb-8 leading-[1.1]"
          >
            {service.name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          >
            <Link
              href={`/contact?service=${encodeURIComponent(service.name)}`}
              className="rounded-2xl bg-zinc-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white transition-all hover:bg-black active:scale-95 dark:bg-white dark:text-black shadow-xl shadow-blue-500/10 text-center"
            >
              Start Registration
            </Link>
            <Link
              href={`/contact?service=${encodeURIComponent(service.name)}`}
              className="rounded-2xl border-2 border-zinc-200 bg-white/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white text-center"
            >
              Talk to Expert
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      {service.overview && (
        <section className="py-12 border-t border-zinc-100 dark:border-zinc-800">
          <div className="max-w-4xl">
            <h2 className="font-outfit text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mb-6 sm:mb-8">Overview</h2>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              {service.overview.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Grid */}
      <section className="py-12 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="font-outfit text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mb-8 sm:mb-12">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm hover:shadow-xl transition-all dark:bg-zinc-950 dark:border-zinc-800"
            >
              <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 dark:bg-blue-900/30">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{benefit.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Eligibility Section */}
      {service.eligibility && (
        <section className="py-14 border-t border-zinc-100 dark:border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mb-6">Eligibility Requirements</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10">
                Ensure your business meets these basic criteria for a smooth registration process.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {service.eligibility.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full" />
              <div className="relative p-6 sm:p-10 rounded-2xl sm:rounded-[3rem] border border-zinc-100 bg-white dark:bg-zinc-950 dark:border-zinc-800">
                <Info className="text-blue-600 mb-6" size={48} />
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Expert Tip</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Having all directors present in India is not mandatory, but at least one director must be a resident of India (stayed in India for 182+ days).
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Documents Section */}
      {service.documents && (
        <section className="py-14 border-t border-zinc-100 dark:border-zinc-800">
          <div className="mb-16">
            <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mb-4">Documents Required</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Keep these documents ready to fast-track your application.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.documents.map((doc, i) => (
              <div key={i} className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                    <FileCheck2 size={18} />
                  </span>
                  {doc.category}
                </h3>
                <div className="flex-1 p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-zinc-50 border border-zinc-100 dark:bg-zinc-900/30 dark:border-zinc-800">
                  <ul className="space-y-4">
                    {doc.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span className="text-zinc-600 dark:text-zinc-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-14 border-t border-zinc-100 dark:border-zinc-800">
        <div className="mb-16">
          <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mb-4">Registration Process</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8">
            Our seamless digital-first approach ensures completion in the fastest possible time.
          </p>
          
          {service.timeline && (
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-blue-50/80 border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800">
              <Clock className="text-blue-600" size={20} />
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-600/60">Estimated Timeline</span>
                <span className="text-sm font-bold text-blue-600">{service.timeline}</span>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm overflow-hidden group dark:bg-zinc-950 dark:border-zinc-800"
            >
              <span className="absolute top-4 right-6 text-5xl font-black text-zinc-50 dark:text-zinc-900 transition-colors group-hover:text-blue-50/50">
                {step.number}
              </span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 pr-12">{step.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compliance Section */}
      {service.compliance && (
        <section className="py-14 border-t border-zinc-100 dark:border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
             <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.compliance.map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl border border-zinc-100 bg-white dark:bg-zinc-950 dark:border-zinc-800 flex items-center gap-4">
                       <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 dark:bg-emerald-900/20">
                          <Activity size={20} />
                       </div>
                       <span className="font-bold text-zinc-900 dark:text-zinc-100">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="order-1 lg:order-2">
                <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mb-6">Mandatory Compliance</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                  Staying compliant is crucial for your company's good standing. Non-compliance may lead to penalties and director disqualification.
                </p>
                <Link href="/services/mandatory-compliance" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
                  View All Compliance Services
                  <ArrowRight size={18} />
                </Link>
             </div>
          </div>
        </section>
      )}

      {/* Why Choose Section */}
      {service.whyChoose && (
        <section className="py-14 border-t border-zinc-100 dark:border-zinc-800">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mb-6">Why Choose Bizmint?</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              We combine professional expertise with technology to provide the best-in-class incorporation experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whyChoose.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-zinc-950 text-white shadow-2xl">
                 <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
                    <BadgeCheck size={24} />
                 </div>
                 <span className="text-lg font-bold">{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faqs && (
        <section className="py-14 border-t border-zinc-100 dark:border-zinc-800">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mb-4 flex items-center justify-center gap-3 sm:gap-4">
                <HelpCircle className="text-blue-600" size={32} />
                FAQs
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">Common questions about {service.name}</p>
            </div>
            <div className="flex flex-col">
              {service.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-zinc-950 p-6 sm:p-12 text-center text-white lg:p-20"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full" />
          </div>
          
          <div className="relative z-10">
            <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-black lg:text-5xl mb-4 sm:mb-6">{service.ctaTitle || "Ready to get started?"}</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg">
              {service.ctaDesc || "Get started with our expert advisory today and grow your business with confidence."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
              <Link
                href={`/contact?service=${encodeURIComponent(service.name)}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold text-zinc-950 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/20"
              >
                Start Registration
                <ArrowRight size={20} />
              </Link>
              <Link
                href={`/contact?service=${encodeURIComponent(service.name)}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
              >
                Talk to Expert
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

interface ServicePageClientProps {
  slug: string;
}

export default function ServicePageClient({ slug }: ServicePageClientProps) {
  // 1. Try to find a category
  const category = ALL_SERVICES.find(cat => cat.slug === slug);
  
  // 2. Try to find a specific service (check explicit slug OR derive from href)
  const service = ALL_SERVICES.flatMap(cat => cat.services).find(s => {
    const derivedSlug = s.slug || s.href.split('/').pop();
    return derivedSlug === slug;
  });

  if (!category && !service) {

    return (
      <div className="flex min-h-screen flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">Page Not Found</h1>
        <Link href="/services" className="mt-4 text-blue-600 hover:underline">Return to Services</Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white pt-24 sm:pt-32 pb-12 sm:pb-20 dark:bg-[#030014]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
      </div>

      {category ? <CategoryView data={category} /> : <ServiceView service={service!} />}

      {/* Global CTA - only for Category view as ServiceView has its own CTA */}
      {category && (
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-32 relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-linear-to-br from-blue-600 to-indigo-700 p-6 sm:p-12 text-center text-white lg:p-20"
          >
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold md:text-4xl">Still not sure which service is right?</h2>
              <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
                Our experts are just a call away. Let&apos;s discuss your requirements and build a tailored solution.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
                <Link
                  href={`/contact?service=${encodeURIComponent(category.title)}`}
                  className="rounded-2xl bg-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold text-blue-600 transition-all hover:scale-105 shadow-xl active:scale-95"
                >
                  Get Started Now
                </Link>
                <Link
                  href={`/contact?service=${encodeURIComponent(category.title)}`}
                  className="rounded-2xl border-2 border-white/30 bg-white/10 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
