"use client";

import React from "react";
import Link from "next/link";
import {
  Shield,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "@/components/ui/BrandIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Expert Advisory", href: "/advisory" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Start Business", href: "/start" },
        { name: "Tax & Compliance", href: "/compliance" },
        { name: "NBFC & Finance", href: "/finance" },
        { name: "Investor Services", href: "/investor" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Disclaimer", href: "/disclaimer" },
        { name: "Refund Policy", href: "/refund" },
      ],
    },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-white pt-16 pb-8 dark:border-zinc-800 dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
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
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Your premium partner for business compliance and regulatory advisory in India.
              Simplifying the complex landscape of legal and financial regulations.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-zinc-100 pt-8 dark:border-zinc-900 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Email us</p>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">contact@bizmint.in</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Call us</p>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">+91 99999 99999</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Visit us</p>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Gurugram, Haryana, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-zinc-100 pt-8 dark:border-zinc-900 lg:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {currentYear} Bizmint LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <p>CIN: UXXXXXHR2024PTCXXXXXX</p>
            <p>GSTIN: XXXXXXXXXXXXXXX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
