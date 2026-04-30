"use client";

import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";
import { Facebook, Instagram, Linkedin, X, Github } from "@/components/ui/BrandIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "Changelog", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Support", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "/contact" },
        { name: "Partners", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: X, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-zinc-50 pt-4 pb-8 dark:bg-black">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="rounded-[2.5rem] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 lg:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Left Side: Brand & Socials */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-50 dark:text-black">
                  <Shield size={18} fill="currentColor" fillOpacity={0.2} />
                </div>
                <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Bizmint
                </span>
              </div>
              
              <p className="max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Bizmint empowers businesses to navigate the complex landscape of compliance, 
                regulatory filings, and financial advisory with ease.
              </p>

              <div className="flex items-center gap-5">
                {socialLinks.map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                  >
                    <social.icon size={20} strokeWidth={1.5} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side: Links Grid */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-3 text-sm font-bold text-zinc-900 dark:text-zinc-50">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                        >
                          {section.title === "Legal" ? "• " : ""}{link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-zinc-100 pt-8 dark:border-zinc-900 lg:flex-row">
            <p className="text-xs text-zinc-400">
              © {currentYear} Bizmint. All rights reserved.
            </p>
            
            <div className="flex items-center gap-8">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookies Settings", href: "#" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-zinc-400 underline decoration-zinc-200 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-zinc-900 dark:decoration-zinc-800 dark:hover:text-zinc-50 dark:hover:decoration-zinc-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
