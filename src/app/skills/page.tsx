"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Atom, Globe, FileCode, Braces, Paintbrush, Sparkles, Database, Server, Route, Table, Layers, Zap, GitBranch, Triangle, PenTool, Container, Cloud, Repeat, CheckCircle, BookOpen, Layout } from "lucide-react";
import { skills } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Atom, Globe, FileCode, Braces, Paintbrush, Sparkles, Database, Server, Route, Table, Layers, Zap, GitBranch, Triangle, PenTool, Container, Cloud, Repeat, CheckCircle, BookOpen, Layout
};

type Category = keyof typeof skills;

export default function SkillsPage() {
  const [active, setActive] = useState<Category>("Frontend");
  const categories = Object.keys(skills) as Category[];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Skills & Expertise" subtitle="Tech Stack" />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-linear-to-r from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/20"
                  : "bg-(--input-bg) text-(--text-muted) hover:bg-(--surface-hover) hover:text-(--text) border border-(--border)"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={ref} className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills[active].map((skill, i) => {
            const Icon = iconMap[skill.icon] || Sparkles;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group rounded-xl border border-(--border) bg-(--card-bg) p-5 hover:border-sky-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-(--text-heading)">{skill.name}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-(--input-bg) overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: i * 0.05 + 0.3, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-linear-to-r from-sky-500 to-violet-500"
                  />
                </div>
                <p className="mt-2 text-xs text-(--text-muted)">{skill.level}%</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}