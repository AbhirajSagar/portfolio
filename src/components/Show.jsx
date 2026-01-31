'use client'
import { useState, useEffect } from "react";
import { faFly, faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faFile, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons/faGamepad";
import { motion } from "framer-motion";

const socials = [
  {
    icon: faGithub,
    label: "Github",
    onClick: () => {
      window.location.href = 'https://github.com/AbhirajSagar'
    }
  },
  {
    icon: faItchIo,
    label: "Itch.io",
    onClick: () => {
      window.location.href = 'https://abhiraj99.itch.io/'
    }
  },
  {
    icon: faDownload,
    label: "Download Resume",
    onClick: () => {
      const link = document.createElement("a");
      link.href = "/abhiraj_unity_dev.pdf";
      link.download = "abhiraj_unity_dev.pdf";
      link.click();
    }
  },
  {
    icon: faHouse,
    label: "Town Contracts (Live Game)",
    onClick: () => {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.fitcraft.towncontracts&hl=en_IN'
    }
  },
  {
    icon: faFly,
    label: "Jelly Flyer Rush (Live Game)",
    onClick: () => {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.ff.jellyflyerrushh'
    }
  },
];

const bgImages = [
  { img: "/1.png", label: "Post Processing", game: "Mr. Fox" },
  { img: "/2.png", label: "Procedural Terrain Generation", game: "Personal Project" },
  { img: "/3.png", label: "Driving Controls", game: "Mr. Fox" },
  { img: "/4.png", label: "Water Slide Map", game: "Stumble Guys Clone" },
  { img: "/6.png", label: "Space Map", game: "Stumble Guys Clone" },
  { img: "/7.png", label: "Driving Controls", game: "Mr. Fox" },
  { img: "/8.png", label: "Space Platforms & Gates", game: "Stumble Guys Clone" },
  { img: "/9.png", label: "GTA-Style Vehicle Controls", game: "Mr. Fox" },
  { img: "/10.png", label: "Space Map", game: "Stumble Guys Clone" },
  { img: "/12.png", label: "Hammers Map", game: "Stumble Guys Clone" },
  { img: "/14.png", label: "Hammers Map", game: "Stumble Guys Clone" },
  { img: "/15.png", label: "Island Level", game: "Mr. Fox" },
  { img: "/17.png", label: "Dropper Map", game: "Stumble Guys Clone" },
  { img: "/18.png", label: "Island Level", game: "Mr. Fox" },
  { img: "/19.png", label: "Island Level", game: "Mr. Fox" },
  { img: "/21.png", label: "Shooting System", game: "Skyline Showdown" },
  { img: "/22.png", label: "Obstacle Spawning", game: "Skyline Showdown" },
  { img: "/24.png", label: "Powerups & Effects", game: "Skyline Showdown" },
  { img: "/26.png", label: "Enemies", game: "Skyline Showdown" },
  { img: "/27.png", label: "Double Jumps", game: "Skyline Showdown" },
  { img: "/28.png", label: "Effects & Feedback", game: "Skyline Showdown" },
  { img: "/29.png", label: "Mixamo Animations", game: "Skyline Showdown" },
  { img: "/30.png", label: "Environment Creation", game: "Skyline Showdown" },
  { img: "/32.png", label: "Character Controller", game: "Mr. Fox" },
];

function SocialButton({ icon, label, onClick }) {
  return (
    <motion.div onClick={onClick} whileTap={{ scale: 0.95 }} className="text-muted my-2 md:my-0 w-full p-2 cursor-pointer outline-1 outline-transparent hover:outline-amber-400 hover:text-amber-400 group bg-background-muted-dark flex-1 rounded flex justify-start items-center">
      <FontAwesomeIcon icon={icon} className="text-5xl text-muted mr-4 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_10px_orange]" />
      {label}
    </motion.div>
  );
}

export default function Show() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Preload images
  useEffect(() => {
    bgImages.forEach(({ img }) => {
      const preloadImg = new Image();
      preloadImg.src = img;
    });
  }, []);

  // Auto-slide with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % bgImages.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 300);
  };

  return (
    <div className="w-full h-200 md:h-100 flex flex-col md:flex-row gap-3">
      <motion.div
        animate={{ opacity: fade ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-full md:w-[70%] h-full rounded-md bg-cover overflow-hidden relative bg-center sm:items-start flex-col flex justify-end items-center"
        style={{ backgroundImage: `url('${bgImages[current].img}')` }}
      >
        <div className="w-max h-40 flex justify-end flex-col p-4">
          <h2 className="text-white font-extrabold text-lg text-center sm:text-left sm:text-3xl drop-shadow-[0_4px_50px_rgba(0,0,0,0.8)]">
            {bgImages[current].label}
          </h2>
          <h2 className="text-white font-normal text-center sm:text-left sm:text-xl drop-shadow-[0_4px_50px_rgba(0,0,0,0.8)]">
            {'(' + bgImages[current].game + ')'}
          </h2>
        </div>
        <div className="absolute top-4 right-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {bgImages.map((img, i) => (
            <motion.div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-white" : "w-2 bg-white opacity-60 hover:opacity-100"
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => handleDotClick(i)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </motion.div>
      <div className="md:flex h-full w-full md:w-[30%] rounded-md gap-2 justify-center items-center flex-col">
        {socials.map((s, i) => <SocialButton key={i} {...s} />)}
      </div>
    </div>
  );
}