"use client";

import React from "react";
import ExploreServices from "@/components/sections/ExploreServices";
import Navbar from "@/components/navbar/Navbar";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#030014] pt-20">
      <ExploreServices />
    </main>
  );
}
