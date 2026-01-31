'use client';
import { motion } from "framer-motion";
import { FaUnity, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiBlender, SiFirebase, SiSupabase } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faCode } from "@fortawesome/free-solid-svg-icons";

// Data
const tools = [
  { name: "Unity", icon: FaUnity },
  { name: "C#", icon: PiFileCSharp },
  { name: "Blender", icon: SiBlender },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "Firebase", icon: SiFirebase },
];

const expertise = [
  "Gameplay Programming", "Game Mechanics", "DOTween", "3D Modelling",
  "Optimization", "Netcode (Multiplayer)", "Level Design", "Project Planning",
  "Responsive Web Design", "API Integration", "Database Design"
];

export default function TechStack() {
  return (
    <div className="w-full flex flex-col gap-12">
      <div className="text-center">
        <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-2">My Arsenal</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">Skills & Technologies</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tools Grid */}
        <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500"><FontAwesomeIcon icon={faCode} /></div>
            <h4 className="text-xl font-bold text-white">Tech Stack</h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tools.map((tool, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-xl hover:bg-neutral-700 hover:text-amber-400 transition-colors group cursor-default">
                <tool.icon className="text-4xl mb-2 text-neutral-400 group-hover:text-amber-400 transition-all duration-300 group-hover:scale-110" />
                <span className="text-xs font-medium text-neutral-400 group-hover:text-white">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Tags */}
        <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 h-full"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500"><FontAwesomeIcon icon={faGamepad} /></div>
            <h4 className="text-xl font-bold text-white">Core Competencies</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, i) => (
              <span key={i} className="px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-lg text-sm border border-transparent hover:border-amber-500/50 hover:text-amber-400 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}