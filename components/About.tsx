"use client";

import { motion } from "framer-motion";
import { Code, Sparkles, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full py-28 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Purple glow background (match Contact & Testimonials) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-purple-500/20 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-10 hover:border-purple-500/40 transition"
        >
          {/* hover glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition" />

          <div className="relative">
            {/* Avatar */}
            <div className="flex justify-center mb-10">
              <div className="relative w-44 md:w-72 h-44 md:h-72 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-5xl md:text-7xl font-extrabold text-slate-950 shadow-[0_0_40px_rgba(168,85,247,0.6)]">
                CS
              </div>
            </div>

            {/* Skill Icons */}
            <div className="grid grid-cols-3 gap-4">
              {[{ icon: Code }, { icon: Sparkles }, { icon: Rocket }].map((Item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="flex items-center justify-center h-16 rounded-xl bg-slate-800/70 border border-slate-700 text-purple-400 shadow-lg"
                >
                  <Item.icon size={26} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6 text-base md:text-lg">
            Hi, I’m <span className="text-white font-semibold">Chandrasekhar Narwal</span>, a
            <span className="text-white font-semibold"> Full Stack Engineer</span> specializing
            in building high-performance, scalable, and SEO-friendly web applications using the
            <span className="text-purple-400"> MERN stack</span> and
            <span className="text-purple-400"> Next.js</span>. I help startups, growing businesses,
            and digital agencies transform ideas into reliable, production-ready software.
          </p>

          <p className="text-slate-300 leading-relaxed mb-6 text-base md:text-lg">
            With hands-on experience in
            <span className="text-white font-semibold"> frontend development</span>,
            <span className="text-white font-semibold"> backend APIs</span>, and
            <span className="text-white font-semibold"> Generative AI integrations</span>,
            I build fast, secure, and intelligent products focused on performance,
            scalability, and real-world business impact.
          </p>

          <p className="text-slate-400 mb-10 text-base md:text-lg">
            I work with a strong focus on
            <span className="text-purple-400"> clean architecture</span>,
            <span className="text-purple-400"> fast delivery</span>, and
            <span className="text-purple-400"> transparent communication</span>,
            aiming to create long-term partnerships and measurable results for clients.
          </p>


          {/* STATS */}
          <div className="grid grid-cols-3 gap-8 max-w-lg">
            {[{ value: "3+", label: "Years Experience" }, { value: "20+", label: "Projects Delivered" }, { value: "100%", label: "Client Satisfaction" }].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white">{item.value}</div>
                <div className="mt-2 text-xs md:text-md text-slate-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
