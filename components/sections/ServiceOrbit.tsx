"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  FileCheck, 
  Banknote, 
  Shield, 
  PieChart, 
  Key, 
  Globe, 
  Briefcase 
} from "lucide-react";
interface Service {
  name: string;
  icon: any;
  color: string;
  radius: number;
  duration: number;
  direction: number;
}

const services: Service[] = [
  { name: "Private Limited", icon: Building2, color: "#3b82f6", radius: 70, duration: 18, direction: 1 },
  { name: "GST Reg.", icon: FileCheck, color: "#10b981", radius: 100, duration: 25, direction: -1 },
  { name: "NBFC License", icon: Banknote, color: "#f59e0b", radius: 130, duration: 32, direction: 1 },
  { name: "Trademark", icon: Shield, color: "#6366f1", radius: 160, duration: 40, direction: -1 },
  { name: "TDS Filing", icon: PieChart, color: "#ec4899", radius: 190, duration: 48, direction: 1 },
  { name: "DSC", icon: Key, color: "#8b5cf6", radius: 220, duration: 55, direction: -1 },
  { name: "FEMA", icon: Globe, color: "#06b6d4", radius: 250, duration: 65, direction: 1 },
  { name: "AIF License", icon: Briefcase, color: "#f43f5e", radius: 280, duration: 75, direction: -1 },
];

const OrbitingIcon = ({ service, index }: { service: Service; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ 
        width: service.radius * 2, 
        height: service.radius * 2, 
        marginLeft: -service.radius, 
        marginTop: -service.radius 
      }}
    >
      {/* Rotation Container (The "Orbit") */}
      <motion.div
        animate={{ rotate: 360 * service.direction }}
        transition={{ 
          duration: service.duration, 
          repeat: Infinity, 
          ease: "linear",
          delay: -((index * 137.5 % 360) / 360) * service.duration
        }}
        className="relative h-full w-full"
      >
        {/* Icon Container (Counter-rotated + Floating) */}
        <motion.div
          animate={{ rotate: -360 * service.direction }}
          transition={{ 
            duration: service.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: -((index * 137.5 % 360) / 360) * service.duration
          }}
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(!isHovered)}
            animate={{ 
              y: [0, -4, 0],
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ 
              duration: 2 + Math.random() * 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative flex flex-col items-center gap-2 cursor-pointer"
          >
            {/* Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.15, delay: 0.05 }}
                  className="absolute -top-12 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-bold text-white shadow-xl dark:bg-zinc-800"
                >
                  {service.name}
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-zinc-900 dark:bg-zinc-800" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Icon Card */}
            <div 
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-zinc-200 shadow-md transition-all dark:bg-zinc-900 dark:border-zinc-800 sm:h-12 sm:w-12"
              style={{ 
                boxShadow: isHovered ? `0 0 25px ${service.color}44` : 'none',
                borderColor: isHovered ? service.color : undefined
              }}
            >
              <div className="absolute inset-0 rounded-xl opacity-10" style={{ backgroundColor: service.color }} />
              <service.icon size={20} style={{ color: service.color }} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const ServiceOrbit = () => {
  return (
    <div className="relative flex h-[450px] w-[450px] items-center justify-center sm:h-[550px] sm:w-[550px] lg:h-[650px] lg:w-[650px]">
      {/* Central Core */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-30 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-zinc-200 bg-white shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/80 sm:h-32 sm:w-32"
      >
        <span className="font-outfit text-2xl font-black text-zinc-900 dark:text-white sm:text-3xl">100+</span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Services</span>
        <div className="absolute -inset-2 animate-pulse rounded-full border border-blue-500/10" />
      </motion.div>

      {/* Orbit Rings (Subtle) */}
      {services.map((service, i) => (
        <div
          key={`ring-${i}`}
          className="absolute rounded-full border border-zinc-100/50 dark:border-zinc-800/20"
          style={{ 
            width: service.radius * 2, 
            height: service.radius * 2,
          }}
        />
      ))}

      {/* Orbiting Icons (Solar System Style) */}
      {services.map((service, i) => (
        <OrbitingIcon key={service.name} service={service} index={i} />
      ))}
    </div>
  );
};

export default ServiceOrbit;
