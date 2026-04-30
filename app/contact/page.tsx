"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  CheckCircle2, 
  Send, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  MessageSquare,
  ArrowRight,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-zinc-50 dark:bg-zinc-950" />
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05),transparent_50%)]" />
      <div className="absolute top-1/4 -right-20 -z-10 h-96 w-96 rounded-full bg-blue-100 opacity-30 blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 -z-10 h-96 w-96 rounded-full bg-blue-50 opacity-30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 mb-6 dark:bg-blue-900/30 dark:text-blue-400"
          >
            <Star className="h-4 w-4 fill-current" />
            <span>Trusted by 500+ businesses nationwide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50"
          >
            Talk to an <span className="text-blue-600">Expert</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
          >
            Get professional guidance tailored to your business needs. Our team of specialists is ready to help you navigate your regulatory and advisory journey.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-3xl bg-white p-8 shadow-2xl shadow-zinc-200/50 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:shadow-none dark:ring-zinc-800 sm:p-12"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 transition-colors group-focus-within:text-blue-600" />
                        <input
                          id="fullName"
                          {...register("fullName", { required: "Full name is required" })}
                          placeholder="John Doe"
                          className={cn(
                            "w-full rounded-xl border-zinc-200 bg-zinc-50 py-3 pl-10 pr-4 text-zinc-900 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 outline-none",
                            errors.fullName && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          )}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-xs font-medium text-red-500">{errors.fullName.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 transition-colors group-focus-within:text-blue-600" />
                        <input
                          id="email"
                          type="email"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                          placeholder="john@example.com"
                          className={cn(
                            "w-full rounded-xl border-zinc-200 bg-zinc-50 py-3 pl-10 pr-4 text-zinc-900 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 outline-none",
                            errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          )}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs font-medium text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Phone Number
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 transition-colors group-focus-within:text-blue-600" />
                        <input
                          id="phone"
                          {...register("phone")}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border-zinc-200 bg-zinc-50 py-3 pl-10 pr-4 text-zinc-900 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 outline-none"
                        />
                      </div>
                    </div>

                    {/* Service Select */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Select Service
                      </label>
                      <div className="relative group">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 transition-colors group-focus-within:text-blue-600" />
                        <select
                          id="service"
                          {...register("service")}
                          className="w-full rounded-xl border-zinc-200 bg-zinc-50 py-3 pl-10 pr-4 text-zinc-900 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 outline-none appearance-none"
                        >
                          <option value="">Choose a service</option>
                          <option value="company-registration">Company Registration</option>
                          <option value="gst">GST</option>
                          <option value="compliance">Compliance</option>
                          <option value="legal-advisory">Legal Advisory</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-zinc-400 transition-colors group-focus-within:text-blue-600" />
                      <textarea
                        id="message"
                        rows={4}
                        {...register("message", { required: "Message is required" })}
                        placeholder="Tell us about your requirements..."
                        className={cn(
                          "w-full rounded-xl border-zinc-200 bg-zinc-50 py-3 pl-10 pr-4 text-zinc-900 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 outline-none resize-none",
                          errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        )}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-xs font-medium text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                      <>
                        <span>Request Consultation</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
                    By submitting, you agree to our <a href="#" className="text-blue-600 underline underline-offset-4">Privacy Policy</a>.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col items-center justify-center rounded-3xl bg-white p-12 text-center shadow-2xl shadow-zinc-200/50 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:shadow-none dark:ring-zinc-800 sm:p-20"
              >
                <div className="relative mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                  >
                    <CheckCircle2 className="h-12 w-12" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-blue-400"
                  />
                </div>
                
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                  Request Received!
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-sm">
                  Thank you for reaching out. One of our experts will contact you within 24 hours.
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
                >
                  <span>Go back to form</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center justify-center gap-8 border-t border-zinc-200 pt-12 dark:border-zinc-800"
        >
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Bizmint LLP</span>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Secure & Confidential Business Advisory
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
