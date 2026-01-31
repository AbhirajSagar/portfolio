'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faGamepad } from "@fortawesome/free-solid-svg-icons";

const bgImages = [
    { img: "/1.png", label: "Post Processing", game: "Mr. Fox" },
    { img: "/2.png", label: "Procedural Terrain", game: "Personal Project" },
    { img: "/4.png", label: "Water Slide Map", game: "Stumble Guys Clone" },
    { img: "/19.png", label: "Level Design", game: "Mr. Fox" },
    { img: "/21.png", label: "Shooting System", game: "Skyline Showdown" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
      
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full z-0">
        {bgImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 0.6 : 0, scale: index === current ? 1.05 : 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${image.img}')` }}
          />
        ))}
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-neutral-950 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-amber-400 mb-2">Hello, I am</h2>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight mb-4 drop-shadow-2xl">
            ABHIRAJ SAGAR
          </h1>
          <p className="text-lg md:text-2xl text-neutral-300 font-light max-w-2xl mx-auto">
            Unity Game Developer & <span className="text-amber-400 font-normal">Full-Stack Engineer</span>
          </p>
        </motion.div>

        {/* Dynamic Caption */}
        <motion.div
           key={current}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className="hidden md:block py-1 px-4 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm text-xs text-neutral-400 mt-4"
        >
           Featured: {bgImages[current].label} ({bgImages[current].game})
        </motion.div>

        {/* Buttons */}
        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
        >
            <SocialBtn href="https://github.com/AbhirajSagar" icon={faGithub} label="GitHub" />
            <SocialBtn href="https://abhiraj99.itch.io/" icon={faItchIo} label="Itch.io" />
            <SocialBtn 
                href="/abhiraj_unity_dev.pdf" 
                icon={faDownload} 
                label="Resume" 
                primary 
                download
            />
        </motion.div>
      </div>
    </section>
  );
}

function SocialBtn({ href, icon, label, primary, download }) {
  return (
    <a
      href={href}
      target={download ? "_self" : "_blank"}
      download={download ? "abhiraj_unity_dev.pdf" : undefined}
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