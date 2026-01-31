'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGamepad, FaGlobe } from "react-icons/fa";

const games = [
    { name: "Town Contracts", img: "https://play-lh.googleusercontent.com/xnqLMjhXkdGuAoL6b9pTgQjf4KT1Gt8zbZKViUSpkheeMfNfXS5jQHtNaa4UpCb7ZfY=w5120-h2880-rw", link: 'https://play.google.com/store/apps/details?id=com.fitcraft.towncontracts&hl=en_IN', tag: "Mobile" },
    { name: "Jelly Flyer Rush", img: "https://play-lh.googleusercontent.com/FkvC29E04Cpbf_l25-y-swrWNKpRc_0ylisb1GDEHxFjUguHWOUWczq_uJCW6m4ogVu7vyBapBJXM7Wk28WUtg4=w1052-h592-rw", link: 'https://play.google.com/store/apps/details?id=com.ff.jellyflyerrushh', tag: "Mobile" },
    { name: "Gun Masters", img: "https://img.itch.zone/aW1nLzE2MzkxMjMyLnBuZw==/315x250%23c/RMT%2F3p.png", link: 'https://abhiraj99.itch.io/gun-master', tag: "PC" },
    { name: "Block Puzzle", img: "https://img.itch.zone/aW1nLzE2MzkxMTQ2LnBuZw==/315x250%23c/LtX%2Blo.png", link: 'https://abhiraj99.itch.io/block-puzzle', tag: "PC" },
    { name: "Skyline Showdown", img: "https://img.itch.zone/aW1nLzE0MTgzNDE5LmpwZw==/315x250%23c/9LF1l0.jpg", link: 'https://abhiraj99.itch.io/skyline-showdown', tag: "PC" },
    { name: "Mr. Fox", img: "https://img.itch.zone/aW1nLzE0NDI4OTExLmpwZw==/315x250%23c/F32%2BLq.jpg", link: 'https://abhiraj99.itch.io/mr-fox', tag: "PC" },
];

const webProjects = [
    { name: "Code Collab", img: "/collaboration.png", desc: "Real-time collaborative coding platform.", link: 'https://collab-code-app.vercel.app/' },
    { name: "Notes To Mindmap", img: "/mindmap.png", desc: "AI-powered notes to mind map converter.", link: 'https://notes-to-mindmap.vercel.app/' },
    { name: "Quyz", img: "/quiz.png", desc: "Online quiz creation and sharing platform.", link: 'https://quyz.vercel.app/' },
    { name: "Chatvrooms", img: "/chat.png", desc: "Anonymous serverless chat platform.", link: 'https://chatvrooms.vercel.app/' }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("games");

  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-2">Portfolio</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h3>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        <TabButton active={activeTab === "games"} onClick={() => setActiveTab("games")} icon={<FaGamepad />} label="Games" />
        <TabButton active={activeTab === "web"} onClick={() => setActiveTab("web")} icon={<FaGlobe />} label="Web Apps" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
            {activeTab === "games" 
                ? games.map((p, i) => <ProjectCard key={p.name} project={p} index={i} type="game" />)
                : webProjects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} type="web" />)
            }
        </AnimatePresence>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }) {
    return (
        <button 
            onClick={onClick}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all duration-300
            ${active ? "bg-amber-500 text-neutral-900" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`}
        >
            {icon} {label}
        </button>
    )
}

function ProjectCard({ project, index, type }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.open(project.link, '_blank')}
            className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 cursor-pointer hover:border-amber-500/50 transition-colors"
        >
            <div className={`w-full overflow-hidden ${type === 'web' ? 'h-48 bg-neutral-800 p-4' : 'h-56'}`}>
                <img 
                    src={project.img} 
                    alt={project.name} 
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-110 
                    ${type === 'web' ? 'object-contain' : 'object-cover'}`}
                />
            </div>
            
            <div className="p-5 relative z-10 bg-neutral-900">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{project.name}</h3>
                    {project.tag && <span className="text-[10px] uppercase bg-neutral-800 px-2 py-1 rounded text-neutral-400">{project.tag}</span>}
                </div>
                {type === 'web' && <p className="text-sm text-neutral-400">{project.desc}</p>}
                
                <div className="mt-4 flex items-center text-sm text-amber-500 font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    View Project &rarr;
                </div>
            </div>
        </motion.div>
    );
}