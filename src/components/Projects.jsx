export default function Projects()
{
    const games = [
        { name: "Gun Masters", img: "https://img.itch.zone/aW1nLzE2MzkxMjMyLnBuZw==/315x250%23c/RMT%2F3p.png" },
        { name: "Block Puzzle", img: "https://img.itch.zone/aW1nLzE2MzkxMTQ2LnBuZw==/315x250%23c/LtX%2Blo.png" },
        { name: "Sandy", img: "https://img.itch.zone/aW1nLzE2MzkwOTY1LnBuZw==/315x250%23c/EcjGCe.png" },
        { name: "Zig Zag Game", img: "https://img.itch.zone/aW1nLzE2MzkxMDU5LnBuZw==/315x250%23c/7izaEz.png" },
        { name: "Stack Game", img: "https://img.itch.zone/aW1nLzE2MzkxMDkxLnBuZw==/315x250%23c/GwGbPB.png" },
        { name: "Circle Game", img: "https://img.itch.zone/aW1nLzE2MzkwOTA3LnBuZw==/315x250%23c/viFa0o.png" },
        { name: "Endless Tunnel", img: "https://img.itch.zone/aW1nLzE2MzkwOTQ1LnBuZw==/315x250%23c/haJX4C.png" },
        { name: "Ball Blast", img: "https://img.itch.zone/aW1nLzE2MzkwODEzLnBuZw==/315x250%23c/547c%2FR.png" },
        { name: "Mr. Fox", img: "https://img.itch.zone/aW1nLzE0NDI4OTExLmpwZw==/315x250%23c/F32%2BLq.jpg" },
        { name: "Skyline Showdown", img: "https://img.itch.zone/aW1nLzE0MTgzNDE5LmpwZw==/315x250%23c/9LF1l0.jpg" },
    ];

    const webProjects = [
        { name: "Code Collab", img: "/collaboration.png", desc: "Real-time collaborative coding platform with realtime code updates and shared room system." },
        { name: "Notes To Mindmap", img: "/mindmap.png", desc: "Converts your notes into interactive precisely summarised generated mind maps." },
        { name: "Quyz", img: "/quiz.png", desc: "Create, share, and attempt quizzes online with unlimited retrials, also can generate quizzes with AI" },
        { name: "Mr. Meet", img: "/chat.png", desc: "Anonymous chat platform connecting users randomly" }
    ];

    return (
        <div className='flex flex-col my-6'>
            <h2 className="text-xl font-normal text-muted w-full text-center mb-4">Projects</h2>

            <h2 className="font-semibold text-2xl bg-background-muted-dark px-4 py-2 rounded text-muted w-full mx-2">Games</h2>
            <div className='w-full h-max my-3 grid grid-cols-2 gap-2 p-2 xxs:grid-cols-3 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
                {games.map((game, i) => <ProjectCard key={i} {...game} isWeb={false} />)}
            </div>

            <h2 className="font-semibold text-2xl bg-background-muted-dark px-4 py-2 rounded text-muted w-full mx-2 mt-6">Web Projects</h2>
            <div className='w-full h-max my-3 grid grid-cols-2 gap-2 p-2 xxs:grid-cols-3 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
                {webProjects.map((proj, i) => <ProjectCard key={i} {...proj} isWeb={true} />)}
            </div>
        </div>
    );
}

function ProjectCard({ name, img, desc, isWeb })
{
    return (
        <div className={`rounded cursor-pointer flex bg-background-muted-dark group justify-start items-start flex-col overflow-hidden
                        ${isWeb ? "aspect-auto" : "aspect-square"}`}>
            <img src={img} alt={name} className={`w-full ${isWeb ? 'object-contain' : 'object-cover'} transition-transform duration-300 ${!isWeb ? "flex-1 group-hover:scale-110" : "max-h-40 group-hover:scale-105"}`} loading="lazy"/>
            <div className="w-full bg-background-muted-dark z-10 p-2 flex flex-col text-muted text-center">
                <h2 className="text-md font-semibold">{name}</h2>
                {isWeb && <p className="text-sm mt-1">{desc}</p>}
            </div>
        </div>
    );
}