'use client';
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Frolic Frog Studios",
        role: "Unity Game Developer",
        date: "Feb 2025 - Current",
        desc: "Managing gameplay programming, systems, and integration. Collaborating closely with 3D artists for visual implementation."
    },
    {
        company: "Innovmeta",
        role: "Game & Full Stack Developer",
        date: "Aug 2024 - May 2025",
        desc: "Handled gameplay programming, level design, UI, and audio. Built backend systems and a web-based admin platform."
    },
    {
        company: "Fitcraft",
        role: "Unity Game Developer Intern",
        date: "April - Nov 2024",
        desc: "Developed 'Town Contracts'. Handled C# scripting, editor tools, level design, UI/UX, and performance optimization."
    },
    {
        company: "Troak",
        role: "Unity Game Developer Intern",
        date: "Feb - June 2024",
        desc: "End-to-end development of hyper-casual games including gameplay, visuals, and UI."
    }
];

export default function Experience() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-2">My Journey</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h3>
      </div>

      <div className="relative border-l-2 border-neutral-800 ml-4 md:ml-0 space-y-12">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-900 border-2 border-amber-500" />
            
            <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                <div className="md:col-span-3 text-sm text-amber-500 font-mono mb-1 md:mb-0 md:text-right pt-0.5">
                    {exp.date}
                </div>
                <div className="md:col-span-9 bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-lg text-neutral-400 mb-2">{exp.company}</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        {exp.desc}
                    </p>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}