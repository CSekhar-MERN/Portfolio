"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Headphones,
  FileText,
  BrainCircuit,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbots & Support Automation",
    desc: "Intelligent AI chatbots that handle customer queries 24/7, provide instant responses, and automatically qualify leads.",
    points: ["Customer Support", "Lead Qualification", "FAQ Automation"],
  },
  {
    icon: Headphones,
    title: "Smart AI Assistants",
    desc: "Context-aware AI assistants integrated into your website that answer questions and escalate complex issues to humans.",
    points: [
      "Context-aware Responses",
      "Multi-language Support",
      "Smart Escalation",
    ],
  },
  {
    icon: FileText,
    title: "AI Forms & Lead Scoring",
    desc: "AI-powered forms that auto-fill data, validate inputs in real-time, and score leads intelligently.",
    points: ["Smart Auto-fill", "Real-time Validation", "Lead Scoring"],
  },
  {
    icon: BrainCircuit,
    title: "Custom AI Integrations",
    desc: "Seamlessly integrate AI-powered features like content generation, recommendations, and analytics into your platform.",
    points: ["Content Generation", "Smart Recommendations", "AI Analytics"],
  },
];

export default function GenAI() {
  return (
    <section
      className="relative py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      aria-labelledby="genai-services"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm text-purple-300"
        >
          AI-Powered Solutions
        </motion.span>

        {/* Heading */}
        <motion.h2
          id="genai-services"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          <span className="text-purple-400">GenAI</span> Services
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-slate-400"
        >
          Make your business smarter with affordable{" "}
          <strong className="text-slate-200">
            Generative AI solutions
          </strong>
          . From AI chatbots to automation, I integrate cutting-edge AI
          technology into websites and applications to boost efficiency,
          engagement, and conversions.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl border border-purple-500/20 bg-slate-900/70 p-6 text-left shadow-lg backdrop-blur-xl hover:border-purple-400/50 hover:shadow-purple-500/20 transition"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                {item.desc}
              </p>

              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                  Use Cases
                </p>
                <ul className="space-y-1 text-sm text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
