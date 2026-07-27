const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Shopping Website",
    description: "An online shopping website.",
    tech: ["React", "Node.js", "MySQL"],
  },
  {
    title: "LINE Bot",
    description: "Expense tracking LINE Bot.",
    tech: ["LINE Bot", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
          Featured Work
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Projects
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-purple-500/15 px-3 py-1 text-sm text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}