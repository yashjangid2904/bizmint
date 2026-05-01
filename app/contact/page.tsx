"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Send,
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Clock,
  MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { NAV_ITEMS } from "@/components/navbar/nav-data";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      setValue("service", service);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      console.log("Contact successfully submitted to backend!");

      // 1. Format the WhatsApp message
      const whatsappMessage = `*New Expert Consultation Request*
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}
Message: ${data.message || "No additional message"}`;

      // 2. Generate WhatsApp URL
      // NOTE: Replace 919876543210 with your actual business WhatsApp number (Include 91, no + sign)
      const businessWhatsApp = "919810750144";
      const whatsappUrl = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;

      // 3. Redirect user to WhatsApp
      window.open(whatsappUrl, "_blank");

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-[2.5rem] bg-white p-12 text-center shadow-2xl dark:bg-zinc-900 sm:p-20"
      >
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Request Received!</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-sm">
          Thank you for reaching out. One of our experts will contact you within 30 minutes.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Send another message <ArrowRight size={18} />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-zinc-200/50 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:shadow-none dark:ring-zinc-800 sm:p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Full Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                {...register("fullName", { required: "Name is required" })}
                placeholder="name"
                className={cn(
                  "w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-4 pl-12 pr-4 text-zinc-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",
                  errors.fullName && "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                )}
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="email"
                className={cn(
                  "w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-4 pl-12 pr-4 text-zinc-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",
                  errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                )}
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Phone Number</label>
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                {...register("phone", { required: "Phone is required" })}
                placeholder="+91"
                className={cn(
                  "w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-4 pl-12 pr-4 text-zinc-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",
                  errors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                )}
              />
            </div>
          </div>

          {/* Service */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Interest In</label>
            <div className="relative group">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 group-focus-within:text-blue-600 transition-colors" />
              <select
                {...register("service")}
                className="w-full appearance-none rounded-2xl border border-zinc-200 bg-zinc-50 py-4 pl-12 pr-4 text-zinc-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50"
              >
                <option value="">Select a service</option>
                {NAV_ITEMS.map((category) => (
                  <optgroup key={category.title} label={category.title}>
                    {category.items.map((item) => (
                      <option key={item.name} value={item.href.split('/').pop()}>
                        {item.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">How can we help?</label>
          <div className="relative group">
            <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-zinc-400 group-focus-within:text-blue-600 transition-colors" />
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Tell us about your business goals..."
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-4 pl-12 pr-4 text-zinc-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 resize-none"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="space-y-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-5 text-lg font-bold text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-[0.98] disabled:opacity-70"
          >
            {isSubmitting ? "Processing..." : "Get Free Consultation"}
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-center text-xs font-medium text-zinc-500 dark:text-zinc-400">
            No spam • 100% confidential • Quick response
          </p>

          <div className="flex items-center gap-4 py-2">
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">or</span>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          </div>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-zinc-200 py-4 font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900"
          >
            <MessageCircle size={20} className="text-emerald-500" />
            Chat on WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
};

const TrustPanel = () => {
  const stats = [
    { label: "Clients Served", value: "500+", icon: Users, color: "text-blue-600" },
    { label: "Success Rate", value: "99%", icon: ShieldCheck, color: "text-emerald-600" },
    { label: "Response Time", value: "< 24h", icon: Clock, color: "text-orange-600" },
    { label: "Dedicated Experts", value: "20+", icon: Zap, color: "text-purple-600" },
  ];

  return (
    <div className="flex flex-col gap-8 lg:sticky lg:top-32">
      <div className="space-y-4">
        <h2 className="font-outfit text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Why choose <span className="text-blue-600">Bizmint?</span>
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          We combine deep regulatory expertise with modern technology to deliver seamless compliance and growth solutions for your enterprise.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className={cn("mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-800", stat.color)}>
              <stat.icon size={20} />
            </div>
            <div className="text-2xl font-black text-zinc-900 dark:text-white">{stat.value}</div>
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-[2rem] bg-zinc-900 p-8 text-white dark:bg-blue-600">
        <h3 className="text-xl font-bold">Priority Support</h3>
        <p className="mt-2 text-sm text-zinc-400 dark:text-blue-100">
          Our senior partners handle complex regulatory filings directly to ensure 100% accuracy.
        </p>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white pt-24 sm:pt-32 pb-12 sm:pb-20 dark:bg-[#030014]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,#3b82f610_0%,transparent_70%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-16 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
              Talk to an <span className="text-blue-600">Expert</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-medium text-zinc-600 dark:text-zinc-400">
              Our experts usually respond within <span className="text-blue-600 dark:text-blue-400">30 minutes</span>
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Suspense fallback={<div>Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
          <div className="lg:col-span-5">
            <TrustPanel />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
