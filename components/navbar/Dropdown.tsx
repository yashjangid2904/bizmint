"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavSubItem } from "./nav-data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface DropdownProps {
  isOpen: boolean;
  items: NavSubItem[];
  onItemClick: () => void;
}

const Dropdown = ({ isOpen, items, onItemClick }: DropdownProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className={cn(
            "absolute left-0 top-full z-50 mt-3 w-[280px] origin-top-left overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
            "custom-scrollbar max-h-[420px] overflow-y-auto"
          )}
        >
          <div className="flex flex-col p-2">
            {items.map((item, index) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onItemClick}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl px-3.5 py-3 text-[13px] font-medium transition-all duration-200",
                    isActive 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25" 
                      : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-900/80 dark:hover:text-zinc-200"
                  )}
                >
                  <div className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-200",
                    isActive ? "bg-white/20" : "bg-zinc-100 dark:bg-zinc-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                  )}>
                    {Icon && <Icon size={16} className={cn("transition-transform duration-200 group-hover:scale-110", isActive ? "text-white" : "text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400")} />}
                  </div>
                  <span className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1 truncate font-semibold">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
