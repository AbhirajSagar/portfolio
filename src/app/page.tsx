// app/page.jsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; // Was Show.jsx
import TechStack from "@/components/TechStack"; // Merged Skills & Tools
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-amber-500/30">
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 pb-20">
        <div id="skills" className="pt-20">
          <TechStack />
        </div>

        <div id="experience" className="pt-20">
          <Experience />
        </div>

        <div id="projects" className="pt-20">
          <Projects />
        </div>

        <div id="contact" className="pt-20">
          <Contact />
        </div>
      </div>
      
      <footer className="w-full py-6 text-center text-neutral-500 text-sm border-t border-neutral-900">
        © {new Date().getFullYear()} Abhiraj Sagar. All rights reserved.
      </footer>
    </main>
  );
}