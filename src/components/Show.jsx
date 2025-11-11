'use client'
import { useState, useEffect } from "react";
import { faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons/faGamepad";
import { motion } from "framer-motion";

const socials =
    [
        {
            icon: faGithub, label: "Github", onClick: () => {
                //Go to a link
                window.location.href = 'https://github.com/AbhirajSagar'
            }
        },
        {
            icon: faItchIo, label: "Itch.io", onClick: () => {
                //Go to a link
                window.location.href = 'https://abhiraj99.itch.io/'
            }
        },
        {
            icon: faDownload, label: "Curriculum Vitae", onClick: () => {
                const link = document.createElement("a");
                link.href = "/abhiraj-cv.pdf";
                link.download = "abhiraj-cv.pdf";
                link.click();
            }
        },
        {
            icon: faGamepad, label: "Town Contracts", onClick: () => {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.fitcraft.towncontracts&hl=en_IN'
            }
        },
        {
            icon: faGamepad, label: "Boba Rush", onClick: () => {
                window.location.href = 'https://www.amazon.in/-/hi/dp/B0FWF138RH'
            }
        },
    ];

const bgImages =
    [
        { img: "/1.png", label: "Post Processing", game: "Mr. Fox" },
        { img: "/2.png", label: "Procedural Terrain Generation", game: "Personal Project" },
        { img: "/3.png", label: "Driving Controls", game: "Mr. Fox" },
        { img: "/4.png", label: "Water Slide Map", game: "Stumble Guys Clone" },
        { img: "/6.png", label: "Space Map", game: "Stumble Guys Clone" },
        { img: "/7.png", label: "Driving Controls", game: "Mr. Fox" },
        { img: "/8.png", label: "Space Platforms & Gates", game: "Stumble Guys Clone" },
        { img: "/9.png", label: "GTA-Style Equippable Vehicle Driving", game: "Mr. Fox" },
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
        { img: "/30.png", label: "Environment Creation", game: "Skline Showdown" },
        { img: "/32.png", label: "Character Controller", game: "Mr. Fox" },
    ];

function SocialButton({ icon, label, onClick }) {
    return (
        <motion.div onClick={onClick}
            whileTap={{ scale: 0.95 }}
            className="text-muted w-full p-2 cursor-pointer outline-1 outline-transparent hover:outline-amber-400 hover:text-amber-400 group bg-background-muted-dark flex-1 rounded flex justify-start items-center">
            <FontAwesomeIcon
                icon={icon}
                className="text-5xl text-muted mr-4 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_10px_orange]"
            />
            {label}
        </motion.div>
    );
}

export default function Show() {
    const [current, setCurrent] = useState(0);

    // Preload images
    useEffect(() => {
        bgImages.forEach(({ img }) => new Image().src = img);
    }, []);

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % bgImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-100 flex gap-3">
            <div className={`w-full md:w-[70%] h-full rounded-md bg-cover overflow-hidden relative bg-center transition-all duration-700 flex justify-end items-center sm:items-start flex-col`}
                style={{ backgroundImage: `url(${bgImages[current].img})` }}
            >
                <div className="w-max h-40 flex justify-end flex-col p-4">
                    <h2 className="text-white font-extrabold text-3xl drop-shadow-[0_4px_50px_rgba(0,0,0,0.8)]">
                        {bgImages[current].label}
                    </h2>
                    <h2 className="text-white font-normal text-xl drop-shadow-[0_4px_50px_rgba(0,0,0,0.8)]">
                        {bgImages[current].game}
                    </h2>
                </div>
                <div className="absolute top-4 right-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {bgImages.map((img, i) => (
                        <motion.div 
                            key={i} 
                            className={`h-2 rounded-full transition-all duration-300 ${
                                i === current 
                                    ? "w-8 bg-white" 
                                    : "w-2 bg-white opacity-60 hover:opacity-100"
                            }`}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setCurrent(i)}
                            style={{ cursor: "pointer" }}
                        />
                    ))}
                </div>
            </div>
            <div className="w-[30%] hidden md:flex h-full rounded-md gap-2 justify-center items-center flex-col">
                {socials.map((s, i) => <SocialButton key={i} {...s} />)}
            </div>
        </div>
    );
}