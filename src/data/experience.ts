export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: "Associate System Engineer",
    company: "Visa Worldwide Inc",
    period: "Oct 2025 – Present",
    description: [
      "Support mission-critical payment and ATM transaction systems using HPE NonStop (Tandem) infrastructure.",
      "Utilize TACL for system management, diagnostics, and automation; monitor performance with Prognosis.",
      "Investigate and resolve transaction issues across complex payment networks, maintaining high system reliability.",
      "Collaborate with internal engineering teams and external vendors to ensure system stability and performance.",
    ],
    tags: ["HPE NonStop", "TACL", "Prognosis", "Payment Systems", "High-Availability"],
  },
  {
    role: "Tech Trainee (NUS-ISS Programme)",
    company: "Visa Worldwide Inc",
    period: "Oct 2024 – Sep 2025",
    description: [
      "Trained in full-stack development using Java, Spring Boot, Angular, MongoDB, Redis, and MySQL.",
      "Built and deployed full-stack applications integrating frontend, backend, and database systems.",
      "Developed RESTful APIs and implemented authentication and data management workflows.",
      "Transitioned into full-time engineering role upon programme completion.",
    ],
    tags: ["Spring Boot", "Angular", "Java", "TypeScript", "MongoDB", "MySQL", "Redis"],
  },
  {
    role: "BSc Biological Sciences, Minor in Computing & Data Analytics",
    company: "Nanyang Technological University (NTU)",
    period: "Aug 2020 – May 2024",
    description: [
      "Developed GAN models to scale small RNA-seq datasets into full datasets as a Final Year Project.",
      "Built a gaming matchmaking platform (LFG) using Steam API with authentication and session management.",
      "Gained strong foundations in software engineering, data analysis, and machine learning fundamentals.",
    ],
    tags: ["Python", "Java", "R", "Machine Learning", "Data Analytics"],
  },
];
