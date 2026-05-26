"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "./nav-data";
import Dropdown from "./Dropdown";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import ServiceSearch from "./ServiceSearch";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Calculate dynamic contact link based on current page
  const currentService = NAV_ITEMS.flatMap(cat => cat.items).find(item => item.href === pathname);
  const contactHref = currentService ? `/contact?service=${encodeURIComponent(currentService.name)}` : "/contact";

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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

  // Close mobile menu on route change (resize)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-[100] w-full transition-all duration-300 ease-in-out",
        !isVisible && !isMobileMenuOpen && "-translate-y-full",
        isScrolled
          ? "bg-white/90 shadow-[0_1px_3px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:bg-zinc-950/90 border-b border-zinc-100 dark:border-zinc-800/60"
          : "bg-white dark:bg-zinc-950"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 py-3 lg:py-3.5 lg:px-10">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5 shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <img 
            src="/logo.png" 
            alt="Bizmint Logo" 
            className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105 active:scale-95" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.title} className="relative">
              <button
                onClick={() => toggleMenu(item.title)}
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-semibold tracking-wide transition-all duration-200",
                  openMenu === item.title
                    ? "text-zinc-900 dark:text-white"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                )}
              >
                {item.title}
                <ChevronDown 
                  size={12} 
                  strokeWidth={2.5}
                  className={cn(
                    "text-zinc-400 transition-transform duration-200",
                    openMenu === item.title && "rotate-180 text-zinc-600 dark:text-zinc-300"
                  )} 
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
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <ServiceSearch />
          
          <div className="flex flex-col items-center justify-center rounded-full bg-zinc-900 px-6 py-1.5 transition-all duration-200 hover:bg-zinc-800 hover:shadow-lg dark:bg-white dark:hover:bg-zinc-100 group">
            <Link
              href={contactHref}
              className="text-sm font-semibold text-white dark:text-zinc-900"
            >
              Talk to Expert
            </Link>
            <a href="tel:+919990443772" className="text-[10px] font-medium tracking-wide text-zinc-400 transition-colors hover:text-white dark:text-zinc-500 dark:hover:text-zinc-900">
              +91 99904 43772
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
          <ServiceSearch />
          <button 
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isMobileMenuOpen) setOpenMenu(null);
            }}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu — Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[56px] sm:top-[60px] z-[99] lg:hidden flex flex-col bg-white dark:bg-zinc-950"
          >
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-6 py-4 pb-32">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.title} className="flex flex-col">
                    <button
                      onClick={() => toggleMenu(item.title)}
                      className={cn(
                        "flex items-center justify-between py-3.5 px-2 text-[15px] font-semibold rounded-xl transition-colors",
                        openMenu === item.title
                          ? "text-blue-600 bg-blue-50/50 dark:text-blue-400 dark:bg-blue-900/10"
                          : "text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                      )}
                    >
                      {item.title}
                      <ChevronDown 
                        size={16} 
                        strokeWidth={2.5}
                        className={cn(
                          "text-zinc-400 transition-transform duration-200",
                          openMenu === item.title && "rotate-180 text-blue-600 dark:text-blue-400"
                        )} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {openMenu === item.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col py-1.5 pl-3 ml-2 mb-2 border-l-2 border-zinc-200 dark:border-zinc-700">
                            {item.items.map((subItem, idx) => (
                              <Link
                                key={idx}
                                href={subItem.href}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenMenu(null);
                                }}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors active:scale-[0.98]"
                              >
                                {subItem.icon && <subItem.icon size={15} className="shrink-0" />}
                                <span className="truncate">{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-col gap-1">
                  {[
                    { name: "About Us", href: "/about" },
                    { name: "Resources", href: "/resources" },
                    { name: "Contact", href: "/contact" },
                  ].map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-2 py-3 text-[15px] font-semibold text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Fixed Bottom CTA */}
            <div className="sticky bottom-0 left-0 right-0 p-4 sm:px-6 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-zinc-900 py-2.5 transition-all shadow-lg shadow-zinc-900/10 dark:bg-white dark:shadow-white/10 group">
                <Link
                  href={contactHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-white dark:text-zinc-900"
                >
                  Talk to Expert
                </Link>
                <a href="tel:+919990443772" className="text-[12px] mt-0.5 font-medium tracking-wide text-zinc-400 transition-colors hover:text-white dark:text-zinc-500 dark:hover:text-zinc-900">
                  +91 99904 43772
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
