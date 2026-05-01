"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Shield, ChevronDown, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "./nav-data";
import Dropdown from "./Dropdown";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle outside click to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (title: string) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-[100] w-full transition-all duration-500",
        !isVisible && "-translate-y-full",
        isScrolled
          ? "bg-white/70 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl dark:bg-zinc-950/70 dark:shadow-zinc-950/50 border-b border-white/20 dark:border-zinc-800/50"
          : "bg-transparent py-5"
      )}
    >
      <div className="flex w-full items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-blue-500/20 blur-sm transition-all group-hover:bg-blue-500/40" />
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 text-white shadow-lg transition-transform group-hover:scale-105 active:scale-95">
              <Shield size={22} fill="currentColor" fillOpacity={0.2} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Bizmint
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.title} className="relative">
              <button
                onClick={() => toggleMenu(item.title)}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition-all",
                  openMenu === item.title
                    ? "bg-white dark:bg-zinc-900 text-blue-600 shadow-sm"
                    : "text-zinc-600 hover:bg-white/50 dark:text-zinc-400 dark:hover:bg-zinc-900/50 dark:hover:text-zinc-200"
                )}
              >
                {item.title}
                <ChevronDown 
                  size={14} 
                  className={cn("transition-transform duration-300", openMenu === item.title && "rotate-180")} 
                />
              </button>
              
              <Dropdown 
                isOpen={openMenu === item.title} 
                items={item.items} 
                onItemClick={() => setOpenMenu(null)}
              />
            </div>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-linear-to-r from-zinc-900 to-zinc-800 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20 active:scale-95 dark:from-zinc-50 dark:to-zinc-200 dark:text-zinc-950 lg:block"
          >
            Talk to Expert
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:bg-white/50 dark:hover:bg-zinc-900/50 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.title} className="flex flex-col">
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className="flex items-center justify-between py-2 text-lg font-bold text-zinc-900 dark:text-white"
                  >
                    {item.title}
                    <ChevronDown 
                      size={18} 
                      className={cn("transition-transform duration-300", openMenu === item.title && "rotate-180")} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openMenu === item.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/30 rounded-2xl mt-2"
                      >
                        <div className="flex flex-col p-2">
                          {item.items.map((subItem, idx) => (
                            <Link
                              key={idx}
                              href={subItem.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setOpenMenu(null);
                              }}
                              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                              {subItem.icon && <subItem.icon size={16} />}
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 py-4 text-center font-bold text-white shadow-lg active:scale-95 transition-all"
              >
                Talk to Expert
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
