"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle: string;
  centered?: boolean; // 
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={cn(centered && "text-center")}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-sm font-medium text-sky-400 tracking-wider uppercase mb-2"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-(--text-heading)"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={cn(
          "h-1 w-20 bg-linear-to-r from-sky-500 to-violet-500 rounded-full mt-4",
          centered ? "mx-auto" : ""
        )}
      />
    </div>
  );
}