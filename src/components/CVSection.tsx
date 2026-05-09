import { Download } from "lucide-react";
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

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-8 text-slate-700">
              Download my complete curriculum vitae to learn more about my professional journey, technical expertise, and academic achievements.
            </p>

            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500"
            >
              <Download size={20} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}