"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, Clock, TrendingUp, ArrowRight, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "../navbar/nav-data";
import { cn } from "@/lib/utils";

// Flattened service type for easier searching
interface FlatService {
  name: string;
  href: string;
  category: string;
  icon?: any;
}

const RECENT_SEARCHES_KEY = "bizmint_recent_searches";
const MAX_RECENT_SEARCHES = 5;

const GlobalSearch = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<FlatService[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Flatten the NAV_ITEMS for search
  const allServices = useMemo(() => {
    const flat: FlatService[] = [];
    NAV_ITEMS.forEach((category) => {
      category.items.forEach((item) => {
        flat.push({
          ...item,
          category: category.title,
        });
      });
    });
    return flat;
  }, []);

  // Popular searches (just taking first 4 for now)
  const popularSearches = useMemo(() => {
    return allServices.slice(0, 4);
  }, [allServices]);

  // Load recent searches
  useEffect(() => {
    const saved = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (saved && allServices.length > 0) {
      try {
        const savedHrefs = JSON.parse(saved);
        const reconstructed = savedHrefs
          .map((href: string) => allServices.find((s) => s.href === href))
          .filter(Boolean);
        setRecentSearches(reconstructed);
      } catch (e) {
        console.error("Failed to parse recent searches", e);
      }
    }
  }, [allServices]);

  // Handle filtering
  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return allServices.filter(
      (s) =>
        s.name.toLowerCase().includes(lowerQuery) ||
        s.category.toLowerCase().includes(lowerQuery)
    );
  }, [query, allServices]);

  // Save to recent searches
  const saveRecentSearch = (service: FlatService) => {
    const updatedHrefs = [
      service.href,
      ...recentSearches.map(s => s.href).filter((href) => href !== service.href),
    ].slice(0, MAX_RECENT_SEARCHES);
    
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updatedHrefs));
    
    // Update local state by finding full objects to keep icons
    const updatedObjects = updatedHrefs
      .map(href => allServices.find(s => s.href === href))
      .filter(Boolean) as FlatService[];
      
    setRecentSearches(updatedObjects);
  };

  // Navigation handler
  const handleSelect = (service: FlatService) => {
    saveRecentSearch(service);
    setIsOpen(false);
    setQuery("");
    router.push(service.href);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    const results = query ? filteredResults : recentSearches.length > 0 ? recentSearches : popularSearches;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Highlight matching text
  const HighlightMatch = ({ text, match }: { text: string; match: string }) => {
    if (!match.trim()) return <span>{text}</span>;
    const parts = text.split(new RegExp(`(${match})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === match.toLowerCase() ? (
            <span key={i} className="text-blue-600 dark:text-blue-400 font-bold">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto z-50">
      {/* Search Input Container */}
      <div className={cn(
        "group relative flex items-center transition-all duration-300",
        isOpen ? "scale-[1.02]" : "hover:scale-[1.01]"
      )}>
        <div className="absolute left-6 text-zinc-400 group-focus-within:text-blue-500 transition-colors">
          <Search size={20} />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(-1);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search services like GST, LLP, NBFC..."
          className={cn(
            "w-full h-16 pl-14 pr-16 rounded-full border-2 bg-white/80 backdrop-blur-xl text-lg font-medium outline-none transition-all",
            "border-zinc-200/50 shadow-2xl shadow-zinc-200/20",
            "focus:border-blue-500/50 focus:ring-8 focus:ring-blue-500/5",
            "dark:bg-zinc-900/80 dark:border-zinc-800 dark:text-white dark:shadow-none dark:focus:border-blue-500/30"
          )}
        />

        {/* Action Buttons inside Input */}
        <div className="absolute right-4 flex items-center gap-2">
          {query && (
            <button
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400"
            >
              <X size={18} />
            </button>
          )}
          <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md border border-zinc-200 bg-zinc-50 text-[10px] font-bold text-zinc-400 dark:border-zinc-800 dark:bg-zinc-950">
            <Command size={10} /> K
          </div>
        </div>
      </div>

      {/* Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full mt-4 w-full overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/95 backdrop-blur-2xl shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/95"
          >
            <div className="max-h-[450px] overflow-y-auto p-4 custom-scrollbar">
              {/* Recent / Popular / Search Results Logic */}
              {!query && (
                <div className="space-y-6 p-2">
                  {recentSearches.length > 0 && (
                    <section>
                      <div className="flex items-center gap-2 px-3 mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400">
                        <Clock size={12} /> Recent Searches
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {recentSearches.map((s, i) => (
                          <ResultItem
                            key={`recent-${s.category}-${s.href}`}
                            service={s}
                            isFocused={selectedIndex === i}
                            onClick={() => handleSelect(s)}
                          />
                        ))}
                      </div>
                    </section>
                  )}

                  <section>
                    <div className="flex items-center gap-2 px-3 mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400">
                      <TrendingUp size={12} /> Popular Services
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {popularSearches.map((s, i) => {
                        const Icon = s.icon;
                        return (
                          <button
                            key={`${s.category}-${s.href}`}
                            onClick={() => handleSelect(s)}
                            className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-zinc-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all text-left dark:border-zinc-800 dark:hover:border-blue-900/50 dark:hover:bg-blue-900/20"
                          >
                            {Icon && <Icon size={18} className="text-blue-500" />}
                            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{s.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </section>
                </div>
              )}

              {query && filteredResults.length > 0 && (
                <div className="space-y-2">
                  <div className="px-3 mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Search Results ({filteredResults.length})
                  </div>
                  {filteredResults.map((s, i) => (
                    <ResultItem
                      key={`search-${s.category}-${s.href}`}
                      service={s}
                      isFocused={selectedIndex === i}
                      query={query}
                      onClick={() => handleSelect(s)}
                    />
                  ))}
                </div>
              )}

              {query && filteredResults.length === 0 && (
                <div className="py-12 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 text-zinc-400 dark:bg-zinc-800">
                    <Search size={20} />
                  </div>
                  <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium">
                    No services found for "<span className="text-zinc-900 dark:text-white font-bold">{query}</span>"
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-950/50">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1"><kbd className="rounded bg-white px-1 shadow-sm dark:bg-zinc-900">↑↓</kbd> Navigate</span>
                  <span className="flex items-center gap-1"><kbd className="rounded bg-white px-1 shadow-sm dark:bg-zinc-900">Enter</kbd> Select</span>
                </div>
                <span>Bizmint Smart Search</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ResultItem = ({ 
  service, 
  isFocused, 
  onClick, 
  query = "" 
}: { 
  service: FlatService; 
  isFocused: boolean; 
  onClick: () => void;
  query?: string;
}) => {
  const highlightMatch = (text: string, match: string) => {
    if (!match.trim()) return <span>{text}</span>;
    const parts = text.split(new RegExp(`(${match})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === match.toLowerCase() ? (
            <span key={i} className="text-blue-600 dark:text-blue-400 font-bold underline decoration-2 underline-offset-4">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const Icon = service.icon;

  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex w-full items-center gap-4 rounded-2xl p-3 transition-all text-left",
        isFocused 
          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
          : "hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
      )}
    >
      <div className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
        isFocused ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 group-hover:bg-blue-50 group-hover:text-blue-600"
      )}>
        {Icon ? <Icon size={18} /> : <ArrowRight size={18} />}
      </div>
      
      <div className="flex flex-col min-w-0">
        <span className={cn(
          "text-sm font-bold truncate",
          isFocused ? "text-white" : "text-zinc-900 dark:text-zinc-50"
        )}>
          {highlightMatch(service.name, query)}
        </span>
        <span className={cn(
          "text-[10px] font-bold uppercase tracking-wider",
          isFocused ? "text-blue-100" : "text-zinc-400 group-hover:text-blue-500"
        )}>
          {service.category}
        </span>
      </div>

      <div className={cn(
        "ml-auto transition-all",
        isFocused ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
      )}>
        <ArrowRight size={16} />
      </div>
    </button>
  );
};

export default GlobalSearch;
