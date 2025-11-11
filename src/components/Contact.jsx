'use client'

export default function Contact() {
    return (
        <section className="w-full flex flex-col gap-8">
            <h2 className="text-xl font-normal text-muted w-full text-center">Contact Me</h2>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-start">

                <div className="border-l-4 border-amber-400 p-6 h-48 bg-background-muted-dark max-w-md w-full">
                    <h3 className="text-lg font-semibold text-muted mb-2">Get in Touch</h3>
                    <p className="text-sm text-muted mb-6">
                        I’m always open to discussing new projects, collaborations, or opportunities. You can reach me via email or connect on socials.
                    </p>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=abhirajsagar99@gmail.com&su=Hello&body=Hi%20Abhi,"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amber-400 text-background-dark font-semibold py-2 px-4 rounded hover:bg-amber-500 transition inline-block"
                    >
                        Email Me
                    </a>

                </div>

                <div className="border-l-4 border-amber-400 h-48 p-6 bg-background-muted-dark max-w-md w-full">
                    <h3 className="text-lg font-semibold text-muted mb-2">Download My CV</h3>
                    <p className="text-sm text-muted mb-6">
                        Get a copy of my resume to see my skills, experience, and projects.
                    </p>
                    <a
                        href="/abhiraj-cv.pdf"
                        download
                        className="bg-amber-400 text-background-dark font-semibold py-2 px-4 rounded hover:bg-amber-500 transition"
                    >
                        Download CV
                    </a>
                </div>

            </div>
        </section>
    );
}
