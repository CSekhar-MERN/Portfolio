"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};
export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          // Use reverse geocoding API to get city, country
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          setLocation(`${data.address.city || ""}, ${data.address.country || ""}`);
        },
        (error) => {
          console.log("Location access denied or failed", error);
        }
      );
    }
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    console.log("Form clicked");
    if (!form) return;

    setLoading(true);
    setStatus(null);
    console.log("Form clicked1");

    try {
      // 1️⃣ Admin email (to you)
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // 2️⃣ Auto-reply email (to user)
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_70%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Heading */}
        <motion.div variants={item} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto px-2 sm:px-0">
            Let’s build something impactful together — websites, AI tools,
            dashboards, or full-stack products.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Left Info Card */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="relative rounded-2xl border border-slate-800 bg-slate-900/70
                   p-6 sm:p-7 md:p-8 hover:border-purple-500/50 transition"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition" />

            <div className="relative space-y-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Mail size={20} />
                </div>
                <div className="break-all sm:break-normal">
                  <p className="text-sm text-slate-400">Email</p>
                  <Link
                    href="mailto:csekhar.code@gmail.com?subject=Project%20Inquiry&body=Hi%20Chandrasekhar,"
                    className="text-slate-200 hover:text-purple-400 hover:underline transition"
                  >
                    csekhar.code@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <Link href="https://github.com/CSekhar-MERN" target="_blank" className="text-purple-400 hover:underline transition">
                    View Profile
                  </Link>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <Link href="https://www.linkedin.com/in/chandrasekhar01?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bzlk9j0fhRe66s7h%2Fv%2BC%2BGg%3D%3D" target="_blank" className="text-purple-400 hover:underline transition">
                    Connect
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="relative rounded-2xl border border-slate-800 bg-slate-900/70
                   p-6 sm:p-7 md:p-8 backdrop-blur-xl
                   hover:border-purple-500/50 transition"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition" />

            <form ref={formRef} onSubmit={sendEmail} className="relative space-y-3 sm:space-y-4">
              <input
                name="user_name"
                placeholder="Your Name"
                autoComplete="off"
                required
                className="w-full p-3 rounded-lg bg-slate-800 text-slate-200"
              />

              <input
                name="user_email"
                type="email"
                placeholder="Your Email"
                autoComplete="off"
                required
                className="w-full p-3 rounded-lg bg-slate-800 text-slate-200"
              />

              <input
                name="user_phone"
                type="tel"
                placeholder="Contact Number"
                autoComplete="off"
                required
                className="w-full p-3 rounded-lg bg-slate-800 text-slate-200"
              />

              <input
                name="user_location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Your Location (City, Country)"
                autoComplete="off"
                required
                className="w-full p-3 rounded-lg bg-slate-800 text-slate-200"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                required
                className="w-full p-3 rounded-lg bg-slate-800 text-slate-200"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-cyan-400 text-white cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  ✅ Message sent successfully! Check your email.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  ❌ Failed to send message. Please try again.
                </p>
              )}
            </form>


          </motion.div>
        </div>
      </motion.div>
    </section>

  );
}
