"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Award, Target, Lightbulb, ChevronRight } from "lucide-react";
import { experienceTimeline, personalInfo } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(interval); }
      setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [started, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="My Story" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-(--text-heading)">
              Passionate about crafting <span className="text-gradient">exceptional digital experiences</span>
            </h3>
            <p className="text-(--text-muted) leading-relaxed">
              I&apos;m Sumit Saurav, a Seasoned Front-End Developer with over {personalInfo.yearsOfExperience} years of experience building premium web applications. I specialize in React, Next.js, and modern JavaScript ecosystems, delivering products that are fast, accessible, and beautiful.
            </p>
            <p className="text-(--text-muted) leading-relaxed">
              My approach combines technical excellence with design sensibility. I believe great softwares are born at the intersection of performance, usability, and visual craft. Every pixel, every interaction, every millisecond matters.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-xl border border-(--border) bg-(--card-bg) p-4">
                <Briefcase className="h-5 w-5 text-sky-400 mb-2" />
                <p className="text-lg font-semibold text-(--text-heading)">2.5+ Years</p>
                <p className="text-xs text-(--text-muted)">Professional Experience</p>
              </div>
              <div className="rounded-xl border border-(--border) bg-(--card-bg) p-4">
                <Award className="h-5 w-5 text-violet-400 mb-2" />
                <p className="text-lg font-semibold text-(--text-heading)">0 Awards</p>
                <p className="text-xs text-(--text-muted)">Industry Recognition</p>
              </div>
              <div className="rounded-xl border border-(--border) bg-(--card-bg) p-4">
                <Target className="h-5 w-5 text-emerald-400 mb-2" />
                <p className="text-lg font-semibold text-(--text-heading)">100%</p>
                <p className="text-xs text-(--text-muted)">User Satisfaction</p>
              </div>
              <div className="rounded-xl border border-(--border) bg-(--card-bg) p-4">
                <Lightbulb className="h-5 w-5 text-amber-400 mb-2" />
                <p className="text-lg font-semibold text-(--text-heading)">2+</p>
                <p className="text-xs text-(--text-muted)">Projects Completed</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-(--text-heading) mb-6">Experience</h3>
            <div ref={ref} className="space-y-6">
              {experienceTimeline.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative pl-6 border-l border-(--border)"
                >
                  <div className="absolute -left-1.25 top-1 w-2.5 h-2.5 rounded-full bg-sky-500 ring-4 ring-sky-500/20" />
                  <p className="text-xs text-sky-400 font-medium mb-1">{exp.year}</p>
                  <h4 className="text-base font-semibold text-(--text-heading)">{exp.role}</h4>
                  <p className="text-sm text-(--text-muted) mb-2">{exp.company}</p>
                  <p className="text-sm text-(--text-muted) leading-relaxed">{exp.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-1 text-xs text-(--text-muted) bg-(--input-bg) px-2 py-1 rounded-md">
                        <ChevronRight className="h-3 w-3 text-sky-500" /> {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}