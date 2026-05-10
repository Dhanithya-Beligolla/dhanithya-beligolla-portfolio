import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ResearchSection from "../components/ResearchSection";
import ExperienceJourney from "../components/ExperienceJourney";
import SkillsSection from "../components/SkillsSection";
import ReflectiveJournalSection from "../components/ReflectiveJournalSection";
import CareerPlanSection from "../components/CareerPlanSection";
import CVSection from "../components/CVSection";
import ContactMeSection from "../components/ContactMeSection";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import CertificateCard from "../components/CertificateCard";
import EditableDataPanel from "../components/EditableDataPanel";
import SectionTitle from "../components/SectionTitle";
import { useEditableCollection } from "../hooks/useEditableCollection";
import defaultProjects from "../data/projects.json";
import defaultCertificates from "../data/certificates.json";
import type { Certificate, Project } from "../types/portfolio";

export default function PortfolioPage() {
  const [showEditor] = useState(false);

  const {
    items: projects,
    saveItems: saveProjects,
    resetItems: resetProjects
  } = useEditableCollection<Project>("portfolio-projects", defaultProjects as Project[]);

  const {
    items: certificates,
    saveItems: saveCertificates,
    resetItems: resetCertificates
  } = useEditableCollection<Certificate>("portfolio-certificates", defaultCertificates as Certificate[]);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ResearchSection />
      <ExperienceJourney />

      <section id="projects" className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="04 Projects"
            title="Professional, academic, and AI/ML projects"
            description="These projects demonstrate my practical experience in enterprise systems, microservices, developer tools, and AI/ML."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />
      <ReflectiveJournalSection />
      <CareerPlanSection />
      <CVSection />

      <section id="certificates" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="09 Certificate Evidence"
            title="Continuous learning and skill development"
            description="This section includes certificates obtained through online or physical courses completed recently to improve technical and professional skills."
          />

          <div className="grid gap-6">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      </section>

      <section className="no-print bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-7xl">
          {/* <button
            type="button"
            onClick={() => setShowEditor((value) => !value)}
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {showEditor ? "Hide Data Editor" : "Show Data Editor"}
          </button> */}

          {showEditor && (
            <div className="mt-6 grid gap-6">
              <EditableDataPanel<Project>
                title="Edit Projects JSON"
                storageKey="portfolio-projects"
                data={projects}
                onSave={saveProjects}
                onReset={resetProjects}
              />

              <EditableDataPanel<Certificate>
                title="Edit Certificates JSON"
                storageKey="portfolio-certificates"
                data={certificates}
                onSave={saveCertificates}
                onReset={resetCertificates}
              />
            </div>
          )}
        </div>
      </section>

      <ContactMeSection />
      <Footer />
    </div>
  );
}