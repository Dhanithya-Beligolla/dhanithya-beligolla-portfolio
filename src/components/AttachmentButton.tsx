import { ExternalLink } from "lucide-react";
import type { Attachment } from "../types/portfolio";

interface AttachmentButtonProps {
  attachment: Attachment;
}

export default function AttachmentButton({ attachment }: AttachmentButtonProps) {
  return (
    <a
      href={attachment.url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
    >
      {attachment.label}
      <ExternalLink size={16} />
    </a>
  );
}