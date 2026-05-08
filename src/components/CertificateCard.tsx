import type { Certificate } from "../types/portfolio";
import AttachmentButton from "./AttachmentButton";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const rawLegacySkills = (certificate as Certificate & { skillImproved?: string | string[] }).skillImproved;

  const legacySkills = Array.isArray(rawLegacySkills)
    ? rawLegacySkills
    : typeof rawLegacySkills === "string"
      ? rawLegacySkills.split(",")
      : [];

  const normalizedSkills = Array.isArray(certificate.skillsImproved) && certificate.skillsImproved.length > 0
    ? certificate.skillsImproved
    : legacySkills.map((skill: string) => skill.trim()).filter(Boolean);

  const normalizedAttachments = Array.isArray(certificate.attachments)
    ? certificate.attachments
    : [];

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            {certificate.issuer} • {certificate.year}
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            {certificate.title}
          </h3>

          <div className="mt-4">
            <p className="text-sm font-semibold text-slate-700">
              Skills improved:
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {normalizedSkills.map((skill: string) => (
                <span
                  key={skill}
                  className="cursor-default rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-4 text-slate-700">
            {certificate.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {certificate.credentialUrl && (
              <AttachmentButton
                attachment={{
                  label: "View Credential",
                  type: "certificate",
                  url: certificate.credentialUrl
                }}
              />
            )}

            {normalizedAttachments.map((attachment) => (
              <AttachmentButton
                key={attachment.label}
                attachment={attachment}
              />
            ))}
          </div>
        </div>

        {/* {certificate.imageUrl && (
          <img
            src={certificate.imageUrl}
            alt={`${certificate.title} certificate`}
            className="h-36 w-full rounded-xl object-cover md:w-56"
          />
        )} */}
      </div>
    </article>
  );
}