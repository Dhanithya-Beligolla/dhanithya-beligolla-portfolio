import experience from "../data/experience.json";
import SectionTitle from "./SectionTitle";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="03 Professional Experience"
          title="Enterprise software development experience"
          description="My professional work has focused on real-world banking technology, workflow automation, secure systems, database design, and AI-supported solutions."
        />

        <div className="grid gap-6">
          {experience.map((item) => (
            <article key={`${item.role}-${item.period}`} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950">{item.role}</h3>
                  <p className="mt-1 font-semibold text-blue-600">
                    {item.company} — {item.department}
                  </p>
                </div>
                <p className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  {item.period}
                </p>
              </div>

              <p className="mt-4 leading-7 text-slate-700">{item.summary}</p>

              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}