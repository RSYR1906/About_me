import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInSection>
          <SectionHeading
            title="Experience"
            subtitle="My journey so far — from university to enterprise systems."
          />
        </FadeInSection>

        <div className="relative mt-8 space-y-8">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden sm:block" />

          {experiences.map((exp, i) => (
            <FadeInSection key={`${exp.company}-${i}`} delay={i * 0.1}>
              <div className="sm:pl-16 relative">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-1 h-10 w-10 rounded-full bg-background border-2 border-primary items-center justify-center">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>

                <div className="rounded-xl border bg-card p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
                    {exp.description.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
