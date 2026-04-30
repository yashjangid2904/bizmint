"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield } from "lucide-react";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-[100] w-full transition-all duration-300",
        isScrolled 
          ? "bg-white/80 py-3 shadow-sm backdrop-blur-xl dark:bg-zinc-950/80 dark:shadow-zinc-900/50" 
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition-transform group-hover:scale-105">
            <Shield size={24} fill="currentColor" fillOpacity={0.2} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Bizmint
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              LLP Advisory
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavMenu />

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/20 active:scale-[0.98] dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:hover:shadow-zinc-50/10 lg:block"
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
