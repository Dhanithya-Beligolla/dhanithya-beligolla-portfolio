import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="01 About Me"
          title="Building practical software with enterprise and research focus"
          description="I combine academic research, full-stack development, and real banking sector experience to build secure, scalable, and intelligent software solutions."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-slate-900">Academic Background</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Final-year BSc (Hons) Information Technology undergraduate at Sri Lanka Institute of Information Technology, specializing in software development and emerging technologies.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-slate-900">Professional Experience</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Trainee Software Engineer at DFCC Bank PLC R&D IT, contributing to workflow automation, CRM, complaint management, credit card workflow, chatbot solutions, and enterprise integrations.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-slate-900">Research Focus</h3>
            <p className="mt-3 leading-7 text-slate-600">
              My main research project focuses on an Adaptive AI Productivity Assistant for Developers in VS Code, with my contribution centered on Intelligent TODO Tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}