"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  Globe, 
  ChevronRight, 
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

const days = [
  { day: "Mon", date: "22" },
  { day: "Tue", date: "23" },
  { day: "Wed", date: "24" },
  { day: "Thu", date: "25" },
  { day: "Fri", date: "26" },
];

const ScheduleCallPage = () => {
  const [step, setStep] = useState(1);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSchedule = async () => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
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

                      <div className="grid grid-cols-5 gap-2">
                        {days.map((d) => (
                          <button
                            key={d.date}
                            onClick={() => setSelectedDay(d.date)}
                            className={cn(
                              "flex flex-col items-center gap-1 rounded-xl py-3 text-sm font-bold transition-all",
                              selectedDay === d.date 
                                ? "bg-blue-600 text-white shadow-lg" 
                                : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-400"
                            )}
                          >
                            <span className="text-[10px] uppercase opacity-60">{d.day}</span>
                            <span>{d.date}</span>
                          </button>
                        ))}
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
                            placeholder="Aman Sharma"
                            className="w-full rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none focus:border-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Work Email</label>
                          <input 
                            type="email" 
                            placeholder="aman@company.com"
                            className="w-full rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none focus:border-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Topic of Discussion</label>
                          <select className="w-full rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none focus:border-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white appearance-none">
                            <option>General Compliance</option>
                            <option>Company Registration</option>
                            <option>SEBI Advisory</option>
                            <option>RBI Filings</option>
                          </select>
                        </div>
                      </div>

                      <button
                        onClick={handleSchedule}
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 shadow-xl shadow-blue-600/20 active:scale-95"
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
