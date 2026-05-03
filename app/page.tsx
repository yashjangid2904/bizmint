// "use client";
 
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, CheckCircle2, ShieldCheck, Zap, X } from "lucide-react";
// import Process from "@/components/sections/Process";
// import WhyChooseUs from "@/components/sections/WhyChooseUs";
// import FAQ from "@/components/sections/FAQ";
// import { useState } from "react";
 
// import ServiceOrbit from "@/components/sections/ServiceOrbit";
 
// export default function Home() {
//   return (
//     <div className="relative">
//       {/* Premium Cinematic Hero Section */}
//       <section className="relative min-h-screen overflow-hidden bg-white pt-32 pb-10 dark:bg-[#030014] lg:pt-48 flex items-center">
//         {/* Cinematic Background Layer */}
//         <div className="absolute inset-0 z-0">
//           {/* Mesh Gradient */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f615_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_-20%,#3b82f630_0%,transparent_50%)]" />
         
//           {/* Suble Grid */}
//           <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 brightness-100 contrast-150" />
//           <div
//             className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
//             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
//           />
//         </div>
 
//         <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
//           <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
           
//             {/* Left Content: High-End Typography */}
//             <div className="flex flex-col gap-8 text-center lg:text-left pt-12 lg:pt-0">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//               >
//                 {/* Modern Badge */}
//                 {/* <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400"
//                 >
//                   <span className="relative flex h-2 w-2">
//                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
//                     <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
//                   </span>
//                   Trusted Compliance Partner
//                 </motion.div> */}
//                 {/* <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400"
//                 >
//                   <span className="relative flex h-2 w-2">
//                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
//                     <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
//                   </span>
//                   Trusted Compliance Partner
//                 </motion.div> */}
 
//                 <h1 className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95]">
//                    <br className="hidden sm:block" />
//                   <span className="relative inline-block text-blue-600 dark:text-blue-500">
//                     Premium Advisory
//                     <div className="absolute -bottom-2 left-0 h-2 w-full bg-blue-500/10 blur-xl" />
//                   </span>
//                   <br />
//                   Modern Business
//                 </h1>
               
//                 <p className="mt-8 max-w-xl mx-auto lg:mx-0 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg font-medium">
//                   Bizmint LLP bridges the gap between complex regulation and seamless growth.
//                   We manage the statutory burden so you can focus on scale.
//                 </p>
 
//                 <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:justify-start">
//                   <Link
//                     href="/contact"
//                     className="group relative flex h-16 w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-2xl bg-zinc-900 px-10 text-lg font-bold text-white transition-all hover:bg-black active:scale-95 dark:bg-white dark:text-black"
//                   >
//                     <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
//                     Talk to an Expert
//                     <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
//                   </Link>
//                   <Link
//                     href="/services"
//                     className="flex h-16 w-full sm:w-auto items-center justify-center rounded-2xl border-2 border-zinc-200 bg-transparent px-10 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
//                   >
//                     Explore Services
//                   </Link>
//                 </div>
//               </motion.div>
 
//               {/* Floating Performance Indicator */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8, duration: 1 }}
//                 className="flex items-center justify-center gap-10 lg:justify-start"
//               >
//                 <div className="flex flex-col gap-1">
//                   <span className="text-2xl font-black text-zinc-900 dark:text-white">500+</span>
//                   <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Clients</span>
//                 </div>
//                 <div className="h-10 w-px bg-zinc-200 dark:bg-zinc-800" />
//                 <div className="flex flex-col gap-1">
//                   <span className="text-2xl font-black text-zinc-900 dark:text-white">99%</span>
//                   <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Success Rate</span>
//                 </div>
//               </motion.div>
//             </div>
 
//             {/* Right Visual (Interactive Orbit) */}
//             <div className="relative flex items-center justify-center lg:justify-end lg:translate-x-20 xl:translate-x-32">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
//                 animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
//                 transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//                 className="relative"
//               >
//                 {/* Decorative Background Glows for the Orbit */}
//                 <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-[120px] dark:bg-indigo-500/20" />
//                 <ServiceOrbit />
//               </motion.div>
//             </div>
 
//           </div>
//         </div>
//       </section>
 
//      {/* Core Expertise Carousel Section */}
//       <section className="relative overflow-hidden bg-zinc-50 py-24 dark:bg-zinc-950">
//         <div className="container mx-auto px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mb-16 text-center"
//           >
//             <h2 className="font-outfit text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
//               Our Core <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
//             </h2>
//           </motion.div>
//           <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
//             {[]
//               .map((feature, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                   className="rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
//                 >
 
 
//                 </motion.div>
//               ))}
//           </div>
//         </div>
 
//         {/* Carousel Container */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative flex overflow-hidden"
//         >
//           {/* Gradient Fades for Carousel edges */}
//           <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-zinc-50 to-transparent dark:from-zinc-950" />
//           <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-zinc-50 to-transparent dark:from-zinc-950" />
 
//           <motion.div
//             animate={{
//               x: ["0%", "-50%"],
//             }}
//             transition={{
//               duration: 30,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//             className="flex gap-8 px-4"
//           >
//             {[...Array(2)].map((_, listIndex) => (
//               <div key={listIndex} className="flex gap-8">
//                 {[
//                   {
//                     title: "Expert Compliance",
//                     desc: "Navigate complex ROC, GST, and Income Tax filings with our seasoned professionals.",
//                     icon: ShieldCheck,
//                   },
//                   {
//                     title: "Business Setup",
//                     desc: "Fast-track your Private Limited or LLP registration with zero hassle.",
//                     icon: CheckCircle2,
//                   },
//                   {
//                     title: "Regulatory Licensing",
//                     desc: "Expert assistance for SEBI, RBI, BIS, and specialized insurance licenses.",
//                     icon: ArrowRight,
//                   },
//                   {
//                     title: "Intellectual Property",
//                     desc: "Protect your brand with Trademark, Copyright, and Patent registration services.",
//                     icon: ShieldCheck,
//                   },
//                   {
//                     title: "Audit & Assurance",
//                     desc: "Comprehensive internal and statutory audits to ensure financial transparency.",
//                     icon: CheckCircle2,
//                   },
//                   {
//                     title: "Tax Strategy",
//                     desc: "Strategic tax planning and optimization for domestic and cross-border operations.",
//                     icon: Zap,
//                   },
//                 ].map((feature, i) => (
//                   <div
//                     key={i}
//                     className="group relative w-72 sm:w-80 shrink-0 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-slate-900 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-slate-800"
//                   >
//                     <div className="mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white dark:bg-slate-900/20 dark:text-slate-400">
//                       <feature.icon size={24} strokeWidth={1.5} />
//                     </div>
//                     <h3 className="font-outfit text-xl font-bold text-zinc-900 dark:text-zinc-50">{feature.title}</h3>
//                     <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
 
//                     {/* Decorative hover accent */}
//                     <div className="absolute bottom-0 left-0 h-1 w-0 bg-slate-900 transition-all duration-500 group-hover:w-full" />
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>
 
//       <Process />
//       <WhyChooseUs />
//       <FAQ />
//     </div>
//   );
// }
 

"use client";
 
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, X } from "lucide-react";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import { useState } from "react";
 
import ServiceOrbit from "@/components/sections/ServiceOrbit";
import GlobalSearch from "@/components/search/GlobalSearch";
 
export default function Home() {
  return (
    <div className="relative">
      {/* Premium Cinematic Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-white pt-12 pb-10 dark:bg-[#030014] lg:pt-16 flex items-center">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* Mesh Gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f615_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_-20%,#3b82f630_0%,transparent_50%)]" />
         
          {/* Suble Grid */}
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 brightness-100 contrast-150" />
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />
        </div>
 
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
           
            {/* Left Content: High-End Typography */}
            <div className="flex flex-col gap-10 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Modern Badge */}
                {/* <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                  </span>
                  Trusted Compliance Partner
                </motion.div> */}
                {/* <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                  </span>
                  Trusted Compliance Partner
                </motion.div> */}
 
                <h1 className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-5xl xl:text-6xl leading-[0.95]">
                   <br />
                  <span className="relative inline-block text-blue-600 dark:text-blue-500">
                    Premium Advisory
                    <div className="absolute -bottom-2 left-0 h-2 w-full bg-blue-500/10 blur-xl" />
                  </span>
                  <br />
                  Modern Business
                </h1>
               
                <p className="mt-10 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl font-medium">
                  Bizmint LLP bridges the gap between complex regulation and seamless growth.
                  We manage the statutory burden so you can focus on scale.
                </p>

                <div className="mt-12 w-full">
                  <GlobalSearch />
                </div>
 
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                  <Link
                    href="/contact"
                    className="group relative flex h-16 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-zinc-900 px-10 text-lg font-bold text-white transition-all hover:bg-black active:scale-95 dark:bg-white dark:text-black"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    Talk to an Expert
                    <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/services"
                    className="flex h-16 items-center justify-center rounded-2xl border-2 border-zinc-200 bg-transparent px-10 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  >
                    Explore Services
                  </Link>
                </div>
              </motion.div>
 
              {/* Floating Performance Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="flex items-center justify-center gap-10 lg:justify-start"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-black text-zinc-900 dark:text-white">500+</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Clients</span>
                </div>
                <div className="h-10 w-px bg-zinc-200 dark:bg-zinc-800" />
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-black text-zinc-900 dark:text-white">99%</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Success Rate</span>
                </div>
              </motion.div>
            </div>
 
            {/* Right Visual (Interactive Orbit) */}
            <div className="relative flex items-center justify-center lg:justify-end lg:translate-x-20 xl:translate-x-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Decorative Background Glows for the Orbit */}
                <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-[120px] dark:bg-indigo-500/20" />
                <ServiceOrbit />
              </motion.div>
            </div>
 
          </div>
        </div>
      </section>
 
     {/* Core Expertise Carousel Section */}
      <section className="relative overflow-hidden bg-zinc-50 py-24 dark:bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="font-outfit text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Our Core <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[]
              .map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
                >
 
 
                </motion.div>
              ))}
          </div>
        </div>
 
        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex overflow-hidden"
        >
          {/* Gradient Fades for Carousel edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-zinc-50 to-transparent dark:from-zinc-950" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-zinc-50 to-transparent dark:from-zinc-950" />
 
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-8 px-4"
          >
            {[...Array(2)].map((_, listIndex) => (
              <div key={listIndex} className="flex gap-8">
                {[
                  {
                    title: "Expert Compliance",
                    desc: "Navigate complex ROC, GST, and Income Tax filings with our seasoned professionals.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Business Setup",
                    desc: "Fast-track your Private Limited or LLP registration with zero hassle.",
                    icon: CheckCircle2,
                  },
                  {
                    title: "Regulatory Licensing",
                    desc: "Expert assistance for SEBI, RBI, BIS, and specialized insurance licenses.",
                    icon: ArrowRight,
                  },
                  {
                    title: "Intellectual Property",
                    desc: "Protect your brand with Trademark, Copyright, and Patent registration services.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Audit & Assurance",
                    desc: "Comprehensive internal and statutory audits to ensure financial transparency.",
                    icon: CheckCircle2,
                  },
                  {
                    title: "Tax Strategy",
                    desc: "Strategic tax planning and optimization for domestic and cross-border operations.",
                    icon: Zap,
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="group relative w-80 shrink-0 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:border-slate-900 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-slate-800"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white dark:bg-slate-900/20 dark:text-slate-400">
                      <feature.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-outfit text-xl font-bold text-zinc-900 dark:text-zinc-50">{feature.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
 
                    {/* Decorative hover accent */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-slate-900 transition-all duration-500 group-hover:w-full" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
 
      <Process />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
}
 