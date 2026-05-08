"use client";

import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Integrations", href: "/integrations" },
        { name: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blogs", href: "/resources?category=Blogs" },
        { name: "Legal Updates", href: "/resources?category=Legal+Updates" },
        { name: "Industry Guides", href: "/resources?category=Industry+Guides" },
        { name: "YouTube Channel", href: "/resources?category=YouTube" },
        { name: "Case Studies", href: "/resources?category=Case+Studies" },
        { name: "Compliance News", href: "/resources?category=Compliance+News" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Partners", href: "/partners" },
      ],
    },
  ];


  return (
    <footer className="bg-zinc-50 pt-3 pb-4 dark:bg-black">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="rounded-2xl sm:rounded-[2.5rem] border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-6 lg:grid-cols-2">
            {/* Left Side: Brand & Address */}
            <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Bizmint Logo" className="h-10 w-auto object-contain" />
              </div>

              <p className="max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Bizmint empowers businesses to navigate the complex landscape of compliance,
                regulatory filings, and financial advisory with ease.
              </p>


              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-blue-500" />
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Maicha, Greater Noida,<br />
                  Gautam Budh Nagar,<br />
                  Uttar Pradesh – 201310, India
                </p>
              </div>
            </div>

            {/* Right Side: Links Grid */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {footerSections.map((section) => (
                <div key={section.title} className="text-center sm:text-left">
                  <h3 className="mb-4 text-sm font-bold text-zinc-900 dark:text-zinc-50">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-zinc-100 pt-6 dark:border-zinc-900 lg:flex-row">
            <p className="text-xs font-medium text-zinc-400">
              © {currentYear} Bizmint. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookies Settings", href: "#" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium text-zinc-400 underline decoration-zinc-200 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-zinc-900 dark:decoration-zinc-800 dark:hover:text-zinc-50 dark:hover:decoration-zinc-50"
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
