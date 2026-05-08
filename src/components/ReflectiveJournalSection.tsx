import journals from "../data/reflectiveJournals.json";
import SectionTitle from "./SectionTitle";

export default function ReflectiveJournalSection() {
  return (
    <section id="reflection" className="bg-slate-50 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="06 PPW Reflective Journal"
          title="My learning journey in Preparation for Professional World"
          description="This section reflects what I learned through PPW and how those lessons improved my professional readiness."
        />

        <div className="grid gap-6">
          {journals.map((journal, index) => (
            <article key={journal.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-blue-600">
                Reflection {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">{journal.title}</h3>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <h4 className="font-bold text-slate-900">What I Learned</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{journal.whatILearned}</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <h4 className="font-bold text-slate-900">How It Changed Me</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{journal.howItChangedMe}</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <h4 className="font-bold text-slate-900">How I Will Apply It</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{journal.howIWillApply}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}