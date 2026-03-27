import { FadeInSection } from "@/components/shared/FadeInSection";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <FadeInSection>
        <SectionHeading
          title="Projects"
          subtitle="A selection of things I've built. Click the links to explore the code or see it live."
        />
      </FadeInSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {projects.map((project, i) => (
          <FadeInSection key={project.slug} delay={i * 0.1}>
            <ProjectCard project={project} />
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
