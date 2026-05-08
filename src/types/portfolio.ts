export type AttachmentType =
  | "pdf"
  | "certificate"
  | "github"
  | "website"
  | "video"
  | "document"
  | "image";

export interface Attachment {
  label: string;
  type: AttachmentType;
  url: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  skillsImproved: string[];
  description: string;
  credentialUrl?: string;
  imageUrl?: string;
  attachments: Attachment[];
}

export interface Project {
  id: string;
  title: string;
  type: string;
  role: string;
  organization: string;
  description: string;
  technologies: string[];
  attachments: Attachment[];
}