"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield } from "lucide-react";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled down past threshold
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
            <div className="flex items-center gap-1.5">

            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavMenu />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-linear-to-r from-zinc-900 to-zinc-800 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20 active:scale-95 dark:from-zinc-50 dark:to-zinc-200 dark:text-zinc-950 lg:block"
          >
            Talk to Expert
          </Link>

          {/* Mobile Menu Toggle */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
