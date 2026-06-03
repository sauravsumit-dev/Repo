"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-(--text-heading) mb-4">
            Want to Build Something <span className="text-gradient">Amazing?</span>
          </h2>
          <p className="text-lg text-(--text-muted) mb-10 max-w-2xl mx-auto">
            I am passionate about turning creative ideas into modern and premium digital products. Let&apos;s discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:shadow-sky-500/40">
              Connect with me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={personalInfo.calendly} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--input-bg) px-8 py-3.5 text-sm font-semibold text-(--text) hover:bg-(--surface-hover) transition-colors">
              <Calendar className="h-4 w-4" /> Schedule a session
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}