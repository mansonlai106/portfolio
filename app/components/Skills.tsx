const skillGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Development",
    skills: ["JavaScript", "SQL", "Git", "GitHub"],
  },
  {
    title: "Automation",
    skills: ["n8n", "Docker", "LINE Messaging API"],
  },
  {
    title: "AI",
    skills: ["Ollama", "Qwen", "Local AI"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#F7F3EE] px-6 py-16 text-[#302A26] sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#71806D]">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools I use to
            <span className="block font-serif italic text-[#A96948]">
              build and automate.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-[#756C64]">
            A growing toolkit for web development, workflow automation,
            data processing, and local AI experiments.
          </p>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border-t border-[#DDD4CB] pt-5"
            >
              <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#71806D]">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#DDD4CB] bg-[#FFFDF9] px-3 py-1.5 text-sm text-[#665E57]"
                  >
                    {skill}
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