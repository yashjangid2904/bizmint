"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Lock, X, Loader2 } from "lucide-react";

export default function SecretAdminTrigger() {
  const [isOpen, setIsOpen] = useState(false);
  const [secretCode, setSecretCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Shift + B
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secretCode }),
      });

      const data = await res.json();

      if (res.ok) {
        setIsOpen(false);
        setSecretCode("");
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Access Denied");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-md overflow-hidden rounded-2xl bg-white/10 shadow-2xl backdrop-blur-xl border border-white/20 dark:bg-zinc-950/80 p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 text-blue-500">
                  <Lock size={20} />
                </div>
                <h2 className="text-xl font-bold text-white">Restricted Access</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-zinc-300">Secret Access Code</label>
                <input
                  type="password"
                  value={secretCode}
                  onChange={(e) => setSecretCode(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Enter code..."
                  autoFocus
                />
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-red-400"
                >
                  {error}
                </motion.p>
              )}

              <button
                type="submit"
                disabled={isLoading || !secretCode}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : "Authenticate"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
