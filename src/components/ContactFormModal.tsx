import emailjs from "@emailjs/browser";
import { LoaderCircle, Send, X } from "lucide-react";
import { useState } from "react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  company: string;
  message: string;
}

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  company: "",
  message: "",
};

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailNotificationTemplateId = import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID;
const emailAutoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [statusKind, setStatusKind] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen) {
    return null;
  }

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    setStatusKind("idle");

    try {
      if (!emailServiceId || !emailNotificationTemplateId || !emailAutoReplyTemplateId || !emailPublicKey) {
        throw new Error("Email service is not configured yet. Add your EmailJS values in .env.");
      }

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        company: form.company || "Not provided",
        message: form.message,
        reply_to: form.email,
      };

      // Send notification email to portfolio owner
      await emailjs.send(
        emailServiceId,
        emailNotificationTemplateId,
        templateParams,
        {
          publicKey: emailPublicKey,
        },
      );

      // Send auto-reply confirmation email to visitor
      await emailjs.send(
        emailServiceId,
        emailAutoReplyTemplateId,
        templateParams,
        {
          publicKey: emailPublicKey,
        },
      );

      setStatusKind("success");
      setStatus("Thank you! Your message has been sent successfully.");
      setForm(initialFormState);
      
      // Close modal after successful send
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      setStatusKind("error");
      setStatus(error instanceof Error ? error.message : "Sorry, something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 py-8 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950 p-6 text-white shadow-2xl md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Start a Conversation
            </p>
            <h3 className="mt-3 text-2xl font-black md:text-3xl">
              Send your message directly from the portfolio
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
              Share your name, email, subject, and message. The form sends through your configured client-side email service.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200"
            aria-label="Close contact form"
          >
            <X size={18} />
          </button>
        </div>

        <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-200">Your Name</span>
              <input
                required
                value={form.name}
                onChange={(event) => handleChange("name", event.target.value)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                placeholder="Enter your full name"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-200">Your Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => handleChange("email", event.target.value)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                placeholder="name@example.com"
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-200">Subject</span>
              <input
                required
                value={form.subject}
                onChange={(event) => handleChange("subject", event.target.value)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                placeholder="Job opportunity / project inquiry"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-200">Company or Team</span>
              <input
                value={form.company}
                onChange={(event) => handleChange("company", event.target.value)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                placeholder="Optional"
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-slate-200">Message</span>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(event) => handleChange("message", event.target.value)}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
              placeholder="Tell me about the role, project, or idea you want to discuss."
            />
          </label>

          {status && (
            <p className={statusKind === "error" ? "text-sm text-rose-300" : "text-sm text-emerald-300"}>
              {status}
            </p>
          )}

          <div className="flex flex-wrap justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? <LoaderCircle size={18} className="animate-spin" /> : <Send size={18} />}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}