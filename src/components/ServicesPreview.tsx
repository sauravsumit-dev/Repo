"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Globe, LayoutDashboard, ShoppingCart, MousePointer, PenTool, Zap } from "lucide-react";
import { services } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ElementType> = { Globe, LayoutDashboard, ShoppingCart, MousePointer, PenTool, Zap };

export default function ServicesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="What I Do" subtitle="My Offerings" />
        <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative rounded-2xl border p-6 transition-all duration-500 ${
                  service.popular
                    ? "border-sky-500/30 bg-linear-to-b from-sky-500/5 to-transparent"
                    : "border-(--border) bg-(--card-bg) hover:border-sky-500/20"
                }`}
              >
                <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-(--text-heading) mb-2">{service.title}</h3>
                <p className="text-sm text-(--text-muted) mb-4 leading-relaxed">{service.description}</p>
                <p className="text-sm font-medium text-sky-400">{service.price}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors">
            All Services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}