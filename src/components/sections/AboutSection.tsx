import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";

const techStack = [
  "Java",
  "C",
  "Python",
  "R",
  "SQL",
  "HTML / CSS",
  "Spring Boot",
  "Angular",
  "Firebase",
  "MongoDB",
  "MySQL",
  "Redis",
  "Linux",
  "TACL (NonStop)",
  "Docker",
  "Git",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <FadeInSection>
        <SectionHeading
          title="About Me"
          subtitle="A bit about who I am, what drives me, and where I'm headed."
        />
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
        {/* Text side */}
        <FadeInSection delay={0.1}>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hey! I&apos;m Ryan — a Singapore-based technology enthusiast with
              a background in Biological Sciences and a Minor in Computing &amp;
              Data Analytics from NTU. I&apos;m currently an{" "}
              <span className="text-foreground font-medium">
                Associate System Engineer at Visa
              </span>
              , supporting mission-critical payment and ATM transaction systems
              on HPE NonStop infrastructure.
            </p>
            <p>
              I take a hands-on, engineering-first approach — learning by
              building, testing, and refining. My flagship project,{" "}
              <a
                href="https://paperworth.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                PaperWorth
              </a>
              , is a full-stack personal finance app built end-to-end with
              Angular, Spring Boot, Firebase, and MySQL/MongoDB.
            </p>
            <p>
              I believe in building systems that are{" "}
              <span className="text-foreground font-medium">
                robust, efficient, and scalable
              </span>{" "}
              — whether in software, finance, or personal performance. I focus
              on consistency and deliberate practice, aiming to create long-term
              compounding results across all areas of my work.
            </p>
          </div>
        </FadeInSection>

        {/* Tech chips side */}
        <FadeInSection delay={0.2}>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-sm px-3 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
