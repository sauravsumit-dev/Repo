"use client";

import Link from "next/link"; //
import { Globe, MessageCircle, AtSign, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--footer-bg)">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-(--text-muted)">
          &copy; {new Date().getFullYear()}, Sumit Saurav. All rights reserved.
        </p>
        <div className="flex gap-3">
          <a href={personalInfo.github} target="_blank" rel="noopener" className="p-2 rounded-lg bg-(--input-bg) text-(--text-muted) hover:text-(--text-heading) transition-colors"><Globe className="h-4 w-4" /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener" className="p-2 rounded-lg bg-(--input-bg) text-(--text-muted) hover:text-(--text-heading) transition-colors"><AtSign className="h-4 w-4" /></a>
          <a href={personalInfo.twitter} target="_blank" rel="noopener" className="p-2 rounded-lg bg-(--input-bg) text-(--text-muted) hover:text-(--text-heading) transition-colors"><MessageCircle className="h-4 w-4" /></a>
          <a href={`mailto:${personalInfo.email}`} className="p-2 rounded-lg bg-(--input-bg) text-(--text-muted) hover:text-(--text-heading) transition-colors"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}