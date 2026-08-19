export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7F3EE] px-6 text-[#302A26]">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#DDE7D8]/70 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-[#EAD9C9]/70 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#71806D]">
            Welcome to my little corner
          </p>

          <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            Hi, I&apos;m Manson.
            <span className="mt-2 block font-serif font-normal italic text-[#A96948]">
              Nice to meet you.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#756C64] sm:text-xl">
            I enjoy turning everyday ideas into useful digital products,
            from web applications and LINE Bots to better workflows.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-[#302A26] px-7 py-3.5 text-center font-medium text-[#FFFDF9] transition duration-300 hover:-translate-y-1 hover:bg-[#4A4039]"
            >
              View projects
            </a>

            <a
              href="https://github.com/mansonlai106"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#CEC3B8] bg-white/40 px-7 py-3.5 text-center font-medium transition duration-300 hover:-translate-y-1 hover:bg-[#FFFDF9]"
            >
              GitHub
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#887E75]">
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