import { Mail, MapPin, Phone } from "lucide-react";
import profile from "../data/profile.json";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-950 px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="10 Contact"
          title="Let’s connect"
          description="Thank you for reviewing my professional portfolio. I am open to opportunities in software engineering, full-stack development, AI-integrated applications, and enterprise software development."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <a href={`mailto:${profile.email}`} className="rounded-2xl bg-white/10 p-6 hover:bg-white/15">
            <Mail className="text-blue-300" />
            <h3 className="mt-4 font-bold">Email</h3>
            <p className="mt-2 text-slate-300">{profile.email}</p>
          </a>

          <a href={`tel:${profile.phone}`} className="rounded-2xl bg-white/10 p-6 hover:bg-white/15">
            <Phone className="text-blue-300" />
            <h3 className="mt-4 font-bold">Phone</h3>
            <p className="mt-2 text-slate-300">{profile.phone}</p>
          </a>

          <div className="rounded-2xl bg-white/10 p-6">
            <MapPin className="text-blue-300" />
            <h3 className="mt-4 font-bold">Location</h3>
            <p className="mt-2 text-slate-300">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}