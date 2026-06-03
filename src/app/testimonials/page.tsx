"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function TestimonialsPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Client Testimonials" subtitle="Social Proof" />

        <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-2xl border border-(--border) bg-(--card-bg) p-6"
            >
              <Quote className="h-8 w-8 text-sky-500/20 mb-4" />
              <p className="text-sm text-(--text) leading-relaxed mb-6">{t.content}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-sky-500 to-violet-500 flex items-center justify-center text-white text-sm font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-(--text-heading)">{t.name}</p>
                  <p className="text-xs text-(--text-muted)">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}