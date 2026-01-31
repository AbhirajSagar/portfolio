'use client';

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Skills() {
  const gameDevSkills = [
    "Gameplay Programming",
    "Game Mechanics & Systems",
    "DOTween Animations",
    "Basic 3D Modelling",
    "Animation Integration",
    "Optimization",
    "UI Systems & Implementations",
    "Netcode (Multiplayer)",
    "Level Design",
    "Project Planning",
    "Testing & Debugging",
    "Scripting & Tools",
    "Editor Extensions",
    "Feedback & Polish",
  ];

  const webDevSkills = [
    "Responsive Web Design",
    "API Integration",
    "Database Design",
    "Version Control (Git)",
    "Front-End Development",
    "UI Design",
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  return (
    <div className="w-full p-6 flex flex-col gap-10">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full text-center"
      >
        <h2 className="text-sm font-bold tracking-widest uppercase text-amber-500 mb-2">
          My Expertise
        </h2>
        <h3 className="text-3xl font-extrabold text-muted">
          Technical Skills
        </h3>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Game Development Card */}
        <SkillCard 
          title="Game Development" 
          icon={faGamepad} 
          skills={gameDevSkills} 
          variants={itemVariants}
        />

        {/* Web Development Card */}
        <div className="flex flex-col gap-8">
            <SkillCard 
            title="Web Development" 
            icon={faGlobe} 
            skills={webDevSkills} 
            variants={itemVariants}
            />
            
            {/* Optional 'Soft Skills' or 'Tools' filler to balance height if needed, 
                otherwise this column just ends naturally. */}
             <motion.div variants={itemVariants} className="border-2 border-background-muted-dark rounded-2xl p-6 flex items-start gap-4 opacity-70">
                <div className="mt-1 text-amber-500">
                    <FontAwesomeIcon icon={faCode} size="lg" />
                </div>
                <div>
                    <h4 className="font-bold text-muted mb-1">Always Learning</h4>
                    <p className="text-sm text-muted">
                        Constantly exploring new technologies to build better immersive experiences.
                    </p>
                </div>
             </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Reusable Sub-components for cleaner code

function SkillCard({ title, icon, skills, variants }) {
  return (
    <motion.div 
      variants={variants}
      className="flex flex-col h-full border-2 border-background-muted-dark rounded-2xl p-6 hover:border-amber-500/30 transition-colors duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-background-muted-dark text-amber-500">
            <FontAwesomeIcon icon={icon} size="lg" />
        </div>
        <h2 className="text-xl font-bold text-muted">{title}</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillBadge({ skill }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="bg-background-muted-dark cursor-default text-muted px-4 py-2 rounded-lg font-medium text-sm border border-transparent hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
    >
      {skill}
    </motion.span>
  );
}