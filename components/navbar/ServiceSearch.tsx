"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { ALL_SERVICES, type Service } from "@/lib/services-data";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const ServiceSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Service[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Flatten all services for search
  const allFlattenedServices = ALL_SERVICES.flatMap(cat => cat.services);

  useEffect(() => {
    if (query.trim().length > 1) {
      const filtered = allFlattenedServices.filter(s => 
        s.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (href: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(href);
  };

  return (
    <div className="relative" ref={searchRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 transition-all hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
        aria-label="Search services"
      >
        <Search size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="fixed left-2 right-2 top-[60px] sm:absolute sm:left-auto sm:right-0 sm:top-auto sm:mt-4 sm:w-[400px] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 z-[200]"
          >
            <div className="flex items-center gap-2 border-b border-zinc-100 p-4 dark:border-zinc-800">
              <Search size={18} className="text-zinc-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search for any service..."
                className="flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-zinc-400 dark:text-white"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button onClick={() => setQuery("")}>
                  <X size={16} className="text-zinc-400 hover:text-zinc-600" />
                </button>
              )}
            </div>

            <div className="max-h-[300px] overflow-y-auto p-2">
              {results.length > 0 ? (
                <div className="flex flex-col gap-1">
                  {results.map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(service.href)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-zinc-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-zinc-300 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                    >
                      {service.name}
                      <ArrowRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              ) : query.length > 1 ? (
                <div className="py-8 text-center text-sm text-zinc-400">
                  No services found for &quot;{query}&quot;
                </div>
              ) : (
                <div className="py-8 text-center text-sm text-zinc-400">
                  Type to search our services
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceSearch;
