export default function Footer() {
  return (
    <footer className="bg-[#302A26] px-6 py-6 text-[#FFFDF9]">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Manson</p>

        <p className="text-[#CFC6BE]">
          Built with Next.js, TypeScript and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}