"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, MessageCircle, Calendar, CheckCircle, Loader2 } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkoedvwo";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again or email me directly.");
      }
    } catch {
      alert("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div ref={ref} className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[var(--text-heading)] mb-4">Let&apos;s work together</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-sky-500/20 transition-colors group">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-heading)]">Email</p>
                  <p className="text-sm text-[var(--text-muted)]">{personalInfo.email}</p>
                </div>
              </a>
              <a href={personalInfo.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-emerald-500/20 transition-colors group">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-heading)]">WhatsApp</p>
                  <p className="text-sm text-[var(--text-muted)]">{personalInfo.phone}</p>
                </div>
              </a>
              <a href={personalInfo.calendly} target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-violet-500/20 transition-colors group">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-heading)]">Schedule a Call</p>
                  <p className="text-sm text-[var(--text-muted)]">Book via Calendly</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--input-bg)] text-[var(--text-muted)]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-heading)]">Location</p>
                  <p className="text-sm text-[var(--text-muted)]">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-sm text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Currently available for new projects
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">Name</label>
                  <input name="name" type="text" required className="w-full rounded-lg border border-[var(--border)] bg-[var(--input-bg)] px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:border-sky-500/50 focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">Email</label>
                  <input name="email" type="email" required className="w-full rounded-lg border border-[var(--border)] bg-[var(--input-bg)] px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:border-sky-500/50 focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">Subject</label>
                <input name="subject" type="text" required className="w-full rounded-lg border border-[var(--border)] bg-[var(--input-bg)] px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:border-sky-500/50 focus:outline-none transition-colors" placeholder="Project inquiry" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">Message</label>
                <textarea name="message" required rows={5} className="w-full rounded-lg border border-[var(--border)] bg-[var(--input-bg)] px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:border-sky-500/50 focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..." />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:shadow-sky-500/40 disabled:opacity-60"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="h-4 w-4" /> Message Sent!
                  </>
                ) : loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}