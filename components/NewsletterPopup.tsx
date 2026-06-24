"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";

export default function NewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check if user is already subscribed (localStorage - persistent)
    const isSubscribed = localStorage.getItem("bizmint_subscribed");
    // Check if user dismissed it in this session (sessionStorage - cleared on tab close)
    const isDismissed = sessionStorage.getItem("bizmint_dismissed_subscription");

    if (!isSubscribed && !isDismissed) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 6000); // 6 seconds delay on page load
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Subscription failed");
      }

      setStatus("success");
      setMessage(data.message || "Thank you for subscribing!");
      localStorage.setItem("bizmint_subscribed", "true");

      // Auto-close success screen after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    // Dismiss temporarily for this session (cleared on revisit/reopen)
    sessionStorage.setItem("bizmint_dismissed_subscription", "true");
  };

  return (
    <>
      {/* Newsletter Subscription Pop-up */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 22, stiffness: 220 }}
            className="fixed bottom-6 right-6 z-[160] w-[380px] max-w-[calc(100vw-3rem)] rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 shadow-2xl overflow-hidden"
          >
            {/* Header Banner (Matches Premium Dark Blue/Indigo Gradients) */}
            <div className="bg-gradient-to-r from-blue-950 via-[#0f2354] to-zinc-900 px-6 py-5 relative flex items-center gap-4 border-b border-zinc-200/20 dark:border-zinc-800/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white select-none">
                <Mail size={22} />
              </div>
              <div className="flex-1">
                <h4 className="text-base font-extrabold text-white leading-tight">Stay Updated</h4>
                <p className="text-[11px] text-zinc-300 dark:text-zinc-400 mt-0.5 font-medium">
                  Get daily regulatory alerts
                </p>
              </div>
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/15 transition-all"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body Section */}
            <div className="p-6">
              {status === "success" ? (
                <div className="text-center py-4 space-y-2">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-bold mb-2">✓</span>
                  <h5 className="text-sm font-bold text-zinc-900 dark:text-white">Subscription Successful!</h5>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-semibold">
                    Join Bizmint and never miss an important regulatory notification or press release.
                  </p>

                  <div className="space-y-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 rounded-xl px-4 py-3.5 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 outline-none focus:border-blue-600 transition-colors shadow-inner"
                    />
                    {status === "error" && (
                      <p className="text-[11px] font-bold text-red-600 dark:text-red-400 leading-tight">
                        {message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all select-none disabled:opacity-50 shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 active:scale-[0.98]"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher trigger if dismissed or subscribed */}
      <AnimatePresence>
        {!showPopup && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => {
              setStatus("idle");
              setMessage("");
              setShowPopup(true);
            }}
            className="fixed bottom-6 right-6 z-[140] flex h-14 w-14 items-center justify-center rounded-full bg-[#0f2354] text-white hover:bg-opacity-90 shadow-2xl transition-transform active:scale-95 border border-zinc-200/20"
            title="Subscribe to daily alerts"
          >
            <Mail size={22} className="animate-bounce" style={{ animationDuration: '3s' }} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
