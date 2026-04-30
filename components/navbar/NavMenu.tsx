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
          className="relative px-3 py-2"
          onMouseEnter={() => setActiveItem(item.title)}
          onMouseLeave={() => setActiveItem(null)}
        >
          {item.items ? (
            <>
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                  activeItem === item.title ? "text-blue-600 dark:text-blue-400" : "text-zinc-600 dark:text-zinc-400"
                )}
              >
                {item.title}
                <ChevronDown 
                  size={14} 
                  className={cn("transition-transform duration-200", activeItem === item.title && "rotate-180")} 
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
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-0 top-full z-50 mt-2 w-56 rounded-xl border border-zinc-200 bg-white p-2 shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-blue-600 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-blue-400"
                        >
                          {subItem.icon && <subItem.icon size={16} />}
                          {subItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </>
          ) : (
            <Link
              href={item.href || "#"}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
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
