"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Website for Retail Business",
    category: "Full Stack",
    image: "./projects/image1-v1.webp",
    desc: "A production-ready e-commerce website built for a retail business, featuring product management, secure payments, and order tracking with an admin panel.",
    tech: ["Next.js", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    features: [
      "Product & Category Management",
      "Secure Checkout & Payments",
      "Order Tracking & Admin Panel",
    ],
    link: "https://angi.in/",
  },
  {
    title: "Admin Dashboard & CMS for Business Operations",
    category: "Dashboard",
    image: "./projects/image2.webp",
    desc: "A scalable admin dashboard designed to manage users, content, analytics, and business data with role-based access control.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Chart.js"],
    features: [
      "Analytics & Reporting",
      "User & Role Management",
      "Real-time Data Updates",
    ],
    link: "https://marmelab.com/react-admin-demo/",
  },
  {
    title: "Corporate Business Website with Lead Management",
    category: "Website",
    image: "./projects/image3.webp",
    desc: "A modern corporate website built for a service-based company, optimized for SEO and conversions, with integrated lead and inquiry management.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Email Integration"],
    features: [
      "SEO Optimized Pages",
      "Lead Capture & Management",
      "High Performance & Fast Load",
    ],
    link: "https://nexasolutions.co.in/",
  },
  {
    title: "Professional Portfolio & Brand Website",
    category: "Portfolio",
    image: "./projects/image4.webp",
    desc: "A high-quality portfolio and personal brand website designed for professionals to showcase projects, skills, and attract clients.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Project & Case Study Showcase",
      "Animated UI & Smooth Transitions",
      "Responsive & Accessible Design",
    ],
    link: "https://alexmorgantd.co.uk/",
  },
  {
  title: "Scalable Menswear E-Commerce Solution",
  category: "Full Stack",
  image: "./projects/image5.webp",
  desc: "Developed a scalable and performance-optimized menswear e-commerce platform with secure authentication, payment gateway integration, and a custom admin system for seamless product and order management.",
  tech: ["Next.js", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
  features: [
    "High-Performance Frontend",
    "Admin Panel with Inventory & Order Management",
    "Mobile-First & SEO Optimized Architecture"
  ],
  link: "https://www.untuckit.com/",
},
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-14 md:py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      aria-labelledby="featured-projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          id="featured-projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          <span className="text-purple-400">Featured</span> Projects
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 max-w-3xl mx-auto text-center text-lg text-slate-400"
        >
          Real-world applications built with modern technologies,
          focused on performance, scalability, and business impact.
        </motion.p>

        {/* Grid */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group rounded-2xl overflow-hidden border border-slate-800
             bg-slate-900/80 hover:border-purple-500/40 transition"
            >
              {/* Image */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.title} project screenshot`}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="inline-block mb-3 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  {p.category}
                </span>

                <h3 className="text-xl font-semibold text-white">{p.title}</h3>

                <p className="mt-3 text-sm text-slate-400">{p.desc}</p>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="mt-5 space-y-1 text-sm text-slate-300">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* ✅ Live Site Button */}
                {p.link && (
                  <Link
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block w-full text-center py-2 rounded-lg font-semibold
                     text-white bg-gradient-to-r from-purple-500 to-cyan-400
                     shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform"
                  >
                    Link
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
