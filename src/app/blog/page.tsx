"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function BlogPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? blogPosts : blogPosts.filter((p) => p.category === filter);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Latest Articles" subtitle="Blog" />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/20"
                  : "bg-[var(--input-bg)] text-[var(--text-muted)] hover:bg-[var(--surface-hover)] border border-[var(--border)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)] hover:border-sky-500/20 transition-all duration-500"
            >
              <div className="aspect-video bg-gradient-to-br from-sky-500/10 to-violet-500/10 flex items-center justify-center">
                <span className="text-4xl font-bold text-[var(--text-heading)]/10">{post.title[0]}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">{post.category}</span>
                  <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[var(--text-heading)] mb-2 group-hover:text-sky-400 transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-[var(--text-muted)] line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-sky-400 font-medium">
                  Read More <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}