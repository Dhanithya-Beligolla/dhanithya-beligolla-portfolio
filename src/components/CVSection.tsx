import { BriefcaseBusiness, Download, FolderGit2 } from "lucide-react";
import profile from "../data/profile.json";
import SectionTitle from "./SectionTitle";

export default function CVSection() {
  return (
    <section id="cv" className="bg-slate-50 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="08 Curriculum Vitae"
          title="Professional CV"
          description="My CV summarizes my academic background, work experience, technical skills, certificates, and project contributions."
        />

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            {profile.profileImageUrl && (
        <img
            src={profile.profileImageUrl}
            alt={`${profile.name} profile`}
            className="mb-6 h-28 w-28 rounded-full border-4 border-blue-100 object-cover"
        />
        )}
                <h3 className="text-2xl font-bold text-slate-950">{profile.name}</h3>
          <p className="mt-2 font-semibold text-blue-600">{profile.title}</p>
          <p className="mt-4 max-w-4xl leading-8 text-slate-700">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
            >
              <Download size={18} /> Download CV
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-600"
            >
              <FolderGit2 size={18} /> GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-600"
            >
              <BriefcaseBusiness size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}