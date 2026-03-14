'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faArrowUpRightFromSquare, faEnvelope, faCode, faServer, faDatabase, faBrain, faUsers, faCheckSquare, faComments, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs,
  SiMongodb, SiFirebase, SiSupabase, SiTypescript,
  SiExpress, SiJavascript
} from "react-icons/si";

// ─── TYPES ───────────────────────────────────────────────────────────────────

interface Project {
  name: string;
  tagline: string;
  desc: string;
  link: string;
  tech: string[];
  icon: IconDefinition;
  accent: string;
  category: "ai" | "fullstack" | "realtime";
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const PROJECTS: Project[] = [
  {
    name: "Quick Quiz",
    tagline: "AI-powered quiz generator",
    desc: "Generate quizzes on any topic with configurable difficulty, question count, and optional explanations. Powered by GroqCloud for near-instant AI responses.",
    link: "https://quick-quiz-xi.vercel.app/",
    tech: ["Next.js", "TailwindCSS", "GroqCloud AI"],
    icon: faBrain,
    accent: "from-violet-500 to-purple-600",
    category: "ai",
  },
  {
    name: "Node Stories",
    tagline: "Visual interactive story editor",
    desc: "Node-based visual editor for building branched storylines with audio, video, and image media. Connects choices between nodes and exports a fully bundled static website with assets included.",
    link: "https://node-stories.vercel.app/",
    tech: ["Next.js", "TailwindCSS", "React Flow"],
    icon: faBookOpen,
    accent: "from-emerald-500 to-teal-600",
    category: "fullstack",
  },
  {
    name: "Collab Code",
    tagline: "Real-time collaborative coding",
    desc: "Live collaborative coding environment where multiple users can write and edit code together in real time, with synchronized state across all connected clients.",
    link: "https://collab-code-app.vercel.app/",
    tech: ["Next.js", "PeerJS", "TailwindCSS"],
    icon: faCode,
    accent: "from-amber-500 to-orange-500",
    category: "realtime",
  },
  {
    name: "TARS Chat",
    tagline: "Full-featured chat application",
    desc: "Real-time DM chat with user list, online/offline presence, typing indicators, unread message counts, and soft message deletion. Built with a serverless backend.",
    link: "https://tars-assignment-tau.vercel.app/",
    tech: ["Next.js", "Convex DB", "Clerk"],
    icon: faComments,
    accent: "from-sky-500 to-blue-600",
    category: "realtime",
  },
  {
    name: "PrimeTrade",
    tagline: "Task manager with REST API",
    desc: "Clean task management app with a full Node.js/Express REST backend, MongoDB persistence, and a Next.js frontend. CRUD operations, task status tracking, and a simple, focused UI.",
    link: "https://primetrade-frontend-ochre.vercel.app/",
    tech: ["Next.js", "Node.js", "MongoDB"],
    icon: faCheckSquare,
    accent: "from-rose-500 to-pink-600",
    category: "fullstack",
  },
];

const TECH_STACK = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { name: "Express", icon: SiExpress, color: "text-neutral-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-orange-400" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
];

const SKILLS_LIST = [
  { icon: faCode, label: "Frontend", items: ["React", "Next.js", "TailwindCSS", "HTML/CSS", "JavaScript"] },
  { icon: faServer, label: "Backend", items: ["Node.js", "Express", "REST APIs", "Serverless Functions"] },
  { icon: faDatabase, label: "Databases", items: ["MongoDB / Mongoose", "Supabase", "Firebase", "Convex DB"] },
  { icon: faUsers, label: "Real-time & Auth", items: ["WebSockets", "PeerJS", "Clerk", "Firebase Auth"] },
];

const CATEGORY_FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "ai", label: "AI" },
  { key: "fullstack", label: "Full Stack" },
  { key: "realtime", label: "Real-time" },
] as const;

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-blue-600">
          `AS
        </a>
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-neutral-400 hover:text-sky-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        <button className="md:hidden text-neutral-200 text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-b border-neutral-800 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {NAV_LINKS.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-neutral-300 hover:text-sky-400">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">

      {/* Ambient grid background */}
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-500/5 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center gap-8 pt-24 pb-16">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/5 text-sky-400 text-xs font-semibold tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Full-Stack Web Developer
        </motion.div>

        {/* Name */}
        <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight">
            Abhiraj Sagar
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 font-light mt-5 max-w-2xl mx-auto leading-relaxed">
            I build <span className="text-sky-400 font-medium">fast, functional web apps</span> — from real-time tools and AI integrations to full REST backends and polished UIs.
          </p>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            ["5+", "Projects Shipped"],
            ["10+", "Technologies"],
            ["AI · Realtime · Full Stack", ""],
          ].map(([num, lbl]) => (
            <div key={num} className={`px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 text-sm ${lbl ? "text-neutral-400" : ""}`}>
              {lbl
                ? <><span className="text-white font-bold">{num}</span> <span className="text-neutral-500">{lbl}</span></>
                : <span className="text-sky-400 font-medium">{num}</span>
              }
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="https://github.com/AbhirajSagar" target="_blank" rel="noreferrer"
            className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700 transition-all duration-300 hover:-translate-y-0.5">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="/abhiraj_web_dev.pdf" download
            className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 bg-sky-500 text-white hover:bg-sky-400 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(14,165,233,0.35)]">
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-neutral-600 text-xs flex flex-col items-center gap-1"
      >
        <div className="w-px h-8 bg-linear-to-b from-transparent to-neutral-600" />
        scroll
      </motion.div>
    </section>
  );
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────

function Projects() {
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack" | "realtime">("all");
  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="w-full">
      <div className="text-center mb-10">
        <h2 className="text-sky-400 font-bold tracking-widest uppercase mb-2">What I&apos;ve Built</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">Projects</h3>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORY_FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${filter === f.key
                ? "bg-sky-500 text-white"
                : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="wait">
          {filtered.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ delay: index * 0.07 }}
      className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(14,165,233,0.06)] flex flex-col"
    >
      {/* Icon header */}
      <div className={`relative h-36 bg-linear-to-br ${project.accent} flex items-center justify-center overflow-hidden`}>
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }}
        />
        <FontAwesomeIcon icon={project.icon} className="text-white text-5xl opacity-90 drop-shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-110" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">{project.name}</h3>
          <p className="text-xs text-neutral-500 mt-0.5">{project.tagline}</p>
        </div>

        <p className="text-sm text-neutral-400 leading-relaxed mb-4 flex-1">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-xs bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded border border-neutral-700/50">{t}</span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-sky-500/10 border border-neutral-700 hover:border-sky-500/40 text-neutral-400 hover:text-sky-400 text-sm font-medium transition-all duration-300"
        >
          View Live <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
        </a>
      </div>
    </motion.div>
  );
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-sky-400 font-bold tracking-widest uppercase mb-2">My Stack</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">Technologies</h3>
      </div>

      {/* Tech icons grid */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 max-w-3xl mx-auto mb-16">
        {TECH_STACK.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col items-center gap-2 p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-sky-500/30 hover:bg-neutral-800/60 transition-all duration-300 cursor-default group"
          >
            <tech.icon className={`text-3xl ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
            <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">{tech.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Skill category cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {SKILLS_LIST.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-neutral-900/50 rounded-2xl p-5 border border-neutral-800 hover:border-sky-500/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                <FontAwesomeIcon icon={cat.icon} />
              </div>
              <h4 className="font-bold text-white text-sm">{cat.label}</h4>
            </div>
            <ul className="space-y-1.5">
              {cat.items.map((item) => (
                <li key={item} className="text-sm text-neutral-400 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-sky-500/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-neutral-900/50 rounded-3xl p-10 border border-neutral-800 text-center relative overflow-hidden"
      >
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-linear-to-br from-sky-500/5 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-sky-400 font-bold tracking-widest uppercase mb-4">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Work Together</h3>
          <p className="text-neutral-400 text-base max-w-md mx-auto mb-8">
            Open to full-stack roles, freelance projects, and interesting collaborations. Fast turnaround, clean code, ships on time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="mailto:abhirajsagar99@gmail.com"
              className="px-8 py-4 bg-sky-500 text-white rounded-full font-bold text-base hover:bg-sky-400 transition-colors flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]">
              <FontAwesomeIcon icon={faEnvelope} /> Email Me
            </a>
            <a href="/abhiraj_web_dev.pdf" download
              className="px-8 py-4 bg-neutral-800 text-white rounded-full font-bold text-base hover:bg-neutral-700 transition-colors border border-neutral-700 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </div>

          <div className="border-t border-neutral-800 pt-8">
            <p className="text-xs text-neutral-600 uppercase tracking-widest mb-5">Find me on</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <SocialLink href="https://github.com/AbhirajSagar" icon={faGithub} label="GitHub" />
              <SocialLink href="mailto:abhirajsagar99@gmail.com" icon={faEnvelope} label="Email" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: IconDefinition; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className="flex items-center gap-2 px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-sky-400 rounded-full text-sm font-medium border border-neutral-700 hover:border-sky-500/40 transition-all duration-300">
      <FontAwesomeIcon icon={icon} />
      {label}
    </a>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function WebDevPortfolio() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-sky-500/30">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 pb-20">
        <div id="projects" className="pt-20"><Projects /></div>
        <div id="skills" className="pt-20"><Skills /></div>
        <div id="contact" className="pt-20"><Contact /></div>
      </div>
      <footer className="w-full py-6 text-center text-neutral-500 text-sm border-t border-neutral-900">
        © {new Date().getFullYear()} Abhiraj Sagar · Full-Stack Web Developer
      </footer>
    </main>
  );
}