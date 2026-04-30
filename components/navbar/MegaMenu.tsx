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
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "absolute left-1/2 top-full z-50 mt-2 w-[600px] -translate-x-1/2 rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950",
        !isOpen && "pointer-events-none"
      )}
    >
      <div className="grid grid-cols-2 gap-6">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            {item.icon && (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400">
                <item.icon size={20} />
              </div>
            )}
            <div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {item.title}
              </div>
              {item.description && (
                <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {item.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
      
      {/* Decorative footer for the mega menu */}
      <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <Link 
          href="/services" 
          className="text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
        >
          View all services →
        </Link>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
