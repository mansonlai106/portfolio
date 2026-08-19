export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3EE] px-6 text-[#302A26]">
      <div className="absolute -left-20 top-16 h-48 w-48 rounded-full bg-[#DDE7D8]/60 blur-3xl" />
      <div className="absolute -right-16 bottom-8 h-52 w-52 rounded-full bg-[#EAD9C9]/60 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl items-center py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#71806D]">
            Welcome to my little corner
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Hi, I&apos;m Manson.
            <span className="mt-1 block font-serif font-normal italic text-[#A96948]">
              Nice to meet you.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#756C64] sm:text-base">
            I enjoy turning everyday ideas into useful digital products,
            from web applications and LINE Bots to better workflows.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-[#302A26] px-5 py-2.5 text-center text-sm font-medium text-[#FFFDF9] transition hover:bg-[#4A4039]"
            >
              View projects
            </a>

            <a
              href="https://github.com/mansonlai106"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#CEC3B8] bg-white/40 px-5 py-2.5 text-center text-sm font-medium transition hover:bg-[#FFFDF9]"
            >
              GitHub
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#887E75]">
            <span>Next.js</span>
            <span>JavaScript</span>
            <span>SQL</span>
            <span>AI & Automation</span>
          </div>
        </div>
      </div>
    </section>
  );
}