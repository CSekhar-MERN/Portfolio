"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  ShoppingCart,
  Sparkles,
  Plug,
  Cloud,
  Database,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    icon: Globe,
    desc: "Custom business websites, portfolios, and landing pages built with modern technologies.",
    points: [
      "Business Websites",
      "Portfolio Sites",
      "Landing Pages",
      "Responsive Design",
    ],
  },
  {
    title: "Full-Stack Web Applications",
    icon: Code2,
    desc: "End-to-end web application development using MERN stack and Next.js.",
    points: [
      "MERN Stack Apps",
      "Next.js Applications",
      "Real-time Features",
      "Secure Auth",
    ],
  },
  {
    title: "E-commerce Development",
    icon: ShoppingCart,
    desc: "Complete e-commerce solutions with payment integration and dashboards.",
    points: [
      "Payment Integration",
      "Inventory Management",
      "Admin Dashboard",
      "Order Tracking",
    ],
  },
  {
    title: "GenAI Services",
    icon: Sparkles,
    desc: "AI-powered chatbots, automation tools, and intelligent features.",
    points: [
      "AI Chatbots",
      "Automation Tools",
      "AI Integrations",
      "Smart Forms",
    ],
  },
  {
    title: "API Development & Integration",
    icon: Plug,
    desc: "Custom REST APIs, third-party integrations, and backend services.",
    points: [
      "REST APIs",
      "Third-party Integration",
      "API Documentation",
      "Secure Backend",
    ],
  },
  {
    title: "Deployment & Hosting",
    icon: Cloud,
    desc: "Production-ready deployment setup on Vercel, AWS, and Netlify.",
    points: [
      "Cloud Deployment",
      "SSL Setup",
      "Domain Config",
      "CI/CD Pipeline",
    ],
  },
  {
    title: "Database Design",
    icon: Database,
    desc: "Efficient database architecture and optimized data models.",
    points: [
      "MongoDB",
      "MySQL",
      "Data Modeling",
      "Query Optimization",
    ],
  },
  {
    title: "Website Optimization",
    icon: Zap,
    desc: "Performance tuning, SEO optimization, and Core Web Vitals improvements.",
    points: [
      "Performance Tuning",
      "SEO Optimization",
      "Core Web Vitals",
      "Speed Enhancement",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-14 md:py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Services
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Comprehensive web development services tailored to your business
            needs
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-900 p-6 shadow-lg hover:border-purple-500/60 transition-all"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-slate-400">
                  {service.desc}
                </p>

                {/* Points */}
                <ul className="mt-4 space-y-2 text-sm">
                  {service.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-slate-300"
                    >
                      <span className="text-purple-400">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
