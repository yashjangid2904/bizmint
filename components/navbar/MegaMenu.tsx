"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavSubItem } from "./nav-data";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  items: NavSubItem[];
  isOpen: boolean;
}

const MegaMenu = ({ items, isOpen }: MegaMenuProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "absolute left-1/2 top-full z-50 mt-4 w-[640px] -translate-x-1/2 rounded-[2rem] border border-zinc-200/50 bg-white/90 p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] backdrop-blur-2xl dark:border-zinc-800/50 dark:bg-zinc-950/90",
        !isOpen && "pointer-events-none"
      )}
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group flex items-start gap-4 rounded-2xl p-2 transition-all hover:bg-white dark:hover:bg-zinc-900 hover:shadow-sm"
          >
            {item.icon && (
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-50 text-zinc-600 transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:bg-zinc-900 dark:text-zinc-400">
                <item.icon size={22} />
              </div>
            )}
            <div>
              <div className="font-display text-[15px] font-bold text-zinc-900 dark:text-zinc-50 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {item.title}
              </div>
              {item.description && (
                <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
      
      {/* Decorative footer for the mega menu */}
      <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6 dark:border-zinc-800">
        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          Professional Advisory Services
        </p>
        <Link 
          href="/services" 
          className="flex items-center gap-1.5 text-xs font-bold text-blue-600 transition-all hover:gap-2 dark:text-blue-400"
        >
          <span>View all services</span>
          <span className="text-sm">→</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
