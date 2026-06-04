"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Globe,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Phone,
  Video,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

// Calendar helper functions
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const ScheduleCallPage = () => {
  const [step, setStep] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const firstDay = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Company Registration");

  const handleSchedule = async () => {
    if (!fullName || !email) {
      alert("Please fill in your name and email.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/schedule-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selectedDay,
          selectedTime,
          fullName,
          email,
          topic,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to schedule call");
      }

      // WhatsApp Redirection
      const whatsappMessage = `*New Strategy Call Scheduled*
Name: ${fullName}
Email: ${email}
Topic: ${topic}
Date: ${selectedDay}
Time: ${selectedTime}`;

      const businessWhatsApp = "919821886772";
      const whatsappUrl = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappUrl, "_blank");

      setIsSuccess(true);
    } catch (error) {
      console.error("Error scheduling call:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 dark:bg-[#030014]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
        <div className="absolute -top-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left Column: Info */}
          <div className="flex flex-col gap-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
              >
                Schedule a <span className="text-blue-600">Strategy Call</span>
              </motion.h1>
              <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
                Book a 15-minute discovery session with our senior consultants.
                We'll discuss your business goals and outline a compliance roadmap.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold">15-30 Minutes</p>
                  <p className="text-sm opacity-70">Discovery Consultation</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <Video size={20} />
                </div>
                <div>
                  <p className="font-bold">Google Meet / Zoom</p>
                  <p className="text-sm opacity-70">Video Conference</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="font-bold">IST (India Standard Time)</p>
                  <p className="text-sm opacity-70">Automatic Timezone Detection</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-zinc-50 border border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-800">
              <p className="text-sm italic text-zinc-500 dark:text-zinc-400">
                "Bizmint's consultation was the turning point for our SEBI registration.
                Highly professional and precise."
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
                — CEO, FinTech Startup
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Scheduler */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="scheduler"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
                >
                  {step === 1 && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Select Date & Time</h2>
                        <p className="text-sm text-zinc-500">Choose a slot that works best for you.</p>
                      </div>

                      <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-800/50 dark:bg-zinc-900/20">
                        {/* Calendar Header */}
                        <div className="mb-4 flex items-center justify-between px-2">
                          <button
                            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                            className="text-zinc-400 hover:text-zinc-900 transition-colors dark:hover:text-white"
                          >
                            <ChevronRight size={18} className="rotate-180" />
                          </button>
                          <div className="font-bold text-zinc-900 dark:text-white">
                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                          </div>
                          <button
                            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
                            className="text-zinc-400 hover:text-zinc-900 transition-colors dark:hover:text-white"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-y-2 text-center">
                          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
                            <div key={d} className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                              {d}
                            </div>
                          ))}

                          {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}

                          {Array.from({ length: daysInMonth }).map((_, i) => {
                            const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`;

                            // Set time to start of day for accurate comparison
                            const currentDateToCheck = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1);
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);

                            const isPast = currentDateToCheck < today;

                            return (
                              <button
                                key={i}
                                disabled={isPast}
                                onClick={() => setSelectedDay(dateStr)}
                                className={cn(
                                  "mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm transition-all",
                                  selectedDay === dateStr
                                    ? "bg-blue-600 font-bold text-white shadow-md shadow-blue-600/30"
                                    : isPast
                                      ? "cursor-not-allowed text-zinc-300 dark:text-zinc-700"
                                      : "font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                )}
                              >
                                {i + 1}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "rounded-xl border py-3 text-sm font-semibold transition-all",
                              selectedTime === time
                                ? "border-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-900/20"
                                : "border-zinc-100 bg-transparent text-zinc-600 hover:border-blue-200 hover:bg-blue-50/50 dark:border-zinc-800 dark:text-zinc-400"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>

                      <button
                        disabled={!selectedDay || !selectedTime}
                        onClick={() => setStep(2)}
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-zinc-900 py-4 text-lg font-bold text-white transition-all hover:bg-black disabled:opacity-50 dark:bg-white dark:text-black"
                      >
                        Next Step
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <button
                        onClick={() => setStep(1)}
                        className="text-xs font-bold text-blue-600 hover:underline"
                      >
                        ← Back to Calendar
                      </button>

                      <div>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Confirm Details</h2>
                        <p className="text-sm text-zinc-500">Provide your information to finalize the call.</p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Full Name</label>
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="name"
                            className="w-full rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none focus:border-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Work Email</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                            className="w-full rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none focus:border-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Topic of Discussion</label>
                          <div className="relative group">
                            <select
                              value={topic}
                              onChange={(e) => setTopic(e.target.value)}
                              className="w-full rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 pr-10 text-zinc-900 outline-none focus:border-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white appearance-none cursor-pointer"
                            >
                              <option value="Company Registration">Company Registration</option>
                              <option value="Regulatory Compliance">Regulatory Compliance</option>
                              <option value="Tax & Accounting">Tax & Accounting</option>
                              <option value="NBFC & RBI Services">NBFC & RBI Services</option>
                              <option value="SEBI & Investment Advisory">SEBI & Investment Advisory</option>
                              <option value="International / FEMA Compliance">International / FEMA Compliance</option>
                              <option value="Licenses & Certifications">Licenses & Certifications</option>
                              <option value="Share Recovery & IEPF">Share Recovery & IEPF</option>
                              <option value="Legal & Corporate Advisory">Legal & Corporate Advisory</option>
                              <option value="Startup & MSME Support">Startup & MSME Support</option>
                              <option value="Other">Other</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 group-focus-within:text-blue-600 transition-colors" />
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={handleSchedule}
                        disabled={isSubmitting || !fullName || !email}
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 shadow-xl shadow-blue-600/20 active:scale-95 disabled:opacity-70 disabled:hover:bg-blue-600 disabled:active:scale-100"
                      >
                        {isSubmitting ? (
                          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        ) : (
                          "Schedule Call"
                        )}
                      </button>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center rounded-3xl border border-zinc-200 bg-white p-12 text-center shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Call Scheduled!</h2>
                  <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                    Check your email for the calendar invitation and Google Meet link.
                    We'll see you on {selectedDay}th at {selectedTime}.
                  </p>
                  <Link
                    href="/"
                    className="mt-10 inline-flex items-center gap-2 font-bold text-blue-600 hover:underline"
                  >
                    Return to Homepage
                    <ChevronRight size={18} />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ScheduleCallPage;
