"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { heroRoles } from "@/lib/data";

function RoleChanger() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setIndex((p) => (p + 1) % heroRoles.length), 3000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="h-8 sm:h-12 overflow-hidden">
      <motion.p
        key={index}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg sm:text-2xl font-light text-(--text-muted)"
      >
        {heroRoles[index]}
      </motion.p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08)_0%,transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--input-bg) px-4 py-1.5 text-sm text-(--text-muted) mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-sky-400" />
          Available for freelancing and job opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-(--text-heading)"
        >
          <span className="text-gradient">Sumit Saurav</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <RoleChanger />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-2xl text-base sm:text-lg text-(--text-muted) mb-10 leading-relaxed"
        >
          Seasoned Front-End Developer crafting premium digital experiences with React, Next.js and modern technologies. I love to turn complex real-world problems into elegant software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:shadow-sky-500/40">
            Hire Me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--input-bg) px-8 py-3.5 text-sm font-semibold text-(--text) hover:bg-(--surface-hover) transition-colors">
            See my work
          </Link>
          <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--input-bg) px-8 py-3.5 text-sm font-semibold text-(--text) hover:bg-(--surface-hover) transition-colors">
            <Download className="h-4 w-4" /> Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}