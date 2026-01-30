import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Chandrasekhar Narwal | Full Stack MERN & GenAI Developer",
  description:
    "Affordable full stack web development, MERN stack apps, Next.js websites, GenAI chatbots, AI automation, deployment and database solutions.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Affordable Website Development",
    "GenAI Developer",
    "AI Chatbot Development",
    "Low Cost Website Developer",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
