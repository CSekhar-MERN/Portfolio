"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Brain,
  GitBranch,
} from "lucide-react";

const stack = [
  {
    icon: Code2,
    title: "Frontend Technologies",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    desc: "Fast, SEO-optimized, and responsive user interfaces built for performance and conversions.",
  },
  {
    icon: Server,
    title: "Backend Development",
    tech: ["Node.js", "Express.js", "REST APIs"],
    desc: "Scalable backend architectures with secure APIs and high performance.",
  },
  {
    icon: Database,
    title: "Databases",
    tech: ["MongoDB", "MySQL"],
    desc: "Reliable data storage solutions optimized for speed, scalability, and security.",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    tech: ["AWS", "Firebase", "Vercel"],
    desc: "Cloud-native deployments ensuring uptime, scalability, and fast global delivery.",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    tech: ["OpenAI", "GenAI APIs", "AI Chatbots"],
    desc: "Intelligent AI solutions to automate workflows, engage users, and boost productivity.",
  },
  {
    icon: GitBranch,
    title: "Tools & DevOps",
    tech: ["Git", "GitHub", "CI/CD"],
    desc: "Clean code, version control, and automated workflows for reliable delivery.",
  },
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="relative py-14 md:py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      aria-labelledby="tech-stack"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          id="tech-stack"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Modern <span className="text-purple-400">Tech Stack</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-slate-400"
        >
          Technologies I use to build{" "}
          <strong className="text-slate-200">
            scalable, secure, and SEO-friendly web applications
          </strong>{" "}
          that deliver real business results.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-left shadow-lg backdrop-blur-xl hover:border-purple-500/40 hover:shadow-purple-500/20 transition"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition">
                <item.icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-slate-400">
                {item.desc}
              </p>

              {/* Tech list */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
