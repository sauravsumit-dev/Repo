"use client";

import { useEffect, useState } from "react"; //
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-60 h-0.5 origin-left bg-linear-to-r from-sky-500 to-violet-500"
      style={{ scaleX }} // Why double braces here?
    />
  );
}