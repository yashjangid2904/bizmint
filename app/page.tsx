"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-black">
      <HeroSection />
      <FAQ />
    </div>
  );
}