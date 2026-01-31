import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://csekhar-mern.github.io/Portfolio"),

  alternates: {
    canonical: "https://csekhar-mern.github.io/Portfolio/",
  },

  authors: [{ name: "Chandrasekhar Narwal" }],
  creator: "Chandrasekhar Narwal",
  publisher: "Chandrasekhar Narwal",

  title: {
    default: "Chandrasekhar Narwal | Full Stack & GenAI Website Development",
    template: "%s | Chandrasekhar Narwal",
  },

  description:
    "High-demand full stack website development services for businesses, startups, and online stores worldwide. I build fast, SEO-optimized websites, e-commerce platforms, admin dashboards, GenAI chatbots, AI automation solutions, and handle secure deployment & database architecture.",

  keywords: [
    // Core
    "Website Developer",
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "Next.js Developer",

    // Business focused
    "Website Development Services",
    "Full Stack Web Development",
    "Business Website Developer",
    "Ecommerce Website Development Services",
    "Custom Web Application Development",
    "Admin Dashboard Development",
    "Startup Website Development",
    "Enterprise Web Solutions",
    "Remote Web Developer",
    "Global Website Development Services",

    // Location targeting (VERY important)
    "Website Developer in Rajasthan",
    "Website Developer in Jaipur",
    "Website Developer in Kota",
    "Website Developer in Delhi",
    "Website Developer in India",
    "Website Developer in USA",
    "Website Developer in Canada",

    // Cost & intent
    "Affordable Website Development",
    "Low Cost Website Developer",
    "Professional Website Services",
  ],

  openGraph: {
    title: "Chandrasekhar Narwal | Full Stack & GenAI Website Development",
    description:
      "Custom full stack website development for businesses and startups. I build fast, SEO-friendly websites, e-commerce platforms, admin dashboards, GenAI chatbots, AI automation solutions, with secure deployment and database management for global clients.",
    url: "https://csekhar-mern.github.io/Portfolio/",
    siteName: "Chandrasekhar Narwal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chandrasekhar Narwal - Full Stack & GenAI Website Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chandrasekhar Narwal | Full Stack & GenAI Website Solutions",
    description:
      "Need a modern website or AI-powered system? I build SEO-optimized websites, e-commerce platforms, GenAI chatbots, AI automation tools, dashboards, and handle deployment & databases for businesses worldwide.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chandrasekhar Narwal",
              url: "https://csekhar-mern.github.io/Portfolio/",
              jobTitle: "Full Stack Website Developer",
              worksFor: {
                "@type": "Organization",
                name: "Independent Web Development Services",
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Worldwide",
              },
              availableChannel: {
                "@type": "ServiceChannel",
                serviceLocation: {
                  "@type": "Place",
                  name: "Remote / Global",
                },
              },
            }),
          }}
        />


        {children}
      </body>

    </html>
  );
}
