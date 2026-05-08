import { ArrowRight, BriefcaseBusiness, Download, FolderGit2 } from "lucide-react";
import profile from "../data/profile.json";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 px-5 pb-20 pt-32 text-white md:pt-40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_left,#06b6d455,transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Professional Portfolio
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Hi, I’m <span className="text-blue-400">{profile.name}</span>
          </h1>

          <p className="mt-5 text-xl font-semibold text-slate-200">
            {profile.title}
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
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

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-500/20 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
              {profile.profileImageUrl ? (
                <img
                  src={profile.profileImageUrl}
                  alt={`${profile.name} profile`}
                  className="h-80 w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-80 items-center justify-center bg-slate-800 text-center text-slate-400">
                  Add your profile image URL in profile.json
                </div>
              )}

              <div className="p-6">
                <p className="text-sm font-semibold text-blue-300">
                  Main Focus
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  AI-powered Developer Productivity Research
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  Featured research project: Adaptive AI Productivity Assistant for
                  Developers in VS Code, with Intelligent TODO Tracker as my main
                  contribution.
                </p>

                <div className="mt-6 grid gap-3 text-sm">
                  <div className="rounded-xl bg-white/5 p-4">
                    Full-Stack Development
                  </div>
                  <div className="rounded-xl bg-white/5 p-4">
                    Enterprise Banking Systems
                  </div>
                  <div className="rounded-xl bg-white/5 p-4">
                    AI/ML and NLP
                  </div>
                  <div className="rounded-xl bg-white/5 p-4">
                    VS Code Extension Development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}