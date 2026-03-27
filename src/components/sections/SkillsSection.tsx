import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SkillBar } from "@/components/shared/SkillBar";
import { skills, type Skill } from "@/data/skills";

const categories: { key: Skill["category"]; label: string }[] = [
  { key: "language", label: "Languages" },
  { key: "framework", label: "Frameworks & Libraries" },
  { key: "tool", label: "Tools & Platforms" },
  { key: "other", label: "Core Competencies" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInSection>
          <SectionHeading
            title="Skills"
            subtitle="The tools and technologies I use to bring ideas to life."
          />
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
          {categories.map((cat, catIdx) => {
            const catSkills = skills.filter((s) => s.category === cat.key);
            return (
              <FadeInSection key={cat.key} delay={catIdx * 0.1}>
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-foreground">
                    {cat.label}
                  </h3>
                  <div className="space-y-5">
                    {catSkills.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        delay={i * 0.08}
                      />
                    ))}
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
