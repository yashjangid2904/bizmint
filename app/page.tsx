"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-black">
      <HeroSection />
      <Process />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
}