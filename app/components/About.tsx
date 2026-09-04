export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FFFDF9] px-6 py-16 text-[#302A26] sm:py-20"
    >
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#71806D]">
            About me
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A little more
            <span className="block font-serif italic text-[#A96948]">
              about my path.
            </span>
          </h2>
        </div>

        <div className="space-y-5 text-[15px] leading-7 text-[#756C64] sm:text-base">
          <p>
            I&apos;m currently working as a BPM developer, focusing on workflow
            development, form logic, automation, and SQL-based data processing.
          </p>

          <p>
            Along the way, I&apos;ve become increasingly interested in AI,
            automation, and building practical tools that make everyday work
            simpler and more efficient.
          </p>

          <p>
            Outside of work, I enjoy experimenting with side projects using
            technologies like Next.js, n8n, Docker, and local AI models. I like
            learning by building things that solve real problems.
          </p>
        </div>
      </div>
    </section>
  );
}