export interface Skill {
  name: string;
  level: number; // 0–100
  category: "language" | "framework" | "tool" | "other";
}

export const skills: Skill[] = [
  // Languages
  { name: "Java", level: 90, category: "language" },
  { name: "Python", level: 75, category: "language" },
  { name: "C", level: 65, category: "language" },
  { name: "R", level: 60, category: "language" },
  { name: "SQL", level: 80, category: "language" },
  { name: "HTML / CSS", level: 85, category: "language" },

  // Frameworks
  { name: "Spring Boot", level: 90, category: "framework" },
  { name: "Angular", level: 85, category: "framework" },
  { name: "Next.js / React", level: 65, category: "framework" },
  { name: "Tailwind CSS", level: 70, category: "framework" },

  // Tools
  { name: "HPE NonStop / TACL", level: 75, category: "tool" },
  { name: "Linux", level: 72, category: "tool" },
  { name: "Docker", level: 70, category: "tool" },
  { name: "Git & GitHub", level: 88, category: "tool" },
  { name: "MongoDB", level: 80, category: "tool" },
  { name: "MySQL", level: 82, category: "tool" },
  { name: "Redis", level: 65, category: "tool" },
  { name: "Firebase", level: 75, category: "tool" },

  // Other
  { name: "Systems & Infrastructure", level: 80, category: "other" },
  { name: "High-Availability Systems", level: 78, category: "other" },
  { name: "Analytical Problem Solving", level: 85, category: "other" },
  { name: "Self-directed Learning", level: 90, category: "other" },
];
