export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#FFFDF9] px-6 py-16 text-[#302A26] sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#71806D]">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s
            <span className="block font-serif italic text-[#A96948]">
              get in touch.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-[#756C64]">
            Feel free to reach out if you&apos;d like to talk about projects,
            automation, web development, or anything I&apos;m currently
            building.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/mansonlai106"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#302A26] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#443A34]"
            >
              GitHub
            </a>

            <a
              href="mailto:your-email@example.com"
              className="rounded-full border border-[#CEC3B8] bg-white/40 px-5 py-2.5 text-sm font-medium transition hover:bg-[#FFFDF9]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}