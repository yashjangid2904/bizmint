"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  ArrowRight,
  X,
  Sparkles,
} from "lucide-react";
import { NAV_ITEMS } from "../navbar/nav-data";
import { cn } from "@/lib/utils";

/* ─────────────────────────────── ROTATING HEADLINES ────────────────────────── */
const HEADLINES = [
  "Worried About Your Company Non-Compliance?",
  "Looking to Register Your Private Limited Company?",
  "Need Expert Help with NBFC Registration?",
  "Want to Protect Your Brand with Trademark?",
  "Planning to Set Up Business in India?",
  "Struggling with ROC & Annual Filings?",
];

/* ─────────────────────────────── POPULAR TAGS ──────────────────────────────── */
const POPULAR_TAGS_ROWS = [
  // Row 1 (5 items)
  [
    { label: "Private Limited Company", href: "/services/private-limited-company" },
    { label: "LLP Registration", href: "/services/llp-registration" },
    { label: "GST Registration", href: "/services/gst-registration" },
    { label: "NBFC Registration", href: "/services/nbfc-registration" },
    { label: "NBFC RBI Compliance & Regulatory Reporting", href: "/services/nbfc-rbi-compliance" },
  ],
  // Row 2 (5 items)
  [
    { label: "ROC Filings", href: "/services/annual-filing-company" },
    { label: "RBI FEMA Compliance", href: "/services/rbi-fema-compliance-services" },
    { label: "IRDAI Licence & Compliance Services", href: "/services/insurance-compliance" },
    { label: "Insurance Broker License", href: "/services/insurance-broker" },
    { label: "Corporate Agent License", href: "/services/corporate-agency" },
  ],
  // Row 3 (4 items)
  [
    { label: "IEPF Claim", href: "/services/iepf-claim" },
    { label: "FDI Compliance & RBI Reporting (FC-GPR / FC-TRS)", href: "/services/fc-gpr-filing" },
    { label: "Foreign Company Registration & India Entry Advisory", href: "/services/foreign-subsidiary" },
    { label: "NBFC Acquisition / Change in Control Advisory", href: "/services/nbfc-acquisition" },
  ]
];



/* ─────────────────────────────── FLAT SERVICES ─────────────────────────────── */
interface FlatService {
  name: string;
  href: string;
  category: string;
  icon?: any;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   TYPEWRITER HOOK
   ═══════════════════════════════════════════════════════════════════════════════ */
function useTypewriter(headlines: string[], typingSpeed = 60, deletingSpeed = 30, pauseDuration = 2200) {
  const [displayText, setDisplayText] = useState("");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentHeadline = headlines[headlineIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && displayText === currentHeadline) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
      return;
    }

    const timer = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentHeadline.slice(0, prev.length + 1)
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, headlineIndex, isDeleting, isPaused, headlines, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   HERO SECTION COMPONENT
   ═══════════════════════════════════════════════════════════════════════════════ */
const HeroSection = () => {
  const router = useRouter();
  const typedText = useTypewriter(HEADLINES, 50, 25, 2500);

  // ── Search State ──
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Flatten all services
  const allServices = useMemo<FlatService[]>(() => {
    const flat: FlatService[] = [];
    NAV_ITEMS.forEach((category) => {
      category.items.forEach((item) => {
        flat.push({ ...item, category: category.title });
      });
    });
    return flat;
  }, []);

  // Filter results
  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return allServices.filter(
      (s) =>
        s.name.toLowerCase().includes(lowerQuery) ||
        s.category.toLowerCase().includes(lowerQuery)
    );
  }, [query, allServices]);

  const handleSelect = useCallback(
    (service: FlatService) => {
      setIsSearchOpen(false);
      setQuery("");
      router.push(service.href);
    },
    [router]
  );

  // Outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard nav
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isSearchOpen || filteredResults.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((p) => (p < filteredResults.length - 1 ? p + 1 : p));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((p) => (p > 0 ? p - 1 : 0));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(filteredResults[selectedIndex]);
    } else if (e.key === "Escape") {
      setIsSearchOpen(false);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center bg-white dark:bg-black pt-24 pb-24 sm:pt-32 sm:pb-32">
      {/* ── Background Patterns (Clipped) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[70%] bg-[radial-gradient(ellipse_at_50%_0%,#3b82f60a_0%,transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8">
        {/* ── Headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-3 sm:mb-4"
        >
          <h1 className="font-outfit text-2xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15] min-h-[2.8em] sm:min-h-[2.4em] flex items-center justify-center">
            <span>
              {typedText}
              <span className="inline-block w-[3px] h-[1em] bg-blue-600 ml-1 animate-pulse rounded-full align-middle" />
            </span>
          </h1>
        </motion.div>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-sm sm:text-lg text-zinc-500 dark:text-zinc-400 mb-6 sm:mb-8 max-w-2xl mx-auto font-medium"
        >
          Reach out to us for{" "}
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Registration</span>,{" "}
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Accounts</span>,{" "}
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Legal</span>,{" "}
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Tax</span> &{" "}
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Compliance</span>
        </motion.p>

        {/* ── Search Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          ref={containerRef}
          className="relative w-full max-w-2xl mx-auto mb-5 sm:mb-6 z-50"
        >
          <div
            className={cn(
              "group relative flex items-center transition-all duration-300",
              isSearchOpen ? "scale-[1.02]" : "hover:scale-[1.01]"
            )}
          >
            <div className="absolute left-5 sm:left-6 text-zinc-400 group-focus-within:text-blue-500 transition-colors">
              <Search size={20} />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(-1);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              onKeyDown={handleKeyDown}
              placeholder="Search services — GST, LLP, NBFC, Trademark..."
              className={cn(
                "w-full h-14 sm:h-16 pl-12 sm:pl-14 pr-14 sm:pr-16 rounded-full border-2 bg-white/90 backdrop-blur-xl text-base sm:text-lg font-medium outline-none transition-all",
                "border-zinc-200 shadow-xl shadow-zinc-200/30",
                "focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 focus:shadow-2xl focus:shadow-blue-100/40",
                "dark:bg-zinc-900/80 dark:border-zinc-800 dark:text-white dark:shadow-none dark:focus:border-blue-500/30 dark:focus:ring-blue-500/5",
                "placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
              )}
            />
            <div className="absolute right-3 sm:right-4 flex items-center gap-2">
              {query && (
                <button
                  onClick={() => {
                    setQuery("");
                    inputRef.current?.focus();
                  }}
                  className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 transition-colors"
                >
                  <X size={16} />
                </button>
              )}
              <button
                onClick={() => inputRef.current?.focus()}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
              >
                <Search size={14} />
                Search
              </button>
            </div>
          </div>

          {/* ── Search Results Dropdown ── */}
          <AnimatePresence>
            {isSearchOpen && query && filteredResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-3 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white/98 backdrop-blur-2xl shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/98"
              >
                <div className="max-h-[320px] overflow-y-auto p-3">
                  <div className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Results ({filteredResults.length})
                  </div>
                  {filteredResults.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <button
                        key={`${s.category}-${s.href}`}
                        onClick={() => handleSelect(s)}
                        className={cn(
                          "group flex w-full items-center gap-3 rounded-xl p-3 transition-all text-left",
                          selectedIndex === i
                            ? "bg-blue-600 text-white"
                            : "hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                            selectedIndex === i
                              ? "bg-white/20 text-white"
                              : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                          )}
                        >
                          {Icon ? <Icon size={16} /> : <ArrowRight size={16} />}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span
                            className={cn(
                              "text-sm font-bold truncate",
                              selectedIndex === i ? "text-white" : "text-zinc-900 dark:text-zinc-50"
                            )}
                          >
                            {s.name}
                          </span>
                          <span
                            className={cn(
                              "text-[10px] font-bold uppercase tracking-wider",
                              selectedIndex === i ? "text-blue-100" : "text-zinc-400"
                            )}
                          >
                            {s.category}
                          </span>
                        </div>
                        <ArrowRight
                          size={14}
                          className={cn(
                            "ml-auto transition-all",
                            selectedIndex === i
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-50"
                          )}
                        />
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {isSearchOpen && query && filteredResults.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute top-full mt-3 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white/98 backdrop-blur-2xl shadow-2xl p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/98"
              >
                <Search size={24} className="mx-auto text-zinc-300 dark:text-zinc-600 mb-3" />
                <p className="text-zinc-500 text-sm font-medium">
                  No services found for &quot;<span className="text-zinc-900 dark:text-white font-bold">{query}</span>&quot;
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Popular Searches / Top Searches ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center mb-6 sm:mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-4 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-amber-500" />
            Top Searches
          </p>
          <div className="flex flex-col gap-2.5 max-w-5xl mx-auto w-full">
            {POPULAR_TAGS_ROWS.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap justify-center gap-2">
                {row.map((tag) => (
                  <Link
                    key={tag.href}
                    href={tag.href}
                    className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-[11px] sm:text-xs font-semibold text-zinc-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-blue-800 dark:hover:bg-blue-950/30 dark:hover:text-blue-400 shadow-sm hover:shadow-md whitespace-nowrap"
                  >
                    {tag.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Google Rating Badge ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center justify-center gap-3 mb-0"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zinc-100 shadow-md dark:bg-zinc-900 dark:border-zinc-800">
            {/* Google "G" */}
            <svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">4.9</span>
            <span className="text-xs text-zinc-400">out of 5</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default HeroSection;
