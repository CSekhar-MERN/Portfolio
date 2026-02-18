"use client";

import { motion } from "framer-motion";
import { Rocket, Eye } from "lucide-react";


export default function Hero() {

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-slate-950">
      {/* Subtle purple glow (same as testimonials/contact) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.10),transparent_65%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-5xl text-center mb-16"
      >
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="px-4 py-1.5 rounded-lg border border-purple-500/30 text-purple-400 text-xs font-semibold bg-slate-900/60">
            Available for Projects
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
          Full Stack{" "}
          <span className="text-purple-400">
            Engineer
          </span>
        </h1>

        {/* Stack */}
        <p className="mt-5 text-lg md:text-xl text-slate-400">
          MERN · Next.js · GenAI Solutions
        </p>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-relaxed">
          I build modern, scalable web applications and AI-powered solutions for
          startups, small businesses, and agencies — focused on performance,
          clean UI, and fast delivery.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            onClick={(e) => handleScroll(e, "contact")}
            // href="#contact"
            className="flex items-center gap-2 px-7 py-3 rounded-xl
               bg-purple-600 text-white font-semibold
               hover:bg-purple-500 transition
               shadow-[0_0_25px_rgba(56,189,248,0.35)] cursor-pointer"
          >
            <Rocket size={18} />
            Build Your Website
          </a>

          <a
            onClick={(e) => handleScroll(e, "projects")}
            // href="#projects"
            className="flex items-center gap-2 px-7 py-3 rounded-xl
               border border-slate-700 text-slate-200
               hover:border-purple-500 hover:text-white transition cursor-pointer"
          >
            <Eye size={18} />
            View My Work
          </a>
        </div>

      </motion.div>
    </section>
  );
}
