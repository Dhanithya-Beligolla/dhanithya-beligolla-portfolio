import {
  BriefcaseBusiness,
  ExternalLink,
  FolderGit2,
} from "lucide-react";
import profile from "../data/profile.json";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Career Plan", href: "#career" },
  { label: "CV", href: "#cv" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const resourceLinks = [
  { label: "GitHub", href: profile.github, icon: FolderGit2 },
  { label: "LinkedIn", href: profile.linkedin, icon: BriefcaseBusiness },
  { label: "Research Website", href: profile.researchWebsite, icon: ExternalLink },
  { label: "Download CV", href: profile.cvUrl, icon: ExternalLink },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-5 pb-10 pt-14 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#155e7524,transparent_25%),radial-gradient(circle_at_bottom_left,#0f172a,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
              {profile.name}
            </p>
            <h3 className="mt-4 text-2xl font-black leading-tight">
              Designing useful software with a builder's mindset.
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              This portfolio highlights my work across enterprise software, full-stack engineering, developer productivity research, and AI-integrated application development.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Quick Links
            </p>
            <nav className="mt-6 grid gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-cyan-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Resources
            </p>
            <div className="mt-6 grid gap-3">
              {resourceLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-transparent bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Availability
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Open to graduate opportunities, internships, collaborations, and project discussions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
