import Hero from "../components/Hero";
import Projects from "../components/Projects";
import AboutPage from "./about/page";

// flex min-h-screen flex-col items-center justify-between p-24 font-primary

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />
      <Projects />
    </main>
  )
}
