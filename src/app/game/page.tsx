'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faItchIo, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faArrowUpRightFromSquare, faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FaBars, FaTimes, FaUnity } from "react-icons/fa";

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface Game {
  name: string;
  studio: string;
  platform: string;
  platformIcon: IconDefinition;
  link: string;
  img: string;
  desc: string;
  tech: string[];
  highlight: string;
  tab: "published" | "personal";
}

interface HeroBtnProps {
  href: string;
  icon: IconDefinition;
  label: string;
  primary?: boolean;
  download?: boolean;
}

interface GameCardProps {
  game: Game;
  index: number;
  onClick: () => void;
}

interface GameModalProps {
  game: Game;
  onClose: () => void;
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Games", href: "#games" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const ALL_GAMES: Game[] = [
  // ── PUBLISHED ──
  {
    name: "Town Contracts",
    studio: "Fitcraft",
    platform: "Google Play",
    platformIcon: faGooglePlay,
    link: "https://play.google.com/store/apps/details?id=com.fitcraft.towncontracts&hl=en_IN",
    img: "https://play-lh.googleusercontent.com/xnqLMjhXkdGuAoL6b9pTgQjf4KT1Gt8zbZKViUSpkheeMfNfXS5jQHtNaa4UpCb7ZfY=w5120-h2880-rw",
    desc: "Hybrid-casual math puzzle game with 80+ hand-crafted levels. Full production cycle — gameplay, UI/UX, IAP, ads, and publishing.",
    tech: ["Unity", "C#", "Unity IAP", "AdMob"],
    highlight: "Sole developer · Published",
    tab: "published",
  },
  {
    name: "Jelly Flyer Rush",
    studio: "Frolic Frog Studios",
    platform: "Google Play",
    platformIcon: faGooglePlay,
    link: "https://play.google.com/store/apps/details?id=com.ff.jellyflyerrushh",
    img: "https://play-lh.googleusercontent.com/FkvC29E04Cpbf_l25-y-swrWNKpRc_0ylisb1GDEHxFjUguHWOUWczq_uJCW6m4ogVu7vyBapBJXM7Wk28WUtg4=w1052-h592-rw",
    desc: "High-energy hybrid-casual mobile game. Tight controls, escalating difficulty, and polished feel built end-to-end at Frolic Frog Studios.",
    tech: ["Unity", "C#", "DOTween", "Unity Ads"],
    highlight: "Published · Live",
    tab: "published",
  },
  {
    name: "Wool Craft Merge",
    studio: "Frolic Frog Studios",
    platform: "Google Play",
    platformIcon: faGooglePlay,
    link: "https://play.google.com/store/apps/details?id=com.ff.woolcraftmerge&hl=en_IN",
    img: "https://play-lh.googleusercontent.com/5b4PPlWSKbB_5cdSsEnnX14v76GP6Kv3HZnEwa2fRQY6eU6EwS7wSfEAvdmby-unlrQhACztej9hY6NXZIg4Ln8=w480-h960-rw",
    desc: "Casual merge mobile game with cozy aesthetics and satisfying progression. Built end-to-end at Frolic Frog Studios.",
    tech: ["Unity", "C#", "Unity Ads"],
    highlight: "Published · Live",
    tab: "published",
  },

  // ── PERSONAL ──
  {
    name: "Skyline Showdown",
    studio: "Personal",
    platform: "itch.io",
    platformIcon: faItchIo,
    link: "https://abhiraj99.itch.io/skyline-showdown",
    img: "https://img.itch.zone/aW1nLzE0MTgzNDE5LmpwZw==/315x250%23c/9LF1l0.jpg",
    desc: "Endless sci-fi action runner with shooting mechanics, enemy AI, obstacle spawning, Mixamo animations, and polished VFX.",
    tech: ["Unity", "C#", "Mixamo", "Post-Processing"],
    highlight: "Personal project",
    tab: "personal",
  },
  {
    name: "Mr. Fox",
    studio: "Personal",
    platform: "itch.io",
    platformIcon: faItchIo,
    link: "https://abhiraj99.itch.io/mr-fox",
    img: "https://img.itch.zone/aW1nLzE0NDI4OTExLmpwZw==/315x250%23c/F32%2BLq.jpg",
    desc: "3D adventure prototype with GTA-style vehicle controls, island levels, and detailed post-processing and environment art.",
    tech: ["Unity", "C#", "Blender", "Post-Processing"],
    highlight: "Personal project",
    tab: "personal",
  },
  {
    name: "Endless Tunnel",
    studio: "Personal",
    platform: "itch.io",
    platformIcon: faItchIo,
    link: "https://abhiraj99.itch.io/endless-tunnel",
    img: "https://img.itch.zone/aW1nLzE2MzkwOTQ1LnBuZw==/315x250%23c/haJX4C.png",
    desc: "Hypercasual WebGL endless runner with smooth procedural tunnel generation and clean difficulty scaling.",
    tech: ["Unity", "C#", "WebGL"],
    highlight: "WebGL · Play in browser",
    tab: "personal",
  },
  {
    name: "Ball Blast",
    studio: "Personal",
    platform: "itch.io",
    platformIcon: faItchIo,
    link: "https://abhiraj99.itch.io/ball-blast",
    img: "https://img.itch.zone/aW1nLzE2MzkwODEzLnBuZw==/315x250%23c/547c%2FR.png",
    desc: "Arcade-style ball blasting game with fast-paced shooting mechanics and escalating waves of breakable blocks.",
    tech: ["Unity", "C#", "WebGL"],
    highlight: "WebGL · Play in browser",
    tab: "personal",
  },
  {
    name: "Ball Stack",
    studio: "Personal",
    platform: "itch.io",
    platformIcon: faItchIo,
    link: "https://abhiraj99.itch.io/ball-stack",
    img: "https://img.itch.zone/aW1nLzE2MzkxMzAzLnBuZw==/315x250%23c/bcGVn%2B.png",
    desc: "Mobile-style stacking game built for WebGL. Tap-and-hold mechanic with satisfying physics-driven stacking.",
    tech: ["Unity", "C#", "WebGL"],
    highlight: "WebGL · Play in browser",
    tab: "personal",
  },
];

const EXPERIENCES = [
  {
    company: "Frolic Frog Studios",
    role: "Unity Game Developer",
    date: "Feb 2025 – Present",
    bullets: [
      "Built custom level editor → 60% faster level design",
      "Developed asset processing tools → 40% faster prep pipeline",
      "Shipped Jelly Flyer Rush & Wool Craft Merge on Google Play",
      "Prototyped 3+ gameplay concepts per sprint for rapid validation",
    ],
  },
  {
    company: "Fitcraft",
    role: "Unity Game Developer",
    date: "Apr – Nov 2024",
    bullets: [
      "Sole developer on Town Contracts — published on Google Play",
      "Designed and shipped 80+ hand-crafted puzzle levels",
      "Built full loop: gameplay, UI/UX, IAP, and ad integrations",
      "Improved session retention through puzzle mechanics design",
    ],
  },
];

const SKILLS = [
  { label: "Gameplay Systems", level: 95 },
  { label: "C# & OOP", level: 92 },
  { label: "Custom Unity Tooling", level: 88 },
  { label: "Performance Optimization", level: 82 },
  { label: "Multiplayer (Netcode)", level: 75 },
  { label: "Level Design", level: 85 },
  { label: "SDK / IAP / Ads", level: 87 },
  { label: "Post-Processing & VFX", level: 80 },
];

const BG_IMAGES = [
  { img: "/1.png", label: "Post Processing", game: "Mr. Fox" },
  { img: "/2.png", label: "Procedural Terrain", game: "Personal Project" },
  { img: "/4.png", label: "Water Slide Map", game: "Stumble Guys Clone" },
  { img: "/19.png", label: "Level Design", game: "Mr. Fox" },
  { img: "/21.png", label: "Shooting System", game: "Skyline Showdown" },
];

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

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
        <a href="#home" className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-600">
          `AS
        </a>
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-neutral-400 hover:text-amber-400 transition-colors">
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
                  className="text-lg font-medium text-neutral-300 hover:text-amber-400">
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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BG_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 z-0">
        {BG_IMAGES.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 0.55 : 0, scale: index === current ? 1.05 : 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${image.img}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-b from-neutral-950/80 via-neutral-950/40 to-neutral-950 z-10" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold tracking-widest uppercase"
        >
          <FaUnity className="text-sm" /> Unity Game Developer
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight drop-shadow-2xl">
            Abhiraj Sagar
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {["Custom Editor Tooling", "Play Store Shipped", "2+ Years Experience"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium bg-neutral-800/80 text-neutral-300 border border-neutral-700">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-8 mt-2"
        >
          {[["3+", "Shipped Games"], ["80+", "Puzzle Levels"], ["2+", "Years Exp."]].map(([num, lbl]) => (
            <div key={lbl} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-amber-400">{num}</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider">{lbl}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mt-4"
        >
          <HeroBtn href="https://github.com/AbhirajSagar" icon={faGithub} label="GitHub" />
          <HeroBtn href="https://abhiraj99.itch.io/" icon={faItchIo} label="Itch.io" />
          <HeroBtn href="/abhiraj_unity_dev.pdf" icon={faDownload} label="Resume" primary download />
        </motion.div>

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:block py-1 px-4 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm text-xs text-neutral-500 mt-2"
        >
          Featured: {BG_IMAGES[current].label} · {BG_IMAGES[current].game}
        </motion.div>
      </div>

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

function HeroBtn({ href, icon, label, primary = false, download = false }: HeroBtnProps) {
  return (
    <a
      href={href}
      target={download ? "_self" : "_blank"}
      download={download ? "abhiraj_unity_dev.pdf" : undefined}
      rel="noreferrer"
      className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-1
        ${primary
          ? "bg-amber-500 text-neutral-900 hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          : "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700"
        }`}
    >
      <FontAwesomeIcon icon={icon} />
      {label}
    </a>
  );
}

// ─── GAMES ───────────────────────────────────────────────────────────────────
function Games()
{
  const [selected, setSelected] = useState<Game | null>(null);

  return (
    <section id="games" className="w-full">
      <div className="text-center mb-10">
        <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-2">Portfolio</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">Games</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="wait">
          {ALL_GAMES.map((game, i) => (
            <GameCard key={game.name} game={game} index={i} onClick={() => setSelected(game)} />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && <GameModal game={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function GameCard({ game, index, onClick }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ delay: index * 0.07 }}
      onClick={onClick}
      className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 cursor-pointer hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)]"
    >
      <div className="h-48 overflow-hidden bg-neutral-800">
        <Image src={game.img} alt={game.name} width={600} height={192} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
      </div>
      <div className="absolute top-3 left-3 px-2.5 py-1 bg-neutral-950/80 backdrop-blur-sm rounded-full text-[10px] font-semibold text-amber-400 border border-amber-500/20 uppercase tracking-wider">
        {game.highlight}
      </div>
      <div className="absolute top-3 right-3 px-2.5 py-1 bg-neutral-950/80 backdrop-blur-sm rounded-full text-[10px] text-neutral-400 border border-neutral-700/50 flex items-center gap-1.5">
        <FontAwesomeIcon icon={game.platformIcon} className="text-xs" /> {game.platform}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-1">{game.name}</h3>
        <p className="text-xs text-neutral-500 mb-3">{game.studio}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {game.tech.map((t: string) => (
            <span key={t} className="text-xs bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded">{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-xs text-amber-500 font-medium opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          View details <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
        </div>
      </div>
    </motion.div>
  );
}

function GameModal({ game, onClose }: GameModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden max-w-lg w-full"
      >
        <div className="relative h-56 overflow-hidden">
          <Image src={game.img} alt={game.name} width={512} height={224} className="w-full h-full object-cover" unoptimized />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent" />
          <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 bg-neutral-900/80 rounded-full flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="absolute bottom-4 left-5">
            <h3 className="text-2xl font-black text-white">{game.name}</h3>
            <p className="text-amber-400 text-sm">{game.studio}</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-neutral-300 text-sm leading-relaxed mb-5">{game.desc}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {game.tech.map((t: string) => (
              <span key={t} className="text-xs bg-neutral-800 text-amber-400/80 px-3 py-1 rounded-full border border-amber-500/20">{t}</span>
            ))}
          </div>
          <a href={game.link} target="_blank" rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-900 font-bold rounded-xl transition-colors">
            <FontAwesomeIcon icon={game.platformIcon} /> Play on {game.platform}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section id="experience" className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-2">Where I&apos;ve Worked</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">Experience</h3>
      </div>
      <div className="relative border-l-2 border-neutral-800 ml-4 md:ml-0 space-y-10">
        {EXPERIENCES.map((exp, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="relative pl-8 md:pl-0">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-900 border-2 border-amber-500" />
            <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
              <div className="md:col-span-3 text-sm text-amber-500 font-mono mb-1 md:mb-0 md:text-right pt-0.5">{exp.date}</div>
              <div className="md:col-span-9 bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <h4 className="text-base text-amber-400/80 mb-4">{exp.company}</h4>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-neutral-400">
                      <span className="text-amber-500 mt-0.5 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-2">What I Bring</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {SKILLS.map((skill, i) => (
          <motion.div key={skill.label} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-800">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-neutral-300">{skill.label}</span>
              <span className="text-xs text-amber-500 font-mono">{skill.level}%</span>
            </div>
            <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.06, ease: "easeOut" }} className="h-full bg-linear-to-r from-amber-500 to-orange-500 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
        {["Unity Editor", "Visual Studio Code", "Git & GitHub", "DOTween", "Netcode for GameObjects", "Photopea", "Mixamo", "Unity Cloud", "Unity Ads", "AdMob"].map((tool) => (
          <span key={tool} className="px-3 py-1.5 bg-neutral-900 text-neutral-400 rounded-lg text-sm border border-neutral-800 hover:border-amber-500/40 hover:text-amber-400 transition-colors cursor-default">{tool}</span>
        ))}
      </motion.div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="w-full max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-neutral-900/50 rounded-3xl p-10 border border-neutral-800 backdrop-blur-sm text-center">
        <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4">Get in Touch</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Build Something</h3>
        <p className="text-neutral-400 text-base max-w-lg mx-auto mb-8">
          Open to game dev roles, studio internships, freelance projects, or game jams. I&apos;m fast, I ship, and I care about feel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href="mailto:abhirajsagar99@gmail.com"
            className="px-8 py-4 bg-amber-500 text-neutral-900 rounded-full font-bold text-base hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <FontAwesomeIcon icon={faEnvelope} /> Email Me
          </a>
          <a href="/abhiraj_unity_dev.pdf" download
            className="px-8 py-4 bg-neutral-800 text-white rounded-full font-bold text-base hover:bg-neutral-700 transition-colors border border-neutral-700 flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
        </div>
        <div className="border-t border-neutral-800 pt-8">
          <p className="text-xs text-neutral-600 uppercase tracking-widest mb-5">Find me on</p>
          <div className="flex justify-center gap-4">
            <SocialLink href="https://github.com/AbhirajSagar" icon={faGithub} label="GitHub" />
            <SocialLink href="https://abhiraj99.itch.io/" icon={faItchIo} label="Itch.io" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: IconDefinition; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className="flex items-center gap-2 px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-amber-400 rounded-full text-sm font-medium border border-neutral-700 hover:border-amber-500/40 transition-all duration-300">
      <FontAwesomeIcon icon={icon} />
      {label}
    </a>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function GameDevPortfolio() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-amber-500/30">
      <Navbar />
      <div id="home"><Hero /></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 pb-20">
        <div id="games" className="pt-20"><Games /></div>
        <div id="experience" className="pt-20"><Experience /></div>
        <div id="skills" className="pt-20"><Skills /></div>
        <div id="contact" className="pt-20"><Contact /></div>
      </div>
      <footer className="w-full py-6 text-center text-neutral-500 text-sm border-t border-neutral-900">
        © {new Date().getFullYear()} Abhiraj Sagar · Unity Game Developer
      </footer>
    </main>
  );
}