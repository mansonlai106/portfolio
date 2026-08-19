import Image from "next/image";

const project = {
  title: "LINE Expense Bot",
  category: "Featured Project",
  description:
    "A self-hosted LINE expense tracking bot that uses local AI to understand natural-language entries, categorize spending, store records in Google Sheets, and generate weekly summaries.",
  tech: [
    "n8n",
    "Docker",
    "Ollama",
    "Qwen",
    "LINE API",
    "Google Sheets",
  ],
  href: "https://github.com/mansonlai106/line-expense-bot-n8n",
  image: "/projects/line-expense-bot.png",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F7F3EE] px-6 py-16 text-[#302A26] sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#71806D]">
            Selected work
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Things I&apos;ve been
            <span className="block font-serif italic text-[#A96948]">
              working on.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-[#756C64]">
            A collection of digital projects inspired by everyday ideas,
            practical needs, and things I wanted to learn.
          </p>
        </div>

        <article className="mt-10 overflow-hidden rounded-[1.75rem] border border-[#E5DDD4] bg-[#FFFDF9] shadow-[0_12px_36px_rgba(70,55,45,0.05)]">
          <div className="grid md:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[#D9E3E8] p-4 sm:p-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/60 bg-white/30">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-9">
              <div className="flex items-center gap-2.5">
                <span className="font-serif text-xs italic text-[#A96948]">
                  01
                </span>

                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#71806D]">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.title}
              </h3>

              <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#756C64]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#DCE4D8] bg-[#F0F4ED] px-3 py-1 text-xs text-[#61705E]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#302A26] px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#443A34]"
                >
                  View project
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}