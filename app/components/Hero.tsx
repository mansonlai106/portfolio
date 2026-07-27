export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 text-center text-white">
      <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6">
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">
          Welcome to my portfolio
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Hi, I&apos;m Manson. Nice to meet you.
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
          BPM Developer building practical web, SQL, and AI projects.
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition duration-300 hover:scale-105 hover:bg-zinc-200"
          >
            View Projects
          </a>

          <a
            href="https://github.com/mansonlai106"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition duration-300 hover:scale-105 hover:border-zinc-400 hover:bg-white/5"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}