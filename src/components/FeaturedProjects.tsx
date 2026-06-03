"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function FeaturedProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-24 relative">
      <div className="absolute top-0 right-0 w-125 h-125 bg-sky-500/5 rounded-full blur-[150px]" /> {/*  */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Selected Work" />

        <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden border border-(--border) bg-(--card-bg) hover:border-sky-500/30 transition-all duration-500"
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
                  <span className="text-4xl font-bold text-(--text-heading)/10">{project.title[0]}</span>
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-(--input-bg) text-(--text-muted) border border-(--border)">{tag}</span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-(--text-heading) mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-(--text-muted) line-clamp-2 mb-4">{project.description}</p>
                <div className="flex items-center gap-3">
                  <a href={project.liveUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 transition-colors">
                    Live Demo <ExternalLink className="h-3 w-3" />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-xs text-(--text-muted) hover:text-(--text-heading) transition-colors">
                    GitHub <GitBranch className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors">
            View All Projects <GitBranch className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}