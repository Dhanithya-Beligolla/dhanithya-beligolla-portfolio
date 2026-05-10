import { ArrowRight, BriefcaseBusiness, Download, FolderGit2 } from "lucide-react";
import profile from "../data/profile.json";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 px-5 pb-20 pt-32 text-white md:pt-40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_left,#06b6d455,transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* ── Left: identity block ── */}
        <div className="order-2 md:order-1">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-300">
            Professional Portfolio
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-200">
            {profile.title}
          </p>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
            >
              View Research Project <ArrowRight size={18} />
            </a>

            <a
              href={profile.researchWebsite}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-blue-400 hover:text-blue-300"
            >
              Research Website
            </a>

            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-blue-400 hover:text-blue-300"
            >
              <Download size={18} /> Download CV
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-blue-400"
            >
              <FolderGit2 size={26} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-blue-400"
            >
              <BriefcaseBusiness size={26} />
            </a>
          </div>
        </div>

        {/* ── Right: profile image ── */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative">
            {/* outer ambient glow */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 blur-3xl" />

            {/* spinning dashed ring */}
            <div className="absolute -inset-3 animate-[spin_18s_linear_infinite] rounded-full border-2 border-dashed border-cyan-400/30" />

            {/* solid gradient ring */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-80 blur-[2px]" />

            {/* photo */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-slate-950 md:h-80 md:w-80">
              {profile.profileImageUrl ? (
                <img
                  src={profile.profileImageUrl}
                  alt={profile.name}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-800 text-6xl font-black text-blue-400">
                  {profile.name.charAt(0)}
                </div>
              )}
            </div>

            {/* available badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-emerald-400 shadow-xl backdrop-blur-sm whitespace-nowrap">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for opportunities
            </div>

            {/* floating skill chip — top right */}
            <div className="absolute -right-4 top-8 rounded-2xl border border-white/10 bg-slate-900/90 px-3 py-2 text-xs font-semibold text-cyan-300 shadow-xl backdrop-blur-sm">
              Full-Stack Dev
            </div>

            {/* floating skill chip — top left */}
            <div className="absolute -left-4 top-16 rounded-2xl border border-white/10 bg-slate-900/90 px-3 py-2 text-xs font-semibold text-blue-300 shadow-xl backdrop-blur-sm">
              AI / ML
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
