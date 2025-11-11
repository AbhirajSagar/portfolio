import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // example FA icon
import { FaUnity, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiBlender, SiFirebase, SiSupabase } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";

export default function Tools()
{
    const toolsSkills = [
        { name: "Unity", icon: FaUnity, type: "react" },
        { name: "C#", icon: PiFileCSharp, type: "react" },
        { name: "Blender", icon: SiBlender, type: "react" },
        { name: "HTML", icon: FaHtml5, type: "react" },
        { name: "CSS", icon: FaCss3Alt, type: "react" },
        { name: "JavaScript", icon: FaJs, type: "react" },
        { name: "React", icon: FaReact, type: "react" },
        { name: "Node.js", icon: FaNodeJs, type: "react" },
        { name: "Tailwind CSS", icon: RiTailwindCssFill, type: "react" },
        { name: "Firebase", icon: SiFirebase, type: "react" },
        { name: "Supabase", icon: SiSupabase, type: "react" },
        { name: "Nextjs", icon: RiNextjsFill, type: "react" },
    ];

    return (
        <div className='flex flex-col my-6'>
            <h2 className="text-xl font-normal text-muted w-full text-center">Tools & Tech Stack</h2>
            <div className='w-full h-max my-3 grid grid-cols-2 gap-2 p-2 xxs:grid-cols-3 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8'>
                {
                    toolsSkills.map((tool, i) => <Card key={i} {...tool} />)
                }
            </div>
        </div>
    );
}

function Card({ name, icon, type })
{
    return (
        <div className="rounded cursor-pointer outline-1 group flex justify-center items-center flex-col gap-2 hover:outline-amber-400 bg-background-muted-dark aspect-square">
            {
                type === "fa"
                    ? <FontAwesomeIcon icon={icon} className="group-hover:text-amber-400 hover:drop-shadow-3xl drop-shadow-amber-600 text-muted text-7xl" />
                    : (() =>
                    {
                        const Icon = icon;
                        return <Icon className="text-muted text-7xl group-hover:text-amber-400 group-hover:drop-shadow-[0_0_15px_#f59e0b]" />;
                    })()
            }
            <h2 className="text-muted group-hover:text-amber-400">{name}</h2>
        </div>
    );
}