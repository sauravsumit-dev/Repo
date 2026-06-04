"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, Users, Gauge, TrendingUp } from "lucide-react";
import { projects, projectCategories } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Individual Projects" subtitle="My Portfolio" />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-linear-to-r from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/20"
                  : "bg-(--input-bg) text-(--text-muted) hover:bg-(--surface-hover) border border-(--border)"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden border border-(--border) bg-(--card-bg) hover:border-sky-500/20 transition-all duration-500"
              >
                <div className="aspect-video bg-linear-to-br from-sky-500/10 to-violet-500/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-(--card-bg) to-transparent opacity-60 z-10" />
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <span className="text-5xl font-bold text-(--text-heading)/10">{project.title[0]}</span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-(--input-bg) text-(--text-muted) border border-(--border)">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-(--text-heading) mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                  <p className="text-sm text-(--text-muted) mb-4">{project.description}</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center rounded-lg bg-(--input-bg) p-2">
                      <Users className="h-3 w-3 mx-auto text-sky-400 mb-1" />
                      <p className="text-xs text-(--text-heading) font-medium">{project.stats.users}</p>
                    </div>
                    <div className="text-center rounded-lg bg-(--input-bg) p-2">
                      <Gauge className="h-3 w-3 mx-auto text-violet-400 mb-1" />
                      <p className="text-xs text-(--text-heading) font-medium">{project.stats.performance}</p>
                    </div>
                    <div className="text-center rounded-lg bg-(--input-bg) p-2">
                      <TrendingUp className="h-3 w-3 mx-auto text-emerald-400 mb-1" />
                      <p className="text-xs text-(--text-heading) font-medium">{project.stats.conversion}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={project.liveUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 transition-colors">
                      Live Demo <ExternalLink className="h-3 w-3" />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-xs text-(--text-muted) hover:text-(--text-heading) transition-colors">
                      GitHub Link<GitBranch className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}