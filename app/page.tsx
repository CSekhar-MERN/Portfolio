import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import GenAI from "@/components/GenAI";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonial";
import Header from "@/components/common/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <GenAI />
      <TechStack />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
