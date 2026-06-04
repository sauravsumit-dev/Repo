"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Globe, LayoutDashboard, ShoppingCart, MousePointer, PenTool, Zap, Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const iconMap: Record<string, React.ElementType> = { Globe, LayoutDashboard, ShoppingCart, MousePointer, PenTool, Zap };

export default function ServicesPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Services I Offer" subtitle="What I Do" />

        <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative rounded-2xl border p-8 transition-all duration-500 ${
                  service.popular
                    ? "border-sky-500/30 bg-linear-to-b from-sky-500/5 to-transparent"
                    : "border-(--border) bg-(--card-bg) hover:border-sky-500/20"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-linear-to-r from-sky-500 to-violet-500 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-(--text-heading) mb-3">{service.title}</h3>
                <p className="text-sm text-(--text-muted) mb-6 leading-relaxed">{service.description}</p>
                <p className="text-2xl font-bold text-gradient mb-6">{service.price}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-(--text)">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-(--input-bg) border border-(--border) px-5 py-3 text-sm font-medium text-(--text-heading) hover:bg-(--surface-hover) transition-colors"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}