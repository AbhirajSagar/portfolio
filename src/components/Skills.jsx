export default function Skills()
{
    const gameDevSkills = [
        "Gameplay Programming",
        "Game Mechanics & Systems",
        "DOTween Animations",
        "Basic 3D Modelling",
        "Animation Integration",
        "Optimization",
        "UI Systems & Implementations",
        "Netcode for Gameobjects (Multiplayer Games)",
        "Level Design",
        "Project Planning & Management",
        "Game Testing & Debugging",
        "Scripting & Tools Development",
        "Custom Editor Extensions & Tools",
        "Feedback & Polish",
    ];

    const webDevSkills = [
        "Responsive Web Design",
        "API Integration",
        "Database Design & Queries",
        "Version Control (Git)",
        "Front-End Development",
        "UI Design",
    ];

    return (
        <div className="w-full p-6 rounded-xl flex flex-col gap-8">
            <h2 className="text-xl mb-2 font-normal text-muted w-full text-center">Skills</h2>

            <div>
                <h2 className="text-2xl font-extrabold text-muted mb-4">Game Development Skills</h2>
                <div className="flex flex-wrap gap-4">
                    {gameDevSkills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-background-muted-dark cursor-pointer text-muted hover:text-background-dark px-4 py-2 rounded-full font-medium text-sm hover:bg-amber-500 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-extrabold text-muted mb-4">Web Development Skills</h2>
                <div className="flex flex-wrap gap-4">
                    {webDevSkills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-background-muted-dark cursor-pointer text-muted hover:text-background-dark px-4 py-2 rounded-full font-medium text-sm hover:bg-amber-500 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
