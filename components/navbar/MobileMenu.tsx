"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "./nav-data";
import { cn } from "@/lib/utils";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title) ? prev.filter((i) => i !== title) : [...prev, title]
    );
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-zinc-950/20 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-[300px] border-l border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex h-16 items-center justify-between px-6 border-b border-zinc-100 dark:border-zinc-800">
                <span className="font-bold text-blue-600 dark:text-blue-400">Bizmint LLP</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="h-[calc(100%-64px)] overflow-y-auto px-6 py-8">
                <div className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <div key={item.title} className="flex flex-col">
                      {item.items ? (
                        <>
                          <button
                            onClick={() => toggleItem(item.title)}
                            className="flex items-center justify-between text-lg font-medium text-zinc-900 dark:text-zinc-100"
                          >
                            {item.title}
                            <ChevronDown
                              size={18}
                              className={cn(
                                "transition-transform duration-200",
                                expandedItems.includes(item.title) && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedItems.includes(item.title) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-2 flex flex-col gap-3 pl-4 border-l border-zinc-100 dark:border-zinc-800">
                                  {item.items.map((subItem) => (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href}
                                      onClick={() => setIsOpen(false)}
                                      className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                                    >
                                      {subItem.title}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          onClick={() => setIsOpen(false)}
                          className="text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 font-semibold text-white transition-all hover:bg-blue-700 active:scale-[0.98]"
                    >
                      Talk to Expert
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
