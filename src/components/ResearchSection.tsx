import { ExternalLink } from "lucide-react";
import research from "../data/research.json";
import type { Attachment } from "../types/portfolio";
import AttachmentButton from "./AttachmentButton";
import SectionTitle from "./SectionTitle";

export default function ResearchSection() {
  return (
    <section id="research" className="bg-slate-50 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="02 Featured Research Project"
          title={research.title}
          description="This is the main highlighted project in my portfolio because it combines AI/ML, developer productivity, VS Code extension development, research thinking, and full-stack implementation."
        />

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                {research.category} • {research.projectId}
              </p>

              <h3 className="mt-4 text-2xl font-bold text-slate-950">
                My Contribution: {research.mainContribution}
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                {research.description}
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                {research.myContribution}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {(research.attachments as Attachment[]).map((attachment) => (
                  <AttachmentButton key={attachment.label} attachment={attachment} />
                ))}

                {research.websiteUrl && (
                  <a
                    href={research.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                  >
                    Visit Research Website <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900">Key Features</h4>
              <div className="mt-4 grid gap-3">
                {research.features.map((feature) => (
                  <div key={feature} className="rounded-xl bg-slate-100 p-4 text-sm font-medium text-slate-700">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-bold text-slate-900">Technologies Used</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {research.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}