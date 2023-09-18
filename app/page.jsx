import Projects from "../components/Projects";
import Hero from "../components/hero/Hero";
import Posts from "../components/posts/Posts";
import AboutPage from "./about/page";

// flex min-h-screen flex-col items-center justify-between p-24 font-primary

export default function Home() {
  return (
    <main className="overflow-hidden selection:text-blue-600 selection:bg-slate-100">
      {/* Hero */}
      <Hero />
      <Projects />
    </main>
  )
}
