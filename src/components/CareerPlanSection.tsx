import careerPlan from "../data/careerPlan.json";
import SectionTitle from "./SectionTitle";

export default function CareerPlanSection() {
  return (
    <section id="career" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="07 Career Development Plan"
          title="From undergraduate to AI-integrated full-stack software engineer"
          description="My career goal is to become a Full-Stack Software Engineer specializing in enterprise applications, AI-integrated systems, and developer productivity tools."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {careerPlan.map((plan) => (
            <article key={plan.period} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                {plan.timeline}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">{plan.period}</h3>

              <ul className="mt-5 space-y-3">
                {plan.goals.map((goal) => (
                  <li key={goal} className="text-sm leading-6 text-slate-700">
                    • {goal}
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