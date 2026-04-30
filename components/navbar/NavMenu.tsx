"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "./nav-data";
import MegaMenu from "./MegaMenu";
import { cn } from "@/lib/utils";

const NavMenu = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => (
        <div
          key={item.title}
          className="relative px-0.5"
          onMouseEnter={() => setActiveItem(item.title)}
          onMouseLeave={() => setActiveItem(null)}
        >
          {item.items ? (
            <>
              <button
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all rounded-full font-sans",
                  activeItem === item.title 
                    ? "bg-zinc-100 text-blue-600 dark:bg-zinc-900 dark:text-blue-400" 
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50"
                )}
              >
                {item.title}
                <ChevronDown 
                  size={14} 
                  className={cn("transition-transform duration-300", activeItem === item.title && "rotate-180")} 
                />
              </button>

              <AnimatePresence>
                {activeItem === item.title && (
                  item.isMega ? (
                    <MegaMenu items={item.items} isOpen={true} />
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full z-50 mt-4 w-64 rounded-2xl border border-zinc-200/50 bg-white/90 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/90"
                    >
                      <div className="space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 transition-all hover:bg-blue-600 hover:text-white dark:text-zinc-400 dark:hover:bg-blue-600 dark:hover:text-white"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-50 group-hover:bg-blue-500/10 dark:bg-zinc-900">
                              {subItem.icon && <subItem.icon size={16} className="text-zinc-500 group-hover:text-blue-600" />}
                            </div>
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </>
          ) : (
            <Link
              href={item.href || "#"}
              className={cn(
                "block px-4 py-2 text-sm font-semibold transition-all rounded-full font-sans",
                activeItem === item.title 
                  ? "bg-zinc-100 text-blue-600 dark:bg-zinc-900 dark:text-blue-400" 
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50"
              )}
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavMenu;
