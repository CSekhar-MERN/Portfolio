"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Founder, TechStart India",
    review:
      "Chandrasekhar delivered our e-commerce platform ahead of schedule. The quality of code and attention to detail was exceptional. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head, DigitalFlow",
    review:
      "Our website traffic increased by 200% after the SEO optimization and redesign. The AI chatbot he built saves us hours of customer support time.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "CEO, CloudNine Solutions",
    review:
      "Professional, affordable, and incredibly skilled. Built our entire admin dashboard in just 3 weeks. Will definitely work with him again.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative py-14 md:py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      aria-labelledby="client-testimonials"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          id="client-testimonials"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Client <span className="text-purple-400">Testimonials</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-slate-400"
        >
          What my clients say about working with me on web development,
          AI solutions, and scalable digital products.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-left backdrop-blur-xl hover:border-purple-500/40 hover:shadow-purple-500/20 transition"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1 text-yellow-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm leading-relaxed text-slate-300">
                “{t.review}”
              </p>

              {/* Client Info */}
              <div className="mt-6">
                <p className="font-semibold text-white">
                  {t.name}
                </p>
                <p className="text-sm text-slate-400">
                  {t.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
