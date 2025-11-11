export default function Experience()
{
    return (
        <section className="w-full flex flex-col gap-8">
            <div>
                <h2 className="text-xl mb-4 font-normal text-muted w-full text-center">Work Experience</h2>

                <div className="flex flex-col gap-6">

                    <div className="border-l-4 border-amber-400 p-4 bg-background-muted-dark bg-background-muted-dark-400">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg text-muted font-semibold">Frolic Frog Studios</h3>
                            <span className="text-sm text-muted">Feb 2025 - Current</span>
                        </div>
                        <p className="text-sm text-muted">Unity Game Developer</p>
                        <p className="text-sm text-muted mt-2">
                            Worked as a Unity Game Developer, managing all gameplay programming, systems, and integration,
                            while collaborating with artists who handled models and visuals.
                        </p>
                    </div>

                    <div className="border-l-4 border-amber-400 p-4  bg-background-muted-dark ">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg text-muted font-semibold">Innovmeta</h3>
                            <span className="text-sm text-muted">Aug 2024 - May 2025</span>
                        </div>
                        <p className="text-sm text-muted">Game & Full Stack Developer</p>
                        <p className="text-sm text-muted mt-2">
                            Worked as a Unity Game Developer and Full-Stack Developer, handling gameplay programming, level
                            design, UI, and audio integration. Additionally built and integrated backend systems for the game and
                            developed a web-based admin platform for the company internal use.
                        </p>
                    </div>

                    <div className="border-l-4 border-amber-400 p-4 bg-background-muted-dark ">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-muted">Fitcraft</h3>
                            <span className="text-sm text-muted">April - Nov 2024</span>
                        </div>
                        <p className="text-sm text-muted">Unity Game Developer Intern</p>
                        <p className="text-sm text-muted mt-2">
                            Developed the hybrid-casual puzzle game <b>Town Contracts</b> for Fitcraft, handling all aspects of
                            development including gameplay, visuals, and audio integration except UI design.
                        </p>
                        <ul className="list-disc list-inside text-sm mt-2 text-muted">
                            <li>C# Scripting</li>
                            <li>Editor Tools</li>
                            <li>Gameplay Systems & Mechanics</li>
                            <li>Level Design & Game Logic</li>
                            <li>UI/UX & Audio Integration</li>
                            <li>Backend Development</li>
                            <li>DOTween, Physics, and Optimization</li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-amber-400 p-4  bg-background-muted-dark ">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-muted">Troak</h3>
                            <span className="text-sm text-muted">Feb - June 2024</span>
                        </div>
                        <p className="text-sm text-muted">Unity Game Developer Intern</p>
                        <p className="text-sm text-muted mt-2">
                            Developed complete hyper-casual games end-to-end at Troak, handling gameplay, visuals, UI, and UX.
                        </p>
                    </div>

                </div>
            </div>

            <div>
                <h2 className="text-xl font-normal text-muted mb-4 w-full text-center">Education</h2>
                <div className="border-l-4 border-amber-400 bg-background-muted-dark p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-muted">RBMI Group of Institutions</h3>
                        <span className="text-sm text-muted">Sep 2024 - Current</span>
                    </div>
                    <p className="text-sm mt-2 text-muted">BCA, Currently in 2nd Year (Expected graduation: 2027)</p>
                </div>
            </div>

        </section>
    );
}