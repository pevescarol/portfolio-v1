import Contact from "../components/Contact";
import Projects from "../components/projects/Projects";
import AboutSection from "../components/about-section/AboutSection";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden selection:text-secondary selection:bg-slate-100">
      {/* Hero */}
      <Hero />
      <AboutSection />
      <Projects />
      <Contact />
    </main>
  )
}
