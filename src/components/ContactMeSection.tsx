import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal";
import profile from "../data/profile.json";
import SectionTitle from "./SectionTitle";

export default function ContactMeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 px-5 py-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0f766e33,transparent_28%),radial-gradient(circle_at_bottom_right,#2563eb44,transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          label="10 Contact Me"
          title="Let’s build something memorable"
          description="I am open to graduate roles, internships, product engineering opportunities, and collaborations across full-stack and AI-integrated software development."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
              Contact Card
            </p>

            <h3 className="mt-4 max-w-2xl text-3xl font-black leading-tight md:text-5xl">
              Have a role, project, or idea that needs thoughtful engineering?
            </h3>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Reach out if you are hiring, building a product, or looking for someone who can contribute across enterprise systems, modern web development, and practical AI features.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Start a Conversation <ArrowRight size={20} />
              </button>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-300/50 hover:bg-slate-900"
              >
                <Mail className="text-cyan-300" size={20} />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Email
                </p>
                <p className="mt-2 break-all text-sm text-slate-200">{profile.email}</p>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-300/50 hover:bg-slate-900"
              >
                <Phone className="text-cyan-300" size={20} />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Phone
                </p>
                <p className="mt-2 text-sm text-slate-200">{profile.phone}</p>
              </a>

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <MapPin className="text-cyan-300" size={20} />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Location
                </p>
                <p className="mt-2 text-sm text-slate-200">{profile.location}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/12 via-slate-900/80 to-blue-900/40 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Best Fit
              </p>
              <ul className="mt-5 space-y-3 text-slate-200">
                <li>Full-stack web applications and business platforms</li>
                <li>Enterprise workflow systems and internal tools</li>
                <li>AI-assisted developer or productivity products</li>
                <li>Graduate software engineering and trainee roles</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Response Promise
              </p>
              <p className="mt-4 leading-8 text-slate-300">
                I aim to respond clearly and quickly to professional inquiries, project discussions, and collaboration requests. Email is the best first channel for detailed conversations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}