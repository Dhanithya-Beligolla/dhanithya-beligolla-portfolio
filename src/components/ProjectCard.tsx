import type { Project } from "../types/portfolio";
import AttachmentButton from "./AttachmentButton";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm font-semibold text-blue-600">
        {project.type} • {project.organization}
      </p>

      <h3 className="mt-2 text-xl font-bold text-slate-900">
        {project.title}
      </h3>

      <p className="mt-1 text-sm font-medium text-slate-600">
        Role: {project.role}
      </p>

      <p className="mt-4 text-slate-700">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.attachments.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {project.attachments.map((attachment) => (
            <AttachmentButton
              key={attachment.label}
              attachment={attachment}
            />
          ))}
        </div>
      )}
    </article>
  );
}