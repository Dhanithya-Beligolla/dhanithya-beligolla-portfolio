import skills from "../data/skills.json";
import SectionTitle from "./SectionTitle";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="05 Skills"
          title="Technical and professional capabilities"
          description="My skill set covers full-stack development, enterprise database systems, AI/ML, Microsoft Power Platform, cloud tools, and professional workplace communication."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skills.technical.map((group) => (
            <div key={group.category} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-900">Professional Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.professional.map((skill) => (
              <span key={skill} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}